import React from 'react';
import styles from '../components/OurStyles/Membership.module.css';
import img1 from '../public/membership1.png';
import img2 from '../public/membership2.png';
import img3 from '../public/membership3.png';
import img4 from '../public/membership4.png';
import Image from 'next/image';


const Membership = () => {
  return (
 <section className={styles.certificates}><div className={styles.heading}>
 <h1>Our Certifications</h1>
 <hr style={{ marginLeft: "30%", marginRight: "30%", marginTop: "15px" }} />
</div> 

    <div className={styles.flexContainer}>
      <div className={styles.images}>
        <Image src={ img1} alt='pic' />
      </div>

      <div className={styles.images}>
        <Image src={ img2} alt='pic' />
      </div>

      <div className={styles.images}>
        <Image src={ img3} alt='pic' />
      </div>

      <div className={styles.images}>
        <Image src={ img4} alt='pic' />
      </div>
     
    </div>
    </section>
  )
}

export default Membership