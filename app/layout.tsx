import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Arimo } from "next/font/google";
import type { Metadata } from "next";

import Header from "@/components/ui/header";
import "./css/style.css";

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  generator: "Next.js 13",
  applicationName: "babi revisão de tcc",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Cristian da Rosa Melo", url: "https://www.linkedin.com/in/cristian-melo/" }],
  creator: "Cristian da Rosa Melo",
  publisher: "Cristian da Rosa Melo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: "Babi Consultoria - Consultoria e Revisão de TCC",
  description: "Entregamos à você consultoria personalizada e revisão de TCC, nossa meta é sua tranquilidade e aprovação. ✓ Entre em contato sem compromisso.",

  alternates: {
    canonical: "https://babirevisao.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Babi Consultoria - Consultoria e Revisão de TCC",
    description: "Entregamos à você consultoria personalizada e revisão de TCC, nossa meta é sua tranquilidade e aprovação. ✓ Entre em contato sem compromisso.",
    url: "https://babirevisao.vercel.app/",
    siteName: "Babi Revisão",
    authors: "Cristian da Rosa Melo",
    locale: "pt_BR",
    publishedTime: "2023-09-01T00:00:00.000Z",
    images: [
      {
        url: "https://babirevisao.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.e5929ace.jpg&w=640&q=75",
        width: 800,
        height: 600,
        alt: "Imagem do Open Graph para Babi Revisão",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-91XQY9G9D5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-91XQY9G9D5');`,
          }}
        />
      </head>
      <link rel="icon" href="https://babirevisao.vercel.app/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="https://babirevisao.vercel.app/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="https://babirevisao.vercel.app/favicon.ico" />

      <body className={`${arimo.variable} font-inter antialiased bg-roxo-500 text-cinza-500 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Analytics />
          <SpeedInsights/>
        </div>
      </body>
    </html>
  );
}
