
interface ButtonProps {
  title: string;
  type?: "button" | "submit";
  handleClick?: () => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  title,
  handleClick = () => {},
  fullWidth = true,
}) => {
  return (
    <button
      type={type}
      className={`${
        fullWidth ?? "w-full"
      } px-[20px] py-[10px] bg-gray-800 hover:bg-black text-white rounded text-center`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
