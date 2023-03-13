import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  alt: string;
  price: number;
  quantity: number;
}

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [
    {
      id: 1,
      name: 'Iron Wiper Blades',
      image: '/ironwiperblade.jpg',
      description: 'One set is two piece',
      alt:'spark plugs',
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Rubber Wiper Blades',
      image: '/rubberwiper.jpg',
      description: 'One set is two pieces',
      alt:'fan belts',
      price: 20,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Avalon Wiper Blades',
      image: '/avalonwiper.jpg',
      description: 'One set is two piece',
      alt:'Avalon belts',
      price: 15,
      quantity: 1,
    },
    {
      id: 4,
      name: 'Back Wiper Blades',
      image: '/backwipers.jpg',
      description: 'One set is one piece',
      alt:'back wiper',
      price: 30,
      quantity: 1,
    },
    {
      id: 5,
      name: 'Car Spark plug',
      image: '/all_sparkplug.jpg',
      description: 'One set is one piece',
      alt:'spark plugs',
      price: 25,
      quantity: 1,
    },
    {
      id: 6,
      name: 'fanbelts',
      image: '/fan belt.jpg',
      description: 'One set is one piece',
      alt:'fan belts',
      price: 40,
      quantity: 1,
    },
    {
      id: 7,
      name: 'Spark plug',
      image: '/ngk_sparkplug.jpg',
      description: 'One set is one piece',
      alt:'Spark plug',
      price: 70,
      quantity: 1,
    },
    {
      id: 8,
      name: 'Spark plug',
      image: '/sparkplug_normal.jpg',
      description: 'One set is one piece',
      alt:'spark plugs',
      price: 100,
      quantity: 1,
    },
    {
      id: 9,
      name: 'Engine Oil',
      image: '/engine oil.jpg',
      description: 'One set is one piece',
      alt:'Engine oil.',
      price: 600,
      quantity: 1,
    },
  ],
};


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
  },
});


// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;

