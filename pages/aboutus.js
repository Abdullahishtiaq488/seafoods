// pages/aboutus.js
import React from 'react';
import Image from 'next/image';
import styles from "../styles/aboutus.module.css";
import image1 from "../public/image-coming-soon.png";
import { BsQuote } from 'react-icons/bs';
import Certifications from './certifications';

const AboutUs = () => {
  return (
    <section className={styles.aboutus}>
      <div className={styles.heading}>
        <h1>Know About of Team & Culture</h1>
        <hr style={{ marginLeft: "20%", marginRight: "20%", marginTop: "15px" }} />
      </div>

      <div className={styles.section}>
        <div className={styles.image}>
          <Image src={image1} alt='image' />
          <div style={{ paddingLeft: "10px" }}>
            <h2>Waqas</h2>
            <p>CEO</p>
          </div>
        </div>

        <div className={styles.texts}>
          <BsQuote style={{ color: "gray", fontSize: "40px" }} />
          <p>Pakistan has long been known for its rich agricultural heritage, and our aim is to showcase the exceptional quality and taste of Pakistani rice to the world. We firmly believe that our country's rice holds immense potential and deserves recognition on a global scale.
To achieve this vision, we are investing in creating state-of-the-art rice fields that embody excellence in every aspect. Our dedicated team of farmers, supported by cutting-edge agricultural technologies, is working diligently to cultivate rice crops that are unmatched in quality, flavor, and nutritional value.
We are proud to be a part of Pakistan's agricultural legacy, and we are committed to upholding sustainable farming practices that respect our environment and ensure the longevity of our rice fields. By promoting responsible water management, soil conservation, and biodiversity preservation, we are playing our part in building a sustainable future for the generations to come.
But our ambitions extend beyond our borders. We aspire to make Pakistani rice a symbol of culinary delight worldwide. 
</p><p>Through strategic partnerships, meticulous quality control, and a focus on customer satisfaction, we are dedicated to bringing the finest Pakistani rice to every corner of the globe
</p>
        </div>

      </div>

  
      <div className={styles.address}>
        <div className={styles.first}>
        <p>Address: 4-km, Main G.T Road Muridke. (39000), Punjab, Pakistan.</p>
        <p>(+92) 3224440319 | 3004003858</p>
        </div>
        <div className={styles.buttons}>
          <button>Get a Quote</button>
        </div>
        </div>


      <div className={styles.section}>

        <div className={styles.texts}>
          <BsQuote style={{ color: "gray", fontSize: "40px" }} />

          <p> We are passionate to make Super Foods a big name in the world of rice exporter from the very first day of its foundation. We worked as one team and tried hard to achieve our goal. Today, we are at the peak of success. For us “every client and staff member are like our family” Every member of our extended family has his functions. Fortunately, every member of our company played a role in their best way. Today if we are successful, it’s our combined achievement. We urge to continue playing your role honestly. Being our Business partners and stake holders, we request you to continue encouraging us after sales promotional team to keep doing our promotions through seminars. This way will increase our sales as well as keep our good reputation.</p>

          <p>Secondly, our company always welcome new technologies in every field from farming to automated packaging machines. We are always working hard to keep our product best as our Super Foods is amongst the best exporters of the country. We acquire new technologies to keep our pace with modern worlds’ demands. Today our firm has ultra-modern, fully automatic, computerized plants to provide our customers with the best quality of rice.</p>

          <p>Flexibility is the key to rise and succeed. We always remained flexible to understand the demands of our clients, as Exporter.   Our company’s name is among the most renowned Traders in the country. We served our people and country by managing our qualities and standards. Our prices are affordable without compromising on our quality.</p>

          <p>We are supplying our best products to many countries in the world. We will continue serving our country with best. I welcome you to browse through our website to get a first-hand impression of our capabilities.</p>

        </div>

        <div   style={{ paddingLeft: "20px" }} className={styles.image}>
          <Image src={image1} alt='image' />
          <div style={{ paddingLeft: "10px" }}>
            <h2>Anonymous
            </h2>
            <p>Managing Director</p>
          </div>
        </div>

      </div>
      <div className={styles.section}>

      <div style={{marginTop:"60px"}} className={styles.heading}>
        <h1 style={{color:"black"}}>Our Mission</h1>
        <hr style={{ marginLeft: "30%", marginRight: "30%", marginTop: "15px" }} />
        <div className={styles.textsA}>
        <BsQuote style={{ color: "gray", fontSize: "40px" }} />
        <p>As one of the best Pakistani Leading Basmati companies providing the best quality 
          products and creating joyful moments. Being the best partner through innovations and unprecedented
           business growth. Providing better returns by executing excellence and best-in-class corporate governance</p>
           </div>
      </div>
      </div>

<div className={styles.section}>
      <div style={{marginTop:"60px"}} className={styles.heading}>
        <h1 style={{color:"black"}}>Our Vision</h1>
        <hr style={{ marginLeft: "30%", marginRight: "30%", marginTop: "15px" }} />
        <div className={styles.textsA}>
        <BsQuote style={{ color: "gray", fontSize: "40px" }} />
        <p>To preserve and enrich the legacy of Basmati in Pakistan by ensuring the genetic integrity of the seed.
           We encourage farmers to adopt scientific agricultural practices and world-class rice processing technologies
            to emerge as the industry 
          benchmark for product quality and customer service ensuring our presence in every Pakistan Household</p>
          </div>
      </div>
      </div>

      <div className={styles.section}>
      <div style={{marginTop:"60px"}} className={styles.heading}>
        <h1 style={{color:"black"}} >Our Value</h1>
        <hr style={{ marginLeft: "30%", marginRight: "30%", marginTop: "15px" }} />
        <div className={styles.textsA}>
        <BsQuote style={{ color: "gray", fontSize: "40px" }} />
        <p>We value quality – which satisfies food lovers all across Pakistan. Our endeavor is to maintain
           the such quality that is evident in the aroma and taste of every rice grain that we offer. We value Innovation
            – to satisfy the needs of consumers with pioneering ideas in taste and variety.
           We value our consumer’s CHOICE – by delivering what the consumer wants and expect from us.</p>
          </div>
      </div>
      </div>
      <div className={styles.section}>
      <div style={{marginTop:"60px"}} className={styles.heading}>
        <h1 style={{color:"black"}} >Our Certificates</h1>
        <hr style={{ marginLeft: "30%", marginRight: "30%", marginTop: "15px" }} />
        <div>
          <Certifications />
     
          </div>
      </div>
      </div>


    </section>
  );
};

export default AboutUs;
