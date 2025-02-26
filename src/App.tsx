import React, { useEffect } from "react"
import { Navbar } from "./components/navbar/Navbar"

import { Footer } from "./components/footer/Footer"
import { Router } from "./components/router/Router"
import { Header } from "./components/header/Header"
import { AppProvider } from "./context/AppContext"
import { Loader } from "./components/loader/Loader"

import { QueryClient, QueryClientProvider, useQuery } from "react-query"
const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AppProvider>
                <div className="App">
                    {/* <Loader/> */}
                    <Header />
                    <div className="Main">
                        <Navbar />
                        <Router />
                        <div className="right-navbar"/>
                    </div>
                    <Footer />
                </div>
            </AppProvider>
        </QueryClientProvider>
    )
}

export default App
