import  { useEffect, useRef, useState } from "react"
import { baseURL } from "../../utils/utils"
import { HeaderIconClose, HeaderIconSearch } from "../svg/HeaderIcon"
import { CatalogFilter } from "./CatalogFilter"
import { useNavigate } from "react-router-dom"

export const CatalogDesktop = () => {
    const [openFilter, setOpenFilter] = useState(false)
    let videoRef = useRef<HTMLVideoElement | null>(null)
    const handleOpenFilter = () => {
        setOpenFilter(true)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }


    const navigate = useNavigate()
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Auto-play was prevented:", error)
            })
        }
        return () => {
            videoRef.current = null
        }
    }, [])

    const toCard = () => {
        navigate('/card')
    }
    return (
        <div className="catalog-main">
            <video
             className="catalog-main-back"
                autoPlay
                loop
                muted
                playsInline
                ref={videoRef}
                preload="metadata"
            >
                <source
                    src={baseURL + `/Images/Coub.mp4`}
                    type="video/mp4"
                />
            </video>
            <div className="catalog-main-list catalog-main-list-none" onClick={toCard}>
                <div className="catalog-main-product">
                    <div className="catalog-main-product-img">
                        <img
                            src={
                                baseURL +
                                "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                            }
                            alt=""
                        />
                    </div>
                    <h5>Power product $</h5>
                </div>
                <div className="catalog-main-product">
                    <div className="catalog-main-product-img">
                        <img
                            src={
                                baseURL +
                                "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                            }
                            alt=""
                        />
                    </div>

                    <h5>Power product $</h5>
                </div>
                <div className="catalog-main-product">
                    <div className="catalog-main-product-img">
                        <img
                            src={
                                baseURL +
                                "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                            }
                            alt=""
                        />
                    </div>
                    <h5>Power product $</h5>
                </div>

                <div className="catalog-main-product">
                    <div className="catalog-main-product-img">
                        <img
                            src={
                                baseURL +
                                "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                            }
                            alt=""
                        />
                    </div>
                    <h5>Power product $</h5>
                </div>
                <div className="catalog-main-product">
                    <div className="catalog-main-product-img">
                        <img
                            src={
                                baseURL +
                                "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                            }
                            alt=""
                        />
                    </div>
                    <h5>Power product $</h5>
                </div>
                <div className="catalog-main-product">
                    <div className="catalog-main-product-lihgt">
                        <img src={baseURL + "/Images/lightning.png"} alt="" />
                    </div>
                    <p>Cтвори свій унікальній Power gift!</p>
                    <h4>Запросити прорахунок</h4>
                </div>
                <div className="catalog-main-product catalog-main-mob-product  catalog-main-product-mobitem">
                    <div className="catalog-main-product-img catalog-main-product-img-shopcard">
                        <img src={baseURL + "/Images/ShopCat.png"} alt="" />
                    </div>
                </div>
                <div
                    className="catalog-main-product catalog-main-product-mobitem"
                    onClick={handleOpenFilter}
                >
                    <div className="catalog-main-product-img catalog-main-mob-product-search">
                        <HeaderIconSearch />
                    </div>
                </div>
            </div>
            <div className="catalog-product-navigation-foot catalog-main-list-none">
                © <b>Power</b>Gifts. Ukrainian promo gifts b2b company. All
                Rights Reserved. Let’s create.
            </div>
            {openFilter && (
                <div className="catalog-modal">
                    <button
                        className="catalog-modal-close"
                        onClick={() => setOpenFilter(false)}
                    >
                        <HeaderIconClose />
                    </button>
                    <CatalogFilter />
                    <button
                        className="catalog-modal-go"
                        onClick={() => setOpenFilter(false)}
                    >
                        Застосувати
                    </button>
                </div>
            )}
        </div>
    )
}
