import va from "@vercel/analytics";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://www.instagram.com/babirevisora/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                className="flex justify-center items-center text-gray-600 hover:text-roxo-500 bg-white hover:bg-white-100 focus:outline-none focus:ring focus:ring-black rounded-full shadow transition duration-150 ease-in-out"
                target="_blank"
                aria-label="Instagram"
                onClick={() => va.track("click-insta-footer")}
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8 6H20.2C23.4 6 26 8.6 26 11.8V20.2C26 21.7383 25.3889 23.2135 24.3012 24.3012C23.2135 25.3889 21.7383 26 20.2 26H11.8C8.6 26 6 23.4 6 20.2V11.8C6 10.2617 6.61107 8.78649 7.69878 7.69878C8.78649 6.61107 10.2617 6 11.8 6ZM11.6 8C10.6452 8 9.72955 8.37928 9.05442 9.05442C8.37928 9.72955 8 10.6452 8 11.6V20.4C8 22.39 9.61 24 11.6 24H20.4C21.3548 24 22.2705 23.6207 22.9456 22.9456C23.6207 22.2705 24 21.3548 24 20.4V11.6C24 9.61 22.39 8 20.4 8H11.6ZM21.25 9.5C21.5815 9.5 21.8995 9.6317 22.1339 9.86612C22.3683 10.1005 22.5 10.4185 22.5 10.75C22.5 11.0815 22.3683 11.3995 22.1339 11.6339C21.8995 11.8683 21.5815 12 21.25 12C20.9185 12 20.6005 11.8683 20.3661 11.6339C20.1317 11.3995 20 11.0815 20 10.75C20 10.4185 20.1317 10.1005 20.3661 9.86612C20.6005 9.6317 20.9185 9.5 21.25 9.5ZM16 11C17.3261 11 18.5979 11.5268 19.5355 12.4645C20.4732 13.4021 21 14.6739 21 16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21C14.6739 21 13.4021 20.4732 12.4645 19.5355C11.5268 18.5979 11 17.3261 11 16C11 14.6739 11.5268 13.4021 12.4645 12.4645C13.4021 11.5268 14.6739 11 16 11ZM16 13C15.2044 13 14.4413 13.3161 13.8787 13.8787C13.3161 14.4413 13 15.2044 13 16C13 16.7956 13.3161 17.5587 13.8787 18.1213C14.4413 18.6839 15.2044 19 16 19C16.7956 19 17.5587 18.6839 18.1213 18.1213C18.6839 17.5587 19 16.7956 19 16C19 15.2044 18.6839 14.4413 18.1213 13.8787C17.5587 13.3161 16.7956 13 16 13Z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://wa.me//5551989520505?text=Ol%C3%A1,%20B%C3%A1rbara.%20Tenho%20interesse%20em%20fazer%20um%20or%C3%A7amento%20de%20consultoria%20em%20TCC.%20Pode%20me%20ajudar?"
                className="flex justify-center items-center text-gray-600 hover:text-roxo-500 bg-white hover:bg-white-100 focus:outline-none focus:ring focus:ring-black rounded-full shadow transition duration-150 ease-in-out"
                target="_blank"
                aria-label="WhatsApp"
                onClick={() => va.track("click-quote-footer")}
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.99 6C10.53 6 6.08 10.45 6.08 15.91C6.08 17.66 6.54 19.36 7.4 20.86L6 26L11.25 24.62C12.7 25.41 14.33 25.83 15.99 25.83C21.45 25.83 25.9 21.38 25.9 15.92C25.9 13.27 24.87 10.78 23 8.91C21.13 7.03 18.64 6 15.99 6ZM16 7.67C18.2 7.67 20.26 8.53 21.82 10.09C23.37 11.65 24.23 13.72 24.23 15.92C24.23 20.46 20.53 24.15 15.99 24.15C14.51 24.15 13.06 23.76 11.8 23L11.5 22.83L8.38 23.65L9.21 20.61L9.01 20.29C8.19 19 7.75 17.47 7.75 15.91C7.76 11.37 11.45 7.67 16 7.67ZM12.48 11.33C12.32 11.33 12.05 11.39 11.82 11.64C11.6 11.89 10.95 12.5 10.95 13.71C10.95 14.93 11.84 16.1 11.95 16.27C12.09 16.44 13.71 18.94 16.2 20C16.79 20.27 17.25 20.42 17.61 20.53C18.2 20.72 18.74 20.69 19.17 20.63C19.65 20.56 20.63 20.03 20.84 19.45C21.05 18.87 21.05 18.38 20.99 18.27C20.92 18.17 20.76 18.11 20.51 18C20.26 17.86 19.04 17.26 18.82 17.18C18.59 17.1 18.45 17.06 18.26 17.3C18.1 17.55 17.62 18.11 17.48 18.27C17.33 18.44 17.19 18.46 16.95 18.34C16.69 18.21 15.89 17.95 14.95 17.11C14.21 16.45 13.72 15.64 13.57 15.39C13.45 15.15 13.56 15 13.68 14.89C13.79 14.78 13.95 14.6 14.05 14.45C14.18 14.31 14.22 14.2 14.3 14.04C14.38 13.87 14.34 13.73 14.28 13.61C14.22 13.5 13.72 12.26 13.51 11.77C13.31 11.29 13.11 11.35 12.95 11.34C12.81 11.34 12.65 11.33 12.48 11.33Z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.google.com/search?q=Babi+Consultoria+de+TCC&stick=H4sIAAAAAAAA_-NgU1IxqLA0NbQ0N7dMTjIwMLM0TDG3MqhINTIHci1TUpPMDJKNDRexijslJmUqOOfnFZfmlOQXZSYqpKQqhDg7AwAvKVMPQgAAAA&hl=pt-BR&mat=CWtn9Xi5LRLnElcBl7_Ll8jIrAuHY8DTvwVS-RKKFpUVHDNSSw5LdcrrBqh6jfQsDFOhquIEq7HsQ6WRJ_7xuS7LmR7IQgT8pE2FEcPcAhEoH-KjdNF94XakJw39Gb0EWKY&authuser=0"
                className="flex justify-center items-center text-gray-600 hover:text-roxo-500 bg-white hover:bg-white-100 focus:outline-none focus:ring focus:ring-black rounded-full shadow transition duration-150 ease-in-out"
                target="_blank"
                aria-label="Google Enterprise"
                onClick={() => va.track("click-enterprise-footer")}
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 12.5C26 13.87 24.88 15 23.5 15C22.12 15 21 13.87 21 12.5C21 13.87 19.88 15 18.5 15C17.12 15 16 13.87 16 12.5C16 13.87 14.88 15 13.5 15C12.12 15 11 13.87 11 12.5C11 13.87 9.88 15 8.5 15C7.12 15 6 13.87 6 12.5L7.39 7.08C7.39 7.08 7.68 6 8.7 6H23.3C24.32 6 24.61 7.08 24.61 7.08L26 12.5ZM25 16.2V24C25 25.1 24.1 26 23 26H9C7.9 26 7 25.1 7 24V16.2C7.46 16.39 7.97 16.5 8.5 16.5C9.45 16.5 10.32 16.17 11 15.62C11.69 16.17 12.56 16.5 13.5 16.5C14.45 16.5 15.32 16.17 16 15.62C16.69 16.17 17.56 16.5 18.5 16.5C19.45 16.5 20.32 16.17 21 15.62C21.68 16.17 22.56 16.5 23.5 16.5C24.03 16.5 24.54 16.39 25 16.2ZM23 21.33C23 21.13 23 20.92 22.95 20.7L22.92 20.54H19.95V21.71H21.76C21.7 21.93 21.62 22.15 21.45 22.33C21.12 22.66 20.67 22.84 20.19 22.84C19.69 22.84 19.2 22.63 18.84 22.28C18.15 21.57 18.15 20.42 18.86 19.7C19.55 19 20.69 19 21.41 19.67L21.55 19.8L22.39 18.95L22.23 18.81C21.67 18.29 20.93 18 20.15 18H20.14C19.33 18 18.57 18.31 18 18.87C17.41 19.45 17.08 20.21 17.08 21C17.08 21.8 17.39 22.54 17.96 23.09C18.54 23.66 19.35 24 20.18 24H20.2C21 24 21.71 23.71 22.23 23.2C22.7 22.72 23 22 23 21.33Z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="flex flex-col text-sm text-roxo-400 mr-4 focus:outline-none focus:ring focus:ring-black" tabIndex={0}>
            &copy; babirevisão.com Todos os direitos reservados.
          <a className="text-sm text-roxo-400 mr-4 hover:underline focus:outline-none focus:ring focus:ring-black"
           tabIndex={0}
           href="mailto:barbara.babiconsultoria@gmail.com.br?subject=Orçamento Consultoria de TCC&cc=suporte@babirevisao.com.br&body=Olá Babi Consultoria, gostaria de saber mais informações sobre a consultoria! Aguardo seu retorno.">
            babirevisao@gmail.com
          </a>
          </div>
        </div>
      </div>
      {/* <a href="https://www.facebook.com/sharer.php?u=https://babirevisao.vercel.app/" target="_blank" rel="noopener noreferrer">
        Compartilhar no Facebook
      </a> */}
    </footer>
  );
}
