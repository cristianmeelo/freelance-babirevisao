import { Analytics } from "@vercel/analytics/react";
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
  title: "Revisão de TCC. Revisão de Trabalho Acadêmico e ABNT",
  description: "Revisão de TCC, revisão de monografia, artigo, tese, dissertação, projeto de pesquisa, trabalho acadêmico, site. Correção gramatical e formatação da ABNT.",
  alternates: {
    canonical: "https://babirevisao.vercel.app",
  },
  openGraph: {
    title: "Revisão de TCC - Serviços de Revisão e Formatação",
    description: "Oferecemos serviços de revisão para TCC, monografias, artigos, teses e mais. Garantimos correção gramatical e formatação de acordo com as normas da ABNT.",
    url: "https://babirevisao.vercel.app",
    siteName: "Babi Revisão",
    locale: "pt_BR",
    images: [
      {
        url: "https://babirevisao.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.e5929ace.jpg&w=640&q=75",
        width: 800,
        height: 600,
        alt: "Imagem do Open Graph para Babi Revisão",
      },
    ],
    type: "website",
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
      <body className={`${arimo.variable} font-inter antialiased bg-roxo-500 text-cinza-500 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
