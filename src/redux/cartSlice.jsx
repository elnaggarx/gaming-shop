import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{cart : []},
    reducers:{
        addItem: (state,action)=>{
            state.cart.push(action.payload);
        },
        removeItem: (state,action)=>{
            for(var i = 0 ; i < state.length() ;i++){
                if(action.payload.id === state.cart[i].id){
                    state.cart.splice(i,1);
                }
            }
        }
    }
})

export default cartSlice.reducer;
export const {addItem,removeItem} = cartSlice.actions