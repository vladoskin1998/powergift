import { useEffect, useState } from "react"
import { baseURL } from "../../utils/utils"
import { CardIconDelete } from "../svg/CardIcon"
import { HeaderIconBasket, HeaderIconClose } from "../svg/HeaderIcon"
import "./basket.scss"
import { BasketSelect } from "./BasketSelect"
import { BasketCheckModal } from "./BasketCheckModal"

export const Basket = ({
    openBasket,
    setOpenBasket,
}: {
    openBasket: boolean
    setOpenBasket: () => void
}) => {
    const [pageHeight, setPageHeight] = useState(0)
    const [activeDeliver, setActiveDeliver] = useState(1)

    const [isOpenModalCheck, setIsOpenModalCheck] = useState(false)

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
        window.addEventListener("resize", setHeight)

        return () => {
            window.removeEventListener("resize", setHeight)
        }
    }, [window.location])

    const handlerOpenModal = () => {
        setIsOpenModalCheck(s => !s)
   
    }

    return (
        <>
            <div
                className={`basket custom--scroll ${openBasket && "basket-open"}`}
                style={{ height: pageHeight }}
            >
                <div className="basket-close-button" onClick={setOpenBasket}>
                    <HeaderIconClose />
                </div>
                <h5 className="basket-item basket-title">Ваше замовлення</h5>
                <div className="basket-list ">
                    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                        <div className="basket-item basket-list-item">
                            <div>
                                <img
                                    src={
                                        baseURL +
                                        "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="basket-list-right">
                                <div className="basket-list-art">
                                    Артикул: <div>PG-240143</div>
                                    <button className="basket-list-delete">
                                        <CardIconDelete />
                                    </button>
                                </div>
                                <div className="basket-list-text">
                                    Bloototh BoomBox Mini. Black.{" "}
                                </div>
                                <div className="basket-list-foot">
                                    <div className="basket-list-foot-item">
                                        <p className="basket-list-undertitle">
                                            ціна
                                        </p>
                                        <p className="basket-list-price">
                                            999 <span>грн</span>
                                        </p>
                                    </div>
                                    <div className="basket-list-foot-item">
                                        <p className="basket-list-undertitle">
                                            кількість шт
                                        </p>
                                        <div className="basket-list-num">
                                            <button>-</button>
                                            <p>100</p>
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <div className="basket-list-foot-item">
                                        <p className="basket-list-undertitle">
                                            всього
                                        </p>
                                        <p className="basket-list-price">
                                            100 999 <span>грн</span>
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
                            350 000 <span>грн</span>
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
                <button className="basket-button" onClick={() =>{
                    handlerOpenModal()
                    setOpenBasket()
                } }>
                    <div className="basket-button-text">
                        ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
                    </div>
                    <div className="basket-button-icon">
                        <HeaderIconBasket />
                        <div className="basket-button-icon-num">2</div>
                    </div>
                </button>
                {isOpenModalCheck && <BasketCheckModal setIsOpenModalCheck={handlerOpenModal}/>}
            </div>
        </>
    )
}
