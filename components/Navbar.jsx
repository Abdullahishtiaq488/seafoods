import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMenu  } from 'react-icons/ai';
import Logo  from "../public/SF.png";
import { Cart } from './';
import Image from 'next/image';
import { useStateContext} from '../context/StateContext';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="navbar-container" ref={navbarRef}>
      <div className='logos'>
        <Image src={Logo} width={110} height={100} alt="pic" />
      </div>

      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
      <Link href="/">
          <p className={router.pathname === '/' ? 'active' : ''}>Home</p>
        </Link>
        <Link href="/products">
          <p className={router.pathname === '/products' ? 'active' : ''}>ShopNow</p>
        </Link>
        <Link href="/aboutus">
          <p className={router.pathname === '/aboutus' ? 'active' : ''}>About Us</p>
        </Link>
        <Link href="/certifications">
          <p className={router.pathname === '/certifications' ? 'active' : ''}>Our Brands</p>
        </Link>
        <Link href="/contactus">
          <p className={router.pathname === '/contactus' ? 'active' : ''}>Contact Us</p>
        </Link>
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      
      <button type="button" className="menu-icon" onClick={toggleMenu}>
        <AiOutlineMenu />
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar;