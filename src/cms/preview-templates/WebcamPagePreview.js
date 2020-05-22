import React from 'react';
import PropTypes from 'prop-types';
import { WebcamPageTemplate } from '../../templates/webcam-page';

const WebcamPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <WebcamPageTemplate description={data.description} />
    );
  } else {
    return <div>Loading...</div>
  }
};

WebcamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default WebcamPagePreview;
