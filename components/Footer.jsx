import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import Logo  from "../public/SF.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="column">
          <h4>About Us</h4>
          <hr />
          <div className='log'>
      <Image src={ Logo } width={110} height={100} alt="pic" />
      </div> 
          <p>Super Foods Pvt. Ltd. entered the business in 1996 under the name 
          of Super Rice Mills Pvt. Ltd. which is now well known as Super Foods.</p>
        </div>
        <div className="column">
          <h4>Quick Links</h4>
          <hr />

        <p>Home</p>
        <p>Bakamal Rice</p>
        <p>Bakamal Spices</p>
        <p>Himalayan Salt</p>
        <p>Who we are?</p>
        <p>Contact us</p>
      
        </div>
        <div className="column">
          <h4>Facebook</h4>
          <hr />
          <p>Connect with us on Facebook</p>
        </div>
        <div className="column">
          <h4>Contact Us</h4>
          <hr />
          <p><b>Contact us or WhatsApp:</b><br />
          (+92) 3224440319 | 3004003858</p>

 <p><b>Monday-Saturday</b>: 9am to 5pm
 <b>Sunday</b>: Closed</p>

<p><b>Address</b>: 4-km, Main G.T Road Muridke. (39000), Punjab, Pakistan.</p>
<p>
<b>UK Address </b>: Salt land LTD
84 Katherine road London E6 1EN United Kingdom</p>
        </div>
      </div>

       {/* Strip */}

      <div className="strip">
        <p>All Rights Reserved © Copyright 2021 - Super Foods
          <div className='jack' > <AiFillInstagram style={{float:"right", marginLeft:"10px"}} />
          <AiOutlineTwitter style={{float:"right", marginLeft:"10px" }}/>
           <AiFillFacebook style={{float:"right", marginLeft:"10px" }}/> 
           <AiFillYoutube style={{float:"right", marginLeft:"10px" }} />
            <AiFillLinkedin style={{float:"right", marginLeft:"10px" }}/></div>  </p>
        
          
        
      </div>
    </>
  );
}

export default Footer;
