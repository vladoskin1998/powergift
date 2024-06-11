import React from "react"
import { Routes, Route } from "react-router-dom"
import { CatalogMain } from "./CatalogMain"
import "./catalog.scss"
import { CatalogFilter } from "./CatalogFilter"
export const Catalog = () => {
    return (
        <Routes>
            {/* <Route
        path="change-password"
        element={< />}
    />*/}
            <Route path="filter" element={<CatalogFilter />} />
            <Route path="*" element={<CatalogMain />} />
        </Routes>
    )
}
