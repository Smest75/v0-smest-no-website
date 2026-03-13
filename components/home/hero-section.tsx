"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { siteConfig } from "@/lib/config"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

const PARTICLE_COUNT = 1000
const positions = new Float32Array(PARTICLE_COUNT * 3)
const scales = new Float32Array(PARTICLE_COUNT)
for (let i = 0; i < PARTICLE_COUNT; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 20
  positions[i * 3 + 1] = (Math.random() - 0.5) * 20
  positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  scales[i] = Math.random()
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-scale" args={[scales, 1]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#5a8f7b" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

function CssFallbackBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full" />
      <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full" />
      <div className="absolute top-32 right-1/3 w-1 h-1 bg-primary/40 rounded-full" />
      <div className="absolute top-60 left-1/2 w-2 h-2 bg-primary/25 rounded-full" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/35 rounded-full" />
      <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-primary/30 rounded-full" />
      <div className="absolute top-1/4 right-20 w-2 h-2 bg-primary/20 rounded-full" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/25 rounded-full" />
    </div>
  )
}

function ThreeBackground({ onError }: { onError: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cleanupRef = useRef<(() => void) | null>(null)

  const handleContextLost = useCallback(() => {
    onError()
  }, [onError])

  useEffect(() => {
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          failIfMajorPerformanceCaveat: false,
          powerPreference: "low-power",
        }}
        onCreated={({ gl }) => {
          const canvas = gl.domElement
          canvas.addEventListener("webglcontextlost", handleContextLost)
          cleanupRef.current = () => canvas.removeEventListener("webglcontextlost", handleContextLost)
        }}
      >
        <ParticleField />
      </Canvas>
    </div>
  )
}

export function HeroSection() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [webglFailed, setWebglFailed] = useState(false)
  const [supportsWebGL, setSupportsWebGL] = useState<boolean | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)

    // Check WebGL support upfront
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      setSupportsWebGL(!!gl)
    } catch {
      setSupportsWebGL(false)
    }

    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  const showThree = !reducedMotion && supportsWebGL === true && !webglFailed
  const showFallback = !reducedMotion && (supportsWebGL === false || webglFailed)

  return (
    <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden">
      {showThree && <ThreeBackground onError={() => setWebglFailed(true)} />}
      {showFallback && <CssFallbackBackground />}

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Få praktisk rådgivning, 1:1-sparring og opplæring i bruk av kunstig intelligens
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              For ledere og virksomheter som vil bli mer effektive, forstå og implementere KI på en trygg og praktisk måte.
            </p>
            <div>
              <a
                href={siteConfig.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
              >
                Book møte
              </a>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-lg bg-muted">
            <img src="/images/martin-portrait.webp" alt="Martin Smestad Hansen" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
