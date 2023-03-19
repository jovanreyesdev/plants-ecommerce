import React from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  group: string;
  discountedPrice: number;
  isDiscounted: boolean;
  isSale: boolean;
}

function ProductBox({
  id,
  name,
  price,
  image,
  group,
  discountedPrice,
  isDiscounted,
  isSale
}: Product) {
  return (
    <div className="w-productBox m-7 relative bg-banner">
      <div className="absolute flex">
        <div className="inset-x-0 top-0">
          {
            isSale ? (
              <div className="bg-red-600 text-white text-sm rounded-br p-1">
                20% off
              </div>
            ) : null
          }
        </div>
      </div>
      <div>
        <Image
          src={`/plants/${image}`}
          height={160}
          width={266}
          alt="Plant"
        />
      </div>
      <div className="px-3">
        <div className="text-sm my-2 text-gray-400">{group}</div>
        <div>{name}</div>
      </div>
      <div className="flex justify-between py-4 px-3">
        <div>
          <span className="text-lg">
            <small className="line-through mr-1">${price}</small>
            <span className="font-bold">${discountedPrice}</span>
          </span>
        </div>
        <button type="button" className="bg-green text-white px-4 py-3">Add to cart</button>
      </div>
    </div>
  )
}

export default ProductBox;