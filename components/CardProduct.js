import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToBill, substractFromBill } from '../slices/billSlice'

const CardProduct = ({ product }) => {

  const dispatch = useDispatch()

  return (
    <div className="card w-96 bg-base-100 shadow-xl cursor-pointer m-auto" onClick={() => dispatch(addToBill({price: product.price, product: product}))}>
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            $ {product.price.toFixed(2)} MXN
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;

/*
*/