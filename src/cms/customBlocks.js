import urlSlug from 'url-slug';
// import { customBlocks } from './cms';

export const customBlocks = [
  {
    id: 'anchor',
    // Visible label
    label: 'Anchor',
    fields: [{name: 'headline', label: 'Headline', widget: 'string'}],
    pattern: /^[^\n\r]*subPageHeadline ([^\n\r]*)$/,
    htmlPattern: /<p>subPageHeadline (.*?)<\/p>/,
    fromBlock: function(match) {
      return {
        headline: !match[1] || match[1] === 'undefined' ? '' : match[1],
      };
    },
    toBlock: function(obj) {
      return 'subPageHeadline ' + obj.headline;
    },
    toPreview: function(obj) {
      return (
        `<h2 class="subSectionHeadline" id="${urlSlug(obj.headline)}">
          ${obj.headline}
        </h2>`
      );
    }
  },
  {
    id: 'teaser',
    label: 'Teaser',
    fields: [
      {name: 'headline', label: 'Headline', widget: 'string'},
      {name: 'text', label: 'Text', widget: 'string', required: false},
      {name: 'subline', label: 'Subline', widget: 'string', required: false},
    ],
    pattern: /teaser \$(.*)\$\$(.*)\$\$(.*)\$/,
    htmlPattern: /<p>teaser \$(.*)\$\$(.*)\$\$(.*)\$<\/p>/,
    fromBlock: function(match) {
      return {
        headline: !match[1] || match[1] === 'undefined' ? '' : match[1],
        text: !match[2] || match[2] === 'undefined' ? '' : match[2],
        subline: !match[3] || match[3] === 'undefined' ? '' : match[3],
      };
    },
    toBlock: function(obj) {
      return 'teaser $' + obj.headline + '$$' + obj.text + '$$' + obj.subline + '$';
    },
    toPreview: function(obj) {
      return (
        `<div class="simpleTeaser">
          <h3 class="simpleTeaser__headline">${obj.headline}</h3>
          ${obj.text ? `<p class="simpleTeaser__text">${obj.text}</p>` : ''}
          ${obj.subline ? `<p class="simpleTeaser__subline">${obj.subline}</p>` : ''}
        </div>`
      );
    }
  },
];

const htmlBlocks = [
  {
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
  },
];

function parseCustomBlocks(body) {
  const blocks = [...customBlocks, ...htmlBlocks];
  let returnValue = body;

  blocks.forEach((block) => {
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
