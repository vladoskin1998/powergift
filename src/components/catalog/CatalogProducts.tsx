import {
    CATALOG_PRODUCT_TITLE,
    CATALOG_PRODUCT_CLIENT,
} from "../../utils/constant"
import { baseURL } from "../../utils/utils"
import { CatalogIconConception } from "../svg/CatalogIcon"
import {
    HeaderIconBasket,
    HeaderIconReload,
} from "../svg/HeaderIcon"

export const CatalogProducts = () => {
    return (
        <div className="catalog-product">
            <div className="catalog-product-header">
                <div className="catalog-product-header-mob">
                    <h4>Ukrainian promo gifts b2b company</h4>
                    <h5>
                        SMART аксесуарИ <br />
                        на кОЖЕН день
                    </h5>
                </div>

                <img
                    src="/Images/glass_cube_by_gleb-2.png"
                    alt=""
                    className="catalog-product-header-img"
                />
                <h5 className="catalog-product-header-title">
                    Каталог продукції
                </h5>

                <div className="catalog-product-header-mob">
                    <div className="catalog-product-header-mob-but">
                        <div>ПРОРАХУЙ СВОЮ КОНЦЕПЦІЮ</div>
                        <div className="catalog-product-header-mob-but-svg">
                            <CatalogIconConception />
                        </div>
                    </div>
                </div>
            </div>
            <div className="catalog-product-reverse">
                <div className="catalog-product-nav">
                    <div className="catalog-product-nav-mob-img">
                        <img src={baseURL + "/Images/helloworld.png"} alt="" />
                    </div>
                    {CATALOG_PRODUCT_TITLE.map((item) => (
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
                <div className="catalog-filter-body catalog-product-body">
                    <div className="catalog-filter-list">
                        {[
                            "/ImagesTmp/botl1.png",
                            "/ImagesTmp/botl2.png",
                            "/ImagesTmp/botl3.png",
                            "/ImagesTmp/botl4.png",
                            "/ImagesTmp/botl1.png",
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

                        <div className="catalog-filter-body-black catalog-filter-body-black-mob" />
                        <button className="catalog-product-mob-reload">
                            <HeaderIconReload />
                            Показати ще 20 товарів
                        </button>
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

            <div className="catalog-product-promo">
                <div className="catalog-product-promo-img1">
                    <img src={baseURL + "/Images/createyourself.png"} alt="" />
                </div>
                <div className="catalog-product-promo-text">Promo Gifts</div>
                <div className="catalog-product-promo-img2">
                    <img
                        src={baseURL + "/Images/glass_cube_by_gleb-2.png"}
                        alt=""
                    />
                </div>

                <img
                    src={baseURL + "/Images/bus.png"}
                    alt=""
                    className="catalog-product-promo-img3"
                />
                <div className="catalog-product-promo-flag">
                    <img src={baseURL + "/Images/flagua.png"} alt="" />
                    <div>
                        <span>УКРАЇНСЬКА</span> <br />
                        КОМПАНІЯ
                    </div>
                </div>
                <div className="catalog-product-promo-foot">
                    УКРАЇНСЬКА КОМПАНІЯ, b2b <br />
                    <span>
                        ПОСТАЧАЛЬНИК ПРОМО ПОДАРУкції ДЛЯ РЕКЛАМНИХ АГЕНТСТВ &
                        дилерів
                    </span>
                </div>
            </div>

            <div className="catalog-product-navigation">
                <div className="catalog-product-navigation-title">
                    Навігація проекту
                </div>
                <div className="catalog-product-navigation-list">
                    <div className="catalog-product-navigation-row">
                        <div className="catalog-product-navigation-item">
                            Дилерам
                        </div>
                        <div className="catalog-product-navigation-item">
                            Партнерство
                        </div>
                        <div className="catalog-product-navigation-item">
                            Бренди
                        </div>
                        <div className="catalog-product-navigation-item">
                            Каталог товарів PDF
                        </div>
                        <div className="catalog-product-navigation-item">
                            Контакти
                        </div>
                    </div>
                    <div className="catalog-product-navigation-row">
                        <div className="catalog-product-navigation-item">
                            Про компанію
                        </div>
                        <div className="catalog-product-navigation-item">
                            Карьера
                        </div>
                        <div className="catalog-product-navigation-item">
                            FAQ
                        </div>
                        <div className="catalog-product-navigation-item">
                            Контакти
                        </div>
                        <div className="catalog-product-navigation-item">
                            Новини
                        </div>
                    </div>
                </div>
                <div className="catalog-product-navigation-paymant">
                    <img src={baseURL + "/Images/Paymant.png"} alt="" />
                </div>
                <div className="catalog-product-navigation-foot">
                    © <b>Power</b>Gifts. Ukrainian promo gifts b2b company. All
                    Rights Reserved. Let’s create.
                </div>
            </div>
        </div>
    )
}
