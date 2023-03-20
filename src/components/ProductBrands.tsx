import React from 'react';
import Image from 'next/image';

function ProductBrands() {
  return (
    <div className="pb-10 lg:pb-14">
      <div className="text-3xl font-bold text-stone text-center mb-14 text-fade">Product Brands</div>
      <div className="lg:flex align-center justify-between">
        <Image
          className="self-baseline mx-auto mb-10 lg:mb-0"
          src="/brands/amazon.png"
          width={110}
          height={40}
          alt="Amazon"
        />
        <Image
          className="self-baseline mx-auto mb-10 lg:mb-0"
          src="/brands/daraz.png"
          width={110}
          height={40}
          alt="Daraz"
        />
        <Image
          className="self-baseline mx-auto mb-10 lg:mb-0"
          src="/brands/bestbuy.png"
          width={110}
          height={40}
          alt="Best Buy"
        />
        <Image
          className="self-baseline mx-auto mb-10 lg:mb-0"
          src="/brands/alibaba.png"
          width={110}
          height={40}
          alt="Alibaba"
        />
        <Image
          className="self-baseline mx-auto mb-10 lg:mb-0"
          src="/brands/evaly.png"
          width={110}
          height={40}
          alt="Evaly"
        />
      </div>
    </div>
  )
}

export default ProductBrands;
