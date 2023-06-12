import React from 'react';
import styles from '../components/OurStyles/AboutUs.module.css';
import Image from 'next/image';
import tank from '../public/tank.png';
import { BsBullseye, BsClockFill, BsFillHandThumbsUpFill, BsHandThumbsUp, BsHandThumbsUpFill } from 'react-icons/bs';

const AboutUs = () => {
  return (
    <section >
      <div className={styles.aboutus}>
      <div className={styles.picContainer}>
        <Image src={tank} alt='tank' />
      </div>
      <div className={styles.toptext}>
        
      <h2>Why Chose us</h2>
<p>Super Foods Pvt. Ltd. has started in 1996.
   We have formulated our thoughts with the passage of time.
    Gain expertise in fulfillment of market demands, created huge man force to meet customers
     requirements and quality of our products</p>

<div className={styles.main}>

<div className={styles.boxes}> 
  <div className={styles.icons}><div className={styles.icondiv}><BsHandThumbsUpFill style={{color:"white",fontSize:"30px"}} /></div></div>


  <div className={styles.text}>
 <h2> SUPERIOR QUALITY</h2>
<p>With a positive mindset and huge manpower, we can maintain quality with efficiency & perfection.
  Our quality control department is well equipped with the latest technology to provide extra vigilant
   quality assurance services to our customers.</p></div>
   </div></div>

   <div className={styles.main}>
  
   <div className={styles.boxes}>
  <div className={styles.icons}><div className={styles.icondiv}><BsClockFill style={{color:"white",fontSize:"30px"}}  /></div></div>


  <div className={styles.text} >
 <h2> EFFICIENT ORDER PROCESSING </h2>
<p>The strength of our team is timely fulfillment. 
This key factor makes us prevailed over others.
 We have in house team to make sure all deliveries are made at right time to the right place.</p></div></div>
 </div>

 <div className={styles.main}>
 
 <div className={styles.boxes}>
  <div className={styles.icons}><div className={styles.icondiv}><BsBullseye style={{color:"white",fontSize:"30px"}}  /></div></div>


  <div className={styles.text}>

 <h2>MARKET COMPETITIVE PRICES</h2> 
<p>Super Food Pvt Ltd. is moreover focused on customer satisfaction. We are passionate to work for a
 long time with its loyal customers by providing efficient services and market competitive prices.</p></div></div>
 </div>
        
      </div>
      </div>
    </section>
  )
}

export default AboutUs