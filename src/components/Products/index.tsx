import React from 'react';
import axios from 'axios';
import { NextPageContext } from 'next';
import ProductBox from './ProductBox.tsx';
import Pagination from '@/components/Pagination.tsx';

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

interface Props extends NextPageContext {
  products: Product[];
}

function Products(props) {
  const products: Product[] = [
    {
      id: 1,
      name: 'Standard Gerberra, using Standard Gerberra',
      price: 95,
      discountedPrice: 75,
      image: 'plant_1.png',
      group: 'Tree Garden',
      isDiscounted: true,
      isSale: false,
    },
    {
      id: 2,
      name: 'Standard Gerberra, using Standard Gerberra',
      price: 95,
      discountedPrice: 75,
      image: 'plant_2.png',
      group: 'Tree Garden',
      isDiscounted: true,
      isSale: true,
    },
    {
      id: 3,
      name: 'Standard Gerberra, using Standard Gerberra',
      price: 95,
      discountedPrice: 75,
      image: 'plant_3.png',
      group: 'Tree Garden',
      isDiscounted: true,
      isSale: false,
    },
    {
      id: 4,
      name: 'Standard Gerberra, using Standard Gerberra',
      price: 95,
      discountedPrice: 75,
      image: 'plant_4.png',
      group: 'Tree Garden',
      isDiscounted: true,
      isSale: false,
    },
    {
      id: 5,
      name: 'Standard Gerberra, using Standard Gerberra',
      price: 95,
      discountedPrice: 75,
      image: 'plant_5.png',
      group: 'Tree Garden',
      isDiscounted: true,
      isSale: false,
    },
    {
      id: 6,
      name: 'Standard Gerberra, using Standard Gerberra',
      price: 95,
      discountedPrice: 75,
      image: 'plant_6.png',
      group: 'Tree Garden',
      isDiscounted: true,
      isSale: true,
    },
    {
      id: 7,
      name: 'Standard Gerberra, using Standard Gerberra',
      price: 95,
      discountedPrice: 75,
      image: 'plant_7.png',
      group: 'Tree Garden',
      isDiscounted: true,
      isSale: true,
    },
    {
      id: 8,
      name: 'Standard Gerberra, using Standard Gerberra',
      price: 95,
      discountedPrice: 75,
      image: 'plant_8.png',
      group: 'Tree Garden',
      isDiscounted: true,
      isSale: false,
    },
    {
      id: 9,
      name: 'Standard Gerberra, using Standard Gerberra',
      price: 95,
      discountedPrice: 75,
      image: 'plant_9.png',
      group: 'Tree Garden',
      isDiscounted: true,
      isSale: false,
    },
  ];

  return (
    <div className="ml-8 flex-1">
      <div className="">
        <div className="flex justify-between mb-10">
          <div>
            <span className="pb-2 font-medium mr-3">All Products</span>
            <span className="pb-2 font-medium mr-3">New Arrivals</span>
            <span className="pb-2 font-medium mr-3">Sale</span>
          </div>
          <div>Sort by</div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {
          products.map((item) => (
            <ProductBox key={item.id} {...item} />
          ))
        }
      </div>
      <Pagination />
    </div>
  )
}

export default Products;
