import React, { useEffect, useState } from "react"
import { Registration } from "./Registration"
import { Login } from "./Login"
import { ForgetPassword } from "./ForgetPassword"
import { DevForgetPass } from "./DevForgetPass"
import { useAuthStore } from "./auth.store"

export enum ROUTEAUTH {
    LOGIN = "login",
    REGISTRATION = "registration",
    FORGET_PASS = "forget_pass",
    DEV_FORGET_PASS = "dev_forget_pass",
}

export const AuthRouter = () => {
    const { openAuth } = useAuthStore()
    const [route, setRoute] = useState(ROUTEAUTH.LOGIN)

    useEffect(() => {
        if (!openAuth) {
            setTimeout(() => {
                setRoute(ROUTEAUTH.LOGIN)
            }, 1000)
        }
    }, [openAuth])

    const handlerRoute = (s: ROUTEAUTH) => {
        setRoute(s)
    }

    return (
        <div
            className={`modal-login auth-route basket  ${
                openAuth && "basket-open"
            }  `}
        >
            {route === ROUTEAUTH.REGISTRATION && (
                <Registration setRoute={handlerRoute} />
            )}
            {route === ROUTEAUTH.LOGIN && <Login setRoute={handlerRoute} />}
            {route === ROUTEAUTH.FORGET_PASS && (
                <ForgetPassword setRoute={handlerRoute} />
            )}
            {route === ROUTEAUTH.DEV_FORGET_PASS && (
                <DevForgetPass setRoute={handlerRoute} />
            )}
        </div>
    )
}
