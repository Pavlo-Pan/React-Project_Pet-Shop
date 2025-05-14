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
    if (serverError) {
      const t = setTimeout(() => setServerError(null), 5000);
      return () => clearTimeout(t);
    }
  }, [serverError]);

  useEffect(() => {
    if (successMessage) {
      const t = setTimeout(() => setSuccessMessage(null), 5000);
      return () => clearTimeout(t);
    }
  }, [successMessage]);

  const onSubmit = async (data) => {
    setServerError(null);
    setSuccessMessage(null);
    try {
      await sendCoupon(data);
      setSuccessMessage("Application sent! The coupon will be sent to your email shortly.");
      reset();
    } catch (err) {
      setServerError(err.message || "Something gone wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {serverError && <div style={{ color: "red", marginBottom: 12 }}>{serverError}</div>}
      {successMessage && (
        <div
          style={{
            backgroundColor: "green",
            color: "#fff",
            padding: "8px",
            borderRadius: 4,
            marginBottom: 12,
          }}>
          {successMessage}
        </div>
      )}

      {Object.values(fields).map((fld) => (
        <TextField
          key={fld.name}
          label={fld.label}
          name={fld.name}
          as={fld.as}
          placeholder={fld.placeholder}
          register={register}
          rules={fld.rules}
          error={errors[fld.name]}
          styles={{ width: 516, marginBottom: 16 }}
        />
      ))}

      <Btn
        type="submit"
        disabled={isSubmitting}
        style={{
          width: 516,
          padding: "12px",
          marginBottom: 16,
          backgroundColor: "#fff",
          color: "var(--main-text-color)",
        }}>
        {isSubmitting ? "Send..." : "Get a discount"}
      </Btn>
    </form>
  );
};

export default RegisterForm;
