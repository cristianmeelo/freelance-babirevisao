export default function FeaturesBlocksV2() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-orange-500">Serviços Oferecidos</h2>
            <p className="text-xl text-white">Revisão ortográfica e gramatical, formatação de conteúdo e suporte na estruturação do seu tcc.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl text-roxo-500 font-bold leading-snug tracking-tight mb-1"> Revisão de Texto</h4>
              <p className="text-gray-600 text-center"> &rarr; Acentuação e Pontuação</p>
              <p className="text-gray-600 text-center"> &rarr; Colocação pronominal</p>
              <p className="text-gray-600 text-center"> &rarr; Novo acordo ortográfico</p>
              <p className="text-gray-600 text-center"> &rarr; Coesão, coerência e clareza</p>
              <p className="text-gray-600 text-center"> &rarr; Concordância e regência</p>
              <p className="text-gray-600 text-center"> &rarr; Erros de digitação</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.743 29.714l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl text-roxo-500 font-bold leading-snug tracking-tight mb-1">Formatação</h4>
              <p className="text-gray-600 text-center"> &rarr; Capa e contracapa</p>
              <p className="text-gray-600 text-center"> &rarr; Folha de aprovação</p>
              <p className="text-gray-600 text-center"> &rarr; Dedicatória, agradecimentos e epígrafe</p>
              <p className="text-gray-600 text-center"> &rarr; Resumo e abstract</p>
              <p className="text-gray-600 text-center"> &rarr; Lista de ilustrações, tabelas, abreviaturas e símbolos</p>
              <p className="text-gray-600 text-center"> &rarr; Sumário eletrônico</p>
              <p className="text-gray-600 text-center"> &rarr; Citação direta e indireta</p>
              <p className="text-gray-600 text-center"> &rarr; Títulos e subtítulos</p>
              <p className="text-gray-600 text-center"> &rarr; Nota de rodapé</p>
              <p className="text-gray-600 text-center"> &rarr; Referências bibliográficas</p>
              <p className="text-gray-600 text-center"> &rarr; Apêndice e anexo</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.743 29.714l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl text-roxo-500 font-bold leading-snug tracking-tight mb-1">Estruturação</h4>
              <p className="text-gray-600 text-center"> &rarr; Avaliação de temas conforme o curso</p>
              <p className="text-gray-600 text-center"> &rarr; Aconselhamento durante o percurso</p>
              <p className="text-gray-600 text-center"> &rarr; Elaboração, construção</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
