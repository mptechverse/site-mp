"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import {
  motion,
  useMotionValue,
  useSpring,
  type Transition as MotionTransition,
} from "framer-motion";

interface Item {
  text?: string;
  description?: string;
  image?: {
    src?: string;
    srcSet?: string;
    alt?: string;
  };
  link?: string;
}

interface ItemsValue {
  itemCount?: number;
  [key: string]: unknown;
}

const MAX_ITEMS = 6;

interface FontValue {
  fontSize?: number | string;
  letterSpacing?: number | string;
  lineHeight?: number | string;
  [key: string]: unknown;
}

interface HoverImageRevealProps {
  items?: ItemsValue;
  font?: FontValue;
  textColor?: string;
  dimColor?: string;
  descriptionColor?: string;
  align?: "left" | "center" | "right";
  rowGap?: number;
  imageWidth?: number;
  imageHeight?: number;
  rounded?: number;
  offsetX?: number;
  offsetY?: number;
  followStrength?: number;
  transition?: MotionTransition;
  backgroundColor?: string;
  style?: CSSProperties;
}

/* ============================================================
   SERVIÇOS
============================================================ */

const DEFAULT_ITEMS_DATA: {
  text: string;
  description: string;
  src: string;
}[] = [
  {
    text: "DASHBOARDS",
    description:
      "Interfaces inteligentes para transformar dados em decisões.",
    src: "/img/servicos/1.webp",
  },
  {
    text: "AUTOMAÇÕES",
    description:
      "Processos mais rápidos, inteligentes e sem tarefas repetitivas.",
    src: "/img/servicos/2.webp",
  },
  {
    text: "WEBSITES",
    description:
      "Sites modernos, rápidos e pensados para gerar resultados.",
    src: "/img/servicos/3.webp",
  },
  {
    text: "WEB APPS",
    description:
      "Aplicações web personalizadas para necessidades específicas.",
    src: "/img/servicos/4.webp",
  },
  {
    text: "E-COMMERCE",
    description:
      "Experiências de compra rápidas, intuitivas e escaláveis.",
    src: "/img/servicos/5.webp",
  },
  {
    text: "MUITO MAIS",
    description:
      "Soluções digitais sob medida para projetos que vão além.",
    src: "/img/servicos/6.webp",
  },
];

/* ============================================================
   DEFAULT ITEMS
============================================================ */

const DEFAULT_ITEMS: ItemsValue = {
  itemCount: 6,

  item1: {
    text: DEFAULT_ITEMS_DATA[0].text,
    description: DEFAULT_ITEMS_DATA[0].description,
    image: {
      src: DEFAULT_ITEMS_DATA[0].src,
    },
  },

  item2: {
    text: DEFAULT_ITEMS_DATA[1].text,
    description: DEFAULT_ITEMS_DATA[1].description,
    image: {
      src: DEFAULT_ITEMS_DATA[1].src,
    },
  },

  item3: {
    text: DEFAULT_ITEMS_DATA[2].text,
    description: DEFAULT_ITEMS_DATA[2].description,
    image: {
      src: DEFAULT_ITEMS_DATA[2].src,
    },
  },

  item4: {
    text: DEFAULT_ITEMS_DATA[3].text,
    description: DEFAULT_ITEMS_DATA[3].description,
    image: {
      src: DEFAULT_ITEMS_DATA[3].src,
    },
  },

  item5: {
    text: DEFAULT_ITEMS_DATA[4].text,
    description: DEFAULT_ITEMS_DATA[4].description,
    image: {
      src: DEFAULT_ITEMS_DATA[4].src,
    },
  },

  item6: {
    text: DEFAULT_ITEMS_DATA[5].text,
    description: DEFAULT_ITEMS_DATA[5].description,
    image: {
      src: DEFAULT_ITEMS_DATA[5].src,
    },
  },
};

/* ============================================================
   TIPOGRAFIA
============================================================ */

const DEFAULT_FONT: FontValue = {
  fontSize: 61,
  lineHeight: "0.9em",
  letterSpacing: "-0.05em",
};

/* ============================================================
   TRANSIÇÃO
============================================================ */

const DEFAULT_TRANSITION: MotionTransition = {
  type: "spring",
  stiffness: 400,
  damping: 40,
  mass: 1,
};

/* ============================================================
   COMPONENTE
============================================================ */

