import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{cartArray : []},
    reducers:{
        addItem: (state,action)=>{
            for(var i = 0 ; i < state.cartArray.length ;i++){
                if(action.payload.id === state.cartArray[i].id){
                    return;
                }
            }
            state.cartArray.push(action.payload);
        },
        removeItem: (state,action)=>{
            for(var i = 0 ; i < state.cartArray.length ;i++){
                if(action.payload.id === state.cartArray[i].id){
                    state.cartArray.splice(i,1);
                }
            }
        }
    }
})

export default cartSlice.reducer;
export const {addItem,removeItem} = cartSlice.actions;