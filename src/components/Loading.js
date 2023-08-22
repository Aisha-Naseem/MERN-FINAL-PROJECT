import React from 'react';

export default function Loading() {
  return (
    <div>
      <div
        className="spinner-grow text-danger"
        role="status"
        style={{
          height: '300px',
          width: '20pc',
          marginTop: '100px',
          border: 'black',
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
