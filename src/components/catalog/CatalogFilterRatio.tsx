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
                <div style={{
                    width:"24px",
                    height:"24px", 
        
                }}>
<img src="/Images/ratio.png" alt="" 
style={{
    width:"100%",
    height:"100%", 
    objectFit:"cover"
}}
/>
                </div>
                
                // <svg
                //     width="24"
                //     height="24"
                //     viewBox="0 0 24 24"
                //     fill="none"
                
                // >
                //     <g>
                //     <defs>
                //         <linearGradient
                //             id="gradient1"
                //             x1="-12"
                //             y1="12"
                //             x2="12"
                //             y2="36"
                //             gradientUnits="userSpaceOnUse"
                //         >
                //             <stop stop-color="#16BAC5" />
                //             <stop offset="1" stop-color="#0CCE6B" />
                //         </linearGradient >
                //         <linearGradient
                //             id="gradient2"
                //             x1="0"
                //             y1="12"
                //             x2="12"
                //             y2="24"
                //             gradientUnits="userSpaceOnUse"
                //         >
                //             <stop stop-color="#16BAC5" />
                //             <stop offset="1" stop-color="#0CCE6B" />
                //         </linearGradient>
                //     </defs>
                //     <rect
                //         x="0.5"
                //         y="0.5"
                //         width="23"
                //         height="23"
                //         rx="11.5"
                //         stroke="url(#gradient1)"
                   
                //     />
                //     <rect
                //         x="6"
                //         y="6"
                //         width="12"
                //         height="12"
                //         rx="6"
                //         fill="url(#gradient2)"
                //         style={{fill: 'url(#gradient2)'}}
                //     />
                    
                //     </g>
                // </svg>
            ) : (
                <div className="catalog-ratio" />
            )}
        </button>
    )
}
