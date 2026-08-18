"use client";

import { FeatureRail } from "@/components/originkit/ui/hero-11/feature-rail";
import { HeroContent } from "@/components/originkit/ui/hero-11/hero-content";
import { PortraitStage } from "@/components/originkit/ui/hero-11/portrait-stage";

export const Section18Hero = () => {
  const handleGetStarted = () => {
    /* navigation disabled in preview */ void 0;
  };

  const handleBookNow = () => {
    /* navigation disabled in preview */ void 0;
  };

  return (
    <section
      aria-label="Visionary liquid distortion hero"
      className="
        relative
        isolate
        min-h-svh
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* ============================================================
          PORTRAIT
      ============================================================ */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          z-10
          h-[55svh]

          sm:h-[58svh]

          lg:h-full
        "
      >
        <PortraitStage />
      </div>

      {/* ============================================================
          CONTEÚDO
      ============================================================ */}

      <div
        className="
          relative
          z-30
          mx-auto
          flex
          min-h-svh
          w-full
          max-w-[1440px]
          flex-col
        "
      >
        <div
          className="
            relative
            flex
            min-h-svh
            w-full
            flex-col
            justify-end

            px-5
            pb-10

            sm:items-center
            sm:px-8
            sm:pb-14

            lg:grid
            lg:grid-cols-[366px_1fr_129px]
            lg:items-end
            lg:justify-items-stretch
            lg:px-[100px]
            lg:pb-[114px]
          "
        >
          {/* ========================================================
              HERO CONTENT
          ======================================================== */}

          <div
            className="
              pointer-events-auto
              relative
              z-30
              w-full

              sm:flex
              sm:w-full
              sm:justify-center

              lg:col-start-1
              lg:block
              lg:w-auto
            "
          >
            <div
              className="
                w-full

                sm:max-w-[520px]

                lg:max-w-none
              "
            >
              <HeroContent
                onGetStarted={handleGetStarted}
              />
            </div>
          </div>

          {/* ========================================================
              FEATURE RAIL — SOMENTE DESKTOP
          ======================================================== */}

          <div
            className="
              pointer-events-auto
              relative
              hidden

              lg:col-start-3
              lg:block
              lg:justify-self-end
            "
          >
            <FeatureRail />
          </div>
        </div>
      </div>

      {/* ============================================================
          GRADIENTE
      ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20

          h-[38%]

          bg-gradient-to-t
          from-[rgb(0,0,24)]
          via-[rgba(0,0,24,0.80)]
          to-transparent

          sm:h-[35%]

          lg:h-[30%]
          lg:via-[rgba(0,0,24,0.6)]
        "
      />
    </section>
  );
};