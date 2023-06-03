// pages/aboutus.js
import React from 'react';
import Image from 'next/image';
import styles from "../styles/products.module.css";
import product1 from "../public/product1.jpg";
import product2 from "../public/product2.jpg";
import product3 from "../public/product3.jpg";

const Products = () => {
  return (
    < section className={styles.products}>

      <div className={styles.heading}>
        <h1>Here are some of our Products</h1>
        <hr style={{ marginLeft: "20%", marginRight: "20%", marginTop: "15px" }} />
      </div>

      <div className={styles.productlist}>
        <div className={styles.product}>
          <Image width={410} src={product1} alt='image' />
          <div className={styles.content}>
            <h1>Bakamal Basmati Rice</h1>
            <p>The perfect blend of beauty, taste and aroma of our basmati rice gives you all pleasures and worth buying of it.
              You won’t deny its passion because of its color and long grains.</p>

          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product2} alt='image' />
          <div className={styles.content}>
            <h1>Bakamal Basmati Rice</h1>
            <p>The perfect blend of beauty, taste and aroma of our basmati rice gives you all pleasures and worth buying of it.
              You won’t deny its passion because of its color and long grains.</p>

          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product3} alt='image' />

          <div className={styles.content}>
            <h1>Bakamal Basmati Rice</h1>
            <p>The perfect blend of beauty, taste and aroma of our basmati rice gives you all pleasures and worth buying of it.
              You won’t deny its passion because of its color and long grains.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product3} alt='image' />

          <div className={styles.content}>
            <h1>Bakamal Basmati Rice</h1>
            <p>The perfect blend of beauty, taste and aroma of our basmati rice gives you all pleasures and worth buying of it.
              You won’t deny its passion because of its color and long grains.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product3} alt='image' />

          <div className={styles.content}>
            <h1>Bakamal Basmati Rice</h1>
            <p>The perfect blend of beauty, taste and aroma of our basmati rice gives you all pleasures and worth buying of it.
              You won’t deny its passion because of its color and long grains.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product3} alt='image' />

          <div className={styles.content}>
            <h1>Bakamal Basmati Rice</h1>
            <p>The perfect blend of beauty, taste and aroma of our basmati rice gives you all pleasures and worth buying of it.
              You won’t deny its passion because of its color and long grains.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product3} alt='image' />

          <div className={styles.content}>
            <h1>Bakamal Basmati Rice</h1>
            <p>The perfect blend of beauty, taste and aroma of our basmati rice gives you all pleasures and worth buying of it.
              You won’t deny its passion because of its color and long grains.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product3} alt='image' />

          <div className={styles.content}>
            <h1>Bakamal Basmati Rice</h1>
            <p>The perfect blend of beauty, taste and aroma of our basmati rice gives you all pleasures and worth buying of it.
              You won’t deny its passion because of its color and long grains.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product3} alt='image' />

          <div className={styles.content}>
            <h1>Bakamal Basmati Rice</h1>
            <p>The perfect blend of beauty, taste and aroma of our basmati rice gives you all pleasures and worth buying of it.
              You won’t deny its passion because of its color and long grains.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Products;
