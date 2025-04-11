import React, { useEffect, useState } from "react"
import { Registration } from "./Registration"
import { Login } from "./Login"
import { ForgetPassword } from "./ForgetPassword"
import { DevForgetPass } from "./DevForgetPass"

export enum ROUTEAUTH {
    LOGIN = "login",
    REGISTRATION = "registration",
    FORGET_PASS = "forget_pass",
    DEV_FORGET_PASS = "dev_forget_pass",
}

export const AuthRouter = ({
    openAuth,
    setOpenAuth,
}: {
    openAuth: boolean
    setOpenAuth: () => void
}) => {


    const [route, setRoute] = useState(ROUTEAUTH.DEV_FORGET_PASS)

    useEffect(() => {
        if (!openAuth) {
            setTimeout(() => {
                setRoute(ROUTEAUTH.REGISTRATION)
            }, 1000)
   
        }
    }, [openAuth])
    const handlerRoute = (s: ROUTEAUTH) => {
        setRoute(s)
    }

    return (
        <div className={`modal-login auth-route basket  ${openAuth && "basket-open"}  `}>
            {route === ROUTEAUTH.REGISTRATION && (
                <Registration
                    openAuth={openAuth}
                    setOpenAuth={setOpenAuth}
                    setRoute={handlerRoute}
                />
            )}
            {route === ROUTEAUTH.LOGIN && (
                <Login
                    openAuth={openAuth}
                    setOpenAuth={setOpenAuth}
                    setRoute={handlerRoute}
                />
            )}
            {route === ROUTEAUTH.FORGET_PASS && (
                <ForgetPassword
                    openAuth={openAuth}
                    setOpenAuth={setOpenAuth}
                    setRoute={handlerRoute}
                />
            )}
            {route === ROUTEAUTH.DEV_FORGET_PASS && (
                <DevForgetPass
                    openAuth={openAuth}
                    setOpenAuth={setOpenAuth}
                    setRoute={handlerRoute}
                />
            )}
        </div>
    )
}
