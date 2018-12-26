import React from 'react';
import '../style/loading.scss';

function Loading() {
  return (
    // <div className="lds-dual-ring" />
    <div className="lds-ripple">
      <div />
      <div />
    </div>
    // <div className="lds-ellipsis">
    //   <div />
    //   <div />
    //   <div />
    //   <div />
    // </div>
  );
}

export default Loading;
