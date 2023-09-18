export default function FeaturesBlocksV2() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-orange-500">Serviços oferecidos</h2>
            <p className="text-xl text-white">
              Assessoria acadêmica em trabalhos de conclusão de curso, monografia, e trabalho acadêmico em geral, fornecendo revisão ortográfica e gramatical, formatação de conteúdo e suporte na estruturação do seu projeto.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M38.62 21.5C38.11 21.5 37.6 21.69 37.21 22.09L30.75 28.55L34.95 32.74L41.41 26.29C42.2 25.5 42.2 24.24 41.41 23.46L40.04 22.09C39.65 21.69 39.14 21.5 38.62 21.5ZM29.8 29.5L23.23 36.07L23.93 36.77C23.4 37.24 22.89 37.78 22.38 38.29C21.6 39.08 21.6 40.34 22.38 41.12C23.16 41.9 24.42 41.9 25.21 41.12C25.72 40.63 26.25 40.08 26.73 39.58L27.43 40.27L34 33.7"
                      fill="white"
                    />
                  </svg>
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
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31 33H41V31H31M31 29H41V27H31M23 23V25H41V23M31 37H41V35H31M23 28V36L27 32M23 41H41V39H23V41Z" fill="white" />
                  </svg>
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
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 36H32V41H23V36ZM22 30H28V35H22V30ZM29 30H35V35H29V30ZM36 30H42V35H36V30ZM33 36H41V41H33V36ZM23 24H31V29H23V24ZM32 24H41V29H32V24Z" fill="white" />
                  </svg>
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
