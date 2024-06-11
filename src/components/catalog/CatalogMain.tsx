import React from "react"
import { baseURL } from "../../utils/utils"

export const CatalogMain = () => {
    return (
        <div className="catalog-main">
            <img
                src="/Images/glass_cube_by_gleb.png"
                className="catalog-main-back"
                alt=""
            />
            <div className="catalog-main-list">
                <div className="catalog-main-list-item">
                    <div className="catalog-main-product">
                        <div className="catalog-main-product-img">
                            <img
                                src={baseURL + "/Images/Speaker_Cube_PowerGifts_130210-V1.png"}
                                alt=""
                            />
                        </div>
                        <h5>Power product$</h5>
                    </div>
                    <div className="catalog-main-product">
                        <div className="catalog-main-product-img">
                            <img
                                src={baseURL + "/Images/Speaker_Cube_PowerGifts_130210-V1.png"}
                                alt=""
                            />
                        </div>

                        <h5>Power product$</h5>
                    </div>
                    <div className="catalog-main-product">
                        <div className="catalog-main-product-img">
                            <img
                                src={baseURL + "/Images/Speaker_Cube_PowerGifts_130210-V1.png"}
                                alt=""
                            />
                        </div>
                        <h5>Power product$</h5>
                    </div>
                </div>
                <div className="catalog-main-list-item">
                    <div className="catalog-main-product">
                        <div className="catalog-main-product-img">
                            <img
                                src={baseURL + "/Images/Speaker_Cube_PowerGifts_130210-V1.png"}
                                alt=""
                            />
                        </div>
                        <h5>Power product$</h5>
                    </div>
                    <div className="catalog-main-product">
                        <div className="catalog-main-product-img">
                            <img
                                src={baseURL + "/Images/Speaker_Cube_PowerGifts_130210-V1.png"}
                                alt=""
                            />
                        </div>
                        <h5>Power product$</h5>
                    </div>
                    <div className="catalog-main-product">
                        <div className="catalog-main-product-lihgt">
                            <img src={baseURL + "/Images/lightning.png"} alt="" />
                        </div>
                        <p>Cтвори свій унікальній Power gift!</p>
                        <h4>Запросити прорахунок</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
