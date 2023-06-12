import React from 'react';
import styles from '../components/OurStyles/Certification.module.css';
import Image from 'next/image';
import  pic1  from '../public/certification1.jpg';
import pic2  from '../public/certification2.jpg';
import pic3 from '../public/certification3.jpg';
import pic4 from '../public/certification4.jpg';

const Certification = () => {
  return (

    <section className={styles.certification}>

<div className={styles.heading}>
        <h1>Our Membership</h1>
        <hr style={{ marginLeft: "30%", marginRight: "30%", marginTop: "15px" }} />
      </div>
      

    <div className={styles.flexContainer}>
      <div className={styles.images}>
        <Image src={ pic1} alt='pic' />
      </div>

      <div className={styles.images}>
        <Image src={ pic2} alt='pic' />
      </div>

      <div className={styles.images}>
        <Image src={ pic3} alt='pic' />
      </div>

      <div className={styles.images}>
        <Image src={ pic4} alt='pic' />
      </div>
     
    </div>
    </section>
  )
} 

export default Certification