import { Link } from "react-router-dom";

interface ButtonProps {
  title: string;
  link: string;
  onClick?: () => void;
}

const ALink: React.FC<ButtonProps> = ({ title, link, onClick }) => {
  return (
    <Link to={link} className="hover:underline text-blue-400" onClick={onClick}>
      {title}
    </Link>
  );
};

export default ALink;
