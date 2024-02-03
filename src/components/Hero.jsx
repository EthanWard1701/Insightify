import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://youtu.be/dQw4w9WgXcQ?si=jT3h5CS-CWTZat5N", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>Insightifys Industry Leading AI</span>
      </h1>
      <h2 className='desc'>
      Summarize your articles with Insightifys industry leading AI technology. Transform unclear and lenghty articles into a clear and concise summaries!
      </h2>
    </header>
  );
};

export default Hero;
