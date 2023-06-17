import React from 'react';
import Image from 'next/image';
import styles from "../styles/certifications.module.css";
import certificate1 from "../public/certificate1.jpg";
import certificate2 from "../public/certificate2.jpg";
import certificate3 from "../public/certificate3.jpg";
import certificate4 from "../public/certificate4.jpg";
import certificate5 from "../public/certificate5.jpg";
import certificate6 from "../public/certificate6.jpg";
import certificate7 from "../public/certificate7.jpg";
import certificate8 from "../public/certificate8.jpg";

const Certifications = () => {
    return (
        <section className={styles.certifications}>
            
    <div className="products-heading">
      <h2>Our Brands</h2>
      <p>Our best performing Brands</p>
      <hr style={{ marginLeft: "30%", marginRight: "30%", marginTop: "15px" }} />
       
    </div>
           
            <div className={styles.certificates}>
                <div className={styles.flexContainer}>

                    <div className={styles.images}>
                    <Image src={certificate1}  alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate2}  alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate3} alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate4} alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate5} alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate6} alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate7} alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate8} alt="pic" />
                    </div>

                </div>
            </div>
            </section>
    );
};

export default Certifications;
