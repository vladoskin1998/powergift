import React from "react"
import { ROUTEAUTH } from "./AuthRouter"
import { HeaderIconClose } from "../svg/HeaderIcon"
import { baseURL } from "../../utils/utils"

export const DevForgetPass = ({
    openAuth,
    setOpenAuth,
    setRoute,
}: {
    openAuth: boolean
    setOpenAuth: () => void
    setRoute: (s: ROUTEAUTH) => void
}) => {
    return (
        <div
            className={`login auth dev-fg-pass`}
            style={{ maxHeight: "inherit" }}
        >
            <div
                className="auth-scroll basket--scroll custom--scroll"
                style={{ maxHeight: "inherit" }}
            >
                <div
                    className="basket-close-button  auth-close"
                    onClick={setOpenAuth}
                >
                    <button>
                        <HeaderIconClose />
                    </button>
                </div>
                <h5 className=" basket-title" style={{height: '130px'}}>
                    Даний функціонал <br /> знаходиться в розробці
                </h5>
                <div className="dev-fg-pass-img">
                    <img src={baseURL + "/Images/dev_forget_pass.png"} alt="" />
                </div>
                <button className="dev-fg-pass-buttom" onClick={() => setRoute(ROUTEAUTH.REGISTRATION)}>
                    <h5>Повернутися на головну</h5>
                    <h6>
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.5 5.07809V7.81246H15.2344C15.7752 7.81246 16.3038 7.65209 16.7535 7.35164C17.2032 7.05118 17.5536 6.62413 17.7606 6.12449C17.9676 5.62485 18.0217 5.07506 17.9162 4.54464C17.8107 4.01423 17.5503 3.52701 17.1679 3.1446C16.7855 2.76219 16.2982 2.50177 15.7678 2.39626C15.2374 2.29075 14.6876 2.3449 14.188 2.55186C13.6883 2.75882 13.2613 3.10929 12.9608 3.55896C12.6604 4.00862 12.5 4.53728 12.5 5.07809V5.07809Z"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                            />
                            <path
                                d="M12.5 5.07809C12.5 5.83297 12.5 7.81246 12.5 7.81246H9.7656C9.22479 7.81246 8.69612 7.65209 8.24646 7.35164C7.79679 7.05118 7.44632 6.62413 7.23936 6.12449C7.0324 5.62485 6.97825 5.07506 7.08376 4.54464C7.18927 4.01423 7.44969 3.52701 7.8321 3.1446C8.21451 2.76219 8.70173 2.50177 9.23215 2.39626C9.76256 2.29075 10.3124 2.3449 10.812 2.55186C11.3116 2.75882 11.7387 3.10929 12.0391 3.55896C12.3396 4.00862 12.5 4.53728 12.5 5.07809V5.07809Z"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                            />
                            <path
                                d="M20.3125 7.8125H4.6875C3.82456 7.8125 3.125 8.51206 3.125 9.375V11.7188C3.125 12.5817 3.82456 13.2812 4.6875 13.2812H20.3125C21.1754 13.2812 21.875 12.5817 21.875 11.7188V9.375C21.875 8.51206 21.1754 7.8125 20.3125 7.8125Z"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20.3125 13.2812V20.3125C20.3125 20.9341 20.0656 21.5302 19.626 21.9698C19.1865 22.4093 18.5904 22.6562 17.9687 22.6562H7.03125C6.40965 22.6562 5.81351 22.4093 5.37397 21.9698C4.93443 21.5302 4.6875 20.9341 4.6875 20.3125V13.2812"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12.5 7.8125V22.6562"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </h6>
                </button>
            </div>
        </div>
    )
}
