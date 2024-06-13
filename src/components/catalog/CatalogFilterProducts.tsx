import { baseURL } from "../../utils/utils"
import { CatalogIconFilter, CatalogIconSort } from "../svg/CatalogIcon"
import { HeaderIconArrow, HeaderIconBasket, HeaderIconReload } from "../svg/HeaderIcon"
import { CatalogFilter } from "./CatalogFilter"

export const CatalogFilterProducts = () => {
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
                <div className="catalog-filter-list catalog-product-body">
                  
                        {[
                            "/ImagesTmp/botl1.png",
                            "/ImagesTmp/botl2.png",
                            "/ImagesTmp/botl3.png",
                            "/ImagesTmp/botl4.png",
                            "/ImagesTmp/botl1.png",
                            "/ImagesTmp/botl2.png",
                            "/ImagesTmp/botl3.png",
                            "/ImagesTmp/botl4.png",
                         
                        ].map((item) => (
                            <div className="catalog-filter-list-item">
                                <div className="catalog-filter-list-item-img">
                                    <img src={baseURL + item} alt="" />
                                </div>

                                <div className="catalog-filter-list-item-foot">
                                    <div className="catalog-product-item-staff">
                                        <img
                                            src={
                                                baseURL +
                                                "/Images/New staff.png"
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <img
                                        src={baseURL + "/Images/Colors.png"}
                                        alt=""
                                    />
                                    <div className="catalog-product-item-thr">
                                        <div>
                                            <span> Артикул:</span>{" "}
                                            <b>PG-240143</b>{" "}
                                        </div>
                                        <div>
                                            <span>Бренд:</span>{" "}
                                            <p>Fun Factory</p>{" "}
                                        </div>
                                        <div>
                                            <span>Бренд:</span> <h6>Floyd</h6>
                                        </div>
                                    </div>
                                    <h6 className="catalog-filter-list-item-foot-price">
                                        Пляшка для води “Yummy” 600 мл.
                                    </h6>
                                    <p className="catalog-filter-list-item-foot-order">
                                        ТОВАР Під замовлення
                                        <img
                                            src={baseURL + "/Images/Basket.png"}
                                            alt=""
                                        />
                                    </p>
                                    <div className="catalog-filter-list-bot">
                                        <div className="catalog-product-item-bot">
                                            <div>
                                                <h5>750</h5>
                                                <span>грн</span>
                                            </div>
                                            <div className="catalog-product-item-bot-it">
                                                1029
                                                <p>в наявності</p>
                                            </div>
                                            <div className="catalog-product-item-bot-it">
                                                1029
                                                <p>доступно</p>
                                            </div>
                                        </div>
                                        <button className="catalog-filter-list-item-foot-but">
                                            <div className="catalog-filter-list-item-foot-but-ico">
                                                <HeaderIconBasket />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                

                   
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
            <div className="catalog-filter-body">
                <div></div>
                        <div>
                        <div className="catalog-filter-list">
                        {[
                            "/ImagesTmp/botl1.png",
                            "/ImagesTmp/botl2.png",
                            "/ImagesTmp/botl3.png",
                            "/ImagesTmp/botl4.png",
                            "/ImagesTmp/botl1.png",
                            "/ImagesTmp/botl2.png",
                            "/ImagesTmp/botl3.png",
                            "/ImagesTmp/botl4.png",
                      
                        ].map((item) => (
                            <div className="catalog-filter-list-item">
                                <div className="catalog-filter-list-item-img">
                                    <img src={baseURL + item} alt="" />
                                </div>

                                <div className="catalog-filter-list-item-foot">
                                    <div className="catalog-product-item-staff">
                                        <img
                                            src={
                                                baseURL +
                                                "/Images/New staff.png"
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <img
                                        src={baseURL + "/Images/Colors.png"}
                                        alt=""
                                    />
                                    <div className="catalog-product-item-thr">
                                        <div>
                                            <span> Артикул:</span>{" "}
                                            <b>PG-240143</b>{" "}
                                        </div>
                                        <div>
                                            <span>Бренд:</span>{" "}
                                            <p>Fun Factory</p>{" "}
                                        </div>
                                        <div>
                                            <span>Бренд:</span> <h6>Floyd</h6>
                                        </div>
                                    </div>
                                    <h6 className="catalog-filter-list-item-foot-price">
                                        Пляшка для води “Yummy” 600 мл.
                                    </h6>
                                    <p className="catalog-filter-list-item-foot-order">
                                        ТОВАР Під замовлення
                                        <img
                                            src={baseURL + "/Images/Basket.png"}
                                            alt=""
                                        />
                                    </p>
                                    <div className="catalog-filter-list-bot">
                                        <div className="catalog-product-item-bot">
                                            <div>
                                                <h5>750</h5>
                                                <span>грн</span>
                                            </div>
                                            <div className="catalog-product-item-bot-it">
                                                1029
                                                <p>в наявності</p>
                                            </div>
                                            <div className="catalog-product-item-bot-it">
                                                1029
                                                <p>доступно</p>
                                            </div>
                                        </div>
                                        <button className="catalog-filter-list-item-foot-but">
                                            <div className="catalog-filter-list-item-foot-but-ico">
                                                <HeaderIconBasket />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                        </div>
                <div className="catalog-filter-body-black" />
            </div>
        </div>
    )
}
