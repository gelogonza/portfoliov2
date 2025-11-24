import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import { Physics, useSphere, usePlane, useBox } from '@react-three/cannon'

// Individual ball component with physics
function Ball({ position, color, pattern }: { position: [number, number, number]; color: string; pattern: string }) {
  const [ref] = useSphere(() => ({
    mass: 1,
    position,
    args: [0.6], // radius - increased by 20%
    material: {
      friction: 0.3,
      restitution: 0.6, // bounciness
    }
  }))

  // Secondary color for patterns (contrasting)
  const secondaryColor = color === '#000000' ? '#ffffff' : color === '#ffffff' ? '#000000' : '#ffffff'

  return (
    <group ref={ref as any}>
      {/* Main ball body */}
      <mesh castShadow>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>

      {/* Pattern: Horizontal Stripes */}
      {pattern === 'horizontal-stripes' && (
        <>
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.605, 0.605, 0.3, 32, 1, true]} />
            <meshStandardMaterial color={secondaryColor} roughness={0.2} metalness={0.4} side={2} />
          </mesh>
        </>
      )}

      {/* Pattern: Polka Dots */}
      {pattern === 'polka-dots' && (
        <>
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <mesh key={i} position={[Math.cos(angle * Math.PI / 180) * 0.35, Math.sin(angle * Math.PI / 180) * 0.35, 0.5]}>
              <circleGeometry args={[0.12, 32]} />
              <meshStandardMaterial color={secondaryColor} />
            </mesh>
          ))}
        </>
      )}

      {/* Pattern: Swirl/Spiral */}
      {pattern === 'swirl' && (
        <>
          <mesh position={[0, 0, 0.61]}>
            <ringGeometry args={[0.15, 0.25, 32, 1, 0, Math.PI * 1.5]} />
            <meshStandardMaterial color={secondaryColor} />
          </mesh>
          <mesh position={[0, 0, 0.61]} rotation={[0, 0, Math.PI]}>
            <ringGeometry args={[0.05, 0.15, 32, 1, 0, Math.PI * 1.5]} />
            <meshStandardMaterial color={secondaryColor} />
          </mesh>
        </>
      )}

      {/* Pattern: Star */}
      {pattern === 'star' && (
        <>
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <mesh key={i} position={[Math.cos(angle * Math.PI / 180) * 0.15, Math.sin(angle * Math.PI / 180) * 0.15, 0.61]} rotation={[0, 0, angle * Math.PI / 180]}>
              <circleGeometry args={[0.08, 3]} />
              <meshStandardMaterial color={secondaryColor} />
            </mesh>
          ))}
        </>
      )}

      {/* Pattern: Checkered */}
      {pattern === 'checkered' && (
        <>
          <mesh position={[0.15, 0.15, 0.58]}>
            <circleGeometry args={[0.12, 4]} />
            <meshStandardMaterial color={secondaryColor} />
          </mesh>
          <mesh position={[-0.15, -0.15, 0.58]}>
            <circleGeometry args={[0.12, 4]} />
            <meshStandardMaterial color={secondaryColor} />
          </mesh>
          <mesh position={[0.15, -0.15, 0.58]}>
            <circleGeometry args={[0.12, 4]} />
            <meshStandardMaterial color={secondaryColor} />
          </mesh>
          <mesh position={[-0.15, 0.15, 0.58]}>
            <circleGeometry args={[0.12, 4]} />
            <meshStandardMaterial color={secondaryColor} />
          </mesh>
        </>
      )}

      {/* Pattern: Concentric Circles */}
      {pattern === 'concentric' && (
        <>
          <mesh position={[0, 0, 0.61]}>
            <ringGeometry args={[0.25, 0.3, 32]} />
            <meshStandardMaterial color={secondaryColor} />
          </mesh>
          <mesh position={[0, 0, 0.61]}>
            <ringGeometry args={[0.15, 0.2, 32]} />
            <meshStandardMaterial color={secondaryColor} />
          </mesh>
          <mesh position={[0, 0, 0.61]}>
            <circleGeometry args={[0.08, 32]} />
            <meshStandardMaterial color={secondaryColor} />
          </mesh>
        </>
      )}

      {/* Pattern: Vertical Stripes */}
      {pattern === 'vertical-stripes' && (
        <>
          <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.605, 0.605, 0.3, 32, 1, true]} />
            <meshStandardMaterial color={secondaryColor} roughness={0.2} metalness={0.4} side={2} />
          </mesh>
        </>
      )}

      {/* Pattern: Diagonal Split */}
      {pattern === 'diagonal' && (
        <>
          <mesh position={[0.2, 0.2, 0.5]} rotation={[0, 0, Math.PI / 4]}>
            <circleGeometry args={[0.4, 32]} />
            <meshStandardMaterial color={secondaryColor} />
          </mesh>
        </>
      )}
    </group>
  )
}

