import { baseURL } from "../../utils/utils"
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
                <div
                    style={{
                        width: "24px",
                        height: "24px",
                    }}
                >
                    <img
                          src={
                                baseURL +"/Images/ratio.png"}
                        alt=""
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
            ) : (
              
                <div className="catalog-ratio" />
            )}
        </button>
    )
}
