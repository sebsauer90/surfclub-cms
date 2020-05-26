import React from 'react';
import PropTypes from 'prop-types';
import parseCustomBlocks from '../../cms/customBlocks';
import './Content.scss';

export const HTMLContent = ({ content, className }) => {
  const finalContent = parseCustomBlocks(content);
  return (
    <div className={`Content ${className ? className : ''}`} dangerouslySetInnerHTML={{ __html: finalContent }} />
  );
};

const Content = ({ content, className }) => (
  <div className={`Content ${className ? className : ''}`}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
