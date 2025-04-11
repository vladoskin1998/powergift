import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
} from "react"
import { CategoryType, ProductType } from "../type"

export type TypeOverflow = "hidden" | "scroll" | "auto"

interface AppContextType {
    handlerHiddenScroll: (s: TypeOverflow) => void
    isAuth: boolean
    currentSubCategorie: CategoryType | null
    changeCurrentSubCategorie: (s: CategoryType | null) => void

    isLoader:boolean, 
    handlerLoader: (s:boolean) => void
}

export const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
    children: ReactNode
}

const initBasket = JSON.parse(localStorage.getItem("basket") || "[]")

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    const [isLoader, setLoader] = useState(false)
    const [key, setKey] = useState(Date.now())
    const [isAuth, setIsAuth] = useState(false)
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
        const token = localStorage.getItem("token")
        if (token) {
            setIsAuth(true)
        }
    }, [])

    useEffect(() => {
        setKey(Date.now())
    }, [window.location])

    const changeCurrentSubCategorie = (s: CategoryType | null) => {
        setCurrentSubCategorie(s)
    }



    const handlerLoader = (s:boolean) => {
        setLoader(s)
    }
    return (
        <AppContext.Provider
            value={{
      
                handlerHiddenScroll,
                isAuth,
                currentSubCategorie,
                changeCurrentSubCategorie,
                isLoader,
                handlerLoader,
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
