import React from 'react';
import BannerBg from 'public/banner-plant.png';

function Banner() {
  return (
    <div style={{ backgroundImage: `url(${BannerBg.src})` }} className="mb-12 py-36 px-10 bg-right-bottom bg-no-repeat rounded-4xl bg-banner">
      <h3 className="mb-2 text-gray-500">Welcome to Plants</h3>
      <h1 className="mb-2 text-6xl font-bold text-stone">
        LET&apos;S MAKE A
        <br />
        <span className="text-green">GREENER</span> WORLD
      </h1>
      <p className="text-sm text-stone mb-8">
        We are an online plants shop offering a wide range of cheap and trendy plants.
        <br />
        Use our plants to create an unique Urban Jungle. Order your favorite plants!
      </p>
      <button type="button" className="px-11 py-3 bg-green text-white rounded-md">
        SHOP NOW
      </button>
    </div>
  )  
}

export default Banner;