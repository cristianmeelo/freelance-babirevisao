import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import LogoImg from "../../public/images/logo.svg";
import LogoImgRoxo from "../../public/images/logo_roxo.svg";

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
    <Link href="/#0" className="block focus:outline-none focus:ring focus:ring-black" aria-label="Book">
      <Image src={top ? LogoImg : LogoImgRoxo} alt="Um livro aberto com uma vista plana na horizontal com sua folhas sendo folhadas e algumas borboletas saindo do livro, representa o logo do site." />
    </Link>
  );
}
