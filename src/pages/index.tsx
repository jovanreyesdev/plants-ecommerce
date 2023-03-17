import Head from 'next/head';
import Image from 'next/image';
import NavigationBar from '@/components/NavigationBar.tsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Plant Store</title>
        <meta name="description" content="Discover the Plant Store, your ultimate destination for purchasing high-quality plants. Browse our extensive selection and enjoy a secure checkout process. Contact us at jovan.reyes.dev@gmail.com for any questions or concerns." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
      </main>
    </>
  )
}
