import React, { Fragment, useState } from "react";
import BillProduct from "./BillProduct";
import { RiDashboardFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import Modal from "./Modal";

const BillPreview = () => {
  const total = useSelector((state) => state.bill.total);
  const cuenta = useSelector((state) => state.bill.products);
  const iva = useSelector((state) => state.bill.iva);
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="h-full p-5">
        <div className="flex pb-10">
          <div className="w-1/2">
            <p className="text-3xl">Mesa 1</p>
          </div>
          <div className="w-1/2">
            <RiDashboardFill className="float-right text-3xl" />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          {cuenta.map((product, index) => (
            <BillProduct key={index} id={product.id} />
          ))}
        </div>
        <div className="mt-10">
          <p className="text-2xl">IVA: {iva}%</p>
          <p className="text-3xl">Total: ${total.toFixed(2)} MXN</p>
          <p className="text-gray text-xl">IVA: ${(total.toFixed(2) * iva) / 100} MXN</p>
          <p className="text-3xl">Total: ${((total.toFixed(2) * iva) / 100) + total} MXN</p>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Green
          </button>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <div>
              {total}
            </div>
      </Modal>
    </Fragment>
  );
};

export default BillPreview;
