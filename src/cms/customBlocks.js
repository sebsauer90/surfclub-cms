const urlSlug = require('url-slug');

module.exports = [
  // anchor
  {
    id: 'anchor',
    label: 'Navigation',
    fields: [{name: 'headline', label: 'Headline', widget: 'string'}],
    pattern: /^[^\n\r]*subPageHeadline ([^\n\r]*)$/,
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

  // teaser
  {
    id: 'teaser',
    label: 'Teaser',
    fields: [
      {name: 'headline', label: 'Headline', widget: 'string'},
      {name: 'text', label: 'Text', widget: 'string', required: false},
      {name: 'subline', label: 'Subline', widget: 'string', required: false},
    ],
    pattern: /teaser \$(.*)\$\$(.*)\$\$(.*)\$/,
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

  // youtube
  {
    id: 'youtube',
    label: 'Youtube',
    fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
    pattern: /^youtube (\S+)$/,
    fromBlock: function(match) {
      return {
        id: match[1]
      };
    },
    toBlock: function(obj) {
      return 'youtube ' + obj.id;
    },
    toPreview: function(obj) {
      // <img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="Youtube Video"/>
      return (
        `<div class="youtube">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/${obj.id}"
            frameborder="0"
            allow="accelerometer;
            encrypted-media;
            gyroscope;
            picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>`
      );
    }
  },
];
