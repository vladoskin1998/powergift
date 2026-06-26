import { useEffect, useRef, useState } from 'react'
import { HeaderIconClose } from '../svg/HeaderIcon'
import { OrderResponse } from './basket.endpoint'

interface BasketCheckModalProps {
    setIsOpenModalCheck: () => void
    order?: OrderResponse
}

export const BasketCheckModal = ({ setIsOpenModalCheck, order: response }: BasketCheckModalProps) => {

    const modalRef = useRef<HTMLDivElement | null>(null)

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

    const totalPrice = order?.products?.reduce((acc, product) => acc + parseFloat(product.total), 0)

    function formatUkrainianDate(dateString: string | undefined): string {
        if (!dateString) return ''
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

    const deliveryAddress = [
        order?.delivery?.country,
        order?.delivery?.region,
        order?.delivery?.city,
        order?.delivery?.address,
        order?.delivery?.warehouse,
    ]
        .filter(Boolean)
        .join(', ')

    return (
        <div className="basket-modal">
            <div
                className="basket-modal-body custom--scroll custom--scroll-dark"
                ref={modalRef}
            >

                <div className="basket-modal-info">
                    <div className="basket-modal-header">
                        <div>
                            <h6 className="basket-modal-header-num">Замовлення #{order?.crm_id}</h6>
                            <p className="basket-modal-header-date">{formatUkrainianDate(order?.info?.created_at)}</p>
                        </div>
                        <div className="basket-modal-header-ord">
                            Рахунок:
                            <br />
                            <b>№{order?.id}</b>
                        </div>

                        <div className="basket-modal-close-button" onClick={setIsOpenModalCheck}>
                            <HeaderIconClose />
                        </div>
                    </div>

                    <h6 className="basket-modal-deliv">Доставка</h6>

                    <div className="basket-modal-status-info">
                        <div>
                            <p className="basket-modal-status">Статус</p>
                            <h6 className="basket-modal-status-book">
                                {order?.info?.status_name || order?.info?.status || 'Бронювання'}
                            </h6>
                        </div>

                        <p className="basket-modal-manager">
                            Менеджер:
                            <p>{order?.user?.name || '—'} {order?.user?.lastname || '—'}</p>
                        </p>
                        <p className="basket-modal-client-info">
                            {order?.delivery?.name} {order?.delivery?.lastname}
                            <br />
                            {order?.delivery?.phone}
                            <br />
                        </p>
                    </div>
                    <div className="basket-modal-payment-info">
                        <p className="basket-modal-payment-methods">
                            Тип замовлення:
                            <br />
                            {order?.info?.order_type_name || order?.info?.order_type || '—'}
                        </p>
                        <p className="basket-modal-payment-methods">
                            Метод доставки:
                            <br />
                            {order?.delivery?.method_name || '—'}
                        </p>
                        <p className="basket-modal-payment-methods basket-modal-address">
                            {deliveryAddress || '—'}
                        </p>
                    </div>
                    <h6 className="basket-modal-notes-title">Примітки</h6>
                    <div className="basket-modal-notes">
                        <p>{order?.info?.comment || '—'}</p>
                    </div>
                    <div className="basket-modal-deliv-mob">
                        <h6 className="basket-modal-deliv-mob-title">Доставка</h6>
                        <div className="basket-modal-deliv-mob-body">
                            <p>
                                {order?.delivery?.name} {order?.delivery?.lastname}
                                <br />
                                {order?.delivery?.phone}
                                <br />
                            </p>
                            <p>
                                {deliveryAddress || '—'}
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" basket-list basket-modal-list " style={{ overflow: 'hidden' }}>
                    {order?.products?.map((product) => (
                        <div key={product.id} className="basket-item basket-list-item">
                            <div className="basket-list-item-img">
                                <img src={product.thumbnails?.thumb || product.image} alt="" />
                            </div>
                            <div className="basket-list-right">
                                <div className="basket-list-right-title">
                                    <div className="basket-list-text">{product.name}</div>
                                    <div className="basket-list-art">
                                        Артикул: <div>{product.sku || '—'}</div>
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
                                            <p className=" basket-list-num-p">{product.quantity}</p>
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
                            </div>
                        </div>
                    ))}
                </div>

                <div className="basket-modal-footer-wrapper">
                    <div className="basket-modal-footer">
                        <p>
                            Разом до сплати:
                            <br />
                            <b>{Number(order?.info?.total_amount || totalPrice || 0).toFixed(2)} грн</b>
                        </p>
                        <div className="basket-modal-footer-img">
                            <img src={'/Images/hellocustomer.png'} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <div className={'basket-modal-fon'} />
        </div>
    )
}
