import React from 'react';
import Link from 'next/link';
import { client } from '../lib/client';
import Image from 'next/image';
import { Product, FooterBanner, HeroBanner, Truck, Features } from '../components';
import { Certification } from '../components';
import { AboutUs } from '../components';
import { Membership } from '../components';
import { Production } from '../components';
import styles from "../styles/products.module.css";




const Home = ({ products, bannerData }) => {
  const getCategoryProducts = (category) => {
    return products.filter(product => product.category === category);
  };

return (
  <div>
   
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    {/* <Features /> */}
    
    <section className={styles.products}>

<div id="products" className="products-heading">
  <h2>Best Seller Products</h2>
  <p>Here are some of our best products</p>
</div>
<div className={styles.navbarcontainer}>

  <div className={styles.navbar}> 
  <Link href="#rice">
      <p >Rice</p>
    </Link>
    <Link href="#juice">
      <p >Juice</p>
    </Link>
    <Link href="#spices">
      <p >Spices</p>
    </Link>
    <Link href="#salt">
      <p >Salt</p>
    </Link>  
  </div>
</div>

<div className={styles.titles}>
<h2>Rice</h2>


  <div id='rice' className='product'>
    {getCategoryProducts('rice').map((product) => (
      <Product key={product._id} product={product} />
    ))}
  </div>
  
  </div>

<div className={styles.titles}>
<h2>Salt</h2>

  <div id='salt' className='product'>
    {getCategoryProducts('salt').map((product) => (
      <Product key={product._id} product={product} />
    ))}
  </div>
  </div>
  

  <div className={styles.titles}>
<h2>Juice</h2>

  <div id='juice' className='product'>
    {getCategoryProducts('juice').map((product) => (
      <Product key={product._id} product={product} />
    ))}
  </div>
  </div>

  <div className={styles.titles}>
<h2>Spices</h2>

  <div id='spices' className='product'>
    {getCategoryProducts('spice').map((product) => (
      <Product key={product._id} product={product} />
    ))}
  </div>
  </div>
</section>

    {/* <div style={{marginTop:"80px"}} className="productsheading">
      <h2>Our Recent Products</h2>
      <p>Here are some of our recent products</p>
    </div> */}

    {/* <div className='product'>
  {products?.slice(0, 4).map((product) => (
    <Product key={product._id} product={product} />
  ))}
  
</div>
<div className='btn-container1'>
<Link href={`/products`}>
              <button className='btn1' type="button">Show More</button>
            </Link>
            </div> */}

    {/* <div>
      <Membership />
    </div>

    <div>
      <AboutUs />
    </div> */}

    

    <div>
      {/* <div className='product'>
      {products?.map((product) => <Product key={product._id} product={product} />)}
      </div> */}
      {/* <Certification /> */}
      
    </div>
    
      
  
    {/* <div>
      <Truck />
    </div> */}
    

    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
);
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
