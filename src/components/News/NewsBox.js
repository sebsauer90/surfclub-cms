import React from 'react';
import News from './News';

function NewsBox() {
  return (
    <div className="News__box">
      <div className="container">
        <h3 className="News__headline center">Weitere Neuigkeiten</h3>
        <News limit={3} />
      </div>
    </div>
  );
}

export default NewsBox;
