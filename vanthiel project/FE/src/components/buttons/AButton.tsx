import React from "react";

interface AbuttonProps {
  icon?: React.ReactElement;
  title?: string;
  link: string;
}
const AButton: React.FC<AbuttonProps> = ({ icon, link, title }) => {
  return (
    <a href={link} className="text-xs opacity-30 hover:opacity-1">
      {icon}
      {title}
    </a>
  );
};

export default AButton;
