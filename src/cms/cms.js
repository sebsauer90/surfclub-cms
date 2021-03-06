import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PagePreview from './preview-templates/PagePreview';
import WebcamPagePreview from './preview-templates/WebcamPagePreview';
import Hide from './preview-templates/Hide';

const customBlocks = require('./customBlocks');

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('webcam', WebcamPagePreview);
CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('events', Hide);
CMS.registerPreviewTemplate('settings', Hide);

customBlocks.forEach((block) => {
  CMS.registerEditorComponent(block);
});
