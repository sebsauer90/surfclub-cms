import React from 'react';
import PropTypes from 'prop-types';
import { PageTemplate } from '../../templates/page';

const PagePreview = ({ entry, widgetFor }) => {
  return (
    <div className="center">
      <PageTemplate
        title={entry.getIn(['data', 'title'])}
        description={entry.getIn(['data', 'description'])}
        content={widgetFor('body')}
      />
    </div>
  )
};

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PagePreview;
