import React from "react"
import { Catalog } from "../catalog/Catalog"
import { Routes, Route } from "react-router-dom"

export const Router = () => {
    return (
        <div className="Router">
            <Routes>
                <Route path="/catalog/*" element={<Catalog />} />
                <Route path="*" element={<Catalog />} />
            </Routes>
        </div>
    )
}