export default function HoverImageReveal({
  items = DEFAULT_ITEMS,
  font = DEFAULT_FONT,
  textColor = "#FFFFFF",
  dimColor = "#51565A",
  descriptionColor = "#8B9095",
  align = "left",
  rowGap = 0,
  imageWidth = 200,
  imageHeight = 200,
  rounded = 16,
  offsetX = 200,
  offsetY = 0,
  followStrength = 0,
  transition = DEFAULT_TRANSITION,
  style,
}: HoverImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState<number | null>(null);

  /* ============================================================
     RESPONSIVIDADE
     
     < 1024px = celular/tablet
     >= 1024px = desktop
  ============================================================ */

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  /* ============================================================
     MOVIMENTO DA IMAGEM
  ============================================================ */

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const stiffness = 60 + followStrength * 5;

  const springCfg = {
    stiffness,
    damping: 28,
    mass: 0.5,
  };

  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  /* ============================================================
     DADOS
  ============================================================ */

  const data = items || DEFAULT_ITEMS;

  const count = Math.max(
    1,
    Math.min(
      MAX_ITEMS,
      (data.itemCount as number) || 6
    )
  );

  const list: Item[] = [];

  for (let i = 1; i <= count; i++) {
    const it = data[`item${i}`] as Item | undefined;

    const fallback = DEFAULT_ITEMS_DATA[i - 1];

    list.push({
      text:
        it?.text ??
        fallback?.text ??
        `Item ${i}`,

      description:
        it?.description ??
        fallback?.description ??
        "Solução personalizada.",

      image:
        it?.image ??
        (fallback
          ? {
              src: fallback.src,
            }
          : undefined),

      link: it?.link,
    });
  }

  const anyActive = hovered !== null;

  /* ============================================================
     SCROLL PARA O FINAL
  ============================================================ */

  const scrollToCTA = () => {
  const section = document.getElementById("cta");

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  /* ============================================================
     MOVIMENTO DO MOUSE
  ============================================================ */

  const onMove = (e: React.MouseEvent) => {
    // Não executa tracking em celular/tablet
    if (isMobile) return;

    const rect =
      containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    rawX.set(
      e.clientX -
        rect.left +
        offsetX
    );

    rawY.set(
      e.clientY -
        rect.top +
        offsetY
    );
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={() => setHovered(null)}
      style={{
        position: "relative",

        width: "100%",

        height: "100%",

        overflow: "hidden",

        display: "flex",

        flexDirection: "column",

        justifyContent: "center",

        padding: isMobile
          ? "20px 0"
          : "40px 24px",

        boxSizing: "border-box",

        cursor: "default",

        fontFamily:
          "var(--font-jakarta)",

        ...(style ?? {}),
      }}
    >
      {/* ========================================================
          IMAGEM QUE SEGUE O MOUSE
          
          SOMENTE DESKTOP
      ======================================================== */}

      <motion.div
        style={{
          display: isMobile
            ? "none"
            : "block",

          position: "absolute",

          top: 0,

          left: 0,

          x,

          y,

          translateX: "-50%",

          translateY: "-50%",

          width: imageWidth,

          height: imageHeight,

          borderRadius: rounded,

          overflow: "hidden",

          pointerEvents: "none",

          zIndex: 2,
        }}
        animate={{
          opacity:
            !isMobile && anyActive
              ? 1
              : 0,
        }}
        transition={transition}
      >
        {list.map((item, i) => {
          const src =
            item.image?.src;

          const yPos =
            hovered === null
              ? "100%"
              : i < hovered
                ? "-100%"
                : i > hovered
                  ? "100%"
                  : "0%";

          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                y: yPos,
              }}
              transition={transition}
              style={{
                position: "absolute",

                inset: 0,

                width: "100%",

                height: "100%",

                overflow: "hidden",
              }}
            >
              {src ? (
                <img
                  src={src}
                  alt={
                    item.image?.alt ||
                    item.text ||
                    ""
                  }
                  style={{
                    width: "100%",

                    height: "100%",

                    objectFit: "cover",

                    display: "block",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",

                    height: "100%",

                    background:
                      "linear-gradient(135deg,#333,#111)",
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* ========================================================
          LISTA
      ======================================================== */}

      <div
        style={{
          width: "100%",

          display: "flex",

          flexDirection: "column",

          rowGap,

          textAlign: align,
        }}
      >
        {list.map((item, i) => {
          const isHovered =
            hovered === i;

          const color =
            anyActive
              ? isHovered
                ? textColor
                : dimColor
              : textColor;

          /* ====================================================
             CONTEÚDO DA LINHA
          ==================================================== */

          const content = (
            <motion.div
              animate={{
                opacity:
                  anyActive &&
                  !isHovered
                    ? 0.45
                    : 1,
              }}
              transition={{
                duration: 0.25,
              }}
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",

                  display: "grid",

                  /*
                    MOBILE/TABLET:
                    título + seta

                    DESKTOP:
                    título + descrição + seta
                  */
                  gridTemplateColumns:
                    isMobile
                      ? "1fr 42px"
                      : "1fr 1fr 60px",

                  alignItems: "center",

                  columnGap:
                    isMobile
                      ? "20px"
                      : "40px",

                  padding:
                    isMobile
                      ? "20px 0"
                      : "26px 0",

                  borderTop:
                    "1px solid rgba(255,255,255,0.12)",

                  boxSizing:
                    "border-box",

                  textAlign: "left",
                }}
              >
                {/* ==================================================
                    TÍTULO
                ================================================== */}

                <div
                  style={{
                    overflow: "hidden",

                    minWidth: 0,
                  }}
                >
                  <motion.div
                    animate={{
                      y: isHovered
                        ? "-100%"
                        : "0%",
                    }}
                    transition={
                      transition
                    }
                    style={{
                      position:
                        "relative",
                    }}
                  >
                    {/* PRIMEIRA CÓPIA */}

                    <span
                      style={{
                        display: "block",

                        color,

                        fontFamily:
                          "var(--font-zodiak)",

                        fontWeight: 700,

                        /*
                          Menor em mobile/tablet
                          para não estourar a tela.
                        */
                        fontSize:
                          isMobile
                            ? "clamp(30px, 7vw, 48px)"
                            : typeof font.fontSize ===
                                "number"
                              ? `${font.fontSize}px`
                              : font.fontSize,

                        lineHeight:
                          font.lineHeight ??
                          "0.9em",

                        letterSpacing:
                          typeof font.letterSpacing ===
                          "number"
                            ? `${font.letterSpacing}px`
                            : font.letterSpacing,

                        whiteSpace:
                          "nowrap",
                      }}
                    >
                      {item.text}
                    </span>

                    {/* SEGUNDA CÓPIA */}

                    <span
                      aria-hidden
                      style={{
                        display: "block",

                        position:
                          "absolute",

                        top: "100%",

                        left: 0,

                        width: "100%",

                        color:
                          textColor,

                        fontFamily:
                          "var(--font-zodiak)",

                        fontWeight: 700,

                        fontSize:
                          isMobile
                            ? "clamp(30px, 7vw, 48px)"
                            : typeof font.fontSize ===
                                "number"
                              ? `${font.fontSize}px`
                              : font.fontSize,

                        lineHeight:
                          font.lineHeight ??
                          "0.9em",

                        letterSpacing:
                          typeof font.letterSpacing ===
                          "number"
                            ? `${font.letterSpacing}px`
                            : font.letterSpacing,

                        whiteSpace:
                          "nowrap",
                      }}
                    >
                      {item.text}
                    </span>
                  </motion.div>
                </div>

                {/* ==================================================
                    DESCRIÇÃO

                    SOMENTE DESKTOP
                ================================================== */}

                <div
                  style={{
                    display:
                      isMobile
                        ? "none"
                        : "block",

                    fontFamily:
                      "var(--font-jakarta)",

                    fontSize: "15px",

                    lineHeight: "1.5",

                    fontWeight: 400,

                    letterSpacing:
                      "-0.01em",

                    color:
                      anyActive &&
                      !isHovered
                        ? "#3F4347"
                        : descriptionColor,

                    maxWidth: "420px",

                    transition:
                      "color 0.25s ease",
                  }}
                >
                  {item.description}
                </div>

                {/* ==================================================
                    SETA
                ================================================== */}

                <motion.div
                  animate={{
                    x: isHovered
                      ? 8
                      : 0,

                    opacity:
                      anyActive &&
                      !isHovered
                        ? 0.25
                        : 1,
                  }}
                  transition={{
                    type: "spring",

                    stiffness: 400,

                    damping: 25,
                  }}
                  style={{
                    display: "flex",

                    justifyContent:
                      "flex-end",

                    alignItems:
                      "center",

                    flexShrink: 0,
                  }}
                >
                  <svg
                    width={
                      isMobile
                        ? "28"
                        : "34"
                    }
                    height={
                      isMobile
                        ? "28"
                        : "34"
                    }
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17H27"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M20 10L27 17L20 24"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          );

          /* ========================================================
             LINHA CLICÁVEL
          ======================================================== */

          return (
            <div
              key={i}
              onMouseEnter={() => {
                if (!isMobile) {
                  setHovered(i);
                }
              }}
              onClick={scrollToCTA}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" ||
                  e.key === " "
                ) {
                  e.preventDefault();

                  scrollToCTA();
                }
              }}
              style={{
                width: "100%",

                cursor:
                  "pointer",

                outline: "none",

                fontFamily:
                  "var(--font-jakarta)",
              }}
            >
              {content}
            </div>
          );
        })}

        {/* ========================================================
            LINHA INFERIOR
        ======================================================== */}

        <div
          style={{
            width: "100%",

            height: 1,

            background:
              "rgba(255,255,255,0.12)",
          }}
        />
      </div>
    </div>
  );
}