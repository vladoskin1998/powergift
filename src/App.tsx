import React, { useEffect } from "react"
import { Navbar } from "./components/navbar/Navbar"
import { RightNavbar } from "./components/navbar/RightNavbar"
import { Footer } from "./components/footer/Footer"
import { Router } from "./components/router/Router"
import { Header } from "./components/header/Header"
import { AppProvider } from "./context/AppContext"

function App() {

    return (
        <AppProvider>
            <div className="App">
                <Header />
                <div className="Main">
                    <Navbar />
                    <Router />
                    <RightNavbar />
                </div>
                <Footer />
            </div>
        </AppProvider>
    )
}

export default App
