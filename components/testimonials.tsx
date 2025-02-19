import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.png";

export default function Testimonials() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl text-orange-500 mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Mais de 1000 trabalhos revisados e formatados</h2>
            {/* <p className="text-xl text-roxo-200" data-aos="zoom-y-out">
              Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis.
            </p> */}
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="focus:outline-none focus:ring focus:ring-black relative flex items-start border-2 border-gray-200 rounded bg-white" tabIndex={0}>
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <Image
                    className="relative rounded-full"
                    src={TestimonialImage}
                    width={96}
                    height={96}
                    alt="Foto da Bárbara, uma moça jovem com cabelos castanhos, maquiada e uma blusa de lã roxa, com um olhar por cima dos ombros que transmite convicção "
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4 text-purple-900">
                  “Como graduada em Letras, encontrar prazer em revisar tcc e todo o tipo de trabalho acadêmico é natural. Aprofundar-me na temática, aprimorar a linguagem com clareza e coesão, e ajudar estudantes a brilharem em seus trabalhos
                  acadêmicos é minha paixão. Cada novo projeto se apresenta como uma oportunidade ímpar para contribuir significativamente com o sucesso daqueles que buscam minha assistência.“
                </blockquote>
                <cite className="block font-bold text-black text-lg not-italic mb-1">Bárbara Stegues Vieira</cite>
                <div className="text-gray-600">
                  <span>Fundadora do</span>
                  <a className="text-blue-600 hover:underline focus:outline-none focus:ring focus:ring-black" href="https://www.instagram.com/babirevisoes" target="_blank">
                    @babirevisoes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
