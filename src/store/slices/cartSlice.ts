import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "types/cart";

// Define a type for the slice state
interface CartState {
  total: number;
  countItems: number;
  isOpen: boolean;
  items: CartItemType[];
}

// Define the initial state using that type
const initialState: CartState = {
  total: 0,
  countItems: 0,
  isOpen: false,
  items: [],
};

const findItemIdx = (array: CartItemType[], item: CartItemType) => {
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].slug === item.slug &&
      array[i].color === item.color &&
      array[i].size === item.size
    ) {
      return i;
    }
  }
  return -1;
};

const countTotal = (array: CartItemType[]) => {
  return array.reduce((prev, current) => {
    return prev + current.quantity * current.price;
  }, 0);
};

const countItems = (array: CartItemType[]) => {
  return array.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);
};

export const cartSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ item: CartItemType; quantity: number }>
    ) => {
      const idx = findItemIdx(state.items, action.payload.item);
      if (idx !== -1) {
        if (action.payload.quantity === 0) {
          state.items.splice(idx, 1);
        } else {
          state.items[idx].quantity = action.payload.quantity;
        }
        state.total = countTotal(state.items);
        state.countItems = countItems(state.items);
      }
    },
    addItem2Cart: (state, action: PayloadAction<{ item: CartItemType }>) => {
      //check if item exist
      const idx = findItemIdx(state.items, action.payload.item);
      if (idx !== -1) {
        state.items[idx].quantity += 1;
      } else {
        state.items.push(action.payload.item);
      }
      state.total = countTotal(state.items);
      state.countItems = countItems(state.items);
    },
  },
});

export const { openCart, closeCart, updateQuantity, addItem2Cart } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
