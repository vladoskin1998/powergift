import { baseURL } from "../../utils/utils"
import { CardIconDownload, CardIconLike } from "../svg/CardIcon"
import { HeaderIconBasket } from "../svg/HeaderIcon"

export const CardDesc = () => {
    return (
        <div className="card-desc">
            <div>
                Артикул: <span>PG-240143</span>
            </div>
            <h5> Пляшка для води “Yummy” 600 мл</h5>
            <div className="card-desc-info">
                <div>
                    <div className="card-desc-info-body1 card-desc-info-body1-1">
                        <div>
                            <p className="card-desc-info-undertitle">
                                Артикул:
                            </p>
                            <p className="card-desc-info-text">PG-240143</p>
                        </div>
                        <div>
                            <p className="card-desc-info-undertitle">
                                На складі:
                            </p>
                            <p className="card-desc-info-text">654</p>
                        </div>
                        <div>
                            <p className="card-desc-info-undertitle">
                                Залишок:
                            </p>
                            <p className="card-desc-info-text">654</p>
                        </div>
                    </div>
                    <div className="card-desc-info-body1 card-desc-info-body1-2">
                        <div>
                            <p className="card-desc-info-undertitle">
                                Країна виробни:
                            </p>
                            <p className="card-desc-info-text">Китай</p>
                        </div>
                        <div>
                            <p className="card-desc-info-undertitle">
                                Категорія:
                            </p>
                            <p className="card-desc-info-text">Посуд</p>
                        </div>
                        <div>
                            <p className="card-desc-info-undertitle">
                                Матеріали:
                            </p>
                            <p className="card-desc-info-text">Титан</p>
                        </div>
                    </div>
                    <div className="card-desc-info-body1 card-desc-info-body1-2">
                        <div>
                            <p className="card-desc-info-undertitle">
                                Розміри:
                            </p>
                            <p className="card-desc-info-text">230х70 мм.</p>
                        </div>
                        <div>
                            <p className="card-desc-info-undertitle">
                                Нанесення:
                            </p>
                            <p className="card-desc-info-text">
                                Тамподрук, УФ друк
                            </p>
                        </div>
                    </div>
                    <div className="card-desc-info-body1 card-desc-info-body1-2">
                        <div>
                            <p className="card-desc-info-undertitle">Колір:</p>
                            <p className="card-desc-info-text">
                                <b>Сірий</b>
                            </p>
                        </div>
                        <div className="card-desc-info-circles">
                            <button className="card-desc-info-circle card-desc-info-circle-1" />
                            <button className="card-desc-info-circle card-desc-info-circle-2" />
                            <button className="card-desc-info-circle card-desc-info-circle-3" />
                        </div>
                    </div>
                    <div className="card-desc-info-body1-1">
                        <div>
                            <p className="card-desc-info-undertitle">
                                Особливості:
                            </p>
                            <p className="card-desc-info-text">
                                Надійна автоматична кришка з замком поверх
                                кнопки, яка захищає від самовільного відкриття
                                та розливання
                            </p>
                        </div>
                    </div>
                    <div className="card-desc-info-price">
                        <div className="card-desc-info-price-body1">
                            <p className="card-desc-info-price-undertitle">
                                ціна:
                            </p>
                            <p className="card-desc-info-price-val">
                                <b>350</b> <span>грн.</span>
                            </p>
                        </div>
                        <div className="card-desc-info-price-body1 card-desc-info-price-num">
                            <p className="card-desc-info-price-undertitle">
                                ціна:
                            </p>
                            <div className="card-desc-info-price-body2">
                                <button className="card-desc-info-price-button">
                                    -
                                </button>
                                <span className="">100</span>
                                <button className="card-desc-info-price-button">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-desc-info-order">
                        <button className="card-desc-info-order-ord">
                            <div className="card-desc-info-order-ord-b1">
                                ЗАМОВИТИ ТОВАР
                            </div>
                            <div className="card-desc-info-order-ord-b2">
                                {" "}
                                <HeaderIconBasket />
                                <div className="card-desc-info-order-ord-circle">
                                    2
                                </div>
                            </div>
                        </button>
                        <button className="card-desc-info-order-but">
                            <div>
                                <CardIconLike />
                            </div>
                        </button>
                        <button className="card-desc-info-order-but">
                            <div>
                                <CardIconDownload />
                            </div>
                        </button>
                    </div>
                    <div>
                        <p className="card-desc-info-desc-underline">Опис</p>
                        <p className="card-desc-info-desc-text">
                            Універсальна пляшка для води, з якою зручно буде
                            займатися спортом, подорожувати або використовувати
                            на роботі чи навчанні.Легкий та дуже міцний корпус з
                            приємним на дотик покриттям soft matte. Стійкий до
                            падінь чи подряпин.Надійна автоматична кришка з
                            замком поверх кнопки, яка ззахищає від самовільного
                            відкриття та розливання.Міцний та стильний ремінець,
                            який додає зручності та функціональності.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={baseURL + "/Images/Box.png"} alt="" />
                        <p className="card-desc-info-title">Доставка</p>
                        <p className="card-desc-info-desc-text">Самовивіз з нашого магазину — безкоштовно. «Новою поштою» по Україні — по тарифам перевізника.</p>
                    </div>
                    <div>
                        <img src={baseURL + "/Images/Box.png"} alt="" />
                        <p  className="card-desc-info-title">Оплата</p>
                        <p className="card-desc-info-desc-text">Оплата по рахунку.</p>
                    </div>
                    <div>
                        <img src={baseURL + "/Images/Box.png"} alt="" />
                        <p  className="card-desc-info-title">Гарантія</p>
                        <p className="card-desc-info-desc-text">Гарантія від виробника до 3 місяців</p>
                    </div>
                    <div className="card-desc-info-kp">
                    <img src={baseURL + "/Images/KP.png"} alt="" />
                    </div>

                    <div>
                      <p className="card-desc-info-desc-text">Пляшка виготовлена   з екологічно чистого матеріалу Tritan Eastman™ і може підтримувати температурні навантаження від -10 до +96Оптимальний розмір та об'єм пляшки максимально підходить для повсякденного використання.У комплекті є ситечко, яке дозволяє додавати у воду фрукти або заварювати чай.Стильна, якісна та практична.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
