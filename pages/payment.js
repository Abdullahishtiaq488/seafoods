import React, { useState, useEffect , useRef} from 'react';
import { useStateContext } from '../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping, AiFillCreditCard } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { urlFor } from '../lib/client';
import emailjs from "@emailjs/browser";
import styles from "../styles/payment.module.css";

const Payment = () => {

  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  
  
  const [step, setStep] = useState(1);

  const shippingCharges = 100;
  const [total, setTotal] = useState(0);

  // Function to calculate total amount
  const calculateTotal = () => {
    const totalAmount = totalPrice + shippingCharges;
    setTotal(totalAmount);
  };

  // Call the calculateTotal function whenever there is a change in the order or relevant data
  useEffect(() => {
    calculateTotal();
  }, [totalPrice]);

  // State for Step 1
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [anothernumber, setAnothernumber] = useState('');
  

  // State for Step 2
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandmark] = useState('');
  const [postcode, setPostcode] = useState('');
  
  const [comment, setComment] = useState('');

 
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const [formSubmitionStatus, setFormSubmitionStatus] = useState("notSubmitted");

  useEffect(() => {
    if (formSubmitionStatus === "submitted") {
    }
  }, [formSubmitionStatus]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    let emailContent = "Order Details:\n\n";
  
    cartItems.forEach((item) => {
      emailContent += `Product: ${item.name}\n`;
      emailContent += `Price: $${item.price}\n`;
      emailContent += `Quantity: ${item.quantity}\n\n`;
    });
  
    emailContent += `Total Price: $${totalPrice}\n`;
  

    const templateParams = {
      fullname,
      email,
      mobilenumber,
      address,
      city,
      landmark,
      emailContent,
      comment,
    };
  
    emailjs
      .send(
        "service_jzfw6yo",
        "template_1j9rjvf",
        templateParams,
        "rPCAkT0spbuNCimo5"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setFormSubmitionStatus("submitted");
        },
        (error) => {
          console.log(error.text);
        }
      );
  
    form.current.reset();
    alert("info sent successfully");
  };
  

  return (
    <section>
      <div className='products-heading'>
<h2>COD</h2><p>Cash On Delivery</p>
      </div>
      
       
    <div className={styles.form}>
    <div className={styles.mycheckout}>
    <h3>Pay ${totalPrice} </h3>
    <div className={styles.cpricing}> 
    
              <hr />
              <div className={styles.pricings}>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div key={item._id}>
              <div className={styles.pricetag} >
              <h4>{item.name}</h4>
              <div >
                
                <div className={styles.box}>
                  <div className={styles.quantity}>
                    <p>Quantity:
                      <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span className="num" onClick="">{item.quantity}</span>
                      <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc')}><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <div  className={styles.itemprice}>
                  <h4 >${item.price} each</h4>
                </div>
                </div>
              </div>
          
              </div>
              
            </div>
          ))}
          </div>
          <div className={styles.pricings}>
        
            <div>
              <div className={styles.pricetag} >
              
              <div >
                
                <div className={styles.box}>
                  <div className={styles.quantity}>
                  <h4>Shipping Charges</h4>
                  </div>
                  <div  className={styles.itemprice}>
                  <h4 >100$</h4>
                </div>
                </div>
              </div>
          
              </div>
              
            </div>
    
          </div>

          <hr />
          
          </div>
          <div >
              <h3>Subtotal:</h3>
              <h3>${total}</h3>
            </div>
        </div>
      <div className={styles.formdata}>
      
      
      <form className={styles.form1} ref={form} onSubmit={sendEmail}>

        {step === 1 && (
          <section>
            <label>Full Name</label>
            <br />
            <input name='fullname' type="text" placeholder="Fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
            <br /><label>Mobile Number</label>
            <br />
            <input name='mobilenumber' type="number"  value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} required />
            <br /><label>Email</label>
            <br />
            <input name='email' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            
            {/* ... Other input fields for Step 1 */}
            <br /><br /><button className='btn2' type="button" onClick={nextStep}>Next</button>
          </section>
        )}

        {step === 2 && (
          <section>
            <label>Shipping Address</label>
            <br />
            <input name='address' type="text" placeholder="House no./ Street/ Area" value={address} required onChange={(e) => setAddress(e.target.value)} />
            <br /><label>LandMark (optional)</label>
            <br />
            <input name='landmark' type="text" placeholder="Eg. Beside Train Station" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
            <br /> <label>City</label>
            <br />
            <input name='city' type="text" placeholder="CityName" value={city} onChange={(e) => setCity(e.target.value)} />
           
            <br /><br /> {/* ... Other input fields for Step 2 */}
            <button className='btn2'  type="button" onClick={prevStep}>Previous</button>
            <button className='btn2'  type="button" onClick={nextStep}>Next</button>
          </section>
        )}

{step === 3 && (
          <section>
            <label>Additional Notes</label>
            <br />
            <textarea name='comment' type="text" placeholder="House no./ Street/ Area" value={comment} required onChange={(e) => setComment(e.target.value)} />
           
            <br /><br /> {/* ... Other input fields for Step 2 */}
            <button className='btn2' type="button" onClick={prevStep}>Previous</button>
            <button className='btn2' type="submit" onClick={sendEmail}>Submit</button>
          </section>
        )}

      </form>
      </div>
      </div>
      </section>
  );
};

export default Payment;
