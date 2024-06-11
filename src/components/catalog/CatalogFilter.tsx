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
import { HeaderIconArrow, HeaderIconBasket, HeaderIconReload } from "../svg/HeaderIcon"
import { baseURL } from "../../utils/utils"

export const CatalogFilter = () => {
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
                <div className="catalog-filter-filt">
                    <p className="catalog-filter-filt-find">
                        Знайдено 17 товарів
                    </p>
                    <h5 className="catalog-filter-filt-title">Фільтрація</h5>
                    <h6>Ціна</h6>
                    <div className="catalog-filter-filt-price">
                        <div className="catalog-filter-filt-price-item">
                            <span>Від</span>
                            <input
                                type="text"
                                className="catalog-filter-filt-price-inp"
                                placeholder="$ 0"
                            />
                        </div>
                        <div className="catalog-filter-filt-price-item">
                            <span>До</span>
                            <input
                                type="text"
                                className="catalog-filter-filt-price-inp"
                                placeholder="$ 638"
                            />
                        </div>
                    </div>
                    <div>
                        <CatalogFilterSlider />
                    </div>
                    <div className="catalog-filter-filt-type">
                        <div className="catalog-filter-filt-ftitle">
                            <h6>Тип товару</h6>
                            <button>
                                <CatalogIconChevron />
                            </button>
                        </div>

                        <div className="catalog-filter-filt-type-item">
                            <div>
                                <CatalogFilterCheckbox />
                            </div>
                            <p>Product name</p>
                            <p>+51</p>
                        </div>

                        <button className="catalog-filter-filt-butall">
                            Показати все
                        </button>
                    </div>

                    <div className="catalog-filter-filt-type">
                        <div className="catalog-filter-filt-ftitle">
                            <h6>Колір</h6>
                            <button>
                                <CatalogIconChevron />
                            </button>
                        </div>
                    </div>

                    <div className="catalog-filter-filt-type">
                        <div className="catalog-filter-filt-ftitle">
                            <h6>Матеріал</h6>
                            <button>
                                <CatalogIconChevron />
                            </button>
                        </div>
                    </div>

                    <div className="catalog-filter-filt-type">
                        <div className="catalog-filter-filt-ftitle">
                            <h6>Стать</h6>
                            <button>
                                <CatalogIconChevron />
                            </button>
                        </div>
                        <div className="catalog-filter-filt-sex">
                            <div className="catalog-filter-filt-type-item catalog-filter-filt-sex-item">
                                <div>
                                    <CatalogFilterRatio
                                        open={value}
                                        hendlerOpen={handlerValue}
                                    />
                                </div>
                                <p>Man</p>
                                <p>+51</p>
                            </div>
                            <div className="catalog-filter-filt-type-item catalog-filter-filt-sex-item">
                                <div>
                                    <CatalogFilterRatio
                                        open={!value}
                                        hendlerOpen={handlerValue}
                                    />
                                </div>
                                <p>Woman</p>
                                <p>+51</p>
                            </div>
                            <button className="catalog-filter-filt-butall">
                                Показати все
                            </button>
                        </div>
                    </div>

                    <div className="catalog-filter-filt-type">
                        <div className="catalog-filter-filt-ftitle">
                            <h6>Розмір</h6>
                            <button>
                                <CatalogIconChevron />
                            </button>
                        </div>
                    </div>

                    <button className="catalog-filter-filt-skip">
                         Скидання
                        <CatalogIconCircle />
                    </button>
                    <button className="catalog-filter-filt-title">
                        застосувати
                    </button>
                </div>

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
                                                    src={baseURL + "/Images/Basket.png"}
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
                                                    src={baseURL + "/Images/Basket.png"}
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
                        <HeaderIconReload/>
                        Показати ще 20 товарів</button>
                </div>
        </div>
    )
}
