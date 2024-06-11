import "./catalog.scss"

export function CatalogFilterRatio({
    open,
    hendlerOpen,
}: {
    open: boolean
    hendlerOpen: () => void
}) {
    return (
        <button onClick={hendlerOpen}>
            {open ? (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="11.5"
                        stroke="url(#paint0_linear_18_4386)"
                    />
                    <rect
                        x="6"
                        y="6"
                        width="12"
                        height="12"
                        rx="6"
                        fill="url(#paint1_linear_18_4386)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_18_4386"
                            x1="-12"
                            y1="12"
                            x2="12"
                            y2="36"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#16BAC5" />
                            <stop offset="1" stop-color="#0CCE6B" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_18_4386"
                            x1="0"
                            y1="12"
                            x2="12"
                            y2="24"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#16BAC5" />
                            <stop offset="1" stop-color="#0CCE6B" />
                        </linearGradient>
                    </defs>
                </svg>
            ) : (
                <div className="catalog-ratio" />
            )}
        </button>
    )
}
