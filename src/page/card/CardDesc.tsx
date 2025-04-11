import { ProductType } from "../../type"
import { baseURL } from "../../utils/utils"
import { CardIconDownload, CardIconLike } from "../../components/svg/CardIcon"
import { HeaderIconBasket } from "../../components/svg/HeaderIcon"
import { useEffect, useState } from "react"
import { useBasketStore } from "../../components/basket/basket.store"

export const CardDesc = ({
    product,
    addToBasket,

    count,
    changeCount,

    color,
    currentColor,
    setCurrentColor,
}: {
    product: ProductType | undefined
    addToBasket: () => void

    count: number
    changeCount: (n: number) => void

    color:
        | {
              id: number
              name: string
              properties: {
                  id: number
                  name: string
                  color?: string | undefined
              }[]
          }
        | undefined
    currentColor: string
    setCurrentColor: (s: string) => void
}) => {
    const { productBasketList } = useBasketStore()

    if (!product) {
        return <></>
    }

    return (
        <div className="card-desc">
            <div className="card-desc-art">
                <p>АРТИКУЛ:</p> <span>{product.id}</span>
            </div>
            <h5 className="card-desc-name">{product.title}</h5>
            <div className="card-desc-info">
                <div>
                    <div className="card-desc-info-body1 card-desc-info-price-bodywrap">
                        <div className="card-desc-info-body1">
                            <div>
                                <p className="card-desc-info-undertitle">
                                    Артикул:
                                </p>
                                <p className="card-desc-info-text">
                                    {product.id}
                                </p>
                            </div>
                            <div>
                                <p className="card-desc-info-undertitle">
                                    На складі:
                                </p>
                                <p className="card-desc-info-text">
                                    {product.stock}
                                </p>
                            </div>
                            <div>
                                <p className="card-desc-info-undertitle">
                                    Залишок:
                                </p>
                                <p className="card-desc-info-text">
                                    {product.stock}
                                </p>
                            </div>
                        </div>
                        {product.characteristics.map((item) => (
                            <div>
                                <p className="card-desc-info-undertitle">
                                    {item.name}
                                </p>
                                <p className="card-desc-info-text">
                                    {item.properties.map((pr) => pr.name)}
                                </p>
                            </div>
                        ))}
                        {color && (
                            <div className="card-desc-info-body1 card-desc-info-body1-2">
                                <div>
                                    <p className="card-desc-info-undertitle">
                                        Колір:
                                    </p>
                                    <p className="card-desc-info-text card-desc-info-textcolor">
                                        <b>{currentColor}</b>
                                    </p>
                                </div>
                                <div className="card-desc-info-circles">
                                    {color?.properties?.map((item) => (
                                        <button
                                            className="card-desc-info-circle card-desc-info-circle-1"
                                            style={{ background: item?.color }}
                                            onClick={() =>
                                                setCurrentColor(item.name)
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="card-desc-info-price">
                            <div className="card-desc-info-price-body1">
                                <p className="card-desc-info-undertitle">
                                    Ціна:
                                </p>
                                <p className="card-desc-info-price-val">
                                    <b>{product.price}</b> <span>грн.</span>
                                </p>
                            </div>
                        </div>
                        <div className="card-desc-info-price-body1 card-desc-info-price-num">
                            <p className="card-desc-info-undertitle">
                                кількість:
                            </p>
                            <div className="card-desc-info-price-body2">
                                <button
                                    className="card-desc-info-price-button"
                                    onClick={() => changeCount(-1)}
                                >
                                    -
                                </button>
                                <span className="">{count}</span>
                                <button
                                    className="card-desc-info-price-button"
                                    onClick={() => changeCount(1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card-desc-info-order">
                        <button className="card-desc-info-order-ord">
                            <button
                                className="card-desc-info-order-ord-b1"
                                onClick={addToBasket}
                            >
                                ЗАМОВИТИ ТОВАР
                            </button>
                            <div className="card-desc-info-order-ord-b2">
                                <HeaderIconBasket />
                                {productBasketList.length && (
                                    <div className="card-desc-info-order-ord-circle">
                                        {productBasketList.length}
                                    </div>
                                )}
                            </div>
                        </button>
                        <button className="card-desc-info-order-but card-desc-info-order-but-like">
                            <CardIconLike />
                        </button>
                        <button className="card-desc-info-order-but">
                            <CardIconDownload />
                        </button>
                    </div>
                </div>
                <div className="card-desc-deliver">
                    <div>
                        <img
                            className="card-desc-deliver-img card-desc-deliver-img-fc"
                            src={baseURL + "/Images/Box.png"}
                            alt=""
                        />
                        <p className="card-desc-info-title">Доставка</p>
                        <p className="card-desc-info-desc-text">
                            Самовивіз з нашого магазину — безкоштовно. «Новою
                            поштою» по Україні — по тарифам перевізника.
                        </p>
                    </div>
                    <div>
                        <img
                            className="card-desc-deliver-img"
                            src={baseURL + "/Images/Box.png"}
                            alt=""
                        />
                        <p className="card-desc-info-title">Оплата</p>
                        <p className="card-desc-info-desc-text">
                            Оплата по рахунку.
                        </p>
                    </div>
                    <div>
                        <img
                            className="card-desc-deliver-img"
                            src={baseURL + "/Images/Box.png"}
                            alt=""
                        />
                        <p className="card-desc-info-title">Гарантія</p>
                        <p className="card-desc-info-desc-text">
                            Гарантія від виробника до 3 місяців
                        </p>
                    </div>
                    <button className="card-desc-info-kp">
                        <img src={baseURL + "/Images/KP.png"} alt="" />
                    </button>
                </div>
                <div>
                    <p className="card-desc-info-desc-underline">Опис</p>
                    <p
                        className="card-desc-info-desc-text"
                        dangerouslySetInnerHTML={{
                            __html: product?.description || "",
                        }}
                    ></p>
                </div>
            </div>
        </div>
    )
}
