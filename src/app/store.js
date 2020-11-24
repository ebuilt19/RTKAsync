import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import getIdReducer from '../features/getId/getIdSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    getId: getIdReducer,
  },
});
