"use client";

import Lottie from "lottie-react";
import animationData from "../public/animations/animation_books.json";
import animationLetters from "../public/animations/animation_letters.json";
import va from "@vercel/analytics";

export default function Hero() {
  return (
    <section className="relative ">
      <div className="h-screen max-w-6xl mx-auto px-4 sm:px-6 ">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-white" data-aos="zoom-y-out">
              Seu TCC do início ao fim: revisão de tcc especializado para um trabalho acadêmico nota 10!
              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400">TCC</span> */}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Nós fornecemos assessoria acadêmica, serviços de estruturação em tcc, monografia e trabalho acadêmico no geral, para estudantes em todas as áreas de estudo. Deixe-nos tornar seu trabalho impecável!
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a
                    className="btn text-roxo-500 text-xl bg-roxo-400 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring focus:ring-black w-full mb-4 sm:w-auto sm:mb-0 animate-bounce"
                    href="https://wa.me//5551989140442?text=Ol%C3%A1,%20B%C3%A1rbara.%20Tenho%20interesse%20em%20fazer%20um%20or%C3%A7amento%20de%20consultoria%20em%20TCC.%20Pode%20me%20ajudar?"
                    target="_blank"
                    onClick={() => va.track("click-quote-hero")}
                  >
                    Pedir um orçamento
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute mx-auto px-4 sm:px-6 -z-1 w-1/5 hidden sm:block" aria-label="Um conjunto de livros de diversas cores e sem desenhos na capa executando uma animação de serem organizados e saírem voando.">
            <Lottie animationData={animationData} aria-label="Um conjunto de livros de diversas cores e sem desenhos na capa executando uma animação de serem organizados e saírem voando." />
          </div>
          <div
            className="absolute left-3/4 top-0 -z-1 w-1/5 hidden sm:block opacity-20"
            aria-label="Um conjunto de letras na cor azul escuro do alfabeto português com tipografia de serifa caindo em um fluidez de cima para baixo, e a medida que faz a animação, as letras vão obtendo uma transparência até sumir completamente."
          >
            <Lottie
              animationData={animationLetters}
              aria-label="Um conjunto de letras na cor azul escuro do alfabeto português com tipografia de serifa caindo em um fluidez de cima para baixo, e a medida que faz a animação, as letras vão obtendo uma transparência até sumir completamente."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
