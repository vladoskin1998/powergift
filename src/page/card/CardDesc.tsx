import { ProductType } from "../../type"
import { CardIconDownload, CardIconLike } from "../../components/svg/CardIcon"
import { HeaderIconBasket } from "../../components/svg/HeaderIcon"
import { useBasketStore } from "../../components/basket/basket.store"
import { Card1Icon, Card2Icon, Card3Icon } from "../../components/svg/Card-Product"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../auth/auth.store"

export const CardDesc = ({
    product,
    addToBasket,

    count,
    changeCount,

    color,
    currentColor,
    setCurrentColor,

    changeInput,
    
}: {
    product: ProductType | undefined
    addToBasket: () => void

    count: number
    changeCount: (n: number) => void
    changeInput: (value: number) => void
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
    const navigate = useNavigate()
    const isAuth = useAuthStore(s => s.isAuth)


    

    if (!product) {
        return <></>
    }


    return (
        <div className="card-desc">
            <div className="card-desc-art">
                <p>АРТИКУЛ:</p> <span style={{ marginLeft: '5px' }}><b>{product.id}</b></span>
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
                                    {product.relatedProductsByColor?.map((item) => (
                                        <button
                                            className="card-desc-info-circle card-desc-info-circle-1"
                                            style={{ background: item?.attributes?.[0].properties?.[0].color }}
                                            onClick={() => {
                                                navigate(`/catalog/${item.category.id}/card/${item.id}`)
                                                }
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
                                    <b>{isAuth ? product.partner_price : product.price}</b> <span>грн.</span>
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
                                <input
                                    onFocus={(e) => e.target.select()}
                                    className='textinput-product-count card-product-count'
                                    type='number'
                                    style={{
                                        width: `${Math.max(String(count).length, 1) + 0.5}ch`
                                    }}
                                    max={99999}
                                    value={count}
                                    onChange={e => {
                                        changeInput(Number(e.target.value))
                                    }
                                    }
                                />
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
                    <div className="card-desc-deliver-item">
                        <Card1Icon />
                        
                        <p className="card-desc-info-title">Доставка</p>
                        <p className="card-desc-info-desc-text">
                            Самовивіз з нашого магазину — безкоштовно. «Новою
                            поштою» по Україні — по тарифам перевізника.
                        </p>
                    </div>
                    <div className="card-desc-deliver-item">
                        <Card2Icon />
                     
                        <p className="card-desc-info-title">Оплата</p>
                        <p className="card-desc-info-desc-text">
                            Оплата по рахунку.
                        </p>
                    </div>
                    <div className="card-desc-deliver-item">
                        <Card3Icon />
                      
                        <p className="card-desc-info-title">Гарантія</p>
                        <p className="card-desc-info-desc-text">
                            Гарантія від виробника до 3 місяців
                        </p>
                    </div>
                 
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
function useRef<T>(arg0: null) {
    throw new Error("Function not implemented.")
}

