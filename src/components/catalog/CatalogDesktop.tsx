import React, { useState } from "react"
import { baseURL } from "../../utils/utils"
import { HeaderIconClose, HeaderIconSearch } from "../svg/HeaderIcon"
import { CatalogFilter } from "./CatalogFilter"

export const CatalogDesktop = () => {
    const [openFilter, setOpenFilter] = useState(false)
    return (
        <div className="catalog-main">
            <img
                src={baseURL + "/Images/glass_cube_by_gleb.png"}
                className="catalog-main-back"
                alt=""
            />
            <div className="catalog-main-list">
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
                <div className="catalog-main-product catalog-main-mob-product">
                    <div className="catalog-main-product-img">
                        <img src={baseURL + "/Images/ShopCat.png"} alt="" />
                    </div>
                </div>
                <div
                    className="catalog-main-product"
                    onClick={() => setOpenFilter(true)}
                >
                    <div className="catalog-main-product-img catalog-main-mob-product-search">
                        <HeaderIconSearch />
                    </div>
                </div>
            </div>
            {openFilter && (
                <div className="catalog-modal">
                    <button className="catalog-modal-close" onClick={() => setOpenFilter(false)}>
                        <HeaderIconClose/>
                    </button>
                    <CatalogFilter />
                    <button className="catalog-modal-go" onClick={() => setOpenFilter(false)}>
                        Застосувати
                    </button>
                </div>
            )}
        </div>
    )
}
