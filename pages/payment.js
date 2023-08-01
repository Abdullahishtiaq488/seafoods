import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping, AiFillCreditCard } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { urlFor } from '../lib/client';
import styles from "../styles/payment.module.css";

const Payment = () => {

  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  const [total, setTotal] = useState(0);
  const shippingCharges = 100;
  const [step, setStep] = useState(1);

  const calculateTotal = () => {
    // Your logic to calculate the order total goes here
    // For example, if you have a list of items with prices, you can sum them up like this:
    const totalAmount = totalPrice + shippingCharges;
    setTotal(totalAmount);
  };

  // Call the calculateTotal function whenever there is a change in the order or relevant data
  useEffect(() => {
    calculateTotal();
  }, []); //

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    console.log('Form submitted!');
  };

  return (
    <section>
      <div className='products-heading'>
<h2>COD</h2><p>Cash On Delivery</p>
      </div>
      
       
    <div className={styles.form}>
    <div className={styles.mycheckout}>
    <h3>Pay ${total} </h3>
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
      
      
      <form className={styles.form1} onSubmit={handleSubmit}>

        {step === 1 && (
          <section>
            <label>Full Name</label>
            <br />
            <input type="text" placeholder="Fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
            <br /><label>Mobile Number</label>
            <br />
            <input type="number"  value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} required />
            <br /><label>Email</label>
            <br />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            
            {/* ... Other input fields for Step 1 */}
            <br /><br /><button className='btn2' type="button" onClick={nextStep}>Next</button>
          </section>
        )}

        {step === 2 && (
          <section>
            <label>Shipping Address</label>
            <br />
            <input type="text" placeholder="House no./ Street/ Area" value={address} required onChange={(e) => setAddress(e.target.value)} />
            <br /><label>LandMark (optional)</label>
            <br />
            <input type="text" placeholder="Eg. Beside Train Station" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
            <br /> <label>City</label>
            <br />
            <input type="text" placeholder="CityName" value={city} onChange={(e) => setCity(e.target.value)} />
           
            <br /><br /> {/* ... Other input fields for Step 2 */}
            <button className='btn2'  type="button" onClick={prevStep}>Previous</button>
            <button className='btn2'  type="button" onClick={nextStep}>Next</button>
          </section>
        )}

{step === 3 && (
          <section>
            <label>Additional Notes</label>
            <br />
            <textarea type="text" placeholder="House no./ Street/ Area" value={comment} required onChange={(e) => setComment(e.target.value)} />
           
            <br /><br /> {/* ... Other input fields for Step 2 */}
            <button className='btn2' type="button" onClick={prevStep}>Previous</button>
            <button className='btn2' type="button" onClick={nextStep}>Submit</button>
          </section>
        )}

      </form>
      </div>
      </div>
      </section>
  );
};

export default Payment;
