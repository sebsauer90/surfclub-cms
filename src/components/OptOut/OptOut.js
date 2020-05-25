import React, { useState } from 'react';
import './OptOut.scss';

function OptOut() {
  const gaProperty = 'UA-52968631-4';
  const disableStr = `ga-disable-${gaProperty}`;
  const initialState = typeof window !== 'undefined' ? window.document.cookie.includes(`${disableStr}=true`) : true;
  const [optOut, setOptOut] = useState(initialState);

  const gaOptout = () => {
    document.cookie = `${disableStr}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[disableStr] = true;
    setOptOut(true);
  };

  return (
    <div className="OptOut">
      {optOut ? (
        <p>Das Tracking durch Google Analytics wurde in Ihrem Browser für diese Website deaktiviert.</p>
      ) : (
        <button aria-label="Tracking durch Google Analytics für diese Website deaktivieren" onClick={gaOptout} className="Button">
          Tracking durch Google Analytics für diese Website deaktivieren.
        </button>
      )}
    </div>
  );
}

export default OptOut;
