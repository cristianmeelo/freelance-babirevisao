"use client";

import Image from "next/image";
import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";

import FeaturesBg from "@/public/images/hero-image-2.jpg";

export default function Hero() {
  return (
    <section className="relative">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-orange-500" data-aos="zoom-y-out">
              {/* Formatação de TCC: Seu Trabalho Perfeito */}
              Seu TCC do início ao fim: consultoria especializada para um trabalho acadêmico nota 10!
              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400">TCC</span> */}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Nós fornecemos serviços de estruturação em TCCS, monografias e trabalhos acadêmicos no geral, para estudantes em todas as áreas de estudo. Deixe-nos tornar seu trabalho impecável!
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white text-xl bg-roxo-400 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 animate-bounce" href="#0">
                    Pedir um orçamento
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div style={{ height: 1080 }}></div> */}
          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}
        </div>
      </div>
    </section>
  );
}
