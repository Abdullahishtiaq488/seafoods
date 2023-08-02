import React from 'react';
import { useStateContext } from '../context/StateContext';

const AddToCartButton = ({ product }) => {
  const { onAdd, qty } = useStateContext();

  return (
    <button
      type="button"
      className="add-to-cart"
      onClick={() => onAdd(product, qty)}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
