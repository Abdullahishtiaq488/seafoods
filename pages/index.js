import React from 'react';
import Link from 'next/link';
import { client } from '../lib/client';
import Image from 'next/image';
import { Product, FooterBanner, HeroBanner, Truck, Features, Nav } from '../components';
import { Certification } from '../components';
import { AboutUs } from '../components';
import { Membership } from '../components';
import { Production } from '../components';
import Salt from "../public/SAL.png";
import Rice from "../public/RIC.png";
import Juices from "../public/JUI.png";
import Spices from "../public/SPI.png";
import Pastes from "../public/PAS.png";
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

<Nav />


<div className={styles.titles}>
<div id='rice'  className={styles.banner}>
<Image src={Rice} alt='Rice' />
</div>


  <div className='product'>
    {getCategoryProducts('rice').map((product) => (
      <Product key={product._id} product={product} />
    ))}
  </div>
  
  </div>

<div className={styles.titles}>

<div id='salt' className={styles.banner}>
<Image src={Salt} alt='Salt' />
</div>
  <div  className='product'>
    {getCategoryProducts('salt').map((product) => (
      <Product key={product._id} product={product} />
    ))}
  </div>
  </div>

  

  

  <div className={styles.titles}>
    <div id='juice' className={styles.banner}>
<Image src={Juices} alt='Juices' />
</div>

  <div  className='product'>
    {getCategoryProducts('juice').map((product) => (
      <Product key={product._id} product={product} />
    ))}
  </div>
  </div>

  <div className={styles.titles}>
  <div id='pastes' className={styles.banner}>
<Image src={Pastes} alt='Spices' />
</div>

  <div  className='product'>
    {getCategoryProducts('spice').map((product) => (
      <Product key={product._id} product={product} />
    ))}
  </div>
  </div>

  <div className={styles.titles}>
    <div id='spices' className={styles.banner}>
<Image src={Spices} alt='Juices' />
</div>

  <div  className='product'>
    {getCategoryProducts('spices').map((product) => (
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
