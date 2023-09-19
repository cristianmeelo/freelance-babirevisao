"use client";

import { useState, useEffect } from "react";
import va from "@vercel/analytics";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
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
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? "bg-white backdrop-blur-sm shadow-lg" : ""}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          {!top && (
            <nav className="hidden md:flex md:grow">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <a
                    className="btn text-roxo-400 text-xl bg-roxo-500 hover:bg-purple-700 hover:text-white w-full mb-4 sm:w-auto sm:mb-0 "
                    href="https://wa.me//5551989140442?text=Ol%C3%A1,%20B%C3%A1rbara.%20Tenho%20interesse%20em%20fazer%20um%20or%C3%A7amento%20de%20consultoria%20em%20TCC.%20Pode%20me%20ajudar?"
                    target="_blank"
                    onClick={() => va.track("click-quote-header")}
                  >
                    Pedir um orçamento
                  </a>
                </li>
              </ul>
            </nav>
          )}

          {/* Mobile navigation */}
          <MobileMenu top={top} />
        </div>
      </div>
    </header>
  );
}
