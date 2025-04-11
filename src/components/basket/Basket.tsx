import { useEffect, useState } from "react"
import { CardIconDelete } from "../svg/CardIcon"
import { HeaderIconBasket, HeaderIconClose } from "../svg/HeaderIcon"
import "./basket.scss"
import { BasketSelect } from "./BasketSelect"
import { BasketCheckModal } from "./BasketCheckModal"
import { useLocation } from "react-router-dom"

import { useBasketStore } from "./basket.store"
import { ProductType } from "../../type"

export const Basket = () => {
    const { isOpenBasket, setOpenBasket, productBasketList, addProductBasketList ,deleteProductBasketList } = useBasketStore()
  
    const [pageHeight, setPageHeight] = useState(0)
    const [activeDeliver, setActiveDeliver] = useState(1)

    const [isOpenModalCheck, setIsOpenModalCheck] = useState(false)
    const location = useLocation()

    const closeBasket = () => setOpenBasket(false)

    useEffect(() => {
        const setHeight = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            if (window.innerWidth < 700) {
                setPageHeight(windowHeight - 80)
            } else {
                setPageHeight(documentHeight - 80)
            }
        }

        setHeight()
        if(isOpenBasket){
            window.scrollTo(0,0)
        }
        window.addEventListener("resize", setHeight)

        return () => {
            window.removeEventListener("resize", setHeight)
        }
    }, [window.location, location, isOpenBasket])

    const handlerOpenModal = () => {
        setIsOpenModalCheck((s) => !s)
    }

    useEffect(() => {
        if (isOpenBasket) {
            closeBasket()
        }
    }, [window.location, location])

    const changeCount = (product: ProductType, count: number) => {
        addProductBasketList(product,count)
    }

    const deleteProduct = (id: number) => {
        deleteProductBasketList(id)
    }

    useEffect(() => {
        const basketButton = document.getElementById("basket-pc");
      
        const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as HTMLElement;
      
          if (basketButton && basketButton.contains(target)) {
            return;
          }
      
          if (target.closest(".basket")) {
            return;
          }
          
          closeBasket();
        };
      
        document.addEventListener("mousedown", handleClickOutside);
      
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isOpenBasket]);
    return (
        <>
            <div

                className={`basket  ${isOpenBasket && "basket-open"} `}
                style={{ height: pageHeight }}
            >
                <div className="basket--scroll custom--scroll">
                    <div className="basket-close-button" onClick={closeBasket}>
                        <HeaderIconClose />
                    </div>
                    <h5 className="basket-item basket-title">
                        Ваше замовлення
                    </h5>
                    <div className="basket-list ">
                        {productBasketList.map((item) => (
                            <div className="basket-item basket-list-item">
                                <div className="basket-list-item-product">
                                    <img src={item.files.images?.[0]} alt="" />
                                </div>
                                <div className="basket-list-right">
                                    <div className="basket-list-art">
                                        Артикул: <div>{}</div>
                                        <button
                                            className="basket-list-delete"
                                            onClick={() =>
                                                deleteProduct(item.id)
                                            }
                                        >
                                            <CardIconDelete />
                                        </button>
                                    </div>
                                    <div className="basket-list-text">
                                        {item.title}
                                    </div>
                                    <div className="basket-list-foot">
                                        <div className="basket-list-foot-item">
                                            <p className="basket-list-undertitle">
                                                ціна
                                            </p>
                                            <p className="basket-list-price">
                                                {item.price} <span>грн</span>
                                            </p>
                                        </div>
                                        <div className="basket-list-foot-item">
                                            <p className="basket-list-undertitle">
                                                кількість шт
                                            </p>
                                            <div className="basket-list-num">
                                                <button
                                                    onClick={() =>
                                                        changeCount(item, -1)
                                                    }
                                                >
                                                    -
                                                </button>
                                                <p>{item?.count || 1}</p>
                                                <button
                                                    onClick={() =>
                                                        changeCount(item, 1)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="basket-list-foot-item">
                                            <p className="basket-list-undertitle">
                                                всього
                                            </p>
                                            <p className="basket-list-price">
                                                {(item?.count || 1) *
                                                    Number(item?.price)}{" "}
                                                <span>грн</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="basket-paymant">
                        <div>
                            <p>РАЗОМ ДО СПЛАТИ</p>
                            <h5>
                                {productBasketList.reduce(
                                    (pr, st) =>
                                        pr +
                                        Number(st.price) * (st?.count || 1),
                                    0
                                )}{" "}
                                <span>грн</span>
                            </h5>
                        </div>
                        <div className="basket-paymant-select">
                            <p>ПІДГОТУВАТИ РАХУНОК ДО СПЛАТИ:</p>
                            <BasketSelect />
                        </div>
                    </div>
                    <div className="basket-form">
                        <h6 className="basket-form-title">
                            ОБЕРІТЬ СПОСІБ ДОСТАВКИ
                        </h6>
                        <div className="basket-form-deliver">
                            <button
                                className={`basket-form-deliver ${
                                    activeDeliver === 1 &&
                                    "basket-form-deliver-active"
                                }`}
                                onClick={() => setActiveDeliver(1)}
                            >
                                Адреса доставки
                            </button>
                            <button
                                className={`basket-form-deliver ${
                                    activeDeliver === 2 &&
                                    "basket-form-deliver-active"
                                }`}
                                onClick={() => setActiveDeliver(2)}
                            >
                                Нова Пошта
                            </button>
                            <button
                                className={`basket-form-deliver ${
                                    activeDeliver === 3 &&
                                    "basket-form-deliver-active"
                                }`}
                                onClick={() => setActiveDeliver(3)}
                            >
                                Самовивіз
                            </button>
                        </div>
                    </div>
                    <div className="basket-form-input  ">
                        <input
                            className="basket-form-input-item"
                            placeholder="Ім'я"
                        />
                        <input
                            className="basket-form-input-item"
                            placeholder="Прізвище"
                        />
                        <input
                            className="basket-form-input-item"
                            placeholder="Телефон"
                        />
                        <input
                            className="basket-form-input-item"
                            placeholder="Адреса"
                        />
                        <input
                            className="basket-form-input-item"
                            placeholder="Місто"
                        />
                        <input
                            className="basket-form-input-item"
                            placeholder="Країна"
                        />
                        <input
                            className="basket-form-input-item"
                            placeholder="Область/район"
                        />
                    </div>
                </div>
                <button
                    className="basket-button"
                    onClick={() => {
                        handlerOpenModal()
                        closeBasket()
                    }}
                >
                    <div className="basket-button-text">
                        ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
                    </div>
                    <div className="basket-button-icon">
                        <HeaderIconBasket />
                        <div className="basket-button-icon-num">2</div>
                    </div>
                </button>
                {isOpenModalCheck && (
                    <BasketCheckModal setIsOpenModalCheck={handlerOpenModal} />
                )}
            </div>
        </>
    )
}
