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
import { useQuery } from 'react-query'
import { BasketApi } from './api.basket'
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
    const [tov, setTov] = useState("company2")
    const [orderData, setOrderData] = useState<any>(null);

    //change
    const [isOpenModalCheck, setIsOpenModalCheck] = useState(false)
    const location = useLocation()
    const option = [
        { type: "company1", name: "Тов “Павэр Гіфт”" },
        { type: "company2", name: "Тов “Павэр Гіфт1”" },
        { type: "company3", name: "Тов “Павэр Гіфт2”" }
    ]


    const { data, isLoading, error } = useQuery( ['shopInfo'], async () => {
      
        const data = await BasketApi.getInfoShop()
        return data
    } 
    )
    
    const formik = useFormik({
        initialValues: {
            delivery_method_id: 1,
            delivery_warehouse: '',
            delivery_name: '',
            delivery_lastname: '',
            delivery_phone: '',
            delivery_address: '',
            delivery_city: '',
            delivery_country: '',
            delivery_region: '',
            comment: '',
            order_type: 'ordered',
        },
        validationSchema: Yup.object({
            delivery_method_id: Yup.number().nullable().required('Оберіть спосіб доставки'),
            delivery_name: Yup.string().required("Введіть ім'я"),
            delivery_lastname: Yup.string().required('Введіть прізвище'),
            delivery_phone: Yup.string()
                .required('Введіть телефон')
                .matches(/^\+38\d{10}$/, 'Телефон має починатися з +38 і містити 13 символів'),
            // delivery_address: Yup.string().required('Введіть адресу'),
            delivery_city: Yup.string().required('Введіть місто'),
            delivery_country: Yup.string().required('Введіть країну'),
            delivery_region: Yup.string().required('Введіть область/район'),
            order_type: Yup.string().required('Оберіть тип замовлення'),

            delivery_address: Yup.string().when('delivery_method_id', {
                is: (method_id: number) => method_id === 2 || method_id === 3,
                then: (schema) => schema.required('Введіть адресу'),
                otherwise: (schema) => schema.notRequired(),
            }),
            delivery_warehouse: Yup.string().when('delivery_method_id', {
                is: 1,
                then: (schema) => schema.required('Введіть номер відділення'),
                otherwise: (schema) => schema.notRequired(),
            }),
        }),
        onSubmit: async (values) => {
            try {
                closeBasket()
                const result = await makeOrder(values) // отримуємо відповідь від сервера

                setOrderData(result) // зберігаємо у стейт
                setIsOpenModalCheck(true) // відкриваємо модалку
            } catch (error) {
                console.log(error)
                throw error
            }
        },
    })
    
    useEffect(() => {
      setActiveDeliver(formik.values.delivery_method_id);
    }, [formik.values.delivery_method_id]);

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



    
    useEffect(() => {
        if( productBasketList.length === 0 && isOpenBasket) {
            closeBasket()
        }
    },[ productBasketList.length])

    // console.log(data, 'data')
    
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
                                                            <p className='basket-list-num-p'>{item?.quantity || 1}</p>
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
                                        <p className='basket-paymant-select'>РАЗОМ ДО СПЛАТИ</p>
                                        <h5>
                                            {productBasketList.reduce((pr, st) => pr + Number(st.price) * (st?.quantity || 1), 0)}
                                            <span>грн</span>
                                        </h5>
                                    </div>
                                    {/* <div className="basket-paymant-select">
                                        <p className='select-title'>ПІДГОТУВАТИ РАХУНОК ДО СПЛАТИ:</p>
                                          <BasketSelect
                                            option={option}
                                            value={tov}
                                            onChange={setTov}
                                          />
                                    </div> */}
                                </div>
                                <div className="basket-form">
                                    <h6 className="basket-form-title">ОБЕРІТЬ СПОСІБ ДОСТАВКИ</h6>
                                    <div className="basket-form-deliver">
                                      {data?.delivery.methods.map((method: any) => (
                                          <button
                                              key={method.method_id}
                                              className={`basket-form-deliver ${
                                                  activeDeliver === method.method_id && 'basket-form-deliver-active'
                                              }`}
                                              onClick={() => {
                                                formik.setFieldValue('delivery_method_id', method.method_id);
                                              }}
                                          >
                                              {method.method_name}
                                          </button>
                                      ))}
                                        {/* <button
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
                                        </button> */}
                                    </div>
                                </div>
                                <div className="basket-form-input  ">
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Ім'я"
                                            name="delivery_name"
                                            value={formik.values.delivery_name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.delivery_name && formik.errors.delivery_name && (
                                            <div className="basket-form-error">{formik.errors.delivery_name}</div>
                                        )}
                                    </div>
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Прізвище"
                                            name="delivery_lastname"
                                            value={formik.values.delivery_lastname}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.delivery_lastname && formik.errors.delivery_lastname && (
                                            <div className="basket-form-error">{formik.errors.delivery_lastname}</div>
                                        )}
                                    </div>
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Телефон"
                                            name="delivery_phone"
                                            value={formik.values.delivery_phone}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.delivery_phone && formik.errors.delivery_phone && (
                                            <div className="basket-form-error">{formik.errors.delivery_phone}</div>
                                        )}
                                    </div>
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Країна"
                                            name="delivery_country"
                                            value={formik.values.delivery_country}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.delivery_country && formik.errors.delivery_country && (
                                            <div className="basket-form-error">{formik.errors.delivery_country}</div>
                                        )}
                                    </div>
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Область/район"
                                            name="delivery_region"
                                            value={formik.values.delivery_region}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.delivery_region && formik.errors.delivery_region && (
                                            <div className="basket-form-error">{formik.errors.delivery_region}</div>
                                        )}
                                    </div>
                                    <div className="auth-input-body">
                                        <input
                                            className="basket-form-input-item"
                                            placeholder="Місто"
                                            name="delivery_city"
                                            value={formik.values.delivery_city}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.delivery_city && formik.errors.delivery_city && (
                                            <div className="basket-form-error">{formik.errors.delivery_city}</div>
                                        )}
                                    </div>

                                    <div className="auth-input-body">
                                    {activeDeliver === 2 || activeDeliver === 3 ? (
                                      <>
                                        <input
                                          className="basket-form-input-item"
                                          placeholder="Адреса"
                                          name="delivery_address"
                                          value={formik.values.delivery_address}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.delivery_address && formik.errors.delivery_address && (
                                          <div className="basket-form-error">{formik.errors.delivery_address}</div>
                                        )}
                                      </>
                                    ) : (
                                      <>
                                        <input
                                          className="basket-form-input-item"
                                          placeholder="Номер відділення"
                                          name="delivery_warehouse"
                                          value={formik.values.delivery_warehouse}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.delivery_warehouse && formik.errors.delivery_warehouse && (
                                          <div className="basket-form-error">{formik.errors.delivery_warehouse}</div>
                                        )}
                                      </>
                                    )}
                                    </div>

                                    <div className="auth-input-body">
                                        <textarea
                                          className="basket-form-input-item"
                                          placeholder="Коментар"
                                          name="comment"
                                          value={formik.values.comment}
                                          onChange={formik.handleChange}
                                          rows={3}
                                        />
                                    </div>
                                    <div className="auth-input-body">
                                      <div className="basket-paymant-select">
                                          <p>ТИП ЗАМОВЛЕННЯ:</p>
                                          {data?.order?.types && (
                                            <BasketSelect
                                              option={data.order.types.reverse()}
                                              value={formik.values.order_type}
                                              onChange={value => formik.setFieldValue('order_type', value)}
                                            />
                                          )}
                                      </div>
                                    </div>
                                </div>
                            </>
                        }
                    </>
                </div>
                <button className="basket-button" 
                  onClick={() => {
                    formik.submitForm();
                    console.log('Formik errors:', formik.errors)
                  }}
                  disabled={formik.isSubmitting || productBasketList.length === 0}>
                    <div className="basket-button-text">ПІДТВЕРДИТИ ЗАМОВЛЕННЯ</div>
                    <div className="basket-button-icon">
                        <HeaderIconBasket />
                        <div className="basket-button-icon-num">{productBasketList?.length}</div>
                    </div>
                </button>
                {isOpenModalCheck && <BasketCheckModal setIsOpenModalCheck={handlerOpenModal} order={orderData} />}
            </div>
        </>
    )
}
