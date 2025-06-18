import { Catalog } from '../page/catalog/Catalog'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from '../page/auth/PrivateRoute'
import { lazy, Suspense } from 'react'
import { CatalogProducts } from '../page/catalog/CatalogProducts'
import { Loader } from '../components/loader/Loader'
import Card from '../page/card/Card'
import Customer from '../page/cutomer/Customer'
import Page503 from '../page/503'
// const Card = lazy(() => import("../page/card/Card"))
// const Customer = lazy(() => import("../page/cutomer/Customer"))

export const Router = () => {
    return (
        <div className="Router">
            <Routes>
                <Route path="/dev" element={<Page503 />} />
                <Route path="/catalog/:categoriesId/card/:cardId" element={<Card />} />

                <Route
                    path="/customer/*"
                    element={
                        <PrivateRoute>
                            <Customer />
                        </PrivateRoute>
                    }
                />
                <Route path="/catalog/products" element={<CatalogProducts />} />
                <Route path="/catalog/:categoriesId?/*" element={<Catalog />} />
                <Route path="*" element={<Catalog />} />
            </Routes>
        </div>
    )
}
