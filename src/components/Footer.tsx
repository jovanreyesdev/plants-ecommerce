import React from 'react';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';

function Footer() {
  return (
    <footer>
      <div className="py-24 px-36">
        <div className="flex justify-between">
          <div className="mr-28">
            <Image src="/Logo2.svg" width={100} height={28} alt="Logo" className="mb-7" />
            <div className="font-bold text-md mb-2">Connect with us</div>
            <div className="flex justify-between">
              <ReactSVG src="/social/Facebook.svg" width={22} height={18} alt="Facebook" />
              <ReactSVG src="/social/Twitter.svg" width={22} height={18} alt="Twitter" />
              <ReactSVG src="/social/pinterest.svg" width={22} height={18} alt="Pinterest" />
              <ReactSVG src="/social/instagram.svg" width={22} height={18} alt="Instagram" />
            </div>
          </div>
          <div className="flex" style={{ maxWidth: 700 }}>
            <div className="mr-24" style={{ minWidth: 145 }}>
              <div className="font-bold text-md mb-5 w-full">My Account</div>
              <div className="text-fade font-sm mb-2">My orders</div>
              <div className="text-fade font-sm mb-2">Account settings</div>
              <div className="text-fade font-sm mb-2">Email preferences</div>
            </div>
            <div className="mr-24" style={{ minWidth: 145 }}>
              <div className="font-bold text-md mb-5 w-full">My Account</div>
              <div className="text-fade font-sm mb-2">Our story</div>
              <div className="text-fade font-sm mb-2">Story finder</div>
              <div className="text-fade font-sm mb-2">Careers</div>
            </div>
            <div className="mr-24" style={{ minWidth: 145 }}>
              <div className="font-bold text-md mb-5 w-full">Customer service</div>
              <div className="text-fade font-sm mb-2">Help centre</div>
              <div className="text-fade font-sm mb-2">Delivery</div>
              <div className="text-fade font-sm mb-2">Returns & Refunds</div>
              <div className="text-fade font-sm mb-2">Contact us</div>
            </div>
            <div className="mr-24" style={{ minWidth: 145 }}>
              <div className="font-bold text-md mb-5 w-full">Newsletter</div>
              <div className="text-fade font-sm mb-2">Subscribe now!</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <span className="font-xs text-fade">Plants | 2023 All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer;