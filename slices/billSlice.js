import { createSlice } from '@reduxjs/toolkit'

export const billSlice = createSlice({
  name: 'bill',
  initialState: {
    table: 0,
    account_number: 0,
    subtotal: 0,
    total: 0,
    iva: 16,
    descuento: 0,
    received: 0,
    products: []
  },
  reducers: {
    addToBill: (state, action) => {
      
      var flag = 1;
      const index = JSON.parse(JSON.stringify(state.products)).findIndex(object => {
        return object.id === action.payload.product.id;
      });

      state.subtotal += action.payload.price;
      state.total = state.subtotal + ((state.subtotal * state.iva) / 100);
      
      state.products.forEach((product) => {
        if(product.id === action.payload.product.id)
          flag = 0;
      });

      if(flag) {
        state.products = [action.payload.product, ...state.products];
      } else {
        state.products[index].quantity += 1;
      }
    },
    substractFromBill: (state, action) => {

        const index = state.products.findIndex(object => {
          return object.id === action.payload.product.id;
        });

        if(state.products[index].quantity > 1) {
          state.subtotal -= action.payload.price;
          state.total = (state.subtotal * state.iva) / 100;
          state.products[index].quantity -= 1;
        }
    },
    deleteProduct: (state, action) => {

      const index = state.products.findIndex(object => {
        return object.id === action.payload;
      });

      state.subtotal -= (state.products[index].quantity * state.products[index].price);
      state.total = (state.subtotal * state.iva) / 100;
      state.products = state.products.slice(0, index).concat(state.products.slice(index + 1));
      //console.log('state antes',JSON.parse(JSON.stringify(state.products)));
    },
    addDescount: (state, action) => {

      if(state.descuento > 0) {
        state.total += state.descuento;
      }

      state.descuento = ((state.total * action.payload) / 100);
      state.total -= state.descuento;

    },
    addTip: (state, action) => {

      state.descuento += ((state.total * action.payload) / 100);
    
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToBill, substractFromBill, deleteProduct, addDescount, addTip } = billSlice.actions;

export default billSlice.reducer;