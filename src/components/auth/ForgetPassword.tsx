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

export const ForgetPassword = ({
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
            })
            setOpenAuth()
            navigate("/customer")
        },
    })

    return (
        <div className={`login auth forget-pass`} style={{ maxHeight: "inherit" }}>
            <div
                className="auth-scroll basket--scroll custom--scroll"
                style={{ maxHeight: "inherit" }}
            >
               <div className="basket-close-button  auth-close" onClick={setOpenAuth}>
                  <button>
                  <HeaderIconClose />
                  </button>
                
                </div>
                <h5 className=" basket-title">Забули пароль</h5>
                <div className="auth-header-login">
                    <p>
                    Будь ласка, введіть ваш E-Mail, щоб отримати <br/> посилання для відновлення пароля
                       
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

                   
                </div>

               
            </div>
            <button
                className="basket-button auth-submit"
                // type="submit"
                onClick={() => {
                    setRoute(ROUTEAUTH.DEV_FORGET_PASS)
                }}
            >
                <div className="basket-button-text">ВІДНОВИТИ ПАРОЛЬ</div>
                <div className="basket-button-icon">
                    <AuthIconTougch />
                    <div className="basket-button-icon-num">2</div>
                </div>
            </button>
        </div>
    )
}
