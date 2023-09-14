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
  title: "Consultoria em TCC",
  description: "Página para orçar consultoria de TCC",
  alternates: {
    canonical: "https://babirevisao.vercel.app",
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
