import {createSlice} from "@reduxjs/toolkit"



const initialState = {
  priceRange: {
    from:0,
    to:0
  }
}

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducer:{
    
  }
})

export default allProductsSlice.reducer
