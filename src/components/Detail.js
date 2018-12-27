import React from 'react';

function Detail({
  match: {
    params: { id }
  }
}) {
  console.log(id);
  return (
    <div>
      <h1> {id}</h1>
    </div>
  );
}

export default Detail;
