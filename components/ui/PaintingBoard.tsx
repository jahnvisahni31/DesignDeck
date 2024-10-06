
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const PaintingBoard: React.FC = () => {
  const brushRef = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (brushRef.current) {
      // Example animation: rotate the brush
      brushRef.current.rotation.x += 0.01;
      brushRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      
      {/* Paintbrush */}
      <mesh ref={brushRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
        <meshStandardMaterial color="brown" />
      </mesh>

      {/* Board */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
};

export default PaintingBoard;