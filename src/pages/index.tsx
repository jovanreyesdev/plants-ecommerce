import Head from 'next/head';
import Image from 'next/image';
import NavigationBar from '@/components/NavigationBar.tsx';
import Banner from '@/components/Banner.tsx';
import FilterBox from '@/components/FilterBox';
import Products from '@/components/Products/index.tsx';
import Trends from '@/components/Trends';
import ProductBrands from '@/components/ProductBrands';
import CustomerReview from '@/components/CustomerReview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Plant Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main className="max-w-7xl mx-auto">
        <Banner />
        <div className="flex mb-24">
          <FilterBox />
          <Products />
        </div>
        <div className="mb-24">
          <Trends />
        </div>
        <div className="mb-12 opacity-50 w-full border-b border border-gray-400 border-solid" />
        <ProductBrands />
        <div className="mb-12 opacity-50 w-full border-b border border-gray-400 border-solid" />
        <div className="mb-12">
          <CustomerReview />          
        </div>
        <Footer />
      </main>
    </>
  )
}
