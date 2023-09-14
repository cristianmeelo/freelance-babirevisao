"use client";

import Lottie from "lottie-react";
import animationData from "../public/animations/animation_books.json";
import animationLetters from "../public/animations/animation_letters.json";

export default function Hero() {
  return (
    <section className="relative ">
      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1 bg-gradient-to-t from-transparent to-black">
        {/* <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg> */}
      </div>
      {/* <Image className="md:max-w-none mx-auto rounded w-full h-full object-cover" src={FeaturesBg} alt="Features bg" /> */}

      <div className="h-screen max-w-6xl mx-auto px-4 sm:px-6 ">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-white" data-aos="zoom-y-out">
              {/* Formatação de TCC: Seu Trabalho Perfeito */}
              Seu TCC do início ao fim: consultoria especializada para um trabalho acadêmico nota 10!
              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400">TCC</span> */}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Nós fornecemos assessoria acadêmica, serviços de estruturação em tcc, monografia e trabalho acadêmico no geral, para estudantes em todas as áreas de estudo. Deixe-nos tornar seu trabalho impecável!
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a
                    className="btn text-white text-xl bg-roxo-400 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 animate-bounce"
                    href="https://wa.me//5551989140442?text=Ol%C3%A1,%20B%C3%A1rbara.%20Tenho%20interesse%20em%20fazer%20um%20or%C3%A7amento%20de%20consultoria%20em%20TCC.%20Pode%20me%20ajudar?"
                    target="_blank"
                  >
                    Pedir um orçamento
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute mx-auto px-4 sm:px-6 -z-1 w-1/5 hidden sm:block  ">
            <Lottie animationData={animationData} />
          </div>
          <div className="absolute left-3/4 top-0 -z-1 w-1/5 hidden sm:block opacity-20 ">
            <Lottie animationData={animationLetters} />
          </div>
        </div>
      </div>
    </section>
  );
}
