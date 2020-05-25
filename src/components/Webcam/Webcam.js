import React, { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import './Webcam.scss';

const URL = 'http://93.240.82.171:80/jpg/surf_cam.jpg';

function Webcam() {
  const [hasError, setHasError] = useState(false);
  const [image, setImage] = useState(URL);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    if (isLoading) setIsLoading(false);
    const timeStamp = new Date().getTime();
    setImage(`${URL}?${timeStamp}`);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  /* eslint-disable */
  return (
    <>
      <div className="Webcam">
        {isLoading && (<Spinner />)}
        {hasError ? (
          <p className="Webcam__error">Leider ist die Webcam zur Zeit nicht verfügbar.</p>
        ) : (
          <img
            className="Webcam__image"
            src={image}
            alt="Sorpesee Live"
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
      </div>
    </>
  );
  /* eslint-enable */
}

export default Webcam;
 