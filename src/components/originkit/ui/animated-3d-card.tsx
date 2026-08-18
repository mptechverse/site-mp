"use client";

import React, {
  useCallback,
  useMemo,
  useState,
} from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const THEMES = {
  primary:
    "from-[rgb(0,0,24)] via-[rgb(0,0,35)] to-[rgb(0,0,24)]",
} as const;

type ThemeType = keyof typeof THEMES;

interface Card3DProps {
  title: string;
  description: string;
  theme?: ThemeType;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "premium";
}

const SIZES = {
  sm: "h-56",
  md: "h-64",
  lg: "h-72",
} as const;

const VARIANTS = {
  default: "shadow-lg",
  minimal: "shadow-md border border-white/10",
  premium: "shadow-xl ring-1 ring-white/10",
} as const;

export const Card3D = React.forwardRef<
  HTMLDivElement,
  Card3DProps
>(
  (
    {
      title,
      description,
      theme = "primary",
      className,
      size = "md",
      variant = "default",
    },
    ref
  ) => {
    const [mousePos, setMousePos] = useState({
      x: 0,
      y: 0,
    });

    const [hovered, setHovered] = useState(false);

    const gradient = useMemo(
      () => THEMES[theme],
      [theme]
    );

    const handleMouseMove = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        const rect =
          event.currentTarget.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setMousePos({
          x: (x / rect.width - 0.5) * 12,
          y: (y / rect.height - 0.5) * -12,
        });
      },
      []
    );

    const handleMouseEnter = useCallback(() => {
      setHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setHovered(false);

      setMousePos({
        x: 0,
        y: 0,
      });
    }, []);

    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative w-full overflow-hidden rounded-2xl",
          SIZES[size],
          VARIANTS[variant],
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: mousePos.y,
          rotateY: mousePos.x,
          z: hovered ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.7,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* ========================================================
            FUNDO
        ======================================================== */}

        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            gradient
          )}
        />

        {/* ========================================================
            BRILHO SUAVE
        ======================================================== */}

        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: hovered ? 0.5 : 0.7,
          }}
          transition={{
            duration: 0.3,
          }}
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.15) 50%, rgba(255,255,255,0.05) 100%)",
            transform: "translateZ(5px)",
          }}
        />

        {/* ========================================================
            REFLEXO AO PASSAR O MOUSE
        ======================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
            rounded-2xl
          "
          style={{
            transform: "translateZ(10px)",
          }}
        >
          <motion.div
            className="absolute -inset-full"
            animate={{
              opacity: hovered ? 1 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
            style={{
              transform: "translateZ(10px)",

              background: hovered
                ? `linear-gradient(
                    ${mousePos.x + 135}deg,
                    transparent 40%,
                    rgba(255,255,255,0.22) 50%,
                    transparent 60%
                  )`
                : "linear-gradient(
                    135deg,
                    rgba(255,255,255,0) 40%,
                    rgba(255,255,255,0) 50%,
                    rgba(255,255,255,0) 60%
                  )",
            }}
          />
        </motion.div>

        {/* ========================================================
            CONTEÚDO
        ======================================================== */}

        <motion.div
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            justify-end
            p-6
            font-jakarta
            text-white
          "
          style={{
            transform: "translateZ(20px)",
          }}
          animate={{
            y: hovered ? -3 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          {/* ======================================================
              TÍTULO — ZODIAK
          ====================================================== */}

          <motion.h3
            className="
              font-zodiak
              text-2xl
              font-bold
              leading-[1.1]
              tracking-[-0.5px]
              text-white
            "
            animate={{
              scale: hovered ? 1.01 : 1,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {title}
          </motion.h3>

          {/* ======================================================
              DESCRIÇÃO — JAKARTA
          ====================================================== */}

          <motion.p
            className="
              mt-2
              max-w-[280px]
              font-jakarta
              text-[15px]
              font-normal
              leading-[1.4]
              tracking-[-0.2px]
              text-white/60
            "
            animate={{
              opacity: hovered ? 1 : 0.85,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* ========================================================
            CAMADA SUPERIOR
        ======================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
          "
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 35%, transparent 70%, rgba(255,255,255,0.06) 100%)",
            transform: "translateZ(25px)",
          }}
          animate={{
            opacity: hovered ? 1 : 0.7,
          }}
          transition={{
            duration: 0.3,
          }}
        />

        {/* ========================================================
            GLOW
        ======================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -inset-1
            rounded-2xl
          "
          style={{
            background: `linear-gradient(
              135deg,
              ${gradient}
            )`,
            filter: "blur(18px)",
            transform: "translateZ(-5px)",
          }}
          animate={{
            opacity: hovered ? 0.2 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        />
      </motion.div>
    );
  }
);

Card3D.displayName = "Card3D";