import { updateChoice } from "@SRC/store/slices/productsSlice";
import { RootState } from "@SRC/store/store";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

interface ToggleButtonsProps {
  type: "size" | "color";
  array: string[];
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({ type, array }) => {
  const dispatch = useDispatch();
  const { size, color } = useSelector(
    (state: RootState) => state.products.choice
  );

  const handleButtonClick = (
    _e: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    dispatch(updateChoice([type, newValue]));
  };

  return (
    <ToggleButtonGroup
      value={type === "size" ? size : color}
      exclusive
      onChange={handleButtonClick}
      color="primary"
    >
      {array.map((item: string, index: number) => {
        const isChosen =
          (type === "size" && size === item) ||
          (type === "color" && color === item);
        return (
          <ToggleButton
            value={item}
            key={index}
            style={{
              minWidth: "40px",
              height: "40px",
              marginRight: "4px",
              borderRadius: "2px",
              backgroundColor: `${isChosen ? "rgb(59 130 246)" : ""}`,
              color: `${isChosen ? "white" : ""}`,
            }}
            size="small"
          >
            {item}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

export default ToggleButtons;
