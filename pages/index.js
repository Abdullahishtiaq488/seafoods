import React from 'react';

import { client } from '../lib/client';
import Image from 'next/image';
import { Product, FooterBanner, HeroBanner } from '../components';
import { Certification } from '../components';
import { AboutUs } from '../components';
import { Membership } from '../components';
import { Production } from '../components';



const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

    {/* <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>Here are some of our best products</p>
    </div> */}

   

    <div>
      <Membership />
    </div>

    <div>
      <AboutUs />
    </div>

    

    <div>
      {/* {products?.map((product) => <Product key={product._id} product={product} />)} */}
      <Certification />
    </div>

    <div>
      <Production />
    </div>
    

    <div>

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
