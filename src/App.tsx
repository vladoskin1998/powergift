import  { useEffect } from "react"
import { Navbar } from "./components/navbar/Navbar"
import { Footer } from "./components/footer/Footer"
import { Router } from "./router/Router"
import { Header } from "./components/header/Header"
import { Loader } from "./components/loader/Loader"
import { QueryClient, QueryClientProvider } from "react-query"
import {  useLocation } from "react-router-dom"
import { useLoaderStore } from "./components/loader/loading.store"
import BasketLoader from "./components/loader/BasketLoader"
import { Basket } from "./components/basket/Basket"

const queryClient = new QueryClient()

function App() {
    const { isLoader, isBasketLoader } = useLoaderStore()
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [window.location, location])

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                {isLoader && <Loader />}
                {isBasketLoader && <BasketLoader />}
                <Header />
                <div className="Main">
                    <Navbar />
                    <Router />
                    <div className="right-navbar" />
                </div>
                <Footer />
                <Basket/>
            </div>
        </QueryClientProvider>
    )
}

export default App



