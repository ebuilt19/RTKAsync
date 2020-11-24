import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const getUserObjSlice = createSlice({
  name:'getUserObj',
  initialState: {
    value:0,
    name:"mike",
    token:"e",
  },
  reducers: {
    getObj : (state, action) => {
        // console.log(action.payload,"action");
        // let c = JSON.parse(action.payload);
      
      state.value =  JSON.parse(action.payload).value;
      state.name =  JSON.parse(action.payload).name;
      state.token =  JSON.parse(action.payload).token;
        },
    incrementByAmount : (state, action) => {
        state.value = action.payload;
          },
  },
  });


export const {getObj,incrementByAmount} = getUserObjSlice.actions;

export const myObjAsync = amount => dispatch =>{
  let tes = async (passedInAmount)=>{
    const response = axios.post(
      "https://thespaht.com/testing/redux.php?amount="+`${passedInAmount}` 
      );
                      //action          //payload
    //   dispatch(incrementByAmount((await response).data));
    let responseData = await response.data;
    let payload = JSON.stringify({value:responseData,name:"fof",token:"none"})
    dispatch(getObj(payload));
    }
    tes(amount);
}

export const myAsync = amount => dispatch =>{
    let tes = async (passedInAmount)=>{
      const response = axios.post(
        "https://thespaht.com/testing/redux.php?amount="+`${passedInAmount}` 
        );
                        //action          //payload
        dispatch(incrementByAmount((await response).data));
      }
      tes(amount);
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectObjUser = state => state.getUserObj.value;
export default getUserObjSlice.reducer;