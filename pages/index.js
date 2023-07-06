import React from 'react';
import Link from 'next/link';
import { client } from '../lib/client';
import Image from 'next/image';
import { Product, FooterBanner, HeroBanner, Truck, Features } from '../components';
import { Certification } from '../components';
import { AboutUs } from '../components';
import { Membership } from '../components';
import { Production } from '../components';


const Home = ({ products, bannerData }) => (

  <div>
   
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <Features />

    <div style={{marginTop:"80px"}} className="productsheading">
      <h2>Our Recent Products</h2>
      <p>Here are some of our recent products</p>
    </div>

    <div className='product'>
  {products?.slice(0, 4).map((product) => (
    <Product key={product._id} product={product} />
  ))}
  
</div>
<div className='btn-container'>
<Link href={`/products`}>
              <button className='btn' type="button">Show More</button>
            </Link>
            </div>

    <div>
      <Membership />
    </div>

    <div>
      <AboutUs />
    </div>

    

    <div>
      {/* <div className='product'>
      {products?.map((product) => <Product key={product._id} product={product} />)}
      </div> */}
      <Certification />
      
    </div>
    
      
  
    <div>
      <Truck />
    </div>
    

    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
);

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
