import { createSlice } from '@reduxjs/toolkit'

export const billSlice = createSlice({
  name: 'bill',
  initialState: {
    table: 0,
    num_cuenta: 0,
    total: 0,
    products: []
  },
  reducers: {
    addToBill: (state, action) => {
      var flag = 1;
      state.total += action.payload.price;

      state.products.forEach((product) => {
        if(product.id === action.payload.product.id)
          flag = 0;
      });

      if(flag) {
        state.products = [...state.products, action.payload.product];
      } else {
        var productIndex = state.products.find((product) => {
          return product.id === action.payload.product.id;
        });
        const index = JSON.parse(JSON.stringify(state.products)).findIndex(object => {
          return object.id === action.payload.product.id;
        });
        state.products[index].quantity += 1;
      }
    },
    substractFromBill: (state, action) => {
        state.total -= action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToBill, substractFromBill } = billSlice.actions

export default billSlice.reducer;