import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Btn from "../../../shared/components/Btn/Btn";
import { sendCoupon } from "../../../shared/api/api";
import fields from "./fields";
import styles from './RegisterForm.module.css'
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
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {serverError && <div style={{ color: "red"}}>{serverError}</div>}
      {successMessage && (
        <div className={styles.successMessage}>
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
          styles={{color: 'var(--main-text-color)'}}
          placeholderColor='var(--white-color)'
        />
      ))}

      <Btn
        type="submit"
        disabled={isSubmitting}
        style={{
          backgroundColor: "var(--white-color)",
          color: "var(--main-text-color)"
        }}>
        {isSubmitting ? "Send..." : "Get a discount"}
      </Btn>
    </form>
  );
};

export default RegisterForm;
