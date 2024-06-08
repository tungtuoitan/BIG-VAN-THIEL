interface ErrorMessages {
  [key: string]: {
    REQUIRED: string;
    INVALID: string;
  };
}
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

type Patterns = {
  [key: string]: RegExp | number;
};

export const PATTERNS: Patterns = {
  name: /^[A-Za-z\s]+$/i,
  email: /^\S+@\S+$/i,
  password:  6,
};