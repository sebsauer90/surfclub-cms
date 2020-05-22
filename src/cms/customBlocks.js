import urlSlug from 'url-slug';
import { customBlocks } from './cms';

if (customBlocks) {
  customBlocks.push({
    id: 'table',
    htmlPattern: /<table>((.|\n)*)<\/table>/,
    fromBlock: function(match) {
      return {
        table: !match[1] || match[1] === 'undefined' ? '' : match[1],
      };
    },
    toPreview: function(obj) {
      return (
        '<div class="table--responsive"><table class="table">' + obj.table + '</table></div>'
      );
    }
  });
}

function parseCustomBlocks(body) {
  let returnValue = body;

  customBlocks.forEach((block) => {
    const regex = RegExp(block.htmlPattern, 'gm');
    let matches;

    while ((matches = regex.exec(returnValue)) !== null) {
      if (matches.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      const obj = block.fromBlock(matches);
      returnValue = returnValue.replace(matches[0], block.toPreview(obj));
    }

    return returnValue;
  });

  return returnValue;
}

export function getSectionHeadlines(body) {
  const regex = RegExp(customBlocks[0].htmlPattern, 'gm');
  const headlines = [];
  let matches;

  while ((matches = regex.exec(body)) !== null) {
    if (matches.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    const obj = customBlocks[0].fromBlock(matches);
    headlines.push({
      headline: obj.headline,
      slug: urlSlug(obj.headline),
    });
  }

  return headlines;
}

export default parseCustomBlocks;
