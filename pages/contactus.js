// pages/aboutus.js
import React from 'react';
import Image from 'next/image';
import tasveer from "../public/tasveer.jpg";
import styles from "../styles/contactus.module.css";

const ContactUs = () => {
  return (
    <section className={styles.contactus}>

      <div className={styles.heading}>
        <h1>Send us an Email, Now!</h1>
        <hr style={{ marginLeft: "20%", marginRight: "20%", marginTop: "15px" }} />
      </div>

      <div className={styles.section}>
        
          <Image src={ tasveer} alt="sections2" />
        

        <div className={styles.form}>

          <form>

          <div style={{marginBottom:"10px"}} className={styles.names}>
            <p className={styles.ps}> Name:</p> <p className={styles.ps}> Email:</p>
            </div>

            <div style={{marginBottom:"10px"}} className={styles.names}>
            <input className={styles.inputs} type='text'></input> <input className={styles.inputs} type='text'></input> 
            </div>

            <div style={{marginBottom:"10px"}} className={styles.names}>
            <p className={styles.ps}>Subject:</p> <p className={styles.ps}> Contact Details:</p>
            </div>

            <div style={{marginBottom:"10px"}} className={styles.names}>
            <input className={styles.inputs} type='text'></input> <input className={styles.inputs} type='text'></input>
            </div>

            <p className={styles.pl}>Company Name: </p>
            <input style={{marginBottom:"10px"}} className={styles.inputl} type='text'></input>
            <p className={styles.pl}>Message:</p>

            <textarea style={{width:"100%",marginTop:"10px"}} id="message" name="message" rows="7" ></textarea>

            </form>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
