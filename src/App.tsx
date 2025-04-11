import React, { useEffect } from "react"
import { Navbar } from "./components/navbar/Navbar"

import { Footer } from "./components/footer/Footer"
import { Router } from "./router/Router"
import { Header } from "./components/header/Header"
import { AppProvider, useAppContext } from "./context/AppContext"
import { Loader } from "./components/loader/Loader"

import { QueryClient, QueryClientProvider } from "react-query"
import { useLocation } from "react-router-dom"
const queryClient = new QueryClient()

function App() {
    const { isLoader } = useAppContext()
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [window.location,location])

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                {isLoader && <Loader />}
                <Header />
                <div className="Main">
                    <Navbar />
                    <Router />
                    <div className="right-navbar" />
                </div>
                <Footer />
            </div>
        </QueryClientProvider>
    )
}

export default App
