import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToBill, substractFromBill } from '../slices/billSlice'

const CardProduct = ({ product }) => {

  const dispatch = useDispatch()

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center m-auto cursor-pointer" onClick={() => dispatch(addToBill({price: product.price, product: product}))}>
      <img
        className="rounded-t-lg"
        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          $ {product.price.toFixed(2)} MXN
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
