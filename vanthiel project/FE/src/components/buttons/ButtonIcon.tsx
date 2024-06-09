import React from "react";
import { Link } from "react-router-dom";

interface IconButtonProps {
  icon: React.ReactElement;
  link: string;
  hover?: boolean;
}
const ButtonIcon: React.FC<IconButtonProps> = ({
  icon,
  link,
  hover = true,
}) => {
  return (
    <Link
      to={link}
      className={`text-xs w-12 h-12 rounded-full flex justify-center items-center ${
        hover ? "hover:bg-gray-hover" : ""
      }`}
    >
      {icon}
    </Link>
  );
};

export default ButtonIcon;
