import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CatalogCategoriesMobile } from './CatalogCategoriesMobile'
import './catalog.scss'
import { CatalogFilterMain } from '../___tempcatalog/CatalogFilterMain'
import { CatalogProducts } from './CatalogProducts'
import { CatalogFilterProducts } from '../___tempcatalog/CatalogFilterProducts'

export const Catalog = () => {
    return (
        <Routes>
            {/* <Route
        path="change-password"
        element={< />}
    />*/}
            {/* <Route path="filter-products" element={<CatalogFilterProducts />} /> */}
            <Route path="products" element={<CatalogProducts />} />
            {/* <Route path="filter-main" element={<CatalogFilterMain />} /> */}
            <Route path="*" element={<CatalogCategoriesMobile />} />
        </Routes>
    )
}
