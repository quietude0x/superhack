import React, {useState} from 'react'
import Globe from 'react-globe.gl';
import Modal from 'react-modal';

export default function GlobeF() {

  const [blueIsOpen, setBlueIsOpen] = useState(false);
  const [redIsOpen, setRedIsOpen] = useState(false);
  const [greyIsOpen, setGreyIsOpen] = useState(false);
  const [whiteIsOpen, setWhiteIsOpen] = useState(false);

  const handleBlueClick = () => {
    setBlueIsOpen(true);
  };

  const handleRedClick = () => {
    setRedIsOpen(true);
  };

  const handleGreyClick = () => {
    setGreyIsOpen(true);
  };

  const handleWhiteClick = () => {
    setWhiteIsOpen(true);
  };

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
    radius: 1,
    onPointClick: () => {
      // Your click event handler logic here
      console.log('Blue clicked!');
      handleBlueClick();
    }
  },
  {
    lat: 51,
    lng: -0.1,
    color: 'white',
    length: 0.5,
    radius: 1,
    onPointClick: () => {
      // Your click event handler logic here
      console.log('White clicked!');
      handleWhiteClick();
    }
  },
  {
    lat: 35,
    lng: 40,
    color: 'red',
    length: 0.5, 
    radius: 1,
    onPointClick: () => {
      // Your click event handler logic here
      console.log('Red clicked!');
      handleRedClick();
    }
  },
 {
    lat: 70,
    lng: -70,
    color: 'grey',
    length: 0.5, 
    radius: 1,
    onPointClick: () => {
      // Your click event handler logic here
      console.log('Grey clicked!');
      handleGreyClick();
    }
  }
];

return (
  <div>
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
    onPointClick={point => point.onPointClick()}
    />
    <Modal isOpen={blueIsOpen} onRequestClose={() => setBlueIsOpen(false)}>
        {<p> base </p>}
    </Modal>

    <Modal isOpen={redIsOpen} onRequestClose={() => setRedIsOpen(false)}>
        {<p> op </p>}
    </Modal>

    <Modal isOpen={whiteIsOpen} onRequestClose={() => setWhiteIsOpen(false)}>
        {<p> zora </p>}
    </Modal>

    <Modal isOpen={greyIsOpen} onRequestClose={() => setGreyIsOpen(false)}>
        {<p> grey </p>}
    </Modal>
    </div>
);

}