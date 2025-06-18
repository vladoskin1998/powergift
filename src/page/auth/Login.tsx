import React, { useState } from 'react'
import { CatalogFilterCheckbox } from '../___tempcatalog/CatalogFilterCheckbox'
import { HeaderIconClose } from '../../components/svg/HeaderIcon'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { $api } from '../../api'
import { useNavigate } from 'react-router-dom'
import { AuthIconTougch } from '../../components/svg/AuthIcon'
import { CatalogFilterRatio } from '../___tempcatalog/CatalogFilterRatio'
import { ROUTEAUTH } from './AuthRouter'
import { useAuthStore } from './auth.store'
import { useLoaderStore } from '../../components/loader/loading.store'

interface FormValues {
    email: string
    password: string
}

const validationSchema = Yup.object({
    email: Yup.string().email('Невірний email').required("Обов'язкове поле"),
    password: Yup.string().required("Обов'язкове поле"),
})

export const Login = ({ setRoute }: { setRoute: (s: ROUTEAUTH) => void }) => {
    const [check, setCheck] = useState<boolean>(true)
    const navigate = useNavigate()
    const { setOpenAuth, isAuth, setIsAuth } = useAuthStore()
    const { setBasketLoader } = useLoaderStore()

    const formik = useFormik<FormValues>({
        enableReinitialize: true,
        validateOnChange: false,
        validateOnBlur: false,
        initialValues: {
            email: '',
            password: '',
        },

        validationSchema,
        onSubmit: async (values: FormValues, { resetForm }) => {
            try {
                const response = await $api.post('login', values)
                console.log(response)
                localStorage.setItem('token', response?.data.token)
                setTimeout(() => {
                    setIsAuth()
                }, 1000)

                setBasketLoader(true, 'Ви успішно ввійшли до кабінету!')
                setOpenAuth(false)
                resetForm()
                // navigate("/customer")
            } catch (error) {
                console.error(error)

                setBasketLoader(true, 'Сталася помилка при авторизації, зверніться до адміністратора!')
            } finally {
                setTimeout(() => {
                    setBasketLoader(false)
                }, 1000)
            }
        },
    })

    return (
        <div className={`login auth`}>
            <div className="auth-scroll basket--scroll custom--scroll" style={{ maxHeight: 'inherit' }}>
                <div className="basket-close-button  auth-close" onClick={() => setOpenAuth(false)}>
                    <button>
                        <HeaderIconClose />
                    </button>
                </div>
                <h5 className=" basket-title">{isAuth ? 'ВИЙТИ' : 'УВІЙТИ'}</h5>
                {isAuth ? (
                    <div className="auth-error">
                        <h5 className="auth-header-succes">
                            {' '}
                            Ви успішно залогінені, тепер ви можете бачити партнерські ціни та оформлювати замовлення! Хочете вийти з
                            особистого кабінету?{' '}
                        </h5>
                        :
                    </div>
                ) : (
                    <>
                        <div className="auth-header-login">
                            <p>
                                Немає облікового запису?
                                <button onClick={() => setRoute(ROUTEAUTH.REGISTRATION)}>Зареєструватися зараз</button>
                            </p>
                        </div>

                        <div className="auth-body ">
                            <div className="auth-input-body">
                                <input
                                    type="text"
                                    className="auth-input"
                                    placeholder="E-Mail*"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="auth-input-error">{formik.errors.email}</div>
                                ) : null}
                            </div>

                            <div className="auth-input-body">
                                <input
                                    type="password"
                                    className="auth-input"
                                    placeholder="Пароль*"
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="auth-input-error">{formik.errors.password}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="auth-policy login-forget-pass">
                            <button className="login-forget-pass-ratio">
                                <CatalogFilterRatio open={check} hendlerOpen={() => setCheck(!check)} />
                                Запам'ятати мене
                            </button>
                            <button onClick={() => setRoute(ROUTEAUTH.FORGET_PASS)}>
                                <span>Забули пароль?</span>
                            </button>
                        </div>
                    </>
                )}
            </div>
            <button
                className="basket-button auth-submit"
                // type="submit"
                onClick={() => {
                    if (isAuth) {
                        localStorage.removeItem('token')

                        setOpenAuth(false)
                        setBasketLoader(true, 'Ви успішно вийшли з кабінету!')
                        setTimeout(() => {
                            setBasketLoader(false)
                            setIsAuth()
                        }, 1000)
                        return
                    }
                    formik.handleSubmit()
                }}
            >
                <div className="basket-button-text">{isAuth ? 'ВИйТИ З КАБІНЕТУ' : 'УВІЙТИ В КАБІНЕТ'} </div>
                <div className="basket-button-icon">
                    <AuthIconTougch />
                    <div className="basket-button-icon-num">2</div>
                </div>
            </button>
        </div>
    )
}

//partner@power-gifts.com.ua

//12345678
