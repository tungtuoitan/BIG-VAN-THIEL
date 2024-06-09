import React, { ChangeEvent } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import upperCaseFirstChar from "@SRC/utils/function/upperCaseFirstChar";
import {  updateChoice } from "@SRC/store/slices/productsSlice";
import { Choice } from "@SRC/utils/types/types";

interface FieldProps {
  fieldType: keyof Choice;
  isRequired?: boolean;
}

const NumField: React.FC<FieldProps> = ({ fieldType, isRequired = true }) => {
  const dispatch = useDispatch();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    fieldType: keyof Choice
  ) => {
    if (parseInt(event.target.value) >= 0)
      dispatch(updateChoice([fieldType, parseInt(event.target.value)]));
    else event.target.value = "0";
  };

  return (
    <TextField
      label={upperCaseFirstChar(fieldType)}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleChange(e, fieldType)
      }
      required={isRequired}
      type="number"
      style={{ width: "120px" }}
    />
  );
};

export default NumField;
