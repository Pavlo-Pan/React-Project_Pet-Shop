import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Btn from "../../../shared/components/Btn/Btn";
import { sendCoupon } from "../../../shared/api/api";

import fields from "./fields";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [serverError, setServerError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);


  useEffect(() => {
    if (!serverError) return;
    const timer = setTimeout(() => setServerError(null), 5000);
    return () => clearTimeout(timer);
  }, [serverError]);


  useEffect(() => {
    if (!successMessage) return;
    const timer = setTimeout(() => setSuccessMessage(null), 5000);
    return () => clearTimeout(timer);
  }, [successMessage]);

  const onSubmit = async (values) => {
    setServerError(null);
    setSuccessMessage(null);
    try {
      await sendCoupon(values);
      setSuccessMessage("Application sent! Coupon will be sent to your email soon.");
      reset();
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {serverError && <div style={{ color: "red" }}>{serverError}</div>}
      {successMessage && <div style={{ color: "#fff" }}>{successMessage}</div>}

      <TextField
        {...fields.username}
        register={register}
        error={errors.username}
        styles={{ width: "516px" }}
      />
      <TextField
        {...fields.phone}
        register={register}
        error={errors.phone}
        styles={{ width: "516px" }}
      />
      <TextField
        {...fields.email}
        register={register}
        error={errors.email}
        styles={{ width: "516px" }}
      />

      <Btn
        type="submit"
        disabled={isSubmitting}
        style={{
          margin: "16px 0 32px 0",
          width: "516px",
          color: "var(--main-text-color)",
          backgroundColor: "#fff",
        }}
      >
        {isSubmitting ? "Send..." : "Get a discount"}
      </Btn>
    </form>
  );
};

export default RegisterForm;
