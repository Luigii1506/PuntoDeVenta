import React from "react";
import { useState, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { addToBill, substractFromBill } from "../slices/billSlice";

const BillProduct = ({ id }) => {
  const todos = useSelector((state) => state.bill.products);

  const product = useSelector(
    (state) =>
      state.bill.products.find((prod) => {
        return prod.id == id;
      }),
    shallowEqual
  );

  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ${product.price.toFixed(2)} MX
          </p>
          <div>
            <button
              className="rounded-full bg-white text-lg w-7 h-7"
              onClick={() =>
                dispatch(
                  substractFromBill({ price: product.price, product: product })
                )
              }
            >
              -
            </button>
            <span className="text-white mx-6 text-xl">{product.quantity}</span>
            <button
              className="rounded-full bg-white text-lg w-7 h-7"
              onClick={() =>
                dispatch(addToBill({ price: product.price, product: product }))
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillProduct;
