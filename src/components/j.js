import React from 'react';
import MarkmapComponent from './MarkmapComponent';

const MyMapApp = () => {
  const mindMapData = `
    # My React Mind Map
    - Node 1
      - Node 1.1
      - Node 1.2
    - Node 2
      - Node 2.1
  `;

  return (
    <div>
      <h1>My Interactive Mind Map</h1>
      <MarkmapComponent markdownData={mindMapData} />
    </div>
  );
};

export default MyMapApp;
