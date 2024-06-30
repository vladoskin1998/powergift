import React, { useState } from "react"
import { baseURL } from "../../utils/utils"
import { HeaderIconClose, HeaderIconSearch } from "../svg/HeaderIcon"
import { CatalogFilter } from "./CatalogFilter"

export const CatalogDesktop = () => {

    const [openFilter, setOpenFilter] = useState(false)


    const handleOpenFilter = () => {
        setOpenFilter(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    return (
        <div className="catalog-main">
            <img
                src={baseURL + "/Images/glass_cube_by_gleb-2.png"}
                className="catalog-main-back"
                alt=""
            />
            <div className="catalog-main-list catalog-main-list-none">
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
                    <div className="catalog-main-product-img">
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
