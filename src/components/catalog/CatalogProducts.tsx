import {
    CATALOG_PRODUCT_TITLE,
    CATALOG_PRODUCT_CLIENT,
} from "../../utils/constant"
import { baseURL } from "../../utils/utils"
import { HeaderIconArrow, HeaderIconBasket } from "../svg/HeaderIcon"

export const CatalogProducts = () => {
    return (
        <div className="catalog-product">
            <div className="catalog-product-header">
                <img src="/Images/glass_cube_by_gleb-2.png" alt="" />
                <h5>Каталог продукції</h5>
            </div>
            <div className="catalog-product-nav">
                {CATALOG_PRODUCT_TITLE.map((item) => (
                    <div className="catalog-product-nav-item">
                        <img src={baseURL + `/Images/${item.label}`} alt="" />
                        <h5>{item.h5}</h5>
                        <p>{item.p1}</p>
                        <p>{item.p2}</p>
                        <p>{item.p3}</p>
                        <p>{item.p4}</p>
                        <p>{item.p5}</p>
                    </div>
                ))}
            </div>
            <div className="catalog-filter-body catalog-product-body">
                <div className="catalog-filter-list">
                    <div className="catalog-filter-list-row">
                        {[
                            "/ImagesTmp/botl1.png",
                            "/ImagesTmp/botl2.png",
                            "/ImagesTmp/botl3.png",
                            "/ImagesTmp/botl4.png",
                            "/ImagesTmp/botl1.png",
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

                    <div className="catalog-filter-list-row">
                        {[
                            "/ImagesTmp/botl1.png",
                            "/ImagesTmp/botl2.png",
                            "/ImagesTmp/botl3.png",
                            "/ImagesTmp/botl4.png",
                            "/ImagesTmp/botl1.png",
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
            </div>
            <div className="catalog-product-client">
                <div className="catalog-product-client-head">
                    <h5>Наші клієнти</h5>
                    <p>
                        – це дилери, рекламні агентства та сувенірні компанії та
                        типографії. Проект створений для креативних команд та
                        рекламних агенцій, які використовують брендовану
                        продукцію. Що важливо нашому клієнту?
                    </p>
                </div>
                <div className=" catalog-product-client-list">
                    {CATALOG_PRODUCT_CLIENT.map((item) => (
                        <div className="catalog-product-nav-item">
                            <img
                                src={baseURL + `/Images/${item.label}`}
                                alt=""
                            />
                            <h5>{item.h5}</h5>
                            <p>{item.p1}</p>
                            <p>{item.p2}</p>
                            <p>{item.p3}</p>
                            <p>{item.p4}</p>
                            <p>{item.p5}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="catalog-product-brand">
                <div className="catalog-product-brand-img">
                    <img src="/Images/glass_cube_by_gleb-2.png" alt="" />
                </div>
                <div className="catalog-product-brand-title">
                    <h5>Каталог продукції</h5>
                </div>

                <div className="catalog-product-brand-list">
                    <h4 className="catalog-product-brand-list-first">
                        Gradient
                    </h4>
                    <h4>
                        Pro
                        <span className="catalog-product-brand-list-first">
                            Stuff
                        </span>{" "}
                    </h4>
                    <h4>
                        Go
                        <span className="catalog-product-brand-list-first">
                            UP!
                        </span>
                    </h4>
                    <h4>
                        Fun
                        <span className="catalog-product-brand-list-first">
                            Factory
                        </span>
                    </h4>
                </div>
            </div>
        </div>
    )
}
