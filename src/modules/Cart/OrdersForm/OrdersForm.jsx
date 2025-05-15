import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Btn from "../../../shared/components/Btn/Btn";
import { sendCoupon } from "../../../shared/api/api";

import fields from "./fields";
import styles from './OrdersForm.module.css'
const OrdersForm = ({ onOrder }) => {
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

            if (onOrder) onOrder();
        } catch (err) {
            setServerError(err.message);
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
                    styles={{color: 'var(--main-text-color)', backgroundColor: 'var(--white-color)', }} />))}
            <Btn
                type="submit"
                disabled={isSubmitting}>
                {isSubmitting ? "Send..." : "Order"}
            </Btn>
        </form>
    );
};

export default OrdersForm;