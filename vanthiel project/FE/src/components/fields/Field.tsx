import React, { ChangeEvent } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { Infor, updateInfor } from "@SRC/store/slices/profileSlice";
import { UseFormRegister } from "react-hook-form";
import { ERROR_MESSAGES, PATTERNS } from "@SRC/assets/constant/constant";
import upperCaseFirstChar from "@SRC/utils/function/upperCaseFirstChar";

interface FieldProps {
  fieldType: keyof Infor;
  isRequired?: boolean;
  register: UseFormRegister<any>;
  errors: any;
}

const Field: React.FC<FieldProps> = ({
  fieldType,
  isRequired = true,
  register,
  errors,
}) => {
  const dispatch = useDispatch();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    fieldType: keyof Infor
  ) => {
    dispatch(updateInfor([fieldType, event.target.value]));
  };

  return (
    <TextField
      label={upperCaseFirstChar(fieldType)}
      {...register(fieldType, {
        required: ERROR_MESSAGES[fieldType].REQUIRED,
        pattern: {
          value: PATTERNS[fieldType],
          message: ERROR_MESSAGES[fieldType].INVALID,
        },
      })}
      error={!!errors[fieldType]}
      helperText={errors[fieldType]?.message}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleChange(e, fieldType)
      }
      fullWidth
      required={isRequired}
    />
  );
};

export default Field;
