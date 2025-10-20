import React from "react"
import ReactDOM from "react-dom/client"
import "./style/index.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { AppProvider } from "./context/AppContext"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)



root.render(

        <BrowserRouter>
            <AppProvider>
                <App />
            </AppProvider>
        </BrowserRouter>

)
//
