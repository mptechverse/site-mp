
import React from "react";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string | number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface HoverRevealCardsProps {
  items: CardItem[];
  className?: string;
  cardClassName?: string;
}

const HoverRevealCards: React.FC<HoverRevealCardsProps> = ({
  items,
  className,
  cardClassName,
}) => {
  return (
    <div
      role="list"
      className={cn(
        "grid w-full max-w-6xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          role="listitem"
          aria-label={`${item.title}, ${item.subtitle}`}
          tabIndex={0}
          className={cn(
            "group relative h-80 cursor-pointer overflow-hidden rounded-xl",
            "transition-transform duration-500 ease-out",
            "hover:scale-[1.03]",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-white/50",
            "focus-visible:ring-offset-2",
            "focus-visible:ring-offset-black",
            cardClassName
          )}
        >
          {/* IMAGEM */}
          <div
            className="
              absolute
              inset-0
              z-0
              bg-cover
              bg-center
              bg-no-repeat
              blur-[0px]
              scale-[1.04]
              transition-[filter,transform]
              duration-300
              ease-out
              group-hover:blur-0
              group-hover:scale-100
              group-focus-visible:blur-0
              group-focus-visible:scale-100
            "
            style={{
              backgroundImage: `url(${item.imageUrl})`,
            }}
          />

          {/* OVERLAY */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-gradient-to-t
              from-black/80
              via-black/40
              to-transparent
            "
          />

          {/* CONTEÚDO */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              z-10
              p-6
              text-left
              text-white
            "
          >
            <p className="text-sm font-light uppercase tracking-widest opacity-80">
              {item.subtitle}
            </p>

            <h3 className="mt-1 text-2xl font-semibold">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverRevealCards;

