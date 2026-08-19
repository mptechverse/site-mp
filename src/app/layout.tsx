import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const zodiak = localFont({
  src: "../fonts/Poppins-SemiBold.woff2",
  variable: "--font-zodiak",
  weight: "700",
  style: "normal",
  display: "swap",
});

const jakarta = localFont({
  src: "../fonts/PlusJakartaSans-Regular.woff2",
  variable: "--font-jakarta",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://site-mp-rah7.vercel.app"),

  title: {
    default: "MP Technologies — Desenvolvimento de Sites e Sistemas",
    template: "%s | MP Tech",
  },

  description:
    "A MP Technologies desenvolve sites, landing pages, sistemas web, SaaS e soluções digitais sob medida para empresas.",

  verification: {
    google: "2AS0u4VfVF-kT9BKA0nv3hWafRzXDlekyY8Tj3y-7_s",
  },

  keywords: [
    "MP Technologies",
    "MP Tech",
    "desenvolvimento web",
    "criação de sites",
    "desenvolvimento de sistemas",
    "landing page",
    "sistemas web",
    "SaaS",
    "desenvolvimento de software",
    "software sob medida",
    "aplicações web",
    "automação de processos",
    "integração de APIs",
    "dashboards",
  ],

  authors: [
    {
      name: "MP Technologies",
    },
  ],

  creator: "MP Technologies",
  publisher: "MP Technologies",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://site-mp-rah7.vercel.app/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://site-mp-rah7.vercel.app/",
    siteName: "MP Technologies",
    title: "MP Technologies — Desenvolvimento de Sites e Sistemas",
    description:
      "Desenvolvemos sites, sistemas web, SaaS e soluções digitais sob medida para empresas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MP Technologies — Desenvolvimento de soluções digitais",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MP Technologies — Desenvolvimento de Sites e Sistemas",
    description:
      "Desenvolvimento de sites, sistemas web, SaaS e soluções digitais sob medida.",
    images: ["/og-image.jpg"],
  },

  
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "MP Technologies",
    alternateName: "MP Tech",

    url: "https://site-mp-rah7.vercel.app/",

    logo: "https://site-mp-rah7.vercel.app/logo.png",

    description:
      "A MP Technologies desenvolve sites, landing pages, sistemas web, SaaS e soluções digitais sob medida para empresas.",
  };

  return (
    <html
      lang="pt-BR"
      className={`${zodiak.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-jakarta">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}