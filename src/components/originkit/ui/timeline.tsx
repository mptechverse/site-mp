
"use client";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <section className="w-full">
      <div className="relative w-full">

        {/* Linha principal */}
        <div
          className="
            absolute
            left-5
            right-5
            top-5
            h-px
            bg-[#0752CC]
          "
        />

        {/* Pequenos pontos na linha */}
        <div className="absolute left-0 top-[18px] h-1.5 w-1.5 rounded-full bg-[#0752CC]" />
        <div className="absolute right-0 top-[18px] h-1.5 w-1.5 rounded-full bg-[#0752CC]" />

        {/* Eventos */}
        <div className="relative grid grid-cols-6 gap-5">
          {events.map((event, index) => (
            <article
              key={event.id}
              className="
                group
                relative
                min-w-0
              "
            >
              {/* Número */}
              <div className="relative z-10 mb-10 flex items-center">

                {/* Anel externo */}
                <div
                  className="
                    relative
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0752CC]
                    bg-black
                    transition-all
                    duration-300
                    group-hover:border-white
                  "
                >
                  {/* Ponto interno */}
                  <div
                    className="
                      absolute
                      h-2
                      w-2
                      rounded-full
                      bg-[#0752CC]
                      transition-all
                      duration-300
                      group-hover:scale-125
                      group-hover:bg-white
                    "
                  />

                  <span
                    className="
                      relative
                      z-10
                      text-[11px]
                      font-semibold
                      text-white/0
                    "
                  >
                    {index + 1}
                  </span>
                </div>

                {/* Número fora do círculo */}
                
              </div>

              {/* Conteúdo */}
              <div
                className="
                  relative
                  border-t
                  border-white/10
                  pt-5
                  transition-colors
                  duration-300
                  group-hover:border-[#0752CC]/60
                "
              >
                {/* Etapa */}
                <span
                  className="
                    block
                    font-sans
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#0752CC]
                  "
                >
                  {event.date}
                </span>

                {/* Título */}
                <h3
                  className="
                    mt-3
                    font-instrument-serif
                    text-[42px]
                    leading-[0.95]
                    tracking-[-1.2px]
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  {event.title}
                </h3>

                {/* Descrição */}
                <p
                  className="
                    mt-5
                    font-sans
                    text-[14px]
                    font-normal
                    leading-[1.55]
                    tracking-[-0.2px]
                    text-white/50
                  "
                >
                  {event.description}
                </p>

                {/* Número decorativo */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-4
                    font-sans
                    text-[42px]
                    font-bold
                    leading-none
                    tracking-[-3px]
                    text-white/[0.025]
                    transition-colors
                    duration-300
                    group-hover:text-[#0752CC]/[0.08]
                  "
                >
                  0{index + 1}
                </span>
              </div>

              {/* Pequena marca inferior */}
              <div
                className="
                  mt-8
                  h-px
                  w-6
                  bg-white/10
                  transition-all
                  duration-300
                  group-hover:w-12
                  group-hover:bg-[#0752CC]
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

