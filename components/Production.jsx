import React from 'react';
import styles from '../components/OurStyles/Production.module.css';

const Production = () => {
  return (

    <section className="production">
      <div className={styles.production}>
      <div className={styles.toptext}>
        <h2>Super Foods Pvt. Ltd. entered in business in 1996 </h2><br/>
        <p>
          With quality and efficiency, we have achieved a huge clientele all over the globe. Super Food’s network has expanded to almost 100+ cities officially. Whereas we are still exploring and willing to expand more.
        </p>
      </div>
      <div className={styles.circleContainer}>
        <div className={styles.circle}>
          <div className={styles.progress}>
            <div className={`${styles.progressFluid} ${styles.progress80}`}></div>
            <div className={styles.progressOverlay}></div>
            <span className={styles.progressText}>500M Ton</span>
          </div>
          <h3 className={styles.circleTitle}>Production Capacity</h3>
        </div>
        <div className={styles.circle}>
          <div className={styles.progress}>
            <div className={`${styles.progressFluid} ${styles.progress80}`}></div>
            <div className={styles.progressOverlay}></div>
            <span className={styles.progressText}>100+</span>
          </div>
          <h3 className={styles.circleTitle}>Exporting Countries</h3>
        </div>
        <div className={styles.circle}>
          <div className={styles.progress}>
            <div className={`${styles.progressFluid} ${styles.progress80}`}></div>
            <div className={styles.progressOverlay}></div>
            <span className={styles.progressText}>375</span>
          </div>
          <h3 className={styles.circleTitle}>Existing Clientele</h3>
        </div>
        <div className={styles.circle}>
          <div className={styles.progress}>
            <div className={`${styles.progressFluid} ${styles.progress80}`}></div>
            <div className={styles.progressOverlay}></div>
            <span className={styles.progressText}>500 People</span>
          </div>
          <h3 className={styles.circleTitle}>Work Force</h3>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Production;