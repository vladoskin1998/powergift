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

export const CatalogFilter = () => {
    const [value, setValue] = useState<boolean>(false)

    const handlerValue = () => {
        setValue((s) => !s)
    }
    return (
        <div className="catalog-filter-filt">
            <p className="catalog-filter-filt-find">Знайдено 17 товарів</p>
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
            <button className="catalog-filter-filt-title catalog-filter-filt-title-but">
                застосувати
            </button>
        </div>
    )
}
