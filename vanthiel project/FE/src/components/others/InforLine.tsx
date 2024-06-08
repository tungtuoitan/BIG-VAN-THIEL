import { Infor } from "@SRC/store/slices/profileSlice";
import upperCaseFirstChar from "@SRC/utils/function/upperCaseFirstChar";

interface Props {
  infor: Infor;
  property: "name" | "email" | "password";
}

const InforLine: React.FC<Props> = ({ infor, property }) => {
  return (
    <div className="flex justify-between gap-4 py-2 border-b-2 border-gray-300">
      <span className="text-base text-bold">
        {upperCaseFirstChar(property)}:{" "}
      </span>{" "}
      <p className="text-base text-bold">{infor[property]}</p>
    </div>
  );
};

export default InforLine;
