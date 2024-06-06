import React from "react";

interface TextAProps {
  title: string;
  link: string;
}

const TextA: React.FC<TextAProps> = ({ link, title }) => {
  return (
    <a href={link} className="text-xs opacity-60 hover:opacity-100 font-light">
      {title}
    </a>
  );
};

export default TextA;
