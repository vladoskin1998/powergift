import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
} from "react"
import { CategoryType, ProductType } from "../type"
import { useAuthStore } from "../page/auth/auth.store"

export type TypeOverflow = "hidden" | "scroll" | "auto"

interface AppContextType {
    handlerHiddenScroll: (s: TypeOverflow) => void

    currentSubCategorie: CategoryType | null
    changeCurrentSubCategorie: (s: CategoryType | null) => void

}

export const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
    children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
   
    const [key, setKey] = useState(Date.now())
    const { setIsAuth } = useAuthStore()

    const [currentSubCategorie, setCurrentSubCategorie] =
        useState<CategoryType | null>(null)

    const handlerHiddenScroll = (s: TypeOverflow) => {
        // if (document) {
        //     if (document.body.style.overflowY === s) {
        //         return
        //     } else {
        //         document.body.style.overflowY = s
        //     }
        // }
    }

    useEffect(() => {
        setIsAuth()
    }, [])

    useEffect(() => {
        setKey(Date.now())
    }, [window.location])

    const changeCurrentSubCategorie = (s: CategoryType | null) => {
        setCurrentSubCategorie(s)
    }

  
    return (
        <AppContext.Provider
            value={{
                handlerHiddenScroll,

                currentSubCategorie,
                changeCurrentSubCategorie,
           
            }}
        >
            <div key={key}>{children}</div>
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
