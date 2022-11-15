import create from "zustand";

import { persist } from "zustand/middleware";

const initialState = {
  products: [],
  table: 0,
  account_number: 0,
  subtotal: 0,
  total: 0,
  iva: 16,
  discount: 0,
  received: 0,
};

const useBill = create(
  persist(
    (set, get) => ({
      ...initialState,
      addToBill: (product) => {
        const state = get();

        var flag = 1;

        state.products.forEach((prod) => {
          if (prod.id === product.id) {
            flag = 0;
          }
        });

        set(() => ({
          subtotal: (state.subtotal += product.price),
          total: state.subtotal + (state.subtotal * state.iva) / 100,
          products: flag
            ? [...state.products, product]
            : state.products.map((obj) => {
                if (obj.id === product.id) {
                  return { ...obj, quantity: obj.quantity + 1 };
                }
                return obj;
              }),
        }));
      },
      substractFromBill: (product) => {
        const state = get();

        var price = 0;
        var flag = 0;

        const newProducts = state.products.map((obj) => {
          if (obj.quantity > 1) {
            flag = 1;
            if (obj.id === product.id) {
              price = product.price;
              return { ...obj, quantity: obj.quantity - 1 };
            }
          }
          return obj;
        });

        set(() => ({
          subtotal: flag ? (state.subtotal -= price) : state.subtotal,
          total: flag
            ? state.subtotal + (state.subtotal * state.iva) / 100
            : state.total,
          products: newProducts,
        }));
      },
      deleteProduct: (product) => {
        const state = get();

        set(() => ({
          subtotal: state.subtotal - product.quantity * product.price,
          total:
            state.subtotal -
            product.quantity * product.price +
            ((state.subtotal - product.quantity * product.price) * state.iva) /
              100,
          products: state.products.filter(function (item) {
            return item.id !== product.id;
          }),
        }));
      },
      addDiscount: (discount) => {

        const state = get();

        var total_discount;
        var total = state.total;     

        total += state.discount;    
        total_discount = discount > 0 ? ((total * discount) / 100) : 0;
        
        set(() => ({
          discount: total_discount,
          total: total - total_discount,
        }));
      },
      reset: () => {
        set(initialState);
      },
    }),
    { name: "bill" }
  )
);
export default useBill;

/*
  discount: state.discount > 0 ? (state.discount + (state.total * discount) / 100) : ((state.total * discount) / 100),
*/