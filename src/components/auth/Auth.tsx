import { useEffect, useState } from "react"
import "../basket/basket.scss"
import "./auth.scss"
import { AuthIconTougch } from "../svg/AuthIcon"
import { CatalogFilterRatio } from "../catalog/CatalogFilterRatio"
import { CatalogFilterCheckbox } from "../catalog/CatalogFilterCheckbox"
import { HeaderIconClose } from "../svg/HeaderIcon"
import { useLocation, useNavigate } from "react-router-dom"

export const Auth = ({
    openAuth,
    setOpenAuth,
}: {
    openAuth: boolean
    setOpenAuth: () => void
}) => {
    const [pageHeight, setPageHeight] = useState(0)
    const [value, setValue] = useState<boolean>(true)
    const [valueRadio, setValueradio] = useState<boolean>(true)
    const [check, setCheck] = useState<boolean>(true)
    const handlerValue = () => {
        setValue((s) => !s)
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

    // useEffect(() => {
    //     if (!openAuth) {
    //         setOpenAuth()
    //     }
    // }, [window.location, location])

    const navigate = useNavigate()

    return (
        <div
            className={`basket custom--scroll ${
                openAuth && "basket-open"
            } auth `}
            style={{ height: pageHeight }}
        >
            <div className="basket-close-button" onClick={setOpenAuth}>
                <HeaderIconClose />
            </div>
            <h5 className=" basket-title">РЕЄСТРАЦІЯ КОМПАНІЇ</h5>
            <div className="auth-header-login">
                <p>
                    Якщо вже зареєстровані на сайті{"  "}
                    <button>Увійдіть зараз</button>
                </p>
            </div>
            <div className="auth-header-fop">
                <div>Організаційно-правова форма *</div>
                <div className="auth-header-fop-item">
                    {" "}
                    <CatalogFilterRatio
                        open={!valueRadio}
                        hendlerOpen={handlerValueRadio}
                    />
                    Тов
                </div>
                <div className="auth-header-fop-item">
                    {" "}
                    <CatalogFilterRatio
                        open={valueRadio}
                        hendlerOpen={handlerValueRadio}
                    />
                    Фоп
                </div>
            </div>
            <div className="auth-body ">
                <input
                    type="text"
                    className="auth-input"
                    placeholder="Ваше ім'я*"
                />
                <input
                    type="text"
                    className="auth-input"
                    placeholder="Прізвище*"
                />
                <input
                    type="text"
                    className="auth-input"
                    placeholder="Місто*"
                />
                <input
                    type="text"
                    className="auth-input"
                    placeholder="Назва організації *"
                />
                <input
                    type="text"
                    className="auth-input"
                    placeholder="Адреса*"
                />
                <input
                    type="text"
                    className="auth-input"
                    placeholder="ЄДРПО*"
                />
                <input
                    type="text"
                    className="auth-input"
                    placeholder="+38 095 115 1000"
                />
                <input
                    type="text"
                    className="auth-input"
                    placeholder="E-Mail*"
                />
                <input
                    type="text"
                    className="auth-input"
                    placeholder="Пароль*"
                />
            </div>
            <div className="auth-paymant">
                <div className="auth-paymant-text">Платник ПДВ*</div>
                <div className="auth-paymant-ratio">
                    <CatalogFilterRatio
                        open={value}
                        hendlerOpen={handlerValue}
                        key={Date.now()}
                    />
                    <div>
                        <span>Так</span>
                    </div>
                </div>
                <div className="auth-paymant-ratio">
                    <CatalogFilterRatio
                        open={!value}
                        hendlerOpen={handlerValue}
                    />
                    <div>
                        <span>Ні</span>
                    </div>
                </div>
            </div>
            <div className="auth-policy">
                <button>
                    <CatalogFilterCheckbox value={check} setValue={setCheck} />
                </button>
                <div>
                    Я ознайомлений та погоджуюсь з{" "}
                    <span>умовами надання послуги</span>
                </div>
            </div>
            <button
                className="basket-button"
                onClick={() => {
                    setOpenAuth()
                    navigate("/customer")
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
