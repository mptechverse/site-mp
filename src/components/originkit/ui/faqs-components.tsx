
'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'Como começo um projeto com vocês?',
      answer:
        'O primeiro passo é conversar sobre sua ideia, seus objetivos e o que você precisa. A partir disso, estruturamos a melhor solução para o projeto.',
    },
    {
      id: 'item-2',
      question: 'Vocês desenvolvem sistemas do zero?',
      answer:
        'Sim. Criamos projetos personalizados, unindo estratégia, design e tecnologia para desenvolver experiências digitais alinhadas aos objetivos da sua marca.',
    },
    {
      id: 'item-3',
      question: 'Posso solicitar alterações durante o projeto?',
      answer:
        'Sim. O projeto é construído de forma colaborativa e cada etapa possui momentos específicos para feedback e ajustes.',
    },
    {
      id: 'item-4',
      question: 'Vocês fazem apenas o design ou também o desenvolvimento?',
      answer:
        'Fazemos os dois. Unimos design e desenvolvimento para que a identidade visual e a tecnologia trabalhem juntas desde o início.',
    },
    {
      id: 'item-5',
      question: 'O site será otimizado para celular?',
      answer:
        'Sim. Todos os projetos são desenvolvidos pensando em diferentes tamanhos de tela, garantindo uma experiência consistente em computadores, tablets e smartphones.',
    },
  ]

  return (
    <section className="mx-[100px] py-16 md:py-24 h-[70%] justify-center items-center flex">
      <div className="mx-auto flex w-full max-w-5xl px-4 md:px-6">

        {/* ESQUERDA - 50% */}
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-semibold text-white">
            FAQs
          </h2>

          <h1 className="mt-4 text-lg font-bold text-white">
            Suas perguntas respondidas
          </h1>

          <p className="mt-4 text-balance text-lg text-white/60">
            Tudo o que você precisa saber sobre como trabalhamos,
            nossos projetos e o processo de desenvolvimento.
          </p>
        </div>

        {/* DIREITA - 50% */}
        <div className="w-1/2 pl-8">
          <Accordion
            type="single"
            collapsible
            className="w-full border border-white/10 px-8 py-3"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dotted border-white/10"
              >
                <AccordionTrigger className="cursor-pointer text-base text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent>
                  <p className="text-base text-white/60">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-6 text-white/50">
            Ainda ficou com alguma dúvida?{' '}
            <Link
              href="#"
              className="font-medium text-white hover:underline"
            >
              Vamos conversar sobre o seu projeto.
            </Link>
          </p>
        </div>

      </div>
    </section>
  )
}

