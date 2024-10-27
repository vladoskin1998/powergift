import { useEffect, useState } from "react"
import "../basket/basket.scss"
import "./auth.scss"
import { AuthIconTougch } from "../svg/AuthIcon"
import { CatalogFilterRatio } from "../catalog/CatalogFilterRatio"
import { CatalogFilterCheckbox } from "../catalog/CatalogFilterCheckbox"
import { HeaderIconClose } from "../svg/HeaderIcon"
import { useLocation, useNavigate } from "react-router-dom"
import { useFormik, FormikHelpers } from "formik"
import * as Yup from "yup"
import { $api } from "../../api"
import { ROUTEAUTH } from "./AuthRouter"
interface FormValues {
    name: string
    lastname: string
    country: string
    region: string
    city: string
    company: string
    address: string
    edrpou: string
    phone: string
    email: string
    password: string
}

const validationSchema = Yup.object({
    name: Yup.string().required("Обов'язкове поле"),
    lastname: Yup.string().required("Обов'язкове поле"),
    country: Yup.string().required("Обов'язкове поле"),
    region: Yup.string().required("Обов'язкове поле"),
    city: Yup.string().required("Обов'язкове поле"),
    company: Yup.string().required("Обов'язкове поле"),
    address: Yup.string().required("Обов'язкове поле"),
    edrpou: Yup.string()
    .required("Обов'язкове поле")
    .matches(/^\d{8}$|^\d{10}$/, "Поле має містити 8 або 10 цифр"),
    phone: Yup.string()
        .required("Обов'язкове поле")
        .matches(
            /^(0[0-9]{9}|\+380[0-9]{9})$/,
            "Використовуйте формат +380XXXXXXXXX або 0XXXXXXXXX"
        ),
    email: Yup.string().email("Невірний email").required("Обов'язкове поле"),
    password: Yup.string().required("Обов'язкове поле"),
})

