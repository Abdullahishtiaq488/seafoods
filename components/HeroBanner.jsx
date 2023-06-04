import React from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bag1 from "../public/bag1.png";
import bag2 from "../public/bag2.png";
import bag3 from "../public/bag3.png";

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <Carousel showThumbs={false} showStatus={false} autoPlay={false} infiniteLoop={true}>
    <div className="hero-banner-container">
      <div className='texta'>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>

        <div className="hero-banner-image">
        <Image src={ bag1 }  layout="fill" objectFit="cover"  alt="headphones"  />
        </div>
        <div className="hero-banner-image2">
        <Image src={ bag2}  layout="fill" objectFit="cover"   alt="rice" />
        </div>
        <div className="hero-banner-image3">
        <Image src={ bag3}  layout="fill" objectFit="cover"     alt="rice" />
        </div>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          {/* <div className="desc">
            <h5 className='colors'>Description</h5>
            <p>{heroBanner.desc}</p>
          </div> */}
        </div>
      </div>
    </div>
    <div className='image2'>
    <div className='texta2'>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>

        <div className="hero-banner-image">
        <Image src={ bag1 }  layout="fill" objectFit="cover"  alt="headphones"  />
        </div>
        <div className="hero-banner-image2">
        <Image src={ bag2}  layout="fill" objectFit="cover"   alt="rice" />
        </div>
        <div className="hero-banner-image3">
        <Image src={ bag3}  layout="fill" objectFit="cover"     alt="rice" />
        </div>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5 className='colors'>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
      
      </div>

      <div className='image3'>
        
      <div className='texta3'>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>

        <div className="hero-banner-image">
        <Image src={ bag1 }  layout="fill" objectFit="cover"  alt="headphones"  />
        </div>
        <div className="hero-banner-image2">
        <Image src={ bag2}  layout="fill" objectFit="cover"   alt="rice" />
        </div>
        <div className="hero-banner-image3">
        <Image src={ bag3}  layout="fill" objectFit="cover"     alt="rice" />
        </div>

        <div>
      
            <button type="button">{heroBanner.buttonText}</button>
        
         
        </div>
      </div>
        
      </div>
    </Carousel>
  )
}

export default HeroBanner