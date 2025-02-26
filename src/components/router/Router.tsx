import { Catalog } from "../catalog/Catalog"
import { Routes, Route } from "react-router-dom"


import { PrivateRoute } from "../auth/PrivateRoute"
import { lazy, Suspense } from "react"
const Card = lazy(() => import("../card/Card"))
const Customer = lazy(() => import("../cutomer/Customer"))

export const Router = () => {
    return (
        <div className="Router">
            <Routes>
                <Route path="/card" element={
                    <Suspense>
                    <Card />
                    </Suspense>} />

                <Route
                    path="/customer/*"
                    element={
                        <PrivateRoute>
                            <Suspense>
                                <Customer />
                            </Suspense>
                        </PrivateRoute>
                    }
                />
                <Route path="/catalog/*" element={<Catalog />} />
                <Route path="*" element={<Catalog />} />
            </Routes>
        </div>
    )
}
