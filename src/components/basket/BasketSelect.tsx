import React, { useState } from "react"
import { CustomerIconLeftChevron } from "../svg/CustomerIcon"

const option = ["Тов “Павэр Гіфт”", "Тов “Павэр Гіфт1”", "Тов “Павэр Гіфт2”"]
export const BasketSelect = () => {
    const [value, setValue] = useState(option?.[0] || "Select value")
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="busket--select" style={{cursor: 'pointer'}}onClick={() => setIsOpen((s) => !s)}>
            <button >
                
                <span>{value}</span>
                <button
                    className={`busket--select-chevron ${
                        isOpen && "busket--select-chevron-active"
                    }`}
                >
                    <CustomerIconLeftChevron />
                </button>
            </button>

            <div
                className={`busket--select-list  ${
                    isOpen && "busket--select-list-active"
                }`}
            >
                {option.map((item) => (
                    <button
                        className="busket--select-list-item"
                        onClick={() => {
                            setValue(item)
                         
                        }}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}
