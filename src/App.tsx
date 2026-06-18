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




//4.1  Картка товару -> змінив апі на /api/shop/products/{id}
// 4.2  Список замовлень клієнта -> кабінет клієнта буде реалізовано на іншому дизайну
// 4.3  Деталі замовлення -> кабінет клієнта буде реалізовано на іншому дизайну,існуюче модальне вікно буду використовувати під новий дизайн
//4.4  Методи доставки -> наразі вже є існуюче апі /api/shop/info яке включає методи доставки, /api/delivery-methods - неактуально
// 4.5  Безпечний вихід з кабінету -> підключив метод логіна