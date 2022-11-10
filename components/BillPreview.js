import React, { Fragment, useState } from "react";
import BillProduct from "./BillProduct";
import { RiDashboardFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import styles from "../styles/Bill.module.css";
import { addDescount } from "../slices/billSlice";
import { BsCashCoin, BsCreditCard } from "react-icons/bs";

const BillPreview = () => {
  const total = useSelector((state) => state.bill.total);
  const subtotal = useSelector((state) => state.bill.subtotal);
  const cuenta = useSelector((state) => state.bill.products);
  const descuento = useSelector((state) => state.bill.descuento);
  const iva = useSelector((state) => state.bill.iva);
  const [showModalSaveBill, setShowModalSaveBill] = useState(false);
  const [showModalDiscount, setShowModalDiscount] = useState(false);
  const [showModalPayBill, setShowModalPayBill] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="h-full p-5">
      <div className="flex mb-5">
        <div className="w-1/2">
          <p className="text-3xl">Mesa 1</p>
        </div>
        <div className="w-1/2">
          <RiDashboardFill className="float-right text-3xl" />
        </div>
      </div>
      <div className={`${styles.bill_height}`}>
        <div className="max-h-fit">
          <div className="flex flex-col gap-y-4">
            {cuenta.map((product, index) => (
              <BillProduct key={index} id={product.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between mb-2">
          <p className="text-2xl">Subtotal</p>
          <p className="text-2xl">${subtotal.toFixed(2)} MXN</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-2xl">IVA</p>
          <p className="text-2xl">${(subtotal.toFixed(2) * iva) / 100} MXN</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-2xl">Descuento</p>
          <div>
            <div className="dropdown dropdown-top dropdown-end ">
              <label
                tabIndex={0}
                className="btn m-1 bg-primary"
                onClick={() => setDropDownOpen(true)}
              >
                {discountPercentage}%
              </label>
              <ul
                tabIndex={0}
                className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ${
                  dropDownOpen ? "" : "hidden"
                }`}
              >
                <li
                  className={`${discountPercentage === 15 ? "hidden" : ""}`}
                  onClick={(event) => {
                    if (cuenta.length > 0) {
                      setDiscountPercentage(15);
                      dispatch(addDescount(event.target.dataset.value));
                      setDropDownOpen(false);
                    }
                  }}
                >
                  <a data-value="15">15%</a>
                </li>
                <li
                  className={`${discountPercentage === 10 ? "hidden" : ""}`}
                  onClick={(event) => {
                    if (cuenta.length > 0) {
                      setDiscountPercentage(10);
                      dispatch(addDescount(event.target.dataset.value));
                      setDropDownOpen(false);
                    }
                  }}
                >
                  <a data-value="10">10%</a>
                </li>
                <li
                  className={`${discountPercentage === 5 ? "hidden" : ""}`}
                  onClick={(event) => {
                    if (cuenta.length > 0) {
                      setDiscountPercentage(5);
                      dispatch(addDescount(event.target.dataset.value));
                      setDropDownOpen(false);
                      console.log("5", dropDownOpen);
                    }
                  }}
                >
                  <a data-value="5">5%</a>
                </li>
                <li
                  className={`${discountPercentage === 0 ? "hidden" : ""}`}
                  onClick={(event) => {
                    if (cuenta.length > 0) {
                      setDiscountPercentage(0);
                      dispatch(addDescount(event.target.dataset.value));
                      setDropDownOpen(false);
                      console.log("0", dropDownOpen);
                    }
                  }}
                >
                  <a data-value="0">0%</a>
                </li>
              </ul>
            </div>
            <span className="text-2xl mr-2">${descuento.toFixed(2)} MXN</span>
          </div>
        </div>
        <div className="flex justify-between mb-5">
          <p className="text-4xl">TOTAL</p>
          <p className="text-4xl">${total.toFixed(2)} MXN</p>
        </div>
        <div className="flex justify-evenly">
          <button
            type="button"
            onClick={() => setShowModalSaveBill(true)}
            className="btn btn-active btn-ghost w-5/12"
          >
            Guardar pedido
          </button>
          <button
            type="button"
            onClick={() => setShowModalPayBill(true)}
            className="btn btn-primary w-5/12"
          >
            Realizar pedido
          </button>
        </div>
      </div>

      <Modal
        isVisible={showModalSaveBill}
        onClose={() => setShowModalSaveBill(false)}
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">
            Modal Title
          </h3>
        </div>
      </Modal>

      <Modal
        isVisible={showModalDiscount}
        onClose={() => setShowModalDiscount(false)}
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">
            Descuento
          </h3>
          <hr className="border-1"></hr>
          <div className="mt-6">
            <form className="space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Descuento
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="16%"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="************"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-700 hover:undereline">
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </Modal>

      <Modal
        isVisible={showModalPayBill}
        onClose={() => setShowModalPayBill(false)}
      >
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid h-60 card bg-base-300 rounded-box place-items-center">
            <div className="text-center">
              <p className="text-xl">Total</p>
              <p className="text-6xl table">
                <span className="text-xl align-middle table-cell">$</span>
                {total.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="h-40 rounded-box flex justify-evenly">
            <button className="btn btn-primary leading-4 btn gap-2 flex-col w-36 h-36">
              <BsCreditCard className="text-4xl"/>
              Pago con tarjeta
            </button>
            <button className="btn btn-primary leading-4 btn gap-2 flex-col w-36 h-36">
              <BsCashCoin className="text-4xl"/>
              Pago en efectivo
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BillPreview;
