"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY >= 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const phone = "5583999999999";

  const message =
    "Olá! Gostaria de saber mais sobre os serviços da MP Tech.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <AnimatePresence>
      {showButton && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a MP Tech pelo WhatsApp"
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            right-5
            bottom-5
            z-50

            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-full
            bg-[#25D366]
            text-white

            shadow-[0_8px_30px_rgba(0,0,0,0.3)]

            hover:scale-110
            active:scale-95

            lg:hidden
          "
        >
          <FaWhatsapp className="h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}