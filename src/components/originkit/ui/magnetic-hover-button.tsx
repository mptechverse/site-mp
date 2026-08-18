"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect, type CSSProperties } from "react";

const RANGE_PER_POINT = 18;
const MAX_PULL = 0.5;

interface BorderOptions {
  color: string;
  width: number;
}

interface MagneticButtonProps {
  label?: string;
  link?: string;
  newTab?: boolean;
  font?: CSSProperties;
  fill?: string;
  textColor?: string;
  sweepColor?: string;
  sweepTextColor?: string;
  radius?: number;
  magnet?: number;
  paddingX?: number;
  paddingY?: number;
  transition?: any;
  border?: boolean;
  borderOptions?: BorderOptions;
  style?: CSSProperties;
}

export default function MagneticButton({
  label = "Fazer orçamento",

  link = "https://wa.me/5583999883708?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista",

  newTab = true,

  font = {
    fontFamily: "var(--font-jakarta)",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "1em",
    letterSpacing: "-0.01em",
    textAlign: "left",
  },

  fill = "#FFFFFF",
  textColor = "#000000",
  sweepColor = "#314ea4",
  sweepTextColor = "#FFFFFF",

  paddingX = 32,
  paddingY = 15,

  radius = 100,
  magnet = 5,

  transition = {
    type: "tween",
    stiffness: 800,
    damping: 60,
    mass: 1,
    ease: "easeInOut",
    duration: 0.3,
  },

  border = false,

  borderOptions = {
    color: "#FFFFFF",
    width: 1,
  },

  style,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const [hover, setHover] = useState(false);

  const [origin, setOrigin] = useState({
    x: 0,
    y: 0,
    d: 0,
  });

  const hoverRef = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, {
    stiffness: 260,
    damping: 18,
    mass: 0.4,
  });

  const sy = useSpring(y, {
    stiffness: 260,
    damping: 18,
    mass: 0.4,
  });

  const borderColor =
    borderOptions?.color ?? "#FFFFFF";

  const borderWidth = border
    ? borderOptions?.width ?? 0
    : 0;

  /* ============================================================
     RESPONSIVIDADE
  ============================================================ */

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const isMobile = window.innerWidth < 1024;

    // No celular/tablet não existe hover magnético.
    // Evita também processamento desnecessário.
    if (isMobile) {
      x.set(0);
      y.set(0);
      return;
    }

    const pull = (magnet / 20) * MAX_PULL;
    const reach = magnet * RANGE_PER_POINT;

    function onMove(event: PointerEvent) {
      const nodeCurrent = ref.current;

      if (!nodeCurrent) return;

      const rect =
        nodeCurrent.getBoundingClientRect();

      const cx =
        rect.left +
        rect.width / 2 -
        sx.get();

      const cy =
        rect.top +
        rect.height / 2 -
        sy.get();

      const dx =
        event.clientX - cx;

      const dy =
        event.clientY - cy;

      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      const edgeX = Math.max(
        0,
        Math.abs(dx) -
          rect.width / 2
      );

      const edgeY = Math.max(
        0,
        Math.abs(dy) -
          rect.height / 2
      );

      const gap = Math.hypot(
        edgeX,
        edgeY
      );

      if (
        inside !==
        hoverRef.current
      ) {
        const lx = Math.max(
          0,
          Math.min(
            rect.width,
            event.clientX -
              rect.left
          )
        );

        const ly = Math.max(
          0,
          Math.min(
            rect.height,
            event.clientY -
              rect.top
          )
        );

        const d =
          2 *
          Math.hypot(
            rect.width,
            rect.height
          );

        setOrigin({
          x: lx,
          y: ly,
          d,
        });

        hoverRef.current =
          inside;

        setHover(inside);
      }

      if (gap > reach) {
        x.set(0);
        y.set(0);
        return;
      }

      const falloff =
        reach === 0
          ? 0
          : 1 - gap / reach;

      x.set(
        dx *
          pull *
          falloff
      );

      y.set(
        dy *
          pull *
          falloff
      );
    }

    function onLeave() {
      x.set(0);
      y.set(0);

      hoverRef.current = false;

      setHover(false);
    }

    window.addEventListener(
      "pointermove",
      onMove,
      { passive: true }
    );

    document.addEventListener(
      "pointerleave",
      onLeave
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        onMove
      );

      document.removeEventListener(
        "pointerleave",
        onLeave
      );
    };
  }, [
    magnet,
    x,
    y,
    sx,
    sy,
  ]);

  return (
    <motion.a
      ref={ref}
      href={link || undefined}
      target={
        link && newTab
          ? "_blank"
          : undefined
      }
      rel={
        link && newTab
          ? "noopener noreferrer"
          : undefined
      }
      style={{
        position: "relative",

        display: "inline-flex",

        alignItems: "center",

        justifyContent:
          "center",

        boxSizing:
          "border-box",

        /*
          Responsivo:
          mobile = menor
          desktop = maior
        */
        padding:
          "13px 22px",

        borderRadius: radius,

        background: fill,

        border:
          borderWidth > 0
            ? `${borderWidth}px solid ${borderColor}`
            : "none",

        cursor: "pointer",

        overflow: "hidden",

        textDecoration: "none",

        whiteSpace: "nowrap",

        minHeight: 48,

        x: sx,
        y: sy,

        boxShadow: hover
          ? "0 16px 40px rgba(0,0,0,0.22)"
          : "0 8px 22px rgba(0,0,0,0.14)",

        fontFamily:
          "var(--font-jakarta)",

        fontSize: 14,

        fontWeight: 500,

        lineHeight: 1,

        letterSpacing:
          "-0.01em",

        ...font,

        ...style,
      }}

      className="
        max-w-full

        sm:px-7
        sm:py-3.5
        sm:text-[15px]

        md:px-8
        md:py-4
        md:text-base
      "
    >
      {/* ======================================================
          CÍRCULO DE PREENCHIMENTO
      ======================================================= */}

      <motion.span
        aria-hidden
        initial={false}
        animate={{
          scale: hover ? 1 : 0,
        }}
        transition={transition}
        style={{
          position: "absolute",

          top: origin.y,

          left: origin.x,

          width: origin.d,

          height: origin.d,

          marginLeft:
            -origin.d / 2,

          marginTop:
            -origin.d / 2,

          borderRadius: "50%",

          background:
            sweepColor,

          transformOrigin:
            "center",

          pointerEvents:
            "none",
        }}
      />

      {/* ======================================================
          TEXTO + ÍCONE
      ======================================================= */}

      <motion.span
        initial={false}
        animate={{
          color: hover
            ? sweepTextColor
            : textColor,
        }}
        transition={transition}
        style={{
          position: "relative",

          zIndex: 1,

          display: "inline-flex",

          alignItems: "center",

          gap: "8px",

          minWidth: 0,
        }}
      >
        <span
          style={{
            overflow: "hidden",
            textOverflow:
              "ellipsis",
          }}
        >
          {label}
        </span>

        {/* ==================================================
            SETAS
        =================================================== */}

        <span
          style={{
            position:
              "relative",

            width: 18,

            height: 18,

            display:
              "inline-flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            flexShrink: 0,
          }}
        >
          {/* Arrow Up Right */}

          <motion.img
            src="/icons/arrow-up-right.svg"
            alt=""
            initial={false}
            animate={{
              opacity:
                hover ? 0 : 1,

              scale:
                hover ? 0.7 : 1,

              x:
                hover ? -4 : 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            style={{
              position:
                "absolute",

              width: 18,

              height: 18,

              objectFit:
                "contain",
            }}
          />

          {/* Arrow Right */}

          <motion.img
            src="/icons/arrow-right.svg"
            alt=""
            initial={false}
            animate={{
              opacity:
                hover ? 1 : 0,

              scale:
                hover ? 1 : 0.7,

              x:
                hover ? 0 : 4,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            style={{
              position:
                "absolute",

              width: 18,

              height: 18,

              objectFit:
                "contain",
            }}
          />
        </span>
      </motion.span>
    </motion.a>
  );
}