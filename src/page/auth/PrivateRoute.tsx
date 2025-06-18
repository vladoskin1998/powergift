import React, { ReactElement } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "./auth.store"

export const PrivateRoute = ({ children }: { children: ReactElement }) => {
    const { isAuth } = useAuthStore()
    const navigate = useNavigate()

    if (!isAuth) {
        navigate("/")
    }

    return <div>{children}</div>
}
