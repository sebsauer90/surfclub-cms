import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import urlSlug from 'url-slug';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PagePreview from './preview-templates/PagePreview';
import WebcamPagePreview from './preview-templates/WebcamPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('webcam', WebcamPagePreview);
CMS.registerPreviewTemplate('page', PagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

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
        '<h2 class="subSectionHeadline" id="' + urlSlug(obj.headline) + '">' + obj.headline + '</h2>'
      );
    }
  },
  {
    id: 'teaser',
    // Visible label
    label: 'Teaser',
    fields: [{name: 'headline', label: 'Headline', widget: 'string'}, {name: 'text', label: 'Text', widget: 'string', required: false}, {name: 'subline', label: 'Subline', widget: 'string', required: false}],
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

customBlocks.forEach((block) => {
  CMS.registerEditorComponent(block);
});
