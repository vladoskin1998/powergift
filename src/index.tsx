import React from "react"
import ReactDOM from "react-dom/client"
import "./style/index.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import App from "./App"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
//  "homepage": "https://vladoskin1998.github.io/powergift/",