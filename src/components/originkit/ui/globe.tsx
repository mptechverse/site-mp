"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface PulseMarker {
  id: string
  location: [number, number]
  delay: number
}

interface GlobePulseProps {
  markers?: PulseMarker[]
  className?: string
  speed?: number
}

const defaultMarkers: PulseMarker[] = [
  { id: "pulse-1", location: [51.51, -0.13], delay: 0 },
  { id: "pulse-2", location: [40.71, -74.01], delay: 0.5 },
  { id: "pulse-3", location: [35.68, 139.65], delay: 1 },
  { id: "pulse-4", location: [-33.87, 151.21], delay: 1.5 },
  { id: "pulse-5", location: [-7.12, -34.86], delay: 2 },
]

export default function GlobePulse({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
}: GlobePulseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const pointerInteracting = useRef<{
    x: number
    y: number
  } | null>(null)

  const dragOffset = useRef({
    phi: 0,
    theta: 0,
  })

  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)

  const isPausedRef = useRef(false)

  // Guarda o requestAnimationFrame atual
  const animationFrameRef = useRef<number | null>(null)

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      pointerInteracting.current = {
        x: e.clientX,
        y: e.clientY,
      }

      isPausedRef.current = true

      e.currentTarget.style.cursor = "grabbing"

      // Permite continuar recebendo eventos mesmo
      // se o ponteiro sair do canvas durante o drag
      e.currentTarget.setPointerCapture(e.pointerId)
    },
    []
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (pointerInteracting.current === null) return

      dragOffset.current = {
        phi:
          (e.clientX - pointerInteracting.current.x) / 300,

        theta:
          (e.clientY - pointerInteracting.current.y) / 1000,
      }
    },
    []
  )

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (pointerInteracting.current !== null) {
        phiOffsetRef.current += dragOffset.current.phi
        thetaOffsetRef.current += dragOffset.current.theta

        dragOffset.current = {
          phi: 0,
          theta: 0,
        }
      }

      pointerInteracting.current = null

      isPausedRef.current = false

      e.currentTarget.style.cursor = "grab"

      try {
        e.currentTarget.releasePointerCapture(e.pointerId)
      } catch {}
    },
    []
  )

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    let globe: ReturnType<typeof createGlobe> | null = null

    let phi = 0

    let isVisible = false

    let destroyed = false

    // ─────────────────────────────────────────────
    // ANIMAÇÃO
    // ─────────────────────────────────────────────

    const animate = () => {
      if (destroyed || !globe || !isVisible) {
        animationFrameRef.current = null
        return
      }

      if (!isPausedRef.current) {
        phi += speed
      }

      globe.update({
        phi:
          phi +
          phiOffsetRef.current +
          dragOffset.current.phi,

        theta:
          0.2 +
          thetaOffsetRef.current +
          dragOffset.current.theta,
      })

      animationFrameRef.current =
        requestAnimationFrame(animate)
    }

    // ─────────────────────────────────────────────
    // INICIA ANIMAÇÃO
    // ─────────────────────────────────────────────

    const startAnimation = () => {
      if (
        destroyed ||
        !globe ||
        !isVisible ||
        animationFrameRef.current !== null
      ) {
        return
      }

      animationFrameRef.current =
        requestAnimationFrame(animate)
    }

    // ─────────────────────────────────────────────
    // INTERSECTION OBSERVER
    // ─────────────────────────────────────────────

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting

        if (isVisible) {
          // Voltou para a tela
          startAnimation()
        } else {
          // Saiu da tela
          if (animationFrameRef.current !== null) {
            cancelAnimationFrame(
              animationFrameRef.current
            )

            animationFrameRef.current = null
          }
        }
      },
      {
        // Começa quando pelo menos 1% do Globe
        // estiver visível
        threshold: 0.01,
      }
    )

    intersectionObserver.observe(canvas)

    // ─────────────────────────────────────────────
    // CRIA GLOBE
    // ─────────────────────────────────────────────

    const init = () => {
      if (destroyed || globe) return

      const width = canvas.offsetWidth

      if (width === 0) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(
          window.devicePixelRatio || 1,
          2
        ),

        width,
        height: width,

        phi: 0,
        theta: 0.2,

        dark: 1,

        diffuse: 1.5,

        mapSamples: 16000,

        mapBrightness: 10,

        baseColor: [
          0.0196,
          0.1569,
          0.5569,
        ],

        markerColor: [1, 1, 1],

        glowColor: [
          0.05,
          0.05,
          0.05,
        ],

        markerElevation: 0,

        markers: markers.map((marker) => ({
          location: marker.location,
          size: 0.015,
          id: marker.id,
        })),

        arcs: [],

        arcColor: [
          0.0196,
          0.1569,
          0.5569,
        ],

        arcWidth: 0.5,
        arcHeight: 0.25,
        opacity: 0.7,
      })

      // Se o Globe já estiver visível,
      // inicia imediatamente
      startAnimation()

      requestAnimationFrame(() => {
        if (canvas) {
          canvas.style.opacity = "1"
        }
      })
    }

    // ─────────────────────────────────────────────
    // INICIALIZAÇÃO
    // ─────────────────────────────────────────────

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const resizeObserver = new ResizeObserver(
        (entries) => {
          if (
            entries[0]?.contentRect.width > 0
          ) {
            resizeObserver.disconnect()
            init()
          }
        }
      )

      resizeObserver.observe(canvas)
    }

    // ─────────────────────────────────────────────
    // CLEANUP
    // ─────────────────────────────────────────────

    return () => {
      destroyed = true

      if (
        animationFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current
        )

        animationFrameRef.current = null
      }

      intersectionObserver.disconnect()

      if (globe) {
        globe.destroy()
        globe = null
      }
    }
  }, [markers, speed])

  return (
    <div
      className={`relative aspect-square select-none ${className}`}
    >
      <style>{`
        @keyframes pulse-expand {
          0% {
            transform: scaleX(0.3) scaleY(0.3);
            opacity: 0.8;
          }

          100% {
            transform: scaleX(1.5) scaleY(1.5);
            opacity: 0;
          }
        }
      `}</style>

      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />

      {markers.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",

            positionAnchor: `--cobe-${m.id}`,

            bottom: "anchor(center)",
            left: "anchor(center)",

            translate: "-50% 50%",

            width: 40,
            height: 40,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            pointerEvents: "none",

            opacity:
              `var(--cobe-visible-${m.id}, 0)`,

            filter:
              `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,

            transition:
              "opacity 0.4s, filter 0.4s",
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: 0,

              border: "2px solid #ffffff",
              borderRadius: "50%",

              opacity: 0,

              animation:
                `pulse-expand 2s ease-out infinite ${m.delay}s`,
            }}
          />

          <span
            style={{
              position: "absolute",
              inset: 0,

              border: "2px solid #ffffff",
              borderRadius: "50%",

              opacity: 0,

              animation:
                `pulse-expand 2s ease-out infinite ${m.delay + 0.5}s`,
            }}
          />

          <span
            style={{
              width: 10,
              height: 10,

              background: "#ffffff",

              borderRadius: "50%",

              boxShadow:
                "0 0 0 3px #111, 0 0 0 5px #ffffff",
            }}
          />
        </div>
      ))}
    </div>
  )
}