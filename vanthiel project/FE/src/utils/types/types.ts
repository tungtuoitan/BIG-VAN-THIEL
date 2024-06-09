
export type color = "black" | "red" | "green" | "white" | "blue";
export type size = "s" | "m" | "l" | "xl";
export type category = "sneakers" | "flats" | "sandals" | "heels";
export type userType = "men" | "woman" | "kid";
export type brand = "adidas" | "nike" | "vans" | "puma";

export interface Slide {
  img: string;
  userType: string;
  desc: string;
}

export type FullFilter = {
  page: number;
  filter: Filter;
};

export interface Infor {
  name?: string | null;
  email: string | null;
  password: string | null;
}

export interface Profile {
  isLogged: boolean;
  infor: Infor;
}

export interface ErrorMessages {
  [key: string]: {
    REQUIRED: string;
    INVALID: string;
  };
}

export type Patterns = {
  [key: string]: RegExp;
};

export interface LoginForm {
  email: string;
  password: string;
}

export interface Common {
  isUpdatePopupOpen: boolean;
}

export interface Product {
  id: number;
  img: string[];
  title: string;
  price: number;
  brand: brand;
  colors: color[];
  sizes: size[];
  category: category;
  userType: userType;
  desc: string;
  bestseller?: boolean;
}

export interface Filter {
  userType: string;
  page: number;
  priceRange: [number, number];
  colors: color[];
  sizes: size[];
  brands: string[];
}

export interface Choice {
  id: number | null;
  amount: number;
  size: size;
  color: color;
}

export interface ProductsState {
  data: Product[];
  filter: Filter;
  choice: Choice;
  cart: Choice[];
}
