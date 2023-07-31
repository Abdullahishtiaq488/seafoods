import React, { useState } from 'react';
import { useStateContext } from '../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping, AiFillCreditCard } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { urlFor } from '../lib/client';
import styles from "../styles/payment.module.css";

const Payment = () => {

  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  const [step, setStep] = useState(1);

  // State for Step 1
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [insuranceNumber, setInsuranceNumber] = useState('');
  const [familyStatus, setFamilyStatus] = useState('');

  // State for Step 2
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('');

  // State for Step 3
  const [emailAddress, setEmailAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');

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
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div key={item._id}>
              <h3>Pay ${totalPrice} </h3>
              <hr />
              <h5>{item.name}</h5>
              <div >
                
                <div className={styles.box}>
                  <div className={styles.quantity}>
                    <p><b>Quantity:</b> 
                      <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span className="num" onClick="">{item.quantity}</span>
                      <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc')}><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <div>
                  <h4>${item.price} each</h4>
                </div>
                </div>
              </div>
              <hr />
              <div >
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            </div>
          ))}
        </div>
      <div className={styles.formdata}>
      
      
      <form onSubmit={handleSubmit}>

        {step === 1 && (
          <section>
            <p>Personal information</p>
            <input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
            {/* ... Other input fields for Step 1 */}
            <br /><br /><button type="button" onClick={nextStep}>Next</button>
          </section>
        )}

        {step === 2 && (
          <section>
            <p>Address</p>
            <input type="text" placeholder="Street, nbr" value={street} onChange={(e) => setStreet(e.target.value)} />
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            <br /><br /> {/* ... Other input fields for Step 2 */}
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={nextStep}>Next</button>
          </section>
        )}

        {step === 3 && (
          <section>
            <p>Contact information</p>
            <input type="text" placeholder="Email address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <br /><br /> {/* ... Other input fields for Step 3 */}
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="submit">Submit</button>
          </section>
        )}
      </form>
      </div>
      </div>
      </section>
  );
};

export default Payment;
