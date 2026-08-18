import { Hero } from "./originkit/ui/call-to-action";

export default function CTA() {
  return (
    <div className="w-full overflow-hidden">
      <Hero
        eyebrow="MP TECHNOLOGIES"
        title="Sua próxima grande ideia começa aqui..."
        subtitle="Conte o que você precisa e vamos conversar sobre a melhor forma de transformar isso em uma solução digital."
        ctaLabel="VAMOS CONSTRUIR JUNTOS"
        ctaHref="#contato"
      />
    </div>
  );
}