import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Btn from "../../../shared/components/Btn/Btn";
import { sendCoupon } from "../../../shared/api/api";

import fields from "./fields";

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
        <form onSubmit={handleSubmit(onSubmit)}>
            {serverError && <div style={{ color: "red" }}>{serverError}</div>}
            {successMessage && <div style={{ color: "var(--main-text-color)" }}>{successMessage}</div>}
            <TextField
                placeholderColor="var(--light-text-color)"
                {...fields.username}
                register={register}
                error={errors.username}
                styles={{
                    width: "484px",
                    color: "var(--main-text-color)",
                    backgroundColor: "#fff",
                }} />
            <TextField
                placeholderColor="var(--light-text-color)"
                {...fields.phone}
                register={register}
                error={errors.phone}
                styles={{
                    width: "484px",
                    color: "var(--main-text-color)",
                    backgroundColor: "#fff",
                }} />
            <TextField
                placeholderColor="var(--light-text-color)"
                {...fields.email}
                register={register}
                error={errors.email}
                styles={{
                    width: "484px",
                    color: "var(--main-text-color)",
                    backgroundColor: "#fff",
                }} />
            <Btn
                type="submit"
                disabled={isSubmitting}
                style={{
                    margin: "16px 0 32px 0",
                    width: "484px",
                }}>
                {isSubmitting ? "Send..." : "Order"}
            </Btn>
        </form>
    );
};

export default OrdersForm;