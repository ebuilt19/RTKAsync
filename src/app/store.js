import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import getIdReducer from '../features/getId/getIdSlice'
import getUserObjReducer from '../features/getUserObj/getUserObjSlice' 
export default configureStore({
  reducer: {
    counter: counterReducer,
    getId: getIdReducer,
    getUserObj: getUserObjReducer,
  },
});
