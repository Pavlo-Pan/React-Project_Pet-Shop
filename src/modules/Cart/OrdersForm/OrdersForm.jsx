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
                    placeholderColor='var(--main-text-color)'
                    styles={{ width: 484, marginBottom: 16, color: '#282828', backgroundColor: "#fff" }}/>))}
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