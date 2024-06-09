import {
  ErrorMessages,
  Patterns,
  brand,
  color,
  size,
} from "@SRC/utils/types/types";

export const ERROR_MESSAGES: ErrorMessages = {
  name: {
    REQUIRED: "Please enter your name",
    INVALID: "Invalid name",
  },
  email: {
    REQUIRED: "Please enter an email",
    INVALID: "Invalid email address",
  },
  password: {
    REQUIRED: "Please enter a password",
    INVALID: "Password must be at least 6 characters long",
  },
};

export const PATTERNS: Patterns = {
  name: /^[A-Za-z\s]+$/i,
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  password: /^.{6,}$/,
};

export const colors: color[] = ["black", "red", "green", "white", "blue"];
export const sizes: size[] = ["s", "m", "l", "xl"];
export const brands: brand[] = ["adidas", "nike", "vans", "puma"];

export type ALL_TYPES = {
  [key: string]: color[] | size[] | brand[];
};
export const ALL_TYPES: ALL_TYPES = { colors, sizes, brands };
