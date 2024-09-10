import React, { createContext, useState, useContext, ReactNode, useEffect } from "react"

export type TypeOverflow = "hidden" | "scroll" | "auto"

interface AppContextType {
    handlerHiddenScroll: (s: TypeOverflow) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
    children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    const [key,setKey] = useState(Date.now())
    const handlerHiddenScroll = (s: TypeOverflow) => {
        if (document) {
            if (document.body.style.overflowY === s) {
                return
            } else {
                document.body.style.overflowY = s
            }
        }
    }

    useEffect(() => {
        setKey(Date.now())
    }, [window.location])
    return (
        <AppContext.Provider value={{ handlerHiddenScroll }}>
            <div key={key}>

         
            {children}
            </div>
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider")
    }
    return context
}
