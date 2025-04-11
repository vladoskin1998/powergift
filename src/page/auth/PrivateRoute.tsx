import React, { ReactElement } from "react"
import { useAppContext } from "../../context/AppContext"
import { useNavigate } from "react-router-dom"

export const PrivateRoute = ({ children }: { children: ReactElement }) => {
    const { isAuth } = useAppContext()
    const navigate = useNavigate()

    if (!isAuth) {
        navigate("/")
    }

    return <div>{children}</div>
}
