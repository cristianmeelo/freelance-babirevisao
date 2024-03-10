"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import va from "@vercel/analytics";
import FeaturesBg from "@/public/images/profile.jpg";

export default function Features() {
  const [tab, setTab] = useState<number>(1);
  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 text-orange-500">Como contratar os serviços</h2>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 text-roxo-500">Sabemos que esse é um momento desafiador, este tipo de projeto acadêmico requer dedicação e esforço, então fique tranquilo e contate-nos para te auxiliarmos nessa etapa...</h3>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`focus:outline-none focus:ring focus:ring-black flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab === 1 ? "bg-white shadow-md border-gray-200 hover:shadow-lg" : "bg-gray-200 border-transparent"
                  }`}
                  href="https://wa.me//5551989520505?text=Ol%C3%A1,%20B%C3%A1rbara.%20Tenho%20interesse%20em%20fazer%20um%20or%C3%A7amento%20de%20consultoria%20em%20TCC.%20Pode%20me%20ajudar?"
                  target="_blank"
                >
                  <div>
                    <div className="font-bold text-emerald-800 leading-snug tracking-tight mb-9">Orçamento</div>
                    <div className="text-emerald-800" onClick={() => va.track("click-quote-wp-img")}>
                      Fale conosco pelo <span lang="">whatsapp</span> e orçaremos seu tipo de trabalho em até 2h.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg width="48" height="48" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.04 0C4.58005 0 0.130049 4.45 0.130049 9.91C0.130049 11.66 0.590049 13.36 1.45005 14.86L0.0500488 20L5.30005 18.62C6.75005 19.41 8.38005 19.83 10.04 19.83C15.5 19.83 19.9501 15.38 19.9501 9.92C19.9501 7.27 18.92 4.78 17.05 2.91C15.18 1.03 12.69 0 10.04 0ZM10.05 1.67C12.25 1.67 14.31 2.53 15.87 4.09C17.42 5.65 18.2801 7.72 18.2801 9.92C18.2801 14.46 14.58 18.15 10.04 18.15C8.56005 18.15 7.11005 17.76 5.85005 17L5.55005 16.83L2.43005 17.65L3.26005 14.61L3.06005 14.29C2.24005 13 1.80005 11.47 1.80005 9.91C1.81005 5.37 5.50005 1.67 10.05 1.67ZM6.53005 5.33C6.37005 5.33 6.10005 5.39 5.87005 5.64C5.65005 5.89 5.00005 6.5 5.00005 7.71C5.00005 8.93 5.89005 10.1 6.00005 10.27C6.14005 10.44 7.76005 12.94 10.25 14C10.84 14.27 11.3 14.42 11.66 14.53C12.25 14.72 12.79 14.69 13.22 14.63C13.7 14.56 14.68 14.03 14.89 13.45C15.1 12.87 15.1 12.38 15.04 12.27C14.97 12.17 14.81 12.11 14.56 12C14.31 11.86 13.09 11.26 12.87 11.18C12.64 11.1 12.5 11.06 12.31 11.3C12.15 11.55 11.67 12.11 11.53 12.27C11.38 12.44 11.24 12.46 11 12.34C10.74 12.21 9.94005 11.95 9.00005 11.11C8.26005 10.45 7.77005 9.64 7.62005 9.39C7.50005 9.15 7.61005 9 7.73005 8.89C7.84005 8.78 8.00005 8.6 8.10005 8.45C8.23005 8.31 8.27005 8.2 8.35005 8.04C8.43005 7.87 8.39005 7.73 8.33005 7.61C8.27005 7.5 7.77005 6.26 7.56005 5.77C7.36005 5.29 7.16005 5.35 7.00005 5.34C6.86005 5.34 6.70005 5.33 6.53005 5.33Z"
                        fill="#25D366"
                      />
                    </svg>
                  </div>
                </a>
                <div
                  tabIndex={0}
                  className={`focus:outline-none focus:ring focus:ring-black flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2 ? "bg-white shadow-md border-gray-200 hover:shadow-lg" : "bg-gray-200 border-transparent"
                  }`}
                >
                  <div>
                    <div className="font-bold text-roxo-500 leading-snug tracking-tight mb-1">Retorno</div>
                    <div className="text-gray-600">Retornamos em até 24h com os prazos de entrega e o preço do serviço, além de uma explicação sobre como será realizado o tipo de trabalho solicitado.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={FeaturesBg}
                        width={500}
                        height="362"
                        alt="Foto da Bárbara, uma moça jovem com cabelos castanhos, maquiada, vestida com toga da cor roxa com símbolo da PUCRS e umm canudo de formatura, ela está sorrindo em um cenário desfocado com árvores e gramados. "
                      />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  ></Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
