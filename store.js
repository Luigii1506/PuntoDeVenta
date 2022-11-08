import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import billSlice from './slices/billSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    bill: billSlice
  }
})