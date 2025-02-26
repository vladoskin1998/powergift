import React from "react"
import { Routes, Route } from "react-router-dom"
import { CatalogDesktop } from "./CatalogDesktop"
import "./catalog.scss"
import { CatalogFilterMain } from "./CatalogFilterMain"
import { CatalogProducts } from "./CatalogProducts"
import { CatalogFilterProducts } from "./CatalogFilterProducts"

export const Catalog = () => {
    return (
        <Routes>
            {/* <Route
        path="change-password"
        element={< />}
    />*/}
            <Route path="filter-products" element={<CatalogFilterProducts />} />
            <Route path="products" element={<CatalogProducts />} />
            <Route path="filter-main" element={<CatalogFilterMain />} />
            <Route path="*" element={<CatalogProducts />} />
        </Routes>
    )
}
