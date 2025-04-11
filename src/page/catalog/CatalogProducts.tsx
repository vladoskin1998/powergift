
import {
    CATALOG_PRODUCT_TITLE,
    CATALOG_PRODUCT_CLIENT,
} from "../../utils/constant"
import { baseURL } from "../../utils/utils"
import { CatalogIconConception } from "../../components/svg/CatalogIcon"
import { HeaderIconBasket, HeaderIconReload } from "../../components/svg/HeaderIcon"
import {  useNavigate, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { $api } from "../../api"
import { ProductType } from "../../type"
import { IconsGifts } from "../../components/svg/IconGifts"
import { Loader } from "../../components/loader/Loader"
import { useBasketStore } from "../../components/basket/basket.store"

const getCategoriesData = async (id: string) => {
    try {
        const { data } = await $api.get(`shop/products?categoriesId=${id}`)
        return data
    } catch (error) {
        console.error(error)
    }
}

const getAllProduct = async () => {
    try {
        const { data } = await $api.get(`shop/products`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export const CatalogProducts = () => {

    const {addProductBasketList} = useBasketStore()
    const { categoriesId } = useParams()
    const navigate = useNavigate()


    const { data, isLoading } = useQuery<ProductType[]>(
        ["shop/products&categoriesId", categoriesId],
        () => {
            return categoriesId
                ? getCategoriesData(categoriesId)
                : getAllProduct()
        },
        {
            staleTime: Infinity,
            cacheTime: 3600 * 24 * 10,
        }
    )

    const navToCard = (
        e: React.MouseEvent,
        idprod: number | undefined,
        catid?: number
    ) => {
        if (!idprod) {
            console.error("idcat or idprod is undefinded")
        }
        e.preventDefault()
        navigate(
            `/catalog/${categoriesId ? categoriesId : catid}/card/${idprod}`
        )
    }

    const addToBasket = (e: React.MouseEvent, product: ProductType) => {
        e.stopPropagation()
        addProductBasketList(product, 1)
    }

    if(isLoading){
        return <Loader/>
    }


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
                    {CATALOG_PRODUCT_TITLE.map((item, key) => (
                        <div className="catalog-product-nav-item" key={key}>
                            <img
                                src={baseURL + `/Images/${item.label}`}
                                alt={item.label}
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
                        {data?.map((product) => (
                            <div
                                onClick={(e) =>
                                    navToCard(
                                        e,
                                        product.id,
                                        product?.category?.id
                                    )
                                }
                                key={product.id}
                                className="catalog-filter-list-item"
                            >
                                <div className="catalog-filter-list-item-img catalog-filter-list-item-gift-ico">
                                    {product.files.images[0] ? (
                                        <img
                                            src={product.files.images[0]}
                                            alt={product.title}
                                        />
                                    ) : (
                                        <IconsGifts />
                                    )}
                                </div>

                                <div className="catalog-filter-list-item-foot">
                                    {/* <div className="catalog-product-colors">
                                        {product.attributes?.[0]?.properties?.map(
                                            (color) => (
                                                <div className="catalog-product-colors-c" style={{background: color?.color || '#fff'}}/>
                                            )
                                        )}
                                    </div> */}
                                    {/* <div className="catalog-product-item-staff">
                                        <img
                                            src={
                                                baseURL +
                                                "/Images/New staff.png"
                                            }
                                            alt="New"
                                        />
                                    </div> */}
                                    <div className="catalog-product-item-thr">
                                        <div>
                                            <span> Артикул:</span>{" "}
                                            <b>{product.id}</b>
                                        </div>
                                        <div>
                                            <span>Бренд:</span>{" "}
                                            <p>{product.category.name}</p>
                                        </div>
                                    </div>
                                    <h6 className="catalog-filter-list-item-foot-price">
                                        {product.title}
                                    </h6>
                                    <p className="catalog-filter-list-item-foot-order">
                                        {product.stock > 0
                                            ? "В наявності"
                                            : "Під замовлення"}
                                        <img
                                            src={baseURL + "/Images/Basket.png"}
                                            alt="Basket"
                                        />
                                    </p>
                                    <div className="catalog-filter-list-bot">
                                        <div className="catalog-product-item-bot">
                                            <div>
                                                <h5>{product.price}</h5>
                                                <span>грн</span>
                                            </div>
                                            <div className="catalog-product-item-bot-it">
                                                {product.stock}
                                                <p>в наявності</p>
                                            </div>
                                        </div>
                                        <button
                                            className="catalog-filter-list-item-foot-but"
                                            onClick={(e) =>
                                                addToBasket(e, product)
                                            }
                                        >
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
                    {CATALOG_PRODUCT_CLIENT.map((item, key) => (
                        <div className="catalog-product-nav-item" key={key}>
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
                        </span>
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
