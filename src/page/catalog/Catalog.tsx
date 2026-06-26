import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CatalogCategoriesMobile } from './CatalogCategoriesMobile'
import './catalog.scss'
import { CatalogProducts } from './CatalogProducts'


export const Catalog = () => {
    return (
        <Routes>
            <Route path="products" element={<CatalogProducts />} />
            <Route path="*" element={<CatalogCategoriesMobile />} />
        </Routes>
    )
}