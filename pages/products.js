// pages/aboutus.js
import React from 'react';
import Image from 'next/image';
import styles from "../styles/products.module.css";
import product1 from "../public/product1.jpg";
import product2 from "../public/product2.jpg";
import product3 from "../public/product3.jpg";
import product4 from "../public/product4.jpg";
import product5 from "../public/product5.jpg";
import product6 from "../public/product6.jpg";
import product7 from "../public/product7.jpg";
import product8 from "../public/product8.jpg";
import product9 from "../public/product9.jpg";
import product10 from "../public/product10.jpg";


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
            <h1>Bakamal None Basmati Rice</h1>
            <p>Non-basmati rice of our farms are not ordinary as you think. They are worthwhile and aortic
               as there having beautiful shape and large size. Checkout more of our categories through link.</p>

          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product3} alt='image' />

          <div className={styles.content}>
            <h1>Bakamal Spices</h1>
            <p>Pakistan is among the best spice producers in the world. Superfood is contributing its share in spice
               export all over the world. For high-quality spices visit to explore more from this button.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product4} alt='image' />

          <div className={styles.content}>
            <h1>Pink Himalayan Edible Fine salt</h1>
            <p>Pink Himalayan Edible Fine salt is the finest of its form. It is exempted from harmful chemicals and beneficial for health.
               The Himalayan fine Salt also stores vibration energy. Click below to find out more.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product5} alt='image' />

          <div className={styles.content}>
            <h1>Pink Himalayan Granulate Salt</h1>
            <p>Pink Himalayan granulate salt is extracted from the pure Himalayan range. We at Super Foods PVT LTD. offering the finest quality salt for your everyday usage.
Click below to find out more.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product6} alt='image' />

          <div className={styles.content}>
            <h1>White Himalayan Edible Fine salt</h1>
            <p>White salt is also commonly used as table salt and its other uses are also the same as that of pink salt. However,
               there is a slight difference in the level of purity between the two with the former being the purest.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product7} alt='image' />

          <div className={styles.content}>
            <h1>White Himalayan Edible Granulate salt</h1>
            <p>Himalayan Crystal/white Salt is the purest form of salt crystals in the world. We know 
              this because Himalayan salt has been on the earth for over 250 million years. It’s truly toxin-free.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product8} alt='image' />

          <div className={styles.content}>
            <h1>Salt Lamps</h1>
            <p>We also produce Salt Crafts which brings the world’s best real Himalayan Crystal Rock salt lamps. Cooking slabs, soaps,
               inhalers, etc. We supplying all over the world on a timely basis according to customer’s requirements.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product9} alt='image' />
          <div className={styles.content}>
            <h1>Supure Ginger & Garlic Paste</h1>
            <p>Now we have also introduced supure ginger and garlic paste which is totally hygienic with no added color. A Perfect Blend for your Dish.
Click to Read More.</p>
          </div>
        </div>

        <div className={styles.product}>
          <Image width={410} src={product10} alt='image' />
          <div className={styles.content}>
            <h1>Lick Salt</h1>
            <p>Himalayan Salt licks are the perfect salt nutrition and mineral
               supplement for cattle, horses, and other livestock. With all the essential nutrients
                needed by the animal at all life stages, they are an essential part of daily feed. 
                Salt licks are especially important in harsh weather and environments with poor availability
                 of the much needed nutrients, as well as elements such as phosphorus, sodium,
               calcium, iron, zinc and other trace elements required for bone, muscle and other formation in animals.</p>
          </div>
        </div>


      </div>

      

    </section>
  );
};

export default Products;
