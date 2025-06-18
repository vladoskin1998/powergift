import { useEffect, useState } from 'react'
import { CardIconDelete } from '../svg/CardIcon'
import { HeaderIconBasket, HeaderIconClose } from '../svg/HeaderIcon'
import './basket.scss'
import { BasketSelect } from './BasketSelect'
import { BasketCheckModal } from './BasketCheckModal'
import { useLocation } from 'react-router-dom'
import { useBasketStore } from './basket.store'
import { BaskerProduct } from '../../type'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export const Basket = () => {
    const {
        initProductBasketList,
        isOpenBasket,
        setOpenBasket,
        productBasketList,
        addProductBasketList,
        deleteProductBasketList,
        makeOrder,
    } = useBasketStore()

    const [pageHeight, setPageHeight] = useState(0)
    const [activeDeliver, setActiveDeliver] = useState(2)

    const [isOpenModalCheck, setIsOpenModalCheck] = useState(false)
    const location = useLocation()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            country: '',
            region: '',
            city: '',
            address: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Введіть ім'я"),
            lastName: Yup.string().required('Введіть прізвище'),
             phone: Yup.string()
                  .required("Обов'язкове поле")
                  .matches(
                      /^(0[0-9]{9}|\+380[0-9]{9})$/,
                      "Використовуйте формат +380XXXXXXXXX або 0XXXXXXXXX"
                  ),
            country: Yup.string().required('Введіть країну'),
            region: Yup.string().required('Введіть область/район'),
            city: Yup.string().required('Введіть місто'),
            address: Yup.string().required(activeDeliver === 2 ? 'Введіть номер відділення' : 'Введіть адресу'),
        }),
        onSubmit: (values) => {
            try {
                handlerOpenModal()
                closeBasket()
                makeOrder() 
            } catch (error) {
                console.log(error);
                throw error
            }
          
        },
    })

    const closeBasket = () => setOpenBasket(false)

    useEffect(() => {
        initProductBasketList()
    }, [])

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
        if (isOpenBasket) {
            window.scrollTo(0, 0)
        }
        window.addEventListener('resize', setHeight)

        return () => {
            window.removeEventListener('resize', setHeight)
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

    const changeCount = (product: BaskerProduct, count: number) => {
        addProductBasketList(product, count)
    }

    const deleteProduct = ({ product_id }: { product_id: number }) => {
        deleteProductBasketList({ product_id })
    }

    useEffect(() => {
        const basketButton = document.getElementById('basket-pc')

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement

            if (basketButton && basketButton.contains(target)) {
                return
            }

            if (target.closest('.basket')) {
                return
            }

            closeBasket()
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpenBasket])
    return (
        <>
            <div className={`basket  ${isOpenBasket && 'basket-open'} `} style={{ height: pageHeight }}>
                <div className="basket--scroll custom--scroll">
                    <div className="basket-close-button" onClick={closeBasket}>
                        <HeaderIconClose />
                    </div>
                    <h5 className="basket-item basket-title">Ваше замовлення</h5>
                    <>
                        {
                            <>
                                <div className="basket-list ">
                                    {productBasketList.map((item) => (
                                        <div className="basket-item basket-list-item" key={item.product_id}>
                                            <div className="basket-list-item-product">
                                                <img src={item.images?.[0]} alt="" />
                                            </div>
                                            <div className="basket-list-right">
                                                <div className="basket-list-art">
                                                    Артикул: <div>{}</div>
                                                    <button
                                                        className="basket-list-delete"
                                                        onClick={() =>
                                                            deleteProduct({
                                                                product_id: item.product_id,
                                                            })
                                                        }
                                                    >
                                                        <CardIconDelete />
                                                    </button>
                                                </div>
                                                <div className="basket-list-text">{item.name}</div>
                                                <div className="basket-list-foot">
                                                    <div className="basket-list-foot-item">
                                                        <p className="basket-list-undertitle">ціна</p>
                                                        <p className="basket-list-price">
                                                            {item.price} <span>грн</span>
                                                        </p>
                                                    </div>
                                                    <div className="basket-list-foot-item">
                                                        <p className="basket-list-undertitle">кількість шт</p>
                                                        <div className="basket-list-num">
                                                            <button onClick={() => changeCount(item, -1)}>-</button>
                                                            <p>{item?.quantity || 1}</p>
                                                            <button onClick={() => changeCount(item, 1)}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="basket-list-foot-item">
                                                        <p className="basket-list-undertitle">Всього</p>
                                                        <p className="basket-list-price">
                                                            {item?.quantity * (Number(item?.price) || 1)}
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
                                            {productBasketList.reduce((pr, st) => pr + Number(st.price) * (st?.quantity || 1), 0)}
                                            <span>грн</span>
                                        </h5>
                                    </div>
                                    <div className="basket-paymant-select">
                             <p>ПІДГОТУВАТИ РАХУНОК ДО СПЛАТИ:</p>
                             <BasketSelect /> 
                        </div> 
                                </div>
                                <div className="basket-form">
                                    <h6 className="basket-form-title">ОБЕРІТЬ СПОСІБ ДОСТАВКИ</h6>
                                    <div className="basket-form-deliver">
                                        <button
                                            className={`basket-form-deliver ${activeDeliver === 1 && 'basket-form-deliver-active'}`}
                                            onClick={() => setActiveDeliver(1)}
                                        >
                                            Адреса доставки
                                        </button>
                                        <button
                                            className={`basket-form-deliver ${activeDeliver === 2 && 'basket-form-deliver-active'}`}
                                            onClick={() => setActiveDeliver(2)}
                                        >
                                            Нова Пошта
                                        </button>
                                        <button
                                            className={`basket-form-deliver ${activeDeliver === 3 && 'basket-form-deliver-active'}`}
                                            onClick={() => setActiveDeliver(3)}
                                        >
                                            Самовивіз
                                        </button>
                                    </div>
                                </div>
                                <div className="basket-form-input  ">
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Ім'я"
                                            name="firstName"
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.firstName && formik.errors.firstName && (
                                            <div className="basket-form-error">{formik.errors.firstName}</div>
                                        )}
                                    </div>
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Прізвище"
                                            name="lastName"
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.lastName && formik.errors.lastName && (
                                            <div className="basket-form-error">{formik.errors.lastName}</div>
                                        )}
                                    </div>
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Телефон"
                                            name="phone"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.phone && formik.errors.phone && (
                                            <div className="basket-form-error">{formik.errors.phone}</div>
                                        )}
                                    </div>
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Країна"
                                            name="country"
                                            value={formik.values.country}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.country && formik.errors.country && (
                                            <div className="basket-form-error">{formik.errors.country}</div>
                                        )}
                                    </div>
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Область/район"
                                            name="region"
                                            value={formik.values.region}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.region && formik.errors.region && (
                                            <div className="basket-form-error">{formik.errors.region}</div>
                                        )}
                                    </div>
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Місто"
                                            name="city"
                                            value={formik.values.city}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.city && formik.errors.city && (
                                            <div className="basket-form-error">{formik.errors.city}</div>
                                        )}
                                    </div>
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder={activeDeliver === 2 ? 'Номер відділення' : 'Адреса'}
                                            name="address"
                                            value={formik.values.address}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.address && formik.errors.address && (
                                            <div className="basket-form-error">{formik.errors.address}</div>
                                        )}
                                    </div>
                                </div>
                            </>
                        }
                    </>
                </div>
                <button className="basket-button" onClick={() => formik.submitForm()} disabled={formik.isSubmitting}>
                    <div className="basket-button-text">ПІДТВЕРДИТИ ЗАМОВЛЕННЯ</div>
                    <div className="basket-button-icon">
                        <HeaderIconBasket />
                        <div className="basket-button-icon-num">{productBasketList?.length}</div>
                    </div>
                </button>
                {isOpenModalCheck && <BasketCheckModal setIsOpenModalCheck={handlerOpenModal} />}
            </div>
        </>
    )
}
