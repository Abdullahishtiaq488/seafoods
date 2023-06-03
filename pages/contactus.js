// pages/aboutus.js
import React from 'react';
import Image from 'next/image';
import tasveer from "../public/tasveer.jpg";
import styles from "../styles/contactus.module.css";

const ContactUs = () => {
  return (
    <section className={styles.contactus}>
      <div className={styles.heading}>
        <h1>Kow About of Team & Culture</h1>
        <hr style={{marginLeft:"20%", marginRight:"20%", marginTop:"15px"}}/>
      </div>

      <div className={styles.section}>
        <div className={styles.image}>
          <Image src={ tasveer} alt="sections2" />
        </div>

        <div className={styles.form}>

          <form>
          <div className={styles.names}>
            <p className={styles.inputs}> Name:</p> <p className={styles.inputs}> Email:</p>
            </div>

            <div className={styles.names}>
            <input className={styles.inputs} type='text'></input> <input className={styles.inputs} type='text'></input> 
            </div>

            <div className={styles.names}>
            <p className={styles.inputs}>Subject:</p> <p className={styles.inputs}> Contact Details:</p>
            </div>

            <div className={styles.names}>
            <input className={styles.inputs} type='text'></input> <input className={styles.inputs} type='text'></input>
            </div>

            <p className={styles.inputl}>Company Name: </p>
            <input className={styles.inputl} type='text'></input>
            <p className={styles.inputl}>Message:</p> 
            <input className={styles.inputl} type='text'></input> 
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
