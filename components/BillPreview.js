import React from "react";
import BillProduct from "./BillProduct";
import { RiDashboardFill } from "react-icons/ri";
import { useSelector } from 'react-redux'

const BillPreview = () => {
  const total = useSelector((state) => state.bill.total)
  const cuenta = useSelector((state) => state.bill.products)

  return (
    <div className="h-screen p-5">
      <div className="flex pb-10">
        <div className="w-1/2">
          <p className="text-white text-3xl">Mesa 1</p>
        </div>
        <div className="w-1/2">
          <RiDashboardFill className="float-right text-white text-3xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        {cuenta.map((product, index) => (
          <BillProduct key={index} id={product.id} />
        ))}
      </div>
      <div className="mt-10">
        <p className="text-white text-3xl">Total: ${total.toFixed(2)} MXN</p>
      </div>
    </div>
  );
};

export default BillPreview;
