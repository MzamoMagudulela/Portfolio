import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Floating digital geometry monolith / polyhedron
function FloatingMesh({ position, rotationSpeed, scale = 1, geometryType = 'icosahedron', wireframe = false, color = '#00d2ff' }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * rotationSpeed.x
    meshRef.current.rotation.y += delta * rotationSpeed.y
    meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.7 + position[0]) * 0.0015
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometryType === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
      {geometryType === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
      {geometryType === 'dodecahedron' && <dodecahedronGeometry args={[1, 0]} />}
      {geometryType === 'box' && <boxGeometry args={[1, 1.4, 0.2]} />}

      {wireframe ? (
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.18}
        />
      ) : (
        <meshPhysicalMaterial
          color="#06122c"
          roughness={0.2}
          metalness={0.8}
          transmission={0.6}
          thickness={1.2}
          transparent
          opacity={0.4}
          reflectivity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      )}
    </mesh>
  )
}

// Subtle star/digital data particles
function DigitalParticles({ count = 120 }) {
  const pointsRef = useRef()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)
    const colorA = new THREE.Color('#00d2ff')
    const colorB = new THREE.Color('#0066ff')

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 35
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5

      const mixed = colorA.clone().lerp(colorB, Math.random())
      cols[i * 3] = mixed.r
      cols[i * 3 + 1] = mixed.g
      cols[i * 3 + 2] = mixed.b
    }
    return [pos, cols]
  }, [count])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.02
    pointsRef.current.rotation.x += delta * 0.01
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

// Scene with camera and interactive movement
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} color="#00d2ff" />
      <pointLight position={[-10, -10, -5]} intensity={1.5} color="#0066ff" />
      <pointLight position={[5, -5, 5]} intensity={0.8} color="#38bdf8" />

      {/* Floating Geometric Elements - Digital Dimension */}
      <FloatingMesh
        position={[-7, 3, -8]}
        rotationSpeed={{ x: 0.15, y: 0.2 }}
        scale={2.2}
        geometryType="icosahedron"
        wireframe={true}
        color="#00d2ff"
      />
      <FloatingMesh
        position={[-7, 3, -8]}
        rotationSpeed={{ x: 0.15, y: 0.2 }}
        scale={2.1}
        geometryType="icosahedron"
        wireframe={false}
      />

      <FloatingMesh
        position={[8, -2, -10]}
        rotationSpeed={{ x: 0.12, y: -0.18 }}
        scale={2.8}
        geometryType="octahedron"
        wireframe={true}
        color="#0066ff"
      />
      <FloatingMesh
        position={[8, -2, -10]}
        rotationSpeed={{ x: 0.12, y: -0.18 }}
        scale={2.6}
        geometryType="octahedron"
        wireframe={false}
      />

      <FloatingMesh
        position={[6, 6, -12]}
        rotationSpeed={{ x: -0.08, y: 0.14 }}
        scale={1.8}
        geometryType="dodecahedron"
        wireframe={true}
        color="#38bdf8"
      />

      <FloatingMesh
        position={[-8, -5, -9]}
        rotationSpeed={{ x: 0.1, y: 0.1 }}
        scale={1.9}
        geometryType="octahedron"
        wireframe={true}
        color="#00d2ff"
      />

      {/* Particles */}
      <DigitalParticles count={140} />
    </>
  )
}

export default function ThreeBackground() {
  const [hasWebGL, setHasWebGL] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(motionQuery.matches)
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches)
    motionQuery.addEventListener('change', handleMotionChange)

    // Check WebGL availability safely
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) setHasWebGL(false)
    } catch (e) {
      setHasWebGL(false)
    }

    return () => motionQuery.removeEventListener('change', handleMotionChange)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Atmospheric Gradients */}
      <div className="absolute inset-0 bg-background-void" />
      <div className="ambient-glow w-[550px] h-[550px] bg-blue-600/15 top-[-100px] left-[-150px]" />
      <div className="ambient-glow w-[600px] h-[600px] bg-cyan-500/10 top-[30%] right-[-150px]" />
      <div className="ambient-glow w-[500px] h-[500px] bg-indigo-600/10 bottom-[-100px] left-[20%]" />
      <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

      {/* Interactive 3D Canvas */}
      {hasWebGL && !prefersReducedMotion && (
        <div className="absolute inset-0 opacity-70">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          >
            <Scene />
          </Canvas>
        </div>
      )}

      {/* Vignette edge mask for cinematic focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background-void/40 to-background-void pointer-events-none" />
    </div>
  )
}
