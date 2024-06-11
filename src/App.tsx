import React from "react"
import { Navbar } from "./components/navbar/Navbar"
import { RightNavbar } from "./components/navbar/RightNavbar"
import { Footer } from "./components/footer/Footer"
import { Router } from "./components/router/Router"
import { Header } from "./components/header/Header"

function App() {
    return (
        <div className="App">
            <Header />
            <div className="Main">
                <Navbar />
                <Router />
                <RightNavbar />
            </div>

            <Footer />
        </div>
    )
}

export default App
