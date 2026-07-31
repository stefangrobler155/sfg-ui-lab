"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export function Snow() {
const time = useRef(0);
const count = 3000;
const WORLD_WIDTH = 20;
const WORLD_HEIGHT = 10;
const WORLD_DEPTH = 10;

  // 1. Generate particle positions
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      array[i * 3] = (Math.random() - 0.5) * WORLD_WIDTH;
      array[i * 3 + 1] = (Math.random() - 0.5) * WORLD_HEIGHT;
      array[i * 3 + 2] = (Math.random() - 0.5) * WORLD_DEPTH;
    }
    return array;
  }, []);

  // 2. Keep a copy of the original positions
  const basePositions = useMemo(() => {
    return new Float32Array(positions);
  }, [positions]);

  // 3. Generate animation data
  const particleData = useMemo(() => {
  const data = new Float32Array(count * 5);

  for (let i = 0; i < count; i++) {
    const positionIndex = i * 3;
    const dataIndex = i * 5;

    // Original X position
    data[dataIndex] = positions[positionIndex];

    // Falling speed
    data[dataIndex + 1] = 0.5 + Math.random() * 1.5;

    // Maximum sway distance
    data[dataIndex + 2] = 0.3 + Math.random() * 0.8;

    // Sway speed
    data[dataIndex + 3] = 0.5 + Math.random();

    // Starting point in the sine wave
    data[dataIndex + 4] = Math.random() * Math.PI * 2;
  }

  return data;
}, [positions]);




const pointsRef = useRef<THREE.Points>(null);

useFrame((_, delta) => {
  if (!pointsRef.current) return;

  const positions =
    pointsRef.current.geometry.attributes.position.array as Float32Array;

  for (let i = 0; i < count; i++) {
    const index = i * 3;
    const dataIndex = i * 5;

    const originalX = particleData[dataIndex];

    const speed = particleData[dataIndex + 1];

    const swayAmount = particleData[dataIndex + 2];

    const swaySpeed = particleData[dataIndex + 3];

    const phase = particleData[dataIndex + 4];

    const sway =
    Math.sin(time.current * swaySpeed + phase) * swayAmount;

    positions[index] = originalX + sway;
    
    positions[index + 1] -= delta * speed;

    if (positions[index + 1] < -10) {
      const newX = (Math.random() - 0.5) * 20;

      positions[index] = newX;
      particleData[dataIndex] = newX;

      positions[index + 1] = 10 + Math.random() * 5;
    }
  }

  pointsRef.current.geometry.attributes.position.needsUpdate = true;
  time.current += delta;
});
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="white"
        size={0.08}
      />
    </points>
  );
}