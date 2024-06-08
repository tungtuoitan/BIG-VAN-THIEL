import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "@SRC/store/slices/productsSlice"
import profileSliceReducer from "@SRC/store/slices/profileSlice"

export const store = configureStore({
    reducer: {
        products: productSliceReducer,
        profile: profileSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch