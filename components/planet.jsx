import React from 'react'
import Globe from 'react-globe.gl';

export default function GlobeF() {

  /*
  const N = 20;
  const aarcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['red', 'white', 'blue'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
  }));
  */

  const arcsData = [
    {
      startLat: 35,
      startLng: 40,
      endLat: 70,
      endLng: -70,
      color: 'red',
      strokeWidth: 1,
      curveResolution: 30
    },
    {
      startLat: 35,
      startLng: 40,
      endLat: 40,
      endLng: -74,
      color: 'red',
      strokeWidth: 1,
      curveResolution: 30
    },
    {
      startLat: 40,
      startLng: -74,
      endLat: 70,
      endLng: -70,
      color: 'blue',
      strokeWidth: 2,
      curveResolution: 60
    },
    {
      startLat: 40,
      startLng: -74,
      endLat: 35,
      endLng: 40,
      color: 'blue',
      strokeWidth: 2,
      curveResolution: 60
    },
   {
      startLat: 40,
      startLng: -74,
      endLat: 51,
      endLng: -0.1,
      color: 'blue',
      strokeWidth: 2,
      curveResolution: 60
    },
    {
      startLat: 51,
      startLng: -0.1,
      endLat: 70,
      endLng: -70,
      color: 'white',
      strokeWidth: 2,
      curveResolution: 60
    },
    {
      startLat: 51,
      startLng: -0.1,
      endLat: 40,
      endLng: -74,
      color: 'white',
      strokeWidth: 2,
      curveResolution: 60
    },
    {
      startLat: 51,
      startLng: -0.1,
      endLat: 35,
      endLng: 40,
      color: 'white',
      strokeWidth: 2,
      curveResolution: 60
    },
     {
      startLat: 70,
      startLng: -70,
      endLat: 50,
      endLng: -0.1,
      color: 'grey',
      strokeWidth: 2,
      curveResolution: 60
    },
    {
      startLat: 70,
      startLng: -70,
      endLat: 40,
      endLng: -74,
      color: 'grey',
      strokeWidth: 2,
      curveResolution: 60
    },
    {
      startLat: 70,
      startLng: -70,
      endLat: 35,
      endLng: 40,
      color: 'grey',
      strokeWidth: 2,
      curveResolution: 60
    }, 
  
  ];


const pointsData = [
  {
    lat: 40,
    lng: -74,
    color: 'blue',
    length: 0.5,
    radius: 1
  },
  {
    lat: 51,
    lng: -0.1,
    color: 'white',
    length: 0.5,
    radius: 1
  },
  {
    lat: 35,
    lng: 40,
    color: 'red',
    length: 0.5, 
    radius: 1
  },
 {
    lat: 70,
    lng: -70,
    color: 'grey',
    length: 0.5, 
    radius: 1
  }
];

return (
    <Globe
    backgroundColor="rgba(0,0,0,0)"
    //pointOfView={'40, -120, 2'}
    //globeMaterial={{ color: 'red' }}
    arcsData={arcsData}
    arcColor={'color'}
    arcDashLength={() => Math.random()}
    arcDashGap={() => Math.random()}
    arcDashAnimateTime={() => Math.random() * 4000 + 500}
    atmosphereAltitude={0.5}
    atmosphereColor='red'
    pointsData={pointsData}
    pointColor={'color'}
    pointAltitude={'length'}
    pointRadius={'radius'}
    />
);

}