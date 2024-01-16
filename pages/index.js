import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <p className="description">
         <a href="https://egit.netlify.app" target="_blank">Visit EGIT Solutions</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
