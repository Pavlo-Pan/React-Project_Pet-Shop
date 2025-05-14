import { useState } from 'react'
import styles from './Btn.module.css'

const Btn = ({
    children,
    type = "button",
    width = "100%",
    isToggle = false,      
    onToggle,              
    className = '',
    ...props
}) => {
    const [active, setActive] = useState(false)

    const handleClick = e => {
        if (isToggle) {
            const next = !active
            setActive(next)
            if (typeof onToggle === 'function') {
                onToggle(next)
            }
        }
        if (props.onClick) props.onClick(e)
    }

    const classes = [
        styles.btn,
        isToggle && active ? styles.active : '',
        className
    ].filter(Boolean).join(' ')

    return (
        <button
            type={type}
            style={{ width }}
            {...props}
            onClick={handleClick}
            className={classes}
        >
            {children}
        </button>
    )
}

export default Btn
