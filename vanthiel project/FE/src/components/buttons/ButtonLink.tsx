import { updateFilter } from "@SRC/store/slices/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

interface ButtonProps {
  title: string;
  fullWidth?: boolean;
}

const ButtonLink: React.FC<ButtonProps> = ({ title, fullWidth = false }) => {
  const dispatch = useDispatch();
  const handleClick = () =>
    dispatch(
      updateFilter(["userType", title.replace("SHOP ", "").toLowerCase()])
    );
    
  return (
    <Link
      to={`/products/${title.replace("SHOP ", "").toLowerCase()}`}
      className={`bg-gray-800 hover:bg-black px-[20px] py-[10px] text-white rounded ${
        fullWidth ? "w-full" : ""
      }`}
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};

export default ButtonLink;
