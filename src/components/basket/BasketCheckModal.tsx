import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { baseURL } from '../../utils/utils'
import { CardIconDelete } from '../svg/CardIcon'
import { useAppContext } from '../../context/AppContext'
import { HeaderIconClose } from '../svg/HeaderIcon'
import { useBasketStore } from './basket.store'

interface BasketCheckModalProps {
    setIsOpenModalCheck: () => void
    order?: any // заміни на точний тип, якщо маєш
}

type Product = {
    id: number
    name: string
    quantity: number
    price: string
    total: string
    image: string
    thumbnails: {
        small?: string
        thumb?: string
    }
}

export const BasketCheckModal = ({ setIsOpenModalCheck, order: response }: BasketCheckModalProps) => {
    const { handlerHiddenScroll } = useAppContext()

    const modalRef = useRef<HTMLDivElement | null>(null)

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpenModalCheck()
            }
        }
        document.body.style.overflow = 'hidden'
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.body.style.overflow = 'unset'
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const order = response?.order

    const totalPrice = order?.products.reduce((acc: any, product: any) => acc + parseFloat(product.total), 0)

    const { productBasketList } = useBasketStore()

    function formatUkrainianDate(dateString: string): string {
        const date = new Date(dateString.replace(' ', 'T'))
        const formatted = new Intl.DateTimeFormat('uk-UA', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        }).format(date)
        return formatted.replace(', ', ' ').replace(' р.', '')
    }

    return (
        <div className="basket-modal">
            <div
                className="basket-modal-body custom--scroll custom--scroll-dark"
                // style={{ padding: "  20px" }}
                ref={modalRef}
            >
                {!response ? (
                    <>
                        <div className="basket-modal-header" style={{ gridTemplateColumns: '1fr  100px' }}>
                            <div>
                                <h6 className="basket-modal-header-num">Замовлення #27543</h6>
                                <p>{new Date().toLocaleString()}</p>
                            </div>
                            <div className="basket-modal-close-button" onClick={setIsOpenModalCheck}>
                                <HeaderIconClose />
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', padding: '20px 0 30px 0' }}>
                            <svg width="152" height="152" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#4aff0b">
                                            <animate
                                                attributeName="stop-color"
                                                values="#4aff0b;#00e5ff;#4aff0b"
                                                dur="1.5s"
                                                repeatCount="indefinite"
                                            />
                                        </stop>
                                        <stop offset="100%" stopColor="#00e5ff">
                                            <animate
                                                attributeName="stop-color"
                                                values="#00e5ff;#4aff0b;#00e5ff"
                                                dur="2s"
                                                repeatCount="indefinite"
                                            />
                                        </stop>
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M16 6.5V9.99999H19.5C20.1922 9.99999 20.8689 9.79472 21.4445 9.41014C22.0201 9.02555 22.4687 8.47893 22.7336 7.83939C22.9985 7.19985 23.0678 6.49611 22.9327 5.81718C22.7977 5.13825 22.4643 4.51461 21.9749 4.02513C21.4854 3.53564 20.8617 3.2023 20.1828 3.06725C19.5039 2.9322 18.8001 3.00152 18.1606 3.26642C17.5211 3.53133 16.9744 3.97993 16.5899 4.5555C16.2053 5.13107 16 5.80776 16 6.5V6.5Z"
                                    stroke="url(#gradientStroke)"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M16 6.5C16 7.46625 16 9.99999 16 9.99999H12.5C11.8078 9.99999 11.1311 9.79472 10.5555 9.41014C9.97993 9.02555 9.53133 8.47893 9.26642 7.83939C9.00152 7.19985 8.9322 6.49611 9.06725 5.81718C9.2023 5.13825 9.53564 4.51461 10.0251 4.02513C10.5146 3.53564 11.1383 3.2023 11.8172 3.06725C12.4961 2.9322 13.1999 3.00152 13.8394 3.26642C14.4789 3.53133 15.0256 3.97993 15.4101 4.5555C15.7947 5.13107 16 5.80776 16 6.5V6.5Z"
                                    stroke="url(#gradientStroke)"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M26 10H6C4.89543 10 4 10.8954 4 12V15C4 16.1046 4.89543 17 6 17H26C27.1046 17 28 16.1046 28 15V12C28 10.8954 27.1046 10 26 10Z"
                                    stroke="url(#gradientStroke)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M26 17V26C26 26.7956 25.6839 27.5587 25.1213 28.1213C24.5587 28.6839 23.7956 29 23 29H9C8.20435 29 7.44129 28.6839 6.87868 28.1213C6.31607 27.5587 6 26.7956 6 26V17"
                                    stroke="url(#gradientStroke)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M16 10V29" stroke="url(#gradientStroke)" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="basket-modal-status" style={{ textAlign: 'center', fontSize: '24px', paddingBottom: '20px' }}>
                            <b>Ваше замовлення оформлено успішно, найближчим часом з вами зв'яжеться менеджер!</b>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="basket-modal-info">
                            <div className="basket-modal-header">
                                <div>
                                    <h6 className="basket-modal-header-num">Замовлення #{order.crm_id}</h6>
                                    <p className="basket-modal-header-date">{formatUkrainianDate(order.info.created_at)}</p>
                                </div>
                                <div className="basket-modal-header-ord">
                                    Рахунок:
                                    <br />
                                    <b>№{order.id}</b>
                                </div>

                                <div className="basket-modal-close-button" onClick={setIsOpenModalCheck}>
                                    <HeaderIconClose />
                                </div>
                            </div>

                            <h6 className="basket-modal-deliv">Доставка</h6>

                            <div className="basket-modal-status-info">
                                <div>
                                    <p className="basket-modal-status">Статус</p>
                                    <h6 className="basket-modal-status-book">Бронювання</h6>
                                </div>

                                <p className="basket-modal-manager">
                                    Менеджер:
                                    <p> Дмитро Дмитрович</p>
                                </p>
                                <p className="basket-modal-client-info">
                                    {order.delivery.name} {order.delivery.lastname}
                                    <br />
                                    Email
                                    <br />
                                    {order.delivery.phone}
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
                                    {order.delivery.method_name}
                                    {console.log(order.products, typeof order.products)}
                                </p>
                                <p className="basket-modal-payment-methods basket-modal-address">
                                    {order.delivery.city}
                                    <br />
                                    {order.delivery.country}
                                    <br />
                                    MOW
                                    <br />
                                </p>
                            </div>
                            <h6 className="basket-modal-notes-title">Примітки</h6>
                            <div className="basket-modal-notes">
                                <p>{order.comment}</p>
                                {/* <p>Додаткові коментарі від Клієнта. Бронювання.</p>. */}
                            </div>
                            <div className="basket-modal-deliv-mob">
                                <h6 className="basket-modal-deliv-mob-title">Доставка</h6>
                                <div className="basket-modal-deliv-mob-body">
                                    <p>
                                        {order.delivery.name} {order.delivery.lastname}
                                        <br />
                                        Email
                                        <br />
                                        {order.delivery.phone}
                                        <br />
                                    </p>
                                    <p>
                                        {order.delivery.city}
                                        <br />
                                        {order.delivery.country}
                                        <br />
                                        MOW
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" basket-list basket-modal-list " style={{ overflow: 'hidden' }}>
                            {order.products.map((product: Product) => (
                                <div key={product.id} className="basket-item basket-list-item">
                                    <div className="basket-list-item-img">
                                        <img src={product.thumbnails.thumb} alt="" />
                                    </div>
                                    <div className="basket-list-right">
                                        <div className="basket-list-right-title">
                                            <div className="basket-list-text">{product.name}</div>
                                            <div className="basket-list-art">
                                                Артикул: <div>PG-240143</div>
                                            </div>
                                        </div>

                                        <div className="basket-list-foot">
                                            <div className="basket-list-foot-item">
                                                <p className="basket-list-undertitle">ціна</p>
                                                <p className="basket-list-price">
                                                    {product.price} <span>грн</span>
                                                </p>
                                            </div>
                                            <div className="basket-list-foot-item">
                                                <p className="basket-list-undertitle">кількість шт</p>
                                                <div className="basket-list-num">
                                                    <button>-</button>
                                                    <p className=" basket-list-num-p">{product.quantity}</p>
                                                    <button>+</button>
                                                </div>
                                            </div>
                                            <div className="basket-list-foot-item">
                                                <p className="basket-list-undertitle">всього</p>
                                                <p className="basket-list-price">
                                                    {product.total}
                                                    <span>грн</span>
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

                        <div className="basket-modal-footer-wrapper">
                            <div className="basket-modal-footer">
                                <p>
                                    Сума: <br />
                                    {totalPrice} грн
                                </p>
                                <p>
                                    Знижка: <br />
                                    3890,16 грн
                                </p>
                                <p>
                                    Разом:
                                    <br />
                                    {totalPrice} грн
                                </p>
                                <div className="basket-modal-footer-img">
                                    <img src={'/Images/hellocustomer.png'} alt="" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className={'basket-modal-fon'} />
        </div>
    )
}
