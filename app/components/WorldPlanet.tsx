import React from 'react';

const SplineViewer = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://app.spline.design/file/cbbc20d7-4701-471c-9592-b1d317a674ee" 
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default SplineViewer;
