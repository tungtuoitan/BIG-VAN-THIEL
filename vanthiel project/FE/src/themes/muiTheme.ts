import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#AFAFAF",
    },
  },
  typography: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: 16,
  },
});

export default muiTheme;
