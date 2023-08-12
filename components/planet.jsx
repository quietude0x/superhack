import React from 'react'
import Globe from 'react-globe.gl';

export default function GlobeF() {

  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['red', 'white', 'blue'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
  }));

return (
    <Globe
    backgroundColor="#FFFFFF" 
    arcsData={arcsData}
    arcColor={'color'}
    arcDashLength={() => Math.random()}
    arcDashGap={() => Math.random()}
    arcDashAnimateTime={() => Math.random() * 4000 + 500}
    />
);

}