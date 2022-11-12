import create from "zustand";

import { persist } from "zustand/middleware";

const useBill = create(
  persist(
    (set, get) => ({
      products: [],
      table: 0,
      account_number: 0,
      subtotal: 0,
      total: 0,
      iva: 16,
      discount: 0,
      received: 0,
      addToBill: (product) => {
        const state = get();

        var flag = 1;
        state.products.forEach((prod) => {
          if (prod.id === product.id) {
            flag = 0;
          }
        });

        set((state) => ({
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
      reset: () => {
        set((state) => ({
          products: [],
          table: 0,
          account_number: 0,
          subtotal: 0,
          total: 0,
          iva: 16,
          discount: 0,
          received: 0,
        }));
      },
    }),
    { name: "bill" }
  )
);
export default useBill;
