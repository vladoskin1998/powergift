import { baseURL } from "../../utils/utils"
import {
    CustomerHome,
    CustomerIconBag,
    CustomerIconCube,
    CustomerIconLeftChevron,
    CustomerIconPen,
    CustomerIconUser,
} from "../svg/CustomerIcon"
import { CustomerSelect } from "./CustomerSelect"

const docs = [
    { name: "GDisc", src: baseURL + "/Images/GoogleDrive.png" },
    { name: "Docs", src: baseURL + "/Images/Docs.png" },
    { name: "Concepts", src: baseURL + "/Images/Concepts.png" },
    { name: "Money", src: baseURL + "/Images/Money.png" },
    { name: "ToDo List", src: baseURL + "/Images/ToDoList.png" },
]

const messenger = [
    baseURL + "/Images/TG.png",
    baseURL + "/Images/VB.png",
    baseURL + "/Images/FB.png",
    baseURL + "/Images/SK.png",
    baseURL + "/Images/WA.png",
 ]
export const RowLeft = () => {
    return (
        <div className="customer-left">
            <div className="customer-left-bread">
                <CustomerHome />
                <CustomerIconLeftChevron />
                Особистий кабінет
                <CustomerIconLeftChevron />
                Управління акаунтом
            </div>
            <div className="customer-left-body">
                <div>
                    <img src={baseURL + "/Images/cardvisa.png"} alt="" />
                </div>
                <div className="customer-left-docs">
                    {docs.map((item) => (
                        <div className="customer-left-docs-item">
                            <div className="customer-left-docs-item-img">
                                <img src={item.src} alt="" />
                            </div>

                            <button>{item.name}</button>
                        </div>
                    ))}
                </div>
                <div className="customer-left-info">
                    <h6 className="customer-left-info-title">
                        <CustomerIconUser />
                        <span>Особиста інформація</span>
                    </h6>
                    <div className="customer-left-info-text">
                        <button className="customer-left-info-text-pen">
                            <CustomerIconPen />
                        </button>

                        <input
                            type="text"
                            placeholder="Ім'я Прізвище"
                            className="customer-left-info-input"
                        />
                        <input
                            type="text"
                            placeholder="+380951151000"
                            className="customer-left-info-input"
                        />
                        <input
                            type="text"
                            placeholder="sale@power-gift.com.ua"
                            className="customer-left-info-input"
                        />
                    </div>
                </div>
                <div className="customer-left-company">
                    <h6 className="customer-left-company-title">
                        <button className="customer-left-company-title-item">
                            <CustomerIconBag />
                            <p>Компанія</p>
                        </button>
                        <button className="customer-left-company-title-item">
                            <span>+</span>
                            <p>Додати</p>
                        </button>
                    </h6>
                    <div className="customer-left-company-select">
                        <CustomerSelect />
                        <div className="customer-left-info-text">
                            <button className="customer-left-info-text-pen">
                                <CustomerIconPen />
                            </button>
                            <input
                                type="text"
                                placeholder="Тов “Павэр Гіфт”"
                                className="customer-left-info-input"
                            />
                            <input
                                type="text"
                                placeholder="ЕДРПО: 4539   4659   2157 2356"
                                className="customer-left-info-input"
                            />
                            <input
                                type="text"
                                placeholder="платник ПДВ"
                                className="customer-left-info-input"
                            />
                            <input
                                type="text"
                                placeholder="Україна, м.Київ, "
                                className="customer-left-info-input"
                            />
                            <input
                                type="text"
                                placeholder="вул.Машинобудівна,"
                                className="customer-left-info-input"
                            />
                            <input
                                type="text"
                                placeholder="Будинок 50 Н, офис 10"
                                className="customer-left-info-input"
                            />
                            <input
                                type="text"
                                placeholder="+380951151000"
                                className="customer-left-info-input"
                            />
                            <input
                                type="text"
                                placeholder="sale@power-gift.com.ua"
                                className="customer-left-info-input"
                            />
                        </div>
                    </div>
                </div>
                <div className="customer-left-prof">
                    <div className="customer-left-prof-item">
                        <CustomerIconCube />
                        Мої замовлення
                    </div>
                    <div className="customer-left-prof-item">
                        <CustomerIconCube />
                        Мій список бажань
                    </div>
                    <div className="customer-left-prof-item">
                        <CustomerIconCube />
                        Змінити пароль
                    </div>
                    <div className="customer-left-prof-item">
                        <CustomerIconCube />
                        Вихід з кабінету.
                    </div>
                </div>

                <div className="customer-left-meneger">
                    <div className="customer-left-meneger-text">
                        <p> Персональний менеджер</p>
                        <h6>Дмитро Дмитрович</h6>
                        <h6>+38 0123 45 67 89</h6>
                        <h6>sale@power-gift.com.ua</h6>
                    </div>

                    <div className="customer-left-meneger-messenger">
                        {
                            messenger.map(item => <button><img src={item} alt=""/></button>)
                        }
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
