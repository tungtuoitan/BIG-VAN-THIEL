import React, { useEffect } from "react";
import { LoginForm } from "@SRC/pages/Login";
import Field from "@SRC/components/fields/Field";
import Button from "@SRC/components/buttons/Button";
import upperCaseFirstChar from "@SRC/utils/function/upperCaseFirstChar";
import { useForm } from "react-hook-form";
import axios from "axios";

interface FormProps {
  type: "login" | "sign-up" | "update";
}
const Form: React.FC<FormProps> = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    // wait for API
  };
  useEffect(() => {
    axios

  },[])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[500px] max-h-[400px] flex flex-col box-shadow1 rounded-md p-12 bg-white"
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
