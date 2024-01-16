import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>EGIT Solutions!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png" 
            alt="EGIT Solutions Logo"
            style={{
              maxWidth: '50px', 
              height: 'auto', 
              marginRight: '10px', 
            }}
            onClick={() => window.open('https://egit.netlify.app', '_blank')}
          />
          <p style={{ fontSize: '20px' }}>
            <a href="https://egit.netlify.app" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              Visit EGIT Solutions
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
