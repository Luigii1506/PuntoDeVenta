import React from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import {
  addToBill,
  substractFromBill,
  deleteProduct,
} from "../slices/billSlice";
import { RiDashboardFill } from "react-icons/ri";

const BillProduct = ({ id }) => {
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
          <div className="flex justify-between items-start py-4 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mr-5">
              {product.name}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white "
              onClick={() => dispatch(deleteProduct(id))}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

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

/*

<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>





<div className="w-full">
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="flex justify-between items-start py-4 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mr-5">
              {product.name}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white "
              onClick={() =>
                dispatch(
                  deleteProduct(id)
                )
              }
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

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

*/
