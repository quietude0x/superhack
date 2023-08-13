import React, {useState} from 'react'
import Globe from 'react-globe.gl';
import Modal from 'react-modal';
import styles from '../styles/Home.module.css';
//import { getNetwork } from '@wagmi/core'

export default function GlobeF() {
  
  //const { chain } = getNetwork()
  //console.log(chain.network);


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
    length: 10,
    radius: 1,
    onPointClick: () => {
      // Your click event handler logic here
      console.log('Blue clicked!');
      handleBlueClick();
    },
    pointLabel: "base"
  },
  {
    lat: 51,
    lng: -0.1,
    color: 'white',
    length: 10,
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
    length: 10,
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
    length: 10,
    radius: 1,
    onPointClick: () => {
      // Your click event handler logic here
      console.log('Grey clicked!');
      handleGreyClick();
    }
  }
];

const labelsData = [
  {
    lat: 40,
    lng: -72,
    text: 'base',
    color: 'Blue',
    size: 7,
    onLabelClick: () => {
      console.log('Blue clicked!');
      handleBlueClick();
    },
  },
  {
    lat: 51,
    lng: -0.1,
    text: 'zora',
    color: 'White',
    size: 7,
    onLabelClick: () => {
      console.log('White clicked!');
      handleWhiteClick();
    },
  },
  {
    lat: 35,
    lng: 40,
    text: 'optimism',
    color: 'Red',
    size: 7,
    onLabelClick: () => {
      console.log('Red clicked!');
      handleRedClick();
    },
  },
  {
    lat: 70,
    lng: -70,
    text: 'ethereum',
    color: 'Grey',
    size: 7,
    onLabelClick: () => {
      console.log('Grey clicked!');
      handleGreyClick();
    },
  },
];

return (
  <div>
    <Globe
    backgroundColor="rgba(0,0,0,0)"
    arcsData={arcsData}
    arcColor={'color'}
    arcDashLength={() => Math.random()}
    arcDashGap={() => Math.random()}
    arcDashAnimateTime={() => Math.random() * 4000 + 500}
    atmosphereAltitude={0.5}
    atmosphereColor={"red"}
    pointsData={pointsData}
    pointColor={'color'}
    pointAltitude={'length'}
    pointRadius={'radius'}
    onPointClick={point => point.onPointClick()}
    labelsData={labelsData}
    labelColor={'color'}
    labelSize={'size'}
    onLabelClick={point => point.onLabelClick()}
    />

    <Modal className={styles.chainModal} isOpen={blueIsOpen} onRequestClose={() => setBlueIsOpen(false)}>
        {
        <>
        <h4 className={styles.subTitle}>
          explore base.
        </h4>
      <div className={styles.buttonContainer}>
          <button className={styles.modalButton}>Bridge</button>
          <a href="https://zora.co/collect/eth:0x6d6b3750538e7b2c890dce9a184735c9dfe8ea7f">
            <button className={styles.modalButton} href="https://zora.co/collect/eth:0x6d6b3750538e7b2c890dce9a184735c9dfe8ea7f">Mint an NFT</button>
          </a>
          <button className={styles.modalButton}>Switch to this network</button>
      </div>
      </>
        }
    </Modal>

    <Modal className={styles.chainModal} isOpen={redIsOpen} onRequestClose={() => setRedIsOpen(false)}>
        {
        <>
        <h4 className={styles.subTitle}>
          explore optimism.
        </h4>
      <div className={styles.buttonContainer}>
          <button className={styles.modalButton}>Bridge</button>
          <button className={styles.modalButton}>Mint an NFT</button>
          <button className={styles.modalButton}>Switch to this network</button>
      </div>
      </>
        }
    </Modal>

    <Modal className={styles.chainModal} isOpen={whiteIsOpen} onRequestClose={() => setWhiteIsOpen(false)}>
        {
        <>
          <h4 className={styles.subTitle}>
            explore zora network.
          </h4>
        <div className={styles.buttonContainer}>
            <button className={styles.modalButton}>Bridge</button>
            <button className={styles.modalButton}>Mint an NFT</button>
            <button className={styles.modalButton}>Switch to this network</button>
        </div>
        </>
        }
    </Modal>

    <Modal className={styles.chainModal} isOpen={greyIsOpen} onRequestClose={() => setGreyIsOpen(false)}>
        {
        <>
        <h4 className={styles.subTitle}>
          explore ethereum.
        </h4>
      <div className={styles.buttonContainer}>
          <button className={styles.modalButton}>Bridge</button>
          <button className={styles.modalButton}>Mint an NFT</button>
          <button className={styles.modalButton}>Switch to this network</button>
      </div>
      </>
        }
    </Modal>
    </div>
);

}