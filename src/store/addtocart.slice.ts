import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenuItem } from "../components/restaurants-details/models/restaurants-details.model";


interface ICartState {
    items: ICartItem[]
}

export interface ICartItem {
    item: IMenuItem;
    qty: number
}

const initialState: ICartState = {
    items: []
}

const addToCartSlice = createSlice({
    name: 'Add To Cart Slice',
    initialState,
    reducers: {
        addToCartAction: (state, action: PayloadAction<ICartItem>) => {
            // update the cart
            const items = [...state.items];
            // check that item exist or not
            const index = items.findIndex(m => m.item.itemId === action.payload.item.itemId);
            if (index > -1) {
                // item exist
                items[index].qty = action.payload.qty
                /*
                if (action.payload.qty > 0) {
                    // update the qty
                    items[index].qty = action.payload.qty
                }
                else {
                    // delete the item
                    items.splice(index, 1);
                }

                */
            }
            else {
                // new items
                const data = action.payload;
                data.item['cartQty'] = action.payload.qty;
                items.push(data)
            }
            // update the state
            state.items = items
        }
    }
})

export const { addToCartAction } = addToCartSlice.actions

export default addToCartSlice