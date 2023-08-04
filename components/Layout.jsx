import React from 'react';
import Head from 'next/head';
import TopBelt from './TopBelt';
import Navbar from './Navbar';
import Footer from './Footer';




const Layout = ({ children }) => {

  

  return (
    
    <div style={{
      backgroundImage:`url("/bgimages/white6.jpeg")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed',
    }}
    
    className="layout">
      <Head>
        <title>Super Foods Pvt Ltd.</title>
      </Head>
      <header>
      <TopBelt />
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout