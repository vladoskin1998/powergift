import { useEffect } from "react"
import { baseURL } from "../../utils/utils"
import { CardIconDelete } from "../svg/CardIcon"
import { useAppContext } from "../../context/AppContext"
import { HeaderIconClose } from "../svg/HeaderIcon"

export const BasketCheckModal = ({
    setIsOpenModalCheck,
}: {
    setIsOpenModalCheck: () => void
}) => {
    const { handlerHiddenScroll } = useAppContext()
    useEffect(() => {
        handlerHiddenScroll("hidden")
        window.scrollTo({ top: 0, behavior: "smooth" })
        return () => handlerHiddenScroll("scroll")
    }, [])
    return (
        <div className="basket-modal">
            <div className="basket-modal-body custom--scroll custom--scroll-dark">
                <div className="basket-modal-info">
                    <div className="basket-modal-header">
                        <div>
                            <h6 className="basket-modal-header-num">
                                Замовлення #12345
                            </h6>
                            <p className="basket-modal-header-date">
                                08 тра 2024, 15:22
                            </p>
                        </div>
                        <div className="basket-modal-header-ord">
                            Рахунок:
                            <br />
                            <b>№01052024</b>
                        </div>

                        <div
                            className="basket-modal-close-button"
                            onClick={setIsOpenModalCheck}
                        >
                            <HeaderIconClose />
                        </div>
                    </div>

                    <h6 className="basket-modal-deliv">Доставка</h6>

                    <div className="basket-modal-status-info">
                        <div>
                            <p className="basket-modal-status">Статус</p>
                            <h6 className="basket-modal-status-book">
                                Бронювання
                            </h6>
                        </div>

                        <p className="basket-modal-manager">
                            Менеджер:
                            <p> Дмитро Дмитрович</p>
                        </p>
                        <p className="basket-modal-client-info">
                            Імя Побатькові
                            <br />
                            Email
                            <br />
                            +38 (095) 115 10 00
                            <br />
                        </p>
                    </div>
                    <div className="basket-modal-payment-info">
                        <p className="basket-modal-payment-methods">
                            Способи оплати:
                            <br />
                            Виставити рахунок
                        </p>
                        <p className="basket-modal-payment-methods">
                            Метод доставки:
                            <br />
                            Нова Пошта
                        </p>
                        <p className="basket-modal-payment-methods basket-modal-address">
                            Київ
                            <br />
                            Україна
                            <br />
                            MOW
                            <br />
                        </p>
                    </div>
                    <h6 className="basket-modal-notes-title">Примітки</h6>
                    <div className="basket-modal-notes">
                        <p>Додаткові коментарі від Клієнта. Бронювання.</p>
                        <p>Додаткові коментарі від Клієнта. Бронювання.</p>.
                    </div>
                    <div className="basket-modal-deliv-mob">
                        <h6 className="basket-modal-deliv-mob-title">Доставка</h6>
                        <div className="basket-modal-deliv-mob-body">
                            <p >
                                Імя Побатькові
                                <br />
                                Email
                                <br />
                                +38 (095) 115 10 00
                                <br />
                            </p>
                            <p >
                                Київ
                                <br />
                                Україна
                                <br />
                                MOW
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className=" basket-list basket-modal-list "
                    style={{ overflow: "hidden" }}
                >
                    {[1, 2].map((item) => (
                        <div className="basket-item basket-list-item">
                            <div className="basket-list-item-img">
                                <img
                                    src={
                                        baseURL +
                                        "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="basket-list-right">
                                <div className="basket-list-right-title">
                                    <div className="basket-list-text">
                                        Bloototh BoomBox Mini. Black.
                                    </div>
                                    <div className="basket-list-art">
                                        Артикул: <div>PG-240143</div>
                                    </div>
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
                                <button className="basket-list-delete">
                                    <CardIconDelete />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="basket-modal-footer">
                    <p>
                        Сума: <br />
                        39150,16 грн
                    </p>
                    <p>
                        Знижка: <br />
                        3890,16 грн
                    </p>
                    <p>
                        Разом:
                        <br />
                        40678,16 грн
                    </p>
                    <div className="basket-modal-footer-img">
                        <img
                            src={baseURL + "/Images/hellocustomer.png"}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="basket-modal-fon" />
        </div>
    )
}
