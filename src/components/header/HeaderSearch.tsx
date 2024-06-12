import React, { useState } from "react"
import { HeaderIconMicrofon, HeaderIconSearch } from "../svg/HeaderIcon"
import { useLocation, useNavigate } from "react-router-dom"

export const HeaderSearch = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const location = useLocation()
    
    const changeSearch = () => {
        setOpen(s => !s)
        if(location.pathname.includes('products')){
            navigate('/catalog/filter-products')
        }
        else{
            navigate('/catalog/filter-main')
        }
        
    }
    
    return (
        <button className={`header-item header-item-search ${open && 'header-item-search-active'}`} >
            <div className="header-search-icon" onClick={changeSearch }>
                 <HeaderIconSearch />
            </div>
           
            <div className={`header-search ${open && 'header-search-active'}`}>
                <div className="header-search-line"/>
                <input type="text" className="header-search-input" placeholder="Швидкий пошук на сайті."/>
                <button className="header-search-mic">
                    <HeaderIconMicrofon/>
                </button>
            </div>
        </button>
    )
}
