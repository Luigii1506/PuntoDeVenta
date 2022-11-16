import React, { useEffect, useState } from "react";
import BillProduct from "./BillProduct";
import { RiDashboardFill } from "react-icons/ri";
import Modal from "./Modal";
import styles from "../styles/Bill.module.css";
import { BsCashCoin, BsCreditCard } from "react-icons/bs";

import useBill from "../store/store";

const BillPreview = () => {
  const [showModalSaveBill, setShowModalSaveBill] = useState(false);
  const [showModalPayBill, setShowModalPayBill] = useState(false);

  const [dropDownOpen, setDropDownOpen] = useState(false);

  const [total, setTotal] = useState(0);
  const total_state = useBill((state) => state.total);

  const [subtotal, setSubTotal] = useState(0);
  const subtotal_state = useBill((state) => state.subtotal);

  const [iva, setIva] = useState(0);
  const iva_state = useBill((state) => state.iva);

  const [discount, setDiscount] = useState(0);
  const discount_state = useBill((state) => state.discount);

  const [discount_rate, setDiscountRate] = useState(0);
  const discount_rate_state = useBill((state) => state.discount_rate);

  const [products, setProducts] = useState([]);
  const products_state = useBill((state) => state.products);

  const reset = useBill((state) => state.reset);
  const addDiscount = useBill((state) => state.addDiscount);

  useEffect(() => {
    //reset();
    setTotal(total_state);
    setSubTotal(subtotal_state);
    setIva(iva_state);
    setDiscount(discount_state);
    setProducts(products_state);
    setDiscountRate(discount_rate_state);
  }, [
    total_state,
    subtotal_state,
    iva_state,
    discount_state,
    products_state,
    discount_rate_state,
  ]);

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
            {products.map((product, index) => (
              <BillProduct key={index} product={product} />
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
                {discount_rate}%
              </label>
              <ul
                tabIndex={0}
                className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ${
                  dropDownOpen ? "" : "hidden"
                }`}
              >
                <li
                  className={`${discount_rate_state == 15 ? "hidden" : ""}`}
                  onClick={(event) => {
                    if (products.length > 0) {
                      setDiscountRate(15);
                      addDiscount(event.target.dataset.value);
                      setDropDownOpen(false);
                    }
                  }}
                >
                  <a data-value="15">15%</a>
                </li>
                <li
                  className={`${discount_rate == 10 ? "hidden" : ""}`}
                  onClick={(event) => {
                    if (products.length > 0) {
                      setDiscountRate(10);
                      addDiscount(event.target.dataset.value);
                      setDropDownOpen(false);
                    }
                  }}
                >
                  <a data-value="10">10%</a>
                </li>
                <li
                  className={`${discount_rate == 5 ? "hidden" : ""}`}
                  onClick={(event) => {
                    if (products.length > 0) {
                      setDiscountRate(5);
                      addDiscount(event.target.dataset.value);
                      setDropDownOpen(false);
                    }
                  }}
                >
                  <a data-value="5">5%</a>
                </li>
                <li
                  className={`${discount_rate == 0 ? "hidden" : ""}`}
                  onClick={(event) => {
                    if (products.length > 0) {
                      setDiscountRate(0);
                      addDiscount(event.target.dataset.value);
                      setDropDownOpen(false);
                    }
                  }}
                >
                  <a data-value="0">0%</a>
                </li>
              </ul>
            </div>
            <span className="text-2xl mr-2">${discount.toFixed(2)} MXN</span>
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
              <BsCreditCard className="text-4xl" />
              Pago con tarjeta
            </button>
            <button className="btn btn-primary leading-4 btn gap-2 flex-col w-36 h-36">
              <BsCashCoin className="text-4xl" />
              Pago en efectivo
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BillPreview;
