import { Slider } from "@mui/material"
import {
    CatalogIconChevron,
    CatalogIconCircle,
    CatalogIconFilter,
    CatalogIconSort,
} from "../svg/CatalogIcon"
import { useState } from "react"
import { CatalogFilterSlider } from "./CatalogFilterSlider"
import { CatalogFilterCheckbox } from "./CatalogFilterCheckbox"
import { CatalogFilterRatio } from "./CatalogFilterRatio"
import {
    HeaderIconArrow,
    HeaderIconBasket,
    HeaderIconReload,
} from "../svg/HeaderIcon"
import { baseURL } from "../../utils/utils"
import { CatalogFilter } from "./CatalogFilter"

export const CatalogFilterMain = () => {
    const [value, setValue] = useState<boolean>(false)

    const handlerValue = () => {
        setValue((s) => !s)
    }
    return (
        <div className="catalog-filter">
            <div className="catalog-filter-header">
                <button className="catalog-filter-header-but">
                    <CatalogIconFilter />
                    Фільтрація
                </button>
                <div className="catalog-filter-header-text-body">
                    <div className="catalog-filter-header-text">
                        <h5>Кращі ідеї B2B промо-продукції</h5>
                        <h5 className="catalog-filter-header-text-grad">
                            SMART аксесуарИ на кОЖЕН день
                        </h5>
                        <img
                            className="catalog-filter-header-glass"
                            src={baseURL + "/Images/glass_cube_by_gleb-2.png"}
                            alt=""
                        />
                        <img
                            className="catalog-filter-header-box"
                            src={baseURL + "/Images/Box-2.png"}
                            alt=""
                        />
                    </div>
                </div>
                <button className="catalog-filter-header-but">
                    Сортування
                    <CatalogIconSort />
                </button>
            </div>
            <div className="catalog-filter-body">
                <CatalogFilter />

                <div className="catalog-filter-list">
                    <div className="catalog-filter-list-row">
                        {[
                            "/ImagesTmp/IMG_9330.png",
                            "/ImagesTmp/Indigo Awards (8).png",
                            "/ImagesTmp/Go-WOG-44.png",
                            "/ImagesTmp/Gabriel Eich on Behance (7).png",
                        ].map((item) => (
                            <div className="catalog-filter-list-item">
                                <div className="catalog-filter-list-item-img">
                                    <img src={baseURL + item} alt="" />
                                </div>
                                <div className="catalog-filter-list-item-foot">
                                    <h6 className="catalog-filter-list-item-foot-price">
                                        $ 20.99
                                    </h6>
                                    <p className="catalog-filter-list-item-foot-art">
                                        Артикул:PG-210252
                                    </p>
                                    <div className="catalog-filter-list-bot">
                                        <div>
                                            <h4 className="catalog-filter-list-item-foot-name">
                                                Назва продукції{" "}
                                            </h4>
                                            <p className="catalog-filter-list-item-foot-order">
                                                ТОВАР Під замовлення
                                                <img
                                                    src={
                                                        baseURL +
                                                        "/Images/Basket.png"
                                                    }
                                                    alt=""
                                                />
                                            </p>
                                        </div>
                                        <button className="catalog-filter-list-item-foot-but">
                                            <div className="catalog-filter-list-item-foot-but-ico">
                                                <HeaderIconArrow />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="catalog-filter-list-row">
                        {[
                            "/ImagesTmp/IMG_9330.png",
                            "/ImagesTmp/Indigo Awards (8).png",
                            "/ImagesTmp/Go-WOG-44.png",
                            "/ImagesTmp/Gabriel Eich on Behance (7).png",
                        ].map((item) => (
                            <div className="catalog-filter-list-item">
                                <div className="catalog-filter-list-item-img">
                                    <img src={baseURL + item} alt="" />
                                </div>
                                <div className="catalog-filter-list-item-foot">
                                    <h6 className="catalog-filter-list-item-foot-price">
                                        $ 20.99
                                    </h6>
                                    <p className="catalog-filter-list-item-foot-art">
                                        Артикул:PG-210252
                                    </p>
                                    <div className="catalog-filter-list-bot">
                                        <div>
                                            <h4 className="catalog-filter-list-item-foot-name">
                                                Назва продукції{" "}
                                            </h4>
                                            <p className="catalog-filter-list-item-foot-order">
                                                ТОВАР Під замовлення
                                                <img
                                                    src={
                                                        baseURL +
                                                        "/Images/Basket.png"
                                                    }
                                                    alt=""
                                                />
                                            </p>
                                        </div>
                                        <button className="catalog-filter-list-item-foot-but">
                                            <div className="catalog-filter-list-item-foot-but-ico">
                                                <HeaderIconArrow />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="catalog-filter-footer">
                <div className="catalog-filter-footer-sort">
                    <button className="catalog-filter-header-but">
                        <CatalogIconFilter />
                        Фільтрація
                    </button>

                    <button className="catalog-filter-header-but">
                        Сортування
                        <CatalogIconSort />
                    </button>
                </div>
                <button className="catalog-filter-footer-seeall">
                    <HeaderIconReload />
                    Показати ще 20 товарів
                </button>
            </div>
            <div className="catalog-filter-body ">
                <div></div>
                <div className="catalog-filter-list-row">
                    {[
                        "/ImagesTmp/IMG_9330.png",
                        "/ImagesTmp/Indigo Awards (8).png",
                        "/ImagesTmp/Go-WOG-44.png",
                        "/ImagesTmp/Gabriel Eich on Behance (7).png",
                    ].map((item) => (
                        <div className="catalog-filter-list-item">
                            <div className="catalog-filter-list-item-img">
                                <img src={baseURL + item} alt="" />
                            </div>
                            <div className="catalog-filter-list-item-foot catalog-filter-list-item-foot-black">
                                <h6 className="catalog-filter-list-item-foot-price catalog-filter-list-item-foot-name-black">
                                    $ 20.99
                                </h6>
                                <p className="catalog-filter-list-item-foot-art catalog-filter-list-item-foot-name-black">
                                    Артикул:PG-210252
                                </p>
                                <div className="catalog-filter-list-bot">
                                    <div>
                                        <h4 className="catalog-filter-list-item-foot-name catalog-filter-list-item-foot-name-black">
                                            Назва продукції{" "}
                                        </h4>
                                        <p className="catalog-filter-list-item-foot-order">
                                            ТОВАР Під замовлення
                                            <img
                                                src={
                                                    baseURL +
                                                    "/Images/Basket.png"
                                                }
                                                alt=""
                                            />
                                        </p>
                                    </div>
                                    <button className="catalog-filter-list-item-foot-but">
                                        <div className="catalog-filter-list-item-foot-but-ico">
                                            <HeaderIconArrow />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="catalog-filter-body-black" />   
            </div>
        </div>
    )
}
