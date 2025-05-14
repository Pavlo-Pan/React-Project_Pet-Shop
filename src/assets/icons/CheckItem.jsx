const CheckItem = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={13} fill="none" {...props}>
        <path
            stroke="var(--white-color)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 1 6 12 1 7"
        />
    </svg>
)
export default CheckItem
