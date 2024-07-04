import { useEffect, useState } from "react"
import { baseURL } from "../../utils/utils"
import { CardIconDelete } from "../svg/CardIcon"
import { HeaderIconBasket } from "../svg/HeaderIcon"
import "./basket.scss"

export const Basket = ({
    openBasket,
    setOpenBasket,
}: {
    openBasket: boolean
    setOpenBasket: () => void
}) => {
    const [pageHeight, setPageHeight] = useState(0)

    useEffect(() => {
        const setHeight = () => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
    
          if (window.innerWidth < 700) {
            setPageHeight(windowHeight - 80);
          } else {
            setPageHeight(documentHeight - 80);
          }
        };
    
        setHeight();
        window.addEventListener('resize', setHeight);
    
        return () => {
          window.removeEventListener('resize', setHeight);
        };
      }, []);

    return (
        <div
            className={`basket ${openBasket && "basket-open"}`}
            style={{ height: pageHeight }}
        >
            <h5 className="basket-item basket-title">Ваше замовлення</h5>
            <div className="basket-list">
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
            <div className="basket-item basket-paymant">
                <p>РАЗОМ ДО СПЛАТИ</p>
                <h5>
                    350 000 <span>грн</span>
                </h5>
            </div>
            <button className="basket-button" onClick={setOpenBasket}>
                <div className="basket-button-text">ПІДТВЕРДИТИ ЗАМОВЛЕННЯ</div>
                <div className="basket-button-icon">
                    <HeaderIconBasket />
                    <div className="basket-button-icon-num">2</div>
                </div>
            </button>
        </div>
    )
}
