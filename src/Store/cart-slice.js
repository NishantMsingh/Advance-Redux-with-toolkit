import { createSlice } from "@reduxjs/toolkit";

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
                    itemId: item.id,
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
            const existingItem = state.items.find(itm => itm.id === id);
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
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
