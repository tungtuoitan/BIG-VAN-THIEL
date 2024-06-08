import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "./icons/MenuIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@SRC/store/store";

export default function BasicMenu() {
  const isLogged = useSelector((state: RootState) => state.profile.isLogged);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ padding: "0", minWidth: "12px", margin: "-4px 0 0 0" }}
        size="small"
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {!isLogged && (
          <MenuItem onClick={handleClose}>
            <Link to="/login">Login</Link>
          </MenuItem>
        )}
        {!isLogged && (
          <MenuItem onClick={handleClose}>
            <Link to="/sign-up">Sign up</Link>
          </MenuItem>
        )}
        {isLogged && (
          <MenuItem onClick={handleClose}>
            <Link to="/">Log out</Link>
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          <Link to="/">Help</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