export const Registration = ({
    openAuth,
    setOpenAuth,
    setRoute,
}: {
    openAuth: boolean
    setOpenAuth: () => void
    setRoute: (s: ROUTEAUTH) => void
}) => {
    const [pageHeight, setPageHeight] = useState(0)
    const [pdv, setPdv] = useState<boolean>(true)
    const [valueRadio, setValueradio] = useState<boolean>(true)
    const [check, setCheck] = useState<boolean>(true)

    const [afterFirstFetch, setAfterfirstFetch] = useState(false)
    const handlerPdv = () => {
        setPdv((s) => !s)
    }

    const handlerValueRadio = () => {
        setValueradio((s) => !s)
    }
    const location = useLocation()

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
        window.addEventListener("resize", setHeight)

        return () => {
            window.removeEventListener("resize", setHeight)
        }
    }, [window.location, openAuth, location])


    const navigate = useNavigate()

    const formik = useFormik<FormValues>({
        enableReinitialize: true,
        validateOnChange: afterFirstFetch,
        validateOnBlur: false,
        initialValues: {
            name: "",
            lastname: "",
            country: "",
            region: "",
            city: "",
            company: "",
            address: "",
            edrpou: "",
            phone: "",
            email: "",
            password: "",
        },

        validationSchema,
        onSubmit: (values: FormValues) => {
            setAfterfirstFetch(true)

            $api.post("register", {
                ...values,
                legal_form: valueRadio ? "fop" : "tov",
                vat: pdv ? 1 : 0,
            })
                .then((r) => { 
                    console.log(r)
                    localStorage.setItem("token", r?.data.token)
                    alert("SUCCESS")
                })
                .catch(
                    () =>
                        alert("FAIL")
                )
            setOpenAuth()
            navigate("/customer")
        },
    })

    return (
        <div
            className={`auth`}

            // onSubmit={}
        >
            <div
                className="auth-scroll basket--scroll custom--scroll"
                style={{ maxHeight: "inherit" }}
            >
                <div
                    className=" auth-close"
                    onClick={setOpenAuth}
                >
                    <button>
                        <HeaderIconClose />
                    </button>
                </div>
                <h5 className=" basket-title">РЕЄСТРАЦІЯ КОМПАНІЇ</h5>
                <div className="auth-header-login">
                    <p>
                        Якщо вже зареєстровані на сайті{"  "}
                        <button onClick={() => setRoute(ROUTEAUTH.LOGIN)}>
                            Увійдіть зараз
                        </button>
                    </p>
                </div>
                <div className="auth-header-fop">
                    <div>Організаційно-правова форма *</div>
                    <div className="auth-header-fop-item">
                        <CatalogFilterRatio
                            open={!valueRadio}
                            hendlerOpen={handlerValueRadio}
                        />
                        Тов
                    </div>
                    <div className="auth-header-fop-item">
                        <CatalogFilterRatio
                            open={valueRadio}
                            hendlerOpen={handlerValueRadio}
                        />
                        Фоп
                    </div>
                </div>
                <div className="auth-body ">
                    <div className="auth-input-body">
                        <input
                            type="text"
                            className="auth-input"
                            placeholder="Ваше ім'я*"
                            name="name"
                            onChange={(e) => {
                                formik.handleChange(e)
                            }}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="auth-input-error">
                                {formik.errors.name}
                            </div>
                        ) : null}
                    </div>

                    <div className="auth-input-body">
                        <input
                            type="text"
                            className="auth-input"
                            placeholder="Прізвище*"
                            name="lastname"
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                        />
                        {formik.touched.lastname && formik.errors.lastname ? (
                            <div className="auth-input-error">
                                {formik.errors.lastname}
                            </div>
                        ) : null}
                    </div>
                    <div className="auth-input-body">
                        <input
                            type="text"
                            className="auth-input"
                            placeholder="Країна*"
                            name="country"
                            onChange={formik.handleChange}
                            value={formik.values.country}
                        />
                        {formik.touched.city && formik.errors.country ? (
                            <div className="auth-input-error">
                                {formik.errors.country}
                            </div>
                        ) : null}
                    </div>
                    <div className="auth-input-body">
                        <input
                            type="text"
                            className="auth-input"
                            placeholder="Область*"
                            name="region"
                            onChange={formik.handleChange}
                            value={formik.values.region}
                        />
                        {formik.touched.region && formik.errors.region ? (
                            <div className="auth-input-error">
                                {formik.errors.region}
                            </div>
                        ) : null}
                    </div>
                    <div className="auth-input-body">
                        <input
                            type="text"
                            className="auth-input"
                            placeholder="Місто*"
                            name="city"
                            onChange={formik.handleChange}
                            value={formik.values.city}
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <div className="auth-input-error">
                                {formik.errors.city}
                            </div>
                        ) : null}
                    </div>

                    <div className="auth-input-body">
                        <input
                            type="text"
                            className="auth-input"
                            placeholder="Назва організації*"
                            name="company"
                            onChange={formik.handleChange}
                            value={formik.values.company}
                        />
                        {formik.touched.company && formik.errors.company ? (
                            <div className="auth-input-error">
                                {formik.errors.company}
                            </div>
                        ) : null}
                    </div>

                    <div className="auth-input-body">
                        <input
                            type="text"
                            className="auth-input"
                            placeholder="Адреса*"
                            name="address"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                        {formik.touched.address && formik.errors.address ? (
                            <div className="auth-input-error">
                                {formik.errors.address}
                            </div>
                        ) : null}
                    </div>

                    <div className="auth-input-body">
                        <input
                            type="text"
                            className="auth-input"
                            placeholder="ЄДРПО*"
                            name="edrpou"
                            onChange={formik.handleChange}
                            value={formik.values.edrpou}
                        />
                        {formik.touched.edrpou && formik.errors.edrpou ? (
                            <div className="auth-input-error">
                                {formik.errors.edrpou}
                            </div>
                        ) : null}
                    </div>

                    <div className="auth-input-body">
                        <input
                            type="text"
                            className="auth-input"
                            placeholder="+38 095 115 1000"
                            name="phone"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="auth-input-error">
                                {formik.errors.phone}
                            </div>
                        ) : null}
                    </div>

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
                            <div className="auth-input-error">
                                {formik.errors.email}
                            </div>
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
                            <div className="auth-input-error">
                                {formik.errors.password}
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="auth-paymant">
                    <div className="auth-paymant-text">Платник ПДВ*</div>
                    <div className="auth-paymant-ratio">
                        <CatalogFilterRatio
                            open={pdv}
                            hendlerOpen={handlerPdv}
                            key={Date.now()}
                        />
                        <div>
                            <span>Так</span>
                        </div>
                    </div>
                    <div className="auth-paymant-ratio">
                        <CatalogFilterRatio
                            open={!pdv}
                            hendlerOpen={handlerPdv}
                        />
                        <div>
                            <span>Ні</span>
                        </div>
                    </div>
                </div>
                <div className="auth-policy">
                    <button>
                        <CatalogFilterCheckbox
                            value={check}
                            setValue={setCheck}
                        />
                    </button>
                    <div>
                        Я ознайомлений та погоджуюсь з{" "}
                        <span>умовами надання послуги</span>
                    </div>
                </div>
            </div>
            <button
                className="basket-button auth-submit"
                // type="submit"
                onClick={() => {
                    formik.handleSubmit()
                }}
            >
                <div className="basket-button-text">
                    ЗАРЕЄСТРУВАТИСЬ НА САЙТІ
                </div>
                <div className="basket-button-icon">
                    <AuthIconTougch />
                    <div className="basket-button-icon-num">2</div>
                </div>
            </button>
        </div>
    )
}
