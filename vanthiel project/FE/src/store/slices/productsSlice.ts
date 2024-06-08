import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type color = "black" | "red" | "green" | "white" | "blue";
type size = "S" | "M" | "L" | "XL";
// type category = "sneakers" | "flats" | "sandals" | "heels";
// type userType = "men" | "woman" | "kid" | "all";
// type brand = "adidas" | "nike" | "vans" | "puma";

export interface Product {
  id: number;
  img: string[];
  title: string;
  price: number;
  brand: string;
  colors: string[];
  sizes: string[];
  category: string;
  userType: string;
}

interface Filter {
  userType: string;
}

export interface Choice {
  id: number | null;
  amount: number;
  size: size;
  color: color;
}

interface ProductsState {
  priceRange: [number, number];
  data: Product[];
  filter: Filter;
  choice: Choice;
  cart: Choice[];
}

const initialState: ProductsState = {
  priceRange: [0, 100],
  data: [],
  filter: {
    userType: "all",
  },
  choice: {
    id: null,
    amount: 1,
    size: "M",
    color: "black",
  },
  cart: [
    {
      id: 1,
      amount: 1,
      size: "M",
      color: "black",
    },
    {
      id: 2,
      amount: 3,
      size: "XL",
      color: "red",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updatePriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = [...action.payload];
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
  updateChoice,
  addChoiceToCard,
  removeChoiceFromCart,
} = productsSlice.actions;

export default productsSlice.reducer;
