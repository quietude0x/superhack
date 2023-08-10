import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
  const divRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xFFFFFF); // Set the background color to black
    
    // Append the renderer to the div in this component
    divRef.current.appendChild(renderer.domElement);

    // Create a black sphere (the globe)
    const sphereGeometry = new THREE.SphereGeometry(1, 172, 172);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={divRef} />;
};

export default Globe;
