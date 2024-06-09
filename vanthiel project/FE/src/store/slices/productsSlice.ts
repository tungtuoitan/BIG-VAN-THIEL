import { Choice, Filter, Product, ProductsState } from "@SRC/utils/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: ProductsState = {
  data: [],
  filter: {
    userType: "all",
    page: 1,
    priceRange: [0, 1000],
    colors: ["black", "red", "green", "white", "blue"],
    sizes: ["s", "m", "l", "xl"],
    brands: ["adidas", "nike", "vans", "puma"],
  },
  choice: {
    id: null,
    amount: 1,
    size: "m",
    color: "black",
  },
  cart: [
    // {
    //   id: 1,
    //   amount: 1,
    //   size: "m",
    //   color: "black",
    // },
    // {
    //   id: 2,
    //   amount: 3,
    //   size: "xl",
    //   color: "red",
    // },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updatePriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.filter.priceRange = [...action.payload];
    },
    updateData: (state, action: PayloadAction<Product[]>) => {
      state.data = [...action.payload];
    },
    updateFilter: (state, action: PayloadAction<[string, string | number]>) => {
      const newFilter: Filter = {
        ...state.filter,
        [action.payload[0]]: action.payload[1],
      };
      state.filter = newFilter;
    },
    updateFilter2: (
      state,
      action: PayloadAction<[string, string[] | number[]]>
    ) => {
      const newFilter: Filter = {
        ...state.filter,
        [action.payload[0]]: action.payload[1],
      };
      state.filter = newFilter;
    },
    updateChoice: (state, action: PayloadAction<[string, number | string]>) => {
      const newChoice: Choice = {
        ...state.choice,
        [action.payload[0]]: action.payload[1],
      };
      state.choice = newChoice;
    },
    addChoiceToCard: (state) => {
      state.cart = [...state.cart, { ...state.choice }];
    },
    removeChoiceFromCart: (state, action: PayloadAction<number>) => {
      const idRemoved = state.cart.findIndex(
        (item: Choice) => item.id === action.payload
      );
      const newCart = [...state.cart];
      newCart.splice(idRemoved, 1);
      state.cart = newCart;
    },
  },
});
export const {
  updatePriceRange,
  updateData,
  updateFilter,
  updateFilter2,
  updateChoice,
  addChoiceToCard,
  removeChoiceFromCart,
} = productsSlice.actions;

export default productsSlice.reducer;
