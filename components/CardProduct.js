import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { substractFromBill } from '../slices/billSlice'
import useBill from "../store/store";

const CardProduct = ({product}) => {

  const addToBill = useBill((state) => state.addToBill);

  return (
    <div className="card w-96 bg-base-100 shadow-xl cursor-pointer m-auto" onClick={() => addToBill(product)}>
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