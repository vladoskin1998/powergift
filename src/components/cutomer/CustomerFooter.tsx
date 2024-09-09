import React from "react"

export const CustomerFooter = () => {
    return (
        <div className="customer-footer">
            <div>
                <h6>Навігація</h6>
                <div className="customer-footer-list">
                    <p> Компанія</p>
                    <p>Карьера</p>
                    <p>Новини</p>
                    <p>Контакти</p>
                    <p>Карта сайту</p>
                </div>
            </div>
            <div>
                <h6>Продукція</h6>
                <div className="customer-footer-list">
                    <p> Каталог товарів</p>
                    <p>Акційни товари</p>
                    <p>Каталоги PDF</p>
                    <p>Наші бренди</p>
                    <p>FAQ. </p>
                </div>
            </div>
            <div>
                <h6>Співпраця</h6>
                <div className="customer-footer-work">
                    <div className="customer-footer-list ">
                        <p> Дилерська прогама</p>
                        <p>Стати Дилером</p>
                        <p>Партнери </p>
                    </div>
                    <div className="customer-footer-list">
                        <h5>РОЗКЛАД РОБОТИ</h5>
                        <div>
                            <div>Пн - Пт: 09:00 - 18:00</div>
                            <div>Сб - Нд: Вихідні дні🏝️</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h6> FAQ.</h6>
                <div className="customer-footer-list">
                    <p> Навіщо реєструватися</p>
                    <p>Повернення продукції</p>
                    <p>Торгівельні Умови</p>
                    <p>Якість</p>
                    <p>Доставка</p>
                    <p>Оплата</p>
                    <p>Рекламація</p>
                    <p>Захист особистих даних</p>
                </div>
            </div>
            <div>
                <h6> кабінет</h6>
                <div className="customer-footer-list">
                    <p> Вхід в кабінет</p>
                    <p>Реєстрація компанії</p>
                    <ul>
                        <li>Мій акаунт</li>
                        <li>Мої адреси</li>
                        <li>Закладки</li>
                        <li>Історія замовлень</li>
                        <li>Повернення</li>
                        <li>Підписка</li>
                    </ul>
                </div>
            </div>

            <div>
                <h6>Контакти</h6>
                <div className="customer-footer-list">
                    <p>
                        Україна, м.Київ,
                        <br />
                        вул.Машинобудівна,
                        <br />
                        Будинок 50 Н, офис 10
                    </p>

                    <p>
                        +38 (044) 331-26-01
                        <br />
                        +38 (067) 675-44-5а{" "}
                    </p>

                    <p>connect@power-gifts.com.ua</p>
                </div>
            </div>
        </div>
    )
}
