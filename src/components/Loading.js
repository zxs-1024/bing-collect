import React from 'react';
import '../style/loading.scss';

const icon = {
  DuaRing: <DuaRing />,
  Ripple: <Ripple />,
  Ellipsis: <Ellipsis />,
  Pacman: <Pacman />
};

function Loading({ type = 'DuaRing' }) {
  return <div className="loading-content">{icon[type]}</div>;
}

function DuaRing({ type }) {
  return <div className="lds-dual-ring" />;
}

function Ripple({ type }) {
  return (
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  );
}

function Ellipsis({ type }) {
  return (
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

function Pacman({ type }) {
  return (
    <div className="lds-pacman">
      <div>
        <div />
        <div />
        <div />
      </div>
      <div>
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loading;
