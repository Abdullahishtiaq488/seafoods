// pages/aboutus.js
import React from 'react';
import Image from 'next/image';
import styles from "../styles/aboutus.module.css";
import image1 from "../public/image-coming-soon.png";
import { BsQuote } from 'react-icons/bs';

const AboutUs = () => {
  return (
    <section className={styles.aboutus}>
      <div className={styles.heading}>
        <h1>Kow About of Team & Culture</h1>
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
          <p>Greetings to all of my Board of Directors and all of my hard-working staff. After spending many years of prosperity and establishing an excellent company, today I feel privileged to send you this message. We have been working as a team for many years. Our continuous progress is the result of our consistent hard work, and our faith on ALLAH. Our faith in honesty and hard work makes us reach this point.</p>

          <p>We have seen lots of changes in our company during the last few years.  These changes are positive in the sense that we achieved more and more success. We established our company as the best Basmati Rice, Himalayan Salt and Spices exporter in the World.  This is our aim from the very start to grow as a pioneer in the export. We wanted to make Super Foods Pvt Ltd the name of Quality Product.  Now, we want to set an example for our successors, that there is no short way to succeed except hard work and consistency.</p>

          <p>We faced many hard times in our business. But we came out of that time due to our efforts without compromising on our quality. We are providing best quality Product at affordable prices since 1996. We are now proudly introducing our company. We are in export business, with the help of rice importers, rice brokers and rice promotions institutions and hypermarkets.</p>

          <p>Things we didn’t change till now from the very first day are:</p>

          <p>Our commitment to provide best quality Products.</p>

          <p>Focus on client’s demands</p>

          <p>No compromise on quality</p>

          <p>Priority is transparency and honesty in dealing with client</p>

          <p>I am proud of all of my team and hopeful we will continue doing great work as a team.</p>
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

        <div className={styles.image}>
          <Image src={image1} alt='image' />
          <div style={{ paddingLeft: "10px" }}>
            <h2>Anonymous
            </h2>
            <p>Managing Director</p>
          </div>
        </div>

      </div>

      <div style={{marginTop:"60px"}} className={styles.heading}>
        <h1>Our Mission</h1>
        <p>Well understand the customer’s requirements and truly implement them</p>
        <hr style={{ marginLeft: "20%", marginRight: "20%", marginTop: "15px" }} />
      </div>


    </section>
  );
};

export default AboutUs;
