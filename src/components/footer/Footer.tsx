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
import { AuthRouter } from "../../page/auth/AuthRouter"
import { useAppContext } from "../../context/AppContext"
import { useBasketStore } from "../basket/basket.store"

export const Footer = () => {
    
    const {isOpenBasket, setOpenBasket} = useBasketStore()

    const [openAuth, setOpenAuth] = useState(false)
    const { handlerHiddenScroll } = useAppContext()



    const handlerOpenBasket = (b:boolean) => {
        setOpenBasket(b)
        setOpenAuth(false)
       
    }

    const handlerOpenAuth = () => {
        setOpenAuth((s) => !s)
        setOpenBasket(false)

    }

    useEffect(() => {
        if (openAuth || isOpenBasket) {
            handlerHiddenScroll("hidden")
        } else {
            handlerHiddenScroll("auto")
        }
    }, [openAuth, isOpenBasket])

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
                        <img
                            src={baseURL + "/Images/Bag.png"}
                            alt=""
                            style={{ width: "20px" }}
                        />
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
                <button
                    className="footer-mob-item"
                    onClick={() => handlerOpenAuth()}
                >
                    <HeaderIconUser />
                </button>
                <button className="footer-mob-item" onClick={() => handlerOpenBasket(true)}>
                    <HeaderIconBasket />
                </button>
                <button className="footer-mob-item">
                    <HeaderIconSearch />
                </button>
            </div>
            <Basket  />
            <AuthRouter openAuth={openAuth} setOpenAuth={handlerOpenAuth} />
        </div>
    )
}
