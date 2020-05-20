import React from 'react';
import Seperator from '../Icons/Seperator';
import './SectionHeadline.scss';

function SectionHeadline({ children }) {
  return (
    <div className="SectionHeadline">
      <h1 className="SectionHeadline__headline">{children}</h1>
      <Seperator className="SectionHeadline__seperator" />
    </div>
  );
}

export default SectionHeadline;
