import React from 'react';

const BgVideo = () => {
  return (
    <div className='bgContainer'>
      <div className='overlay'>
        <video className='bgVideo' src={earth_green} autoPlay loop muted />
        <div className='content'>
          <h1>Main contents</h1>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
}

export default BgVideo;