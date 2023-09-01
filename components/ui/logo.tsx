import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../public/images/logo.svg";
import LogoImgRoxo from "../../public/images/logo_roxo.svg";
import { useState, useEffect } from "react";

export default function Logo() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <Link href="/#0" className="block" aria-label="Cruip">
      {/* <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> */}

      <Image className={`${top ? "fill-red-300 " : ""}`} src={top ? LogoImg : LogoImgRoxo} alt="Logo Site" />

      {/* <defs>
          <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
            <stop stopColor="#4FD1C5" offset="0%" />
            <stop stopColor="#81E6D9" offset="25.871%" />
            <stop stopColor="#338CF5" offset="100%" />
          </radialGradient>
        </defs>
        <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" /> */}
      {/* </svg> */}
    </Link>
  );
}
