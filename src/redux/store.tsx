import { configureStore } from '@reduxjs/toolkit'
// import { productsSlice } from './productSlice/productsSlice'

import productsReducer from './productSlice/productsSlice'
import cartReducer from './cartSlice/cartSlice'

export const store = configureStore({
  reducer: {
   products :productsReducer,
   cart: cartReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch