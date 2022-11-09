import { createSlice } from '@reduxjs/toolkit'

export const billSlice = createSlice({
  name: 'bill',
  initialState: {
    table: 0,
    account_number: 0,
    total: 0,
    iva: 16,
    products: []
  },
  reducers: {
    addToBill: (state, action) => {
      
      var flag = 1;
      const index = JSON.parse(JSON.stringify(state.products)).findIndex(object => {
        return object.id === action.payload.product.id;
      });

      state.total += action.payload.price;

      state.products.forEach((product) => {
        if(product.id === action.payload.product.id)
          flag = 0;
      });

      if(flag) {
        state.products = [...state.products, action.payload.product];
      } else {
        state.products[index].quantity += 1;
      }
    },
    substractFromBill: (state, action) => {

        const index = state.products.findIndex(object => {
          return object.id === action.payload.product.id;
        });

        if(state.products[index].quantity > 1) {
          state.total -= action.payload.price;
          state.products[index].quantity -= 1;
        }
    },
    deleteProduct: (state, action) => {

      const index = state.products.findIndex(object => {
        return object.id === action.payload;
      });

      state.total -= (state.products[index].quantity * state.products[index].price);
      state.products = state.products.slice(0, index).concat(state.products.slice(index + 1));
      //console.log('state antes',JSON.parse(JSON.stringify(state.products)));
    },
    addDescount: (state, action) => {

    },
    addTip: (state, action) => {
    
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToBill, substractFromBill, deleteProduct, addDescount, addTip } = billSlice.actions;

export default billSlice.reducer;