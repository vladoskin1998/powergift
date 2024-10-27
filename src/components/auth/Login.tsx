import React, { useState } from "react"
import { CatalogFilterCheckbox } from "../catalog/CatalogFilterCheckbox"
import { HeaderIconClose } from "../svg/HeaderIcon"
import * as Yup from "yup"
import { useFormik } from "formik"
import { $api } from "../../api"
import { useNavigate } from "react-router-dom"
import { AuthIconTougch } from "../svg/AuthIcon"
import { CatalogFilterRatio } from "../catalog/CatalogFilterRatio"
import { ROUTEAUTH } from "./AuthRouter"

interface FormValues {
    email: string
    password: string
}

const validationSchema = Yup.object({
    email: Yup.string().email("Невірний email").required("Обов'язкове поле"),
    password: Yup.string().required("Обов'язкове поле"),
})

export const Login = ({
    openAuth,
    setOpenAuth,
    setRoute,
}: {
    openAuth: boolean
    setOpenAuth: () => void
    setRoute: (s: ROUTEAUTH) => void
}) => {
    const [check, setCheck] = useState<boolean>(true)
    const navigate = useNavigate()

    const formik = useFormik<FormValues>({
        enableReinitialize: true,
        validateOnChange: false,
        validateOnBlur: false,
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema,
        onSubmit: (values: FormValues) => {
            $api.post("login", {
                ...values,
            }).then((r) => {
                console.log(r)
                alert("SUCCESS")
            })
            .catch(() =>
              alert("FAIL")
            )
            setOpenAuth()
            navigate("/customer")
        },
    })

    return (
        <div className={`login auth`} >
            <div
                className="auth-scroll basket--scroll custom--scroll"
                style={{ maxHeight: "inherit" }}
            >
                <div className="basket-close-button  auth-close" onClick={setOpenAuth}>
                  <button>
                  <HeaderIconClose />
                  </button>
                
                </div>
                <h5 className=" basket-title">УВІЙТИ</h5>
                <div className="auth-header-login">
                    <p>
                        Немає облікового запису?{"  "}
                        <button
                            onClick={() => setRoute(ROUTEAUTH.REGISTRATION)}
                        >
                            {" "}
                            Зареєструватися зараз
                        </button>
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

                <div className="auth-policy login-forget-pass">
                    <button className="login-forget-pass-ratio">
                        <CatalogFilterRatio
                            open={check}
                            hendlerOpen={() => setCheck(!check)}
                        />
                        Запам'ятати мене
                    </button>
                    <button onClick={() => setRoute(ROUTEAUTH.FORGET_PASS)}>
                        {" "}
                        <span>Забули пароль?</span>
                    </button>
                </div>
            </div>
            <button
                className="basket-button auth-submit"
                // type="submit"
                onClick={() => {
                    formik.handleSubmit()
                }}
            >
                <div className="basket-button-text">УВІЙТИ В КАБІНЕТ</div>
                <div className="basket-button-icon">
                    <AuthIconTougch />
                    <div className="basket-button-icon-num">2</div>
                </div>
            </button>
        </div>
    )
}
