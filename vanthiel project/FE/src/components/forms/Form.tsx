import React from "react";
import Field from "@SRC/components/fields/Field";
import Button from "@SRC/components/buttons/Button";
import upperCaseFirstChar from "@SRC/utils/function/upperCaseFirstChar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { accountRoute } from "@SRC/utils/apiRoutes/apiRoutes";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { toggleUpdatePopup } from "@SRC/store/slices/commonSlice";
import { updateIsLogged } from "@SRC/store/slices/profileSlice";
import { LoginForm } from "@SRC/utils/types/types";

export interface FormProps {
  type: "login" | "sign-up" | "update";
}
const Form: React.FC<FormProps> = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: LoginForm) => {
    const fetch = async () => {
      const res = await axios.post(accountRoute(type), data);
      if (!res.data.success) toast.error(res.data.msg);
      if (res.data.success) {
        if (type === "update") {
          toast.success(res.data.msg);
          dispatch(toggleUpdatePopup(false));
          return;
        }
        navigate("/");
        dispatch(updateIsLogged(true))
      }
    };
    fetch();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[500px] max-h-[450px] flex flex-col box-shadow1 rounded-md p-12 bg-white"
    >
      <h1 className="text-xl font-medium text-center mb-3">
        {upperCaseFirstChar(type)}
      </h1>
      <div className="flex flex-col gap-2 mb-4">
        {type !== "login" && (
          <Field fieldType="name" register={register} errors={errors} />
        )}
        <Field fieldType="email" register={register} errors={errors} />
        <Field fieldType="password" register={register} errors={errors} />
      </div>

      <Button title={upperCaseFirstChar(type)} type="submit" />
    </form>
  );
};

export default Form;
