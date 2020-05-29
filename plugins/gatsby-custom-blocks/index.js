const customBlocks = require('../../src/cms/customBlocks');

module.exports = ({ markdownAST }, pluginOptions) => {
  markdownAST.children.map((node) => {
    if (node.type === 'paragraph' && node.children[0].type === 'text') {
      const value = node.children[0].value;

      customBlocks.some((block) => {
        const regex = RegExp(block.pattern, 'gm');
        let matches;

        while ((matches = regex.exec(value)) !== null) {
          if (matches.index === regex.lastIndex) regex.lastIndex++;
          const obj = block.fromBlock(matches);
          const nextValue = value.replace(matches[0], block.toPreview(obj));

          node.type = 'root';
          node.children[0].type = 'html';
          node.children[0].value = nextValue;

          return true;
        }

        return false;
      });
    }

    if (node.type === 'table') {
      const tableNode = {
        ...node,
        data: {
          hProperties: { className: 'table' },
        },
      };

      node.type = 'element';
      node.tagName = 'div';
      node.children = [tableNode];
      node.data = {
        hProperties: { className: 'table--responsive' },
      };
    }

    return node;
  });

  return markdownAST;
}
