import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
        const item = action.payload;
        const existingItem = state.items.find(itm => itm.id === item.id);
        if (!existingItem) {
            state.items.push({  //    do not do with redux   - we are using redux toolkit
                id: item.id,
                name: item.title,
                price: item.price,
                quantity: 1,
            });
            state.totalQuantity++;
            state.totalAmount += item.price;
        } else {
            existingItem.quantity++;
            state.totalQuantity++;
            state.totalAmount += item.price;
        }
    },

    removeItem(state, action) {
        const itemId=action.payload;
        const existingItem = state.items.find(itm => itm.id === itemId);
        if (existingItem.quantity===1) {
           state.items=state.items.filter((item)=>{
            return item.id!==itemId;
           })  
        } 
        else
        {
            existingItem.quantity--;
            state.totalQuantity--;
            state.totalAmount -= existingItem.price;  
        }
    }
  },
});

export const sentCartData=(cart)=>{
return async (dispatch)=>{

  dispatch(uiActions.showNotification({
    status:"pending",
    title:"Sending...",
    messege:"Sending Cart Data",

  }))
  const sendRequest=async()=>{
    const response= await fetch("https://redux-fe1aa-default-rtdb.firebaseio.com/cart.json",{
      method:"PUT",
      body:JSON.stringify(cart),
    });
    if(!response.ok){
    
    }
  }
  
   try{
    await sendRequest(); 
    dispatch(uiActions.showNotification({
      status:"Success",
      title:"Success",
      messege:"Sending Cart Data Successfully",
      
    }))
   }
   catch(e)
   {
    dispatch(uiActions.showNotification({
      status:"Error",
      title:"Sending Erorr",
      messege:"Sending Cart Data failed",
      
    }))
   }

}
}

export const cartAction = cartSlice.actions;
export default cartSlice;
