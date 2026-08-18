
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export default function Cta() {
  return (
    <section
      id="contato"
      className="relative flex h-[70%] items-center overflow-hidden border-border"
    >
      <div
        className="tech-grid grid-fade absolute inset-0 text-white"
        aria-hidden
      />

      <div
        className="blue-glow pointer-events-none absolute bottom-0 left-1/2 h-[800px] w-[1000px] -translate-x-1/2 translate-y-1/3"
        aria-hidden
      />

      <div className="absolute top-1/3 left-6 hidden font-mono text-[0.625rem] tracking-[0.3em] text-white/25 md:block lg:left-12">
        MP—TECH / BR
      </div>

      <div className="absolute right-6 bottom-1/3 hidden font-mono text-[0.625rem] tracking-[0.3em] text-white/25 md:block lg:right-12">
        2026 / DIGITAL
      </div>

      <div className="relative mx-auto w-full max-w-[1100px] px-6 py-32 text-center md:px-12">
        <Reveal>
          <h2 className="text-[2.5rem] leading-[1.02] font-semibold text-white sm:text-6xl lg:text-7xl">
            Pronto para transformar
            <br />
            sua ideia em{" "}
            <span className="text-[rgb(7,82,204)]">realidade?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-lg text-white/50">
            Vamos conversar sobre o seu projeto.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <a
            href="mailto:contato@mptech.com.br"
            className="group mt-14 inline-flex items-center gap-4 bg-[rgb(7,82,204)] px-10 py-5 text-sm tracking-[0.1em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            Falar com a MP Tech

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
