
import React, { useState, useEffect, useRef } from "react"
import { CustomerIconLeftChevron } from "../svg/CustomerIcon"

interface BasketSelectProps {
    option: { type: string; name: string }[];
    value: string;
    onChange: (value: string) => void;
}

export const BasketSelect = ({ option, value, onChange }: BasketSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && listRef.current) {
            setTimeout(() => {
                listRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (option && option.length > 0 && !value) {
            onChange(option[0].type);
        }
    }, [option, value, onChange]);

    // Знайти name для поточного value
    const selected = option.find((item) => item.type === value);

    return (
        <div className="busket--select" style={{ cursor: 'pointer' }}>
            <button
                type="button"
                onClick={() => setIsOpen((s) => !s)}
            >
                <span>{selected ? selected.name : "Select value"}</span>
                <span
                    className={`busket--select-chevron ${isOpen && "busket--select-chevron-active"}`}
                >
                    <CustomerIconLeftChevron />
                </span>
            </button>
            <div
                ref={listRef}
                className={`busket--select-list  ${isOpen && "busket--select-list-active"}`}
            >
                {option.map((item, index) => (
                    <button
                        type="button"
                        key={index}
                        className="busket--select-list-item"
                        onClick={() => {
                            onChange(item.type);
                            setIsOpen(false);
                        }}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </div>
    );
};