import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Particle Network Component
function ParticleNetwork({ count = 300 }) {
  const ref = useRef();
  const linesRef = useRef();
  
  // Generate random positions for particles
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 10;
      pos[i3 + 1] = (Math.random() - 0.5) * 10;
      pos[i3 + 2] = (Math.random() - 0.5) * 5;
      
      vel[i3] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.001;
    }
    
    return [pos, vel];
  }, [count]);

  // Animation loop
  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.getElapsedTime();
    const posArray = ref.current.geometry.attributes.position.array;
    
    // Update particle positions
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Move particles
      posArray[i3] += velocities[i3];
      posArray[i3 + 1] += velocities[i3 + 1];
      posArray[i3 + 2] += velocities[i3 + 2];
      
      // Add subtle wave motion
      posArray[i3 + 1] += Math.sin(time + i * 0.1) * 0.0005;
      
      // Wrap around boundaries
      if (posArray[i3] > 5) posArray[i3] = -5;
      if (posArray[i3] < -5) posArray[i3] = 5;
      if (posArray[i3 + 1] > 5) posArray[i3 + 1] = -5;
      if (posArray[i3 + 1] < -5) posArray[i3 + 1] = 5;
      if (posArray[i3 + 2] > 2.5) posArray[i3 + 2] = -2.5;
      if (posArray[i3 + 2] < -2.5) posArray[i3 + 2] = 2.5;
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Slow rotation
    ref.current.rotation.y = time * 0.02;
    ref.current.rotation.x = Math.sin(time * 0.05) * 0.1;
  });

  return (
    <group>
      {/* Particles */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f13024"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      
      {/* Secondary particles - orange */}
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff6b35"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
      
      {/* Tertiary particles - white */}
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  );
}

// Connection Lines Component
function ConnectionLines({ count = 300, maxDistance = 1.5 }) {
  const ref = useRef();
  
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      );
    }
    return new Float32Array(pos);
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.005}
        color="#f13024"
        transparent
        opacity={0.2}
        sizeAttenuation
      />
    </points>
  );
}

// Main Background Animation Component
const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        style={{ background: "transparent", position: "absolute", top: 0, left: 0 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleNetwork count={250} />
        <ConnectionLines count={100} />
      </Canvas>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/30 pointer-events-none" />
    </div>
  );
};

export default BackgroundAnimation;
