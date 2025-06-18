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
import { useAuthStore } from "../../page/auth/auth.store"
import { Tooltip } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const Footer = () => {
    const { isOpenBasket, setOpenBasket, productBasketList } = useBasketStore()
    const navigate = useNavigate()
    const { openAuth, setOpenAuth, isAuth } = useAuthStore()
    const { handlerHiddenScroll } = useAppContext()

    const handlerOpenBasket = (b: boolean) => {
        if( !isAuth ){
            return
        }
        
        if( productBasketList?.length === 0){
            navigate('/catalog/products')
        }
        setOpenBasket(b)
        setOpenAuth(false)
    }

    const handlerOpenAuth = () => {
        setOpenAuth(!openAuth)
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
                    <HeaderIconLike />
                </button>
                <Tooltip
                    title={
                        isAuth
                            ? "Ви вже увійшли до кабінету"
                            : "Увійдіть до свого кабінету"
                    }
                >
                    <button
                        className="header-item"
                        onClick={() => handlerOpenAuth()}
                    >
                        <HeaderIconUser />
                    </button>
                </Tooltip>
                <Tooltip
                   title={
                    isAuth
                        ? productBasketList?.length ?  "Кошик" : "Кошик порожній, додайте товари!"
                        : "Увійдіть до свого кабінету"
                }
                >
                    <button
                        className="header-item header-basket-ico"
                        onClick={() => handlerOpenBasket(!isOpenBasket)}
                        id="basket-pc"
                    >
                        <HeaderIconBasket />
                        {productBasketList?.length && (
                            <div className="header-basket-num">
                                {productBasketList?.length}
                            </div>
                        )}
                    </button>
                </Tooltip>
                <button className="footer-mob-item">
                    <HeaderIconSearch />
                </button>
            </div>
            <Basket />
            <AuthRouter />
        </div>
    )
}
