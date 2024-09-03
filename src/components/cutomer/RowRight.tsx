import { baseURL } from "../../utils/utils"
import {
    CustomerIconCube,
    CustomerIconLike,
    CustomerIconSee,
} from "../svg/CustomerIcon"

import { CustomerSwiper } from "./CustomerSwiper"
import { RowRightList } from "./RowRightList"
export const RowRight = () => {
    return (
        <div className="customer-right">
            <div className="customer-right-hello">
                <div className="customer-right-hello-img">
                    <img src={baseURL + "/Images/hellocustomer.png"} alt="" />{" "}
                </div>
                <div className="customer-right-hello-text">
                    <p>
                        На цій сторінці ви можете змінити дані для авторизації і
                        персональну інформацію для її використання при
                        розміщенні заказов. Щоб підвищити рівень безпеки свого
                        облікового запису, рекомендується уникати паролів, в
                        яких використовуються:
                    </p>
                    <ul>
                        <li>Відстеження замовлень на персональній сторінці</li>
                        <li>
                            Можливість налаштувати магазин під себе для більш
                            зручних покупок
                        </li>
                        <li>Прискорене оформлення наступних замовлень</li>
                    </ul>
                </div>
            </div>
            <div className="customer-right-order">
                <h6>
                    <CustomerIconCube />
                    <p>Мої замовлення</p>
                </h6>
                <div></div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Статус</th>
                        <th>Покупець</th>
                        <th>Дата заявки</th>
                        <th>Разом</th>
                        <th>Коментарі</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>№123456</td>
                        <td>В обробці</td>
                        <td>Ім’я Прізвище</td>
                        <td>25 квітня 2024. 14:45</td>
                        <td>12 500,00 грн</td>
                        <td>Прошу виставити рахунок на ТОВ Хелоу Про</td>
                        <td className="customer-right-order-watch">
                            {" "}
                            <button>Дивитися</button>
                            <CustomerIconSee />
                        </td>
                    </tr>
                    <tr>
                        <td>№123456</td>
                        <td>В обробці</td>
                        <td>Ім’я Прізвище</td>
                        <td>25 квітня 2024. 14:45</td>
                        <td>12 500,00 грн</td>
                        <td>Прошу виставити рахунок на ТОВ Хелоу Про</td>
                        <td className="customer-right-order-watch">
                            <button>Дивитися</button>
                            <CustomerIconSee />
                        </td>
                    </tr>
                </table>
            </div>
            <CustomerSwiper />
            <div className="customer-right-desire">
                <h6 className="customer-right-desire-title">
                    <p className="customer-right-desire-title-like">
                        <CustomerIconLike /> Мій список бажань
                    </p>
                    <span>Найчастіше додають в лист бажань</span>
                </h6>
                <div className="customer-right-desire-list">
                    <RowRightList/>
                </div>
            </div>
        </div>
    )
}
