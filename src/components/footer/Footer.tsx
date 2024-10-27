import { useEffect, useState } from "react"
import { baseURL } from "../../utils/utils"
import { Basket } from "../basket/Basket"
import { FooterIconShare } from "../svg/FooterIcon"
import {
    HeaderIconSearch,
    HeaderIconLike,
    HeaderIconUser,
    HeaderIconBasket,
} from "../svg/HeaderIcon"
import "./footer.scss"
import { AuthRouter } from "../auth/AuthRouter"
import { useAppContext } from "../../context/AppContext"

export const Footer = () => {
    const [openBasket, setOpenBasket] = useState(false)
    const [openAuth, setOpenAuth] = useState(false)
    const {handlerHiddenScroll} = useAppContext()
    const handlerOpenBasket = () => {
        setOpenBasket(s => !s)
        setOpenAuth(false)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

  
    const handlerOpenAuth = () => {
        setOpenAuth(s => !s)
        setOpenBasket(false)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {
        if(openAuth || openBasket){
            handlerHiddenScroll('hidden')
        }
        else{
            handlerHiddenScroll('auto')
        }
    }, [openAuth , openBasket])

    
    return (
        <div className="footer">
            <div className="footer-item footer-item-r">
                <img src={baseURL + "/Images/flagua.png"} alt="" />
            </div>
            <div className="footer-info">
                <div className="footer-text">
                    <div>УКРАЇНСЬКА КОМПАНІЯ </div>
                    <div className="footer-text-gr">©</div>
                    <div className="footer-text-gr">All right reserved.</div>
                </div>
                
                <div className="footer-inv">
                    <div className="footer-inv-bag">
                       <img src={baseURL + "/Images/Bag.png"} alt="" style={{width: '20px'}}/>
                    </div>
                    
                    <div>Інвестування</div>
                </div>
            </div>
            <div className="footer-item footer-item-l">
                <FooterIconShare />
            </div>
            <div className="footer-mob">
                <button className="footer-mob-item">
                    <HeaderIconSearch />
                </button>
                <button className="footer-mob-item">
                    <HeaderIconLike />
                </button>
                <button className="footer-mob-item" onClick={handlerOpenAuth}>
                    <HeaderIconUser />
                </button>
                <button className="footer-mob-item" onClick={handlerOpenBasket}>
                    <HeaderIconBasket />
                </button>
                <button className="footer-mob-item">
                    <HeaderIconSearch />
                </button>
            </div>
            <Basket openBasket={openBasket} setOpenBasket={handlerOpenBasket} />
            <AuthRouter openAuth={openAuth} setOpenAuth={handlerOpenAuth}/>
        </div>
    )
}
