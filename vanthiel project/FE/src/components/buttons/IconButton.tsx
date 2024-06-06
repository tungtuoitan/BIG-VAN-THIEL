import React from "react";

interface IconButtonProps {
  icon: React.ReactElement;
  link: string;
}
const IconButton: React.FC<IconButtonProps> = ({ icon, link }) => {
  return (
    <a href={link} className="text-xs icon-button w-10 h-10 rounded-full flex justify-center items-center">
      {icon}
    </a>
  );
};

export default IconButton;
