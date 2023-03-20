import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NavigationBar() {
  return (
    <nav className="py-5 px-5 max-w-7xl mx-auto flex justify-between mb-8">
      <div className="flex align-center">
        <Image
          src="/Logo.svg"
          width={100}
          height={28}
          alt="Logo"
        />
        <div className="flex hidden md:block ml-14">
          <Link className="pb-2 mr-8" href="/">Home</Link>
          <Link className="pb-2 mr-8" href="/">Shop</Link>
          <Link className="pb-2 mr-8" href="/">Plant Care</Link>
          <Link className="pb-2 mr-8" href="/">Blogs</Link>
          <Link className="pb-2 mr-8" href="/">Faq</Link>
          <Link className="hidden lg:inline pb-2" href="/">Contact</Link>
        </div>
      </div>
      <div className="flex">
        <Image
          src="/magnify.svg"
          width={16}
          height={16}
          alt="Magnify"
          className="mr-8"
        />
        <Image
          src="/user.svg"
          width={16}
          height={16}
          alt="User"
          className="mr-8"
        />
        <Image
          src="/cart.svg"
          width={25}
          height={25}
          alt="Cart"
        />
      </div>
    </nav>
  )
}

export default NavigationBar;