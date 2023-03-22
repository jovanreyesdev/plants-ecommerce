import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Discover the Plant Store, your ultimate destination for purchasing high-quality plants. Browse our extensive selection and enjoy a secure checkout process. Contact us at jovan.reyes.dev@gmail.com for any questions or concerns." />

        <meta itemProp="name" content="Plant Store" />
        <meta itemProp="description" content="Discover the Plant Store, your ultimate destination for purchasing high-quality plants. Browse our extensive selection and enjoy a secure checkout process. Contact us at jovan.reyes.dev@gmail.com for any questions or concerns." />
        <meta itemProp="image" content="/thumbnail.jpg" />

        <meta property="og:url" content="https://jovanreyesdev.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Plant Store" />
        <meta property="og:description" content="Discover the Plant Store, your ultimate destination for purchasing high-quality plants. Browse our extensive selection and enjoy a secure checkout process. Contact us at jovan.reyes.dev@gmail.com for any questions or concerns." />
        <meta property="og:image" content="/thumbnail.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plant Store" />
        <meta name="twitter:description" content="Discover the Plant Store, your ultimate destination for purchasing high-quality plants. Browse our extensive selection and enjoy a secure checkout process. Contact us at jovan.reyes.dev@gmail.com for any questions or concerns." />
        <meta name="twitter:image" content="/thumbnail.jpg" />
      </Head>
      <body className="font-sans bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
