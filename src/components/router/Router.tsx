import React from "react"
import { Catalog } from "../catalog/Catalog"
import { Routes, Route } from "react-router-dom"
import { Card } from "../card/Card"
import { Customer } from "../cutomer/Customer"
import { PrivateRoute } from "../auth/PrivateRoute"

export const Router = () => {
    return (
        <div className="Router">
            <Routes>
                <Route path="/card" element={<Card />} />
               
                <Route path="/customer/*" element={
                     <PrivateRoute>  
                        <Customer />
                        </PrivateRoute>
                  
                    
                    } />
                <Route path="/catalog/*" element={<Catalog />} />
                <Route path="*" element={<Catalog />} />
            </Routes>
        </div>
    )
}
