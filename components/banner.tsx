"use client";

import { useState } from "react";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-orange-600 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            {/* <div className='text-slate-500 inline-flex'><a className="font-medium hover:underline text-slate-50" href="https://github.com/cruip/tailwind-landing-page-template" target="_blank" rel="noreferrer">Siga<span className="hidden sm:inline"> me no Instagram</span></a> <span className="italic px-1.5">ou</span> <a className="font-medium hover:underline text-emerald-400" href="https://cruip.com/simple/" target="_blank" rel="noreferrer">Pedir um orçamento</a></div> */}
            <div className="text-slate-500 inline-flex">
              {/* <a className="font-medium hover:underline text-slate-50" href="https://github.com/cruip/tailwind-landing-page-template" target="_blank" rel="noreferrer">Siga<span className="hidden sm:inline"> me no Instagram</span></a> 
              <span className="italic px-1.5">ou</span> */}
              <a
                className="font-medium hover:underline text-orange-600"
                href="https://wa.me//5551989520505?text=Ol%C3%A1,%20B%C3%A1rbara.%20Tenho%20interesse%20em%20fazer%20um%20or%C3%A7amento%20de%20consultoria%20em%20TCC.%20Pode%20me%20ajudar?"
                target="_blank"
                rel="noreferrer"
              >
                Pedir um orçamento
              </a>
            </div>
            {/* <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}
