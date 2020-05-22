import React, { useState } from 'react';
import './Webcam.scss';

const URL = 'http://93.240.82.171:80/jpg/surf_cam.jpg';

function Webcam() {
  const [hasError, setHasError] = useState(false);
  const [image, setImage] = useState(URL);
  const handleLoad = () => {
    const timeStamp = new Date().getTime();
    setImage(`${URL}?${timeStamp}`);
  };

  /* eslint-disable */
  return (
    <>
      <div className="Webcam">
        {hasError ? (
          <p>Leider ist die Webcam zur Zeit nicht verfügbar.</p>
        ) : (
          <img
            className="Webcam__image"
            src={image}
            alt="Sorpesee Live"
            onLoad={handleLoad}
            onError={() => { setHasError(true) }}
          />
        )}
      </div>
    </>
  );
  /* eslint-enable */
}

export default Webcam;
 