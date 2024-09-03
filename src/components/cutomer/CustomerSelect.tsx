import React, { useState } from "react"
import { CustomerIconLeftChevron } from "../svg/CustomerIcon"

const option = ["Тов “Павэр Гіфт”", "Тов “Павэр Гіфт1”", "Тов “Павэр Гіфт2”"]
export const CustomerSelect = () => {
    const [value, setValue] = useState(option?.[0] || "Select value")
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="customer--select">
            <span>{value}</span>
            <button className={`customer--select-chevron ${isOpen && "customer--select-chevron-active"}`}
              onClick={() => setIsOpen(s => !s)}
            >
                <CustomerIconLeftChevron />
            </button>
            <div className={`customer--select-list  ${isOpen && "customer--select-list-active"}`}>
                {option.map((item) => (
                    <button  className='customer--select-list-item'onClick={() => {
                      setValue(item)
                      setIsOpen(false)
                    }}>{item}</button>
                ))}
            </div>
        </div>
    )
}
