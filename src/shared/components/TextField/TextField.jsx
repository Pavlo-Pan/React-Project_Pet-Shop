import { useId } from 'react';
import css from './TextField.module.css';

const TextField = ({
    label,
    name,
    register,
    rules,
    error,
    as = 'input',
    styles: inputStyles = {},
    placeholderColor,          
    ...props
}) => {
    const id = useId();

    const styleWithPlaceholder = {
        ...inputStyles,
        ...(placeholderColor
            ? { '--placeholder-color': placeholderColor }
            : {}),
    };

    const commonProps = {
        id,
        ...register(name, rules),
        ...props,
        className: css.input,
        style: styleWithPlaceholder,
    };

    return (
        <div className={css.wrapper}>
            {label && (
                <label htmlFor={id} className={css.label}>
                    {label}
                </label>
            )}

            {as === 'input' && <input {...commonProps} />}
            {as === 'textarea' && <textarea {...commonProps} />}

            {error && <p className={css.error}>{error.message}</p>}
        </div>
    );
};

export default TextField;
