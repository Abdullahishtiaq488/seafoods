import React from 'react';
import { useStateContext } from '../context/StateContext';
import { FaShoppingCart } from 'react-icons/fa';

const AddToCartButton = ({ product }) => {
  const { onAdd, qty } = useStateContext();

  return (
    <div className='carto-container'>
    <button
      type="button"
      className="add-to-cart"
      onClick={() => onAdd(product, qty)}
    >
      Add to Cart <FaShoppingCart />
    </button></div>
  );
};

export default AddToCartButton;