// Container component - visible glass box
function Container() {
  const containerWidth = 15
  const containerHeight = 12
  const containerDepth = 15
  const wallThickness = 0.3

  // Floor with physics
  const [floorRef] = useBox(() => ({
    position: [0, -containerHeight/2, 0],
    args: [containerWidth, wallThickness, containerDepth],
    type: 'Static',
    material: {
      friction: 0.4,
      restitution: 0.7,
    }
  }))

  // Back wall
  const [backWallRef] = useBox(() => ({
    position: [0, 0, -containerDepth/2],
    args: [containerWidth, containerHeight, wallThickness],
    type: 'Static',
    material: {
      friction: 0.3,
      restitution: 0.6,
    }
  }))

  // Front wall
  const [frontWallRef] = useBox(() => ({
    position: [0, 0, containerDepth/2],
    args: [containerWidth, containerHeight, wallThickness],
    type: 'Static',
    material: {
      friction: 0.3,
      restitution: 0.6,
    }
  }))

  // Left wall
  const [leftWallRef] = useBox(() => ({
    position: [-containerWidth/2, 0, 0],
    args: [wallThickness, containerHeight, containerDepth],
    type: 'Static',
    material: {
      friction: 0.3,
      restitution: 0.6,
    }
  }))

  // Right wall
  const [rightWallRef] = useBox(() => ({
    position: [containerWidth/2, 0, 0],
    args: [wallThickness, containerHeight, containerDepth],
    type: 'Static',
    material: {
      friction: 0.3,
      restitution: 0.6,
    }
  }))

  return (
    <>
      {/* Floor */}
      <mesh ref={floorRef as any} castShadow receiveShadow>
        <boxGeometry args={[containerWidth, wallThickness, containerDepth]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>

      {/* Back Wall */}
      <mesh ref={backWallRef as any} castShadow receiveShadow>
        <boxGeometry args={[containerWidth, containerHeight, wallThickness]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>

      {/* Front Wall */}
      <mesh ref={frontWallRef as any} castShadow receiveShadow>
        <boxGeometry args={[containerWidth, containerHeight, wallThickness]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.05} />
      </mesh>

      {/* Left Wall */}
      <mesh ref={leftWallRef as any} castShadow receiveShadow>
        <boxGeometry args={[wallThickness, containerHeight, containerDepth]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>

      {/* Right Wall */}
      <mesh ref={rightWallRef as any} castShadow receiveShadow>
        <boxGeometry args={[wallThickness, containerHeight, containerDepth]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
    </>
  )
}

// Main BallPit component
const BallPit = () => {
  const [balls, setBalls] = useState<Array<{ id: number; position: [number, number, number]; color: string; pattern: string }>>([])
  const nextId = useRef(0)
  const MAX_BALLS = 150

  // Ball colors
  const colors = [
    '#FFD700', // Yellow
    '#0080ff', // Blue
    '#ff0000', // Red
    '#8000ff', // Purple
    '#ff6600', // Orange
    '#00aa00', // Green
    '#8B0000', // Maroon
    '#000000', // Black
    '#ffffff', // White
    '#ff1493', // Deep Pink
    '#00ffff', // Cyan
    '#ff69b4', // Hot Pink
  ]

  // Available patterns
  const patterns = [
    'horizontal-stripes',
    'polka-dots',
    'swirl',
    'star',
    'checkered',
    'concentric',
    'vertical-stripes',
    'diagonal',
  ]

  // Generate random position (spawn balls at top of container)
  const getRandomPosition = (): [number, number, number] => {
    const x = (Math.random() - 0.5) * 12 // within container width
    const y = Math.random() * 3 + 8 // spawn at top of container
    const z = (Math.random() - 0.5) * 12 // within container depth
    return [x, y, z]
  }

  // Add a new ball
  const addBall = () => {
    if (balls.length >= MAX_BALLS) return

    // Randomly select color and pattern
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)]

    const newBall = {
      id: nextId.current++,
      position: getRandomPosition(),
      color: randomColor,
      pattern: randomPattern
    }
    setBalls(prev => [...prev, newBall])
  }

  // Add multiple balls at once
  const addMultipleBalls = (count: number) => {
    const spaceLeft = MAX_BALLS - balls.length
    const ballsToAdd = Math.min(count, spaceLeft)
    if (ballsToAdd <= 0) return

    const newBalls = Array.from({ length: ballsToAdd }, () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      const randomPattern = patterns[Math.floor(Math.random() * patterns.length)]
      return {
        id: nextId.current++,
        position: getRandomPosition(),
        color: randomColor,
        pattern: randomPattern
      }
    })
    setBalls(prev => [...prev, ...newBalls])
  }

  // Clear all balls
  const clearBalls = () => {
    setBalls([])
  }

  return (
    <div className="h-screen w-full gradient-bg flex flex-col overflow-hidden">
      {/* Header - Compact at top */}
      <div className="pt-24 pb-4 text-center px-4 z-10 flex-shrink-0">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
          The Ball Pit
        </h1>
        <p className="text-white/70 text-base mb-4">
          Click to add colorful balls (Max: {MAX_BALLS})
        </p>

        {/* Control buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={addBall}
            disabled={balls.length >= MAX_BALLS}
            className="bg-white text-black px-5 py-1.5 text-sm rounded-full border border-transparent hover:bg-transparent hover:text-white hover:border-white/50 active:bg-white/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Ball
          </button>
          <button
            onClick={() => addMultipleBalls(10)}
            disabled={balls.length >= MAX_BALLS}
            className="bg-white text-black px-5 py-1.5 text-sm rounded-full border border-transparent hover:bg-transparent hover:text-white hover:border-white/50 active:bg-white/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add 10 Balls
          </button>
          <button
            onClick={clearBalls}
            className="bg-white text-black px-5 py-1.5 text-sm rounded-full border border-transparent hover:bg-transparent hover:text-white hover:border-white/50 active:bg-white/10 transition-all duration-200"
          >
            Clear All ({balls.length}/{MAX_BALLS})
          </button>
        </div>
      </div>

      {/* Three.js Canvas - Takes remaining space */}
      <div className="flex-1 min-h-0 relative">
        <Canvas
          camera={{ position: [0, 5, 20], fov: 60 }}
          className="w-full h-full"
          shadows
        >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1} castShadow />
        <pointLight position={[-10, 10, -10]} intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={0.4} />

        {/* Physics world */}
        <Physics gravity={[0, -9.8, 0]}>
          {/* Visible container */}
          <Container />

          {/* Balls */}
          {balls.map(ball => (
            <Ball
              key={ball.id}
              position={ball.position}
              color={ball.color}
              pattern={ball.pattern}
            />
          ))}
        </Physics>

        {/* Camera controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={10}
          maxDistance={60}
        />
      </Canvas>

        {/* Instructions */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm px-4">
          <p>Drag to rotate • Scroll to zoom • Right-click to pan</p>
        </div>
      </div>
    </div>
  )
}

export default BallPit
