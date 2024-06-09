import { ALL_TYPES } from "@SRC/assets/constant/constant";
import { updateFilter2 } from "@SRC/store/slices/productsSlice";
import { RootState } from "@SRC/store/store";
import processArray from "@SRC/utils/function/processArray";
import upperCaseFirstChar from "@SRC/utils/function/upperCaseFirstChar";
import { brand, color, size } from "@SRC/utils/types/types";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface CheckboxFormProps {
  type: "colors" | "sizes" | "brands";
}

const CheckboxForm: React.FC<CheckboxFormProps> = ({ type }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.products.filter);

  const handleChange = (
    _event: SyntheticEvent<Element, Event>,
    label: string
  ) => {
    const newArray = [...filter[type]];
    dispatch(
      updateFilter2([type, processArray(newArray, label.toLowerCase())])
    );
  };
  return (
    <FormGroup>
      {ALL_TYPES[type].map((item: color | brand | size, index: number) => {
        const filterType: string[] = filter[type];
        return (
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label={upperCaseFirstChar(item)}
            key={index}
            onChange={(event: SyntheticEvent<Element, Event>) =>
              handleChange(event, upperCaseFirstChar(item))
            }
            checked={filterType.includes(item)}
            color="secondary"
            style={{color: "gray", fontWeight: "light", fontSize: "10px"}}
            className="text-sm"
          />
        );
      })}
    </FormGroup>
  );
};

export default CheckboxForm;
