import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import Logo  from "../public/SF.png";
import { Cart } from './';
import Image from 'next/image';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
     
      <div className='logos'>
      <Image src={ Logo } width={110} height={100} alt="pic" />
      </div> 

<div className='links'>

  <Link href="/"><p>Home</p></Link>
  <Link href="/products"><p>Products</p></Link>
  <Link href="/aboutus"><p>AboutUs</p></Link>
  <Link href="/certifications"><p>Certification</p></Link>
  <Link href="/contactus"><p>ContactUs</p></Link>

</div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar