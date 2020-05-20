import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import urlSlug from 'url-slug';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PagePreview from './preview-templates/PagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('page', PagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

export const customBlocks = [
  {
    id: 'anchor',
    // Visible label
    label: 'Anchor',
    fields: [{name: 'headline', label: 'Headline', widget: 'string'}],
    pattern: /^[^\n\r]*subPageHeadline ([^\n\r]*)$/,
    htmlPattern: /<p>subPageHeadline ([^</p>]*)<\/p>/,
    fromBlock: function(match) {
      return {
        headline: match[1] || '',
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
];

customBlocks.forEach((block) => {
  CMS.registerEditorComponent(block);
});
