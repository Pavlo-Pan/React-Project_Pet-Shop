const CrossButton = ({
    width = 12,
    height = 12,
    color = '#282828',
    onClick,
    style,
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                border: 'none',
                background: 'transparent',
                padding: 0,
                cursor: 'pointer',
                ...style,
            }}
            aria-label="Close"
        >
            <svg
                width={width}
                height={height}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 1L13 13"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M13 1L1 13"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export default CrossButton