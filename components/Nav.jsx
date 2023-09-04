import React from 'react';
import Link from 'next/link';
import styles from "../styles/products.module.css";

const Nav = () => {
  return (
    <div>
        
<div className={styles.navbarcontainer}>

<div className={styles.navbar}> 
<Link href="#rice">
    <p >Rice</p>
  </Link>
  <Link href="#juice">
    <p >Juice</p>
  </Link>
  <Link href="#pastes">
    <p >Pastes</p>
  </Link>
  <Link href="#salt">
    <p >Salt</p>
  </Link>
  <Link href="#spices">
    <p >Spices</p>
  </Link>  
</div>
</div>

    </div>
  )
}

export default Nav