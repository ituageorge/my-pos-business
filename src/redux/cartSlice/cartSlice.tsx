import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Product } from '../types/Produ

interface Product {
  price: number;
    id: number;
    name: string;
    image: string;
    description: string;
    alt: string;
    quantity: number,

  }

// interface CartItemWithQuantity extends CartItem {
//   quantity: number;
// }
export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
    // totalPricePerItem(state, action: PayloadAction<{ productId: number; quantity: number }>) {
    //   const { productId, quantity } = action.payload;
    //   const item = state.items.find((item) => item.product.id === productId);
    //   if (item) {
    //     item.quantity = quantity;
    //   }
    // },
    updateQuantity(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const item = state.items.find(
        (item) => item.product.id === productId
      );
      if (item) {
        item.quantity = quantity;
      }
    },
    
    removeItem(state, action: PayloadAction<number>) {
        state.items = state.items.filter((item) => item.product.id !== action.payload);
      },
  },
});

export const { addCartItem,
     updateQuantity,
      removeItem } = cartSlice.actions;

export default cartSlice.reducer;


