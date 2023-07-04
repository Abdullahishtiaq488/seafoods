import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiCoupon3Line, RiExchangeDollarLine, RiSecurePaymentLine} from 'react-icons/ri';
import {PiPackage, VscPackage} from "react-icons/vsc";
import styles from '../components/OurStyles/Features.module.css';
import { FaMapMarker, FaMapMarkerAlt } from 'react-icons/fa';

const Features = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section className={styles.Features}>
        <div className={styles.Featurescontainer}>
            <div className={styles.containeritems}>
                <div data-aos="zoom-in-down" data-aos-duration="1500" className={styles.icons}>
                    <RiExchangeDollarLine style={{fontSize:"90px"}} />

                </div>
                <h4 data-aos="fade-in" data-aos-duration="1800" >7 Day Exchange <br /> Policy </h4>
            </div>

            <div className={styles.containeritems}>
            <div data-aos="zoom-in-down"  data-aos-duration="1500"className={styles.icons}>
            <RiCoupon3Line style={{fontSize:"90px"}}  />
            

</div>
                <h4  data-aos="fade-in" data-aos-duration="1800">Weekend Discount<br /> Coupon </h4>
            </div>

            <div className={styles.containeritems}>
            <div data-aos="zoom-in-down" data-aos-duration="1500" className={styles.icons}>
            
<RiSecurePaymentLine style={{fontSize:"90px"}}  />
</div>
                <h4  data-aos="fade-in" data-aos-duration="1800">Secure Payment<br /> methods </h4>
            </div>

            <div className={styles.containeritems}>
            <div data-aos="zoom-in-down" data-aos-duration="1500" className={styles.icons}>
            
<FaMapMarkerAlt style={{fontSize:"90px"}} />
</div>
                <h4 data-aos="fade-in" data-aos-duration="1800">Track Your<br /> Package </h4>
            </div>

        </div>

    </section>
  )
}

export default Features