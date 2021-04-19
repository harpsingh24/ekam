import React from 'react';

const Copyright = () => {
  return (
    <>
      <div className="copyright">
        &copy; Copyright {new Date().getFullYear()} 
        <strong>
          <span>ekam</span>
        </strong>
        . All Rights Reserved
      </div>
    </>
  );
};
export default Copyright;
