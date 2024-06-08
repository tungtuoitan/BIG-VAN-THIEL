import React from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "@SRC/store/slices/productsSlice";
import { Link, useParams } from "react-router-dom";

interface TextAProps {
  title: string;
  link: string;
}

const ALinkHeader: React.FC<TextAProps> = ({ link, title }) => {
  const dispatch = useDispatch();
  const path = useParams();
  
  const handleClick = () =>
    dispatch(updateFilter(["userType", link.replace("/products/", "")]));

  return (
    <Link
      to={link}
      className={`text-xs hover:opacity-100 font-light ${
        path.userType === title.toLocaleLowerCase() ? "text-bold" : "opacity-60"
      }`}
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};

export default ALinkHeader;
