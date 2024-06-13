import { Link } from "react-router-dom"
import {
    HeaderIconBasket,
    HeaderIconBurger,
    HeaderIconClose,
    HeaderIconLike,
    HeaderIconOpen,
    HeaderIconSearch,
    HeaderIconUser,
} from "../svg/HeaderIcon"
import "./header.scss"
import { HeaderSearch } from "./HeaderSearch"
import { baseURL } from "../../utils/utils"
import { FooterIconBag } from "../svg/FooterIcon"
import { useState } from "react"

export const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="header">
            <div className="header-item">
                <img src={baseURL + `/Images/logo.png`} alt="" />
            </div>
            <div className="header-links-name">
                <div>
                    <h5>POWER </h5>
                    <p>GIFTS</p>
                </div>
                <div className="header-links-mob-flag">
                    <button>
                        <img src={baseURL + "/Images/flagua.png"} alt="" />
                        <span>Мова</span>
                    </button>

                    <button onClick={() => setOpen((s) => !s)}>
                        <div className="header-links-mob-flag-svg">
                            {open ? <HeaderIconClose /> : <HeaderIconBurger />}
                        </div>

                        <span>Меню</span>
                    </button>
                </div>
            </div>
            <div className="header-links">
                <div className="header-links-catalog header-links-nav-active ">
                    <Link to="/catalog/products">Каталог товарів</Link>
                </div>
                <div className="header-links-nav">
                    <div className="header-links-nav-item">
                        <Link to="">Дилерам</Link>
                    </div>
                    <div className="header-links-nav-item">
                        <Link to="">Акціїні товари</Link>
                    </div>
                    <div className="header-links-nav-item">
                        <Link to="">Бренди</Link>
                    </div>
                    <div className="header-links-nav-item">
                        <Link to="">Каталог товарів PDF</Link>
                    </div>
                    <div className="header-links-nav-item">
                        <Link to="">Про компанію</Link>
                    </div>
                    <div className="header-links-nav-item">
                        <Link to="">Контакти</Link>
                    </div>
                </div>
            </div>
            <div className="header-buttons">
                <HeaderSearch />

                <button className="header-item">
                    <HeaderIconLike />
                </button>
                <button className="header-item">
                    <HeaderIconUser />
                </button>
                <button className="header-item">
                    <HeaderIconBasket />
                </button>
            </div>
            <HeaderNavBar open={open} />
        </div>
    )
}

export const HeaderNavBar = ({ open }: { open: boolean }) => {
    return (
        <div className={`header-navbar ${open && "header-navbar-active"}`}>
            <div>
                <HeaderIconOpen />
            </div>
            <div className="header-navbar-item header-navbar-item-title">
                <Link to="/catalog/products">Каталог товарів</Link>
            </div>
            <div className="header-navbar-item">
                <Link to="">Дилерам</Link>
            </div>
            <div className="header-navbar-item">
                <Link to="">Партнерство</Link>
            </div>
            <div className="header-navbar-item">
                <Link to="">Бренди</Link>
            </div>
            <div className="header-navbar-item">
                <Link to="">Каталог товарів PDF</Link>
            </div>
            <div className="header-navbar-item">
                <Link to="">Про компанію</Link>
            </div>
            <div className="header-navbar-item">
                <Link to="">Карьера</Link>
            </div>

            <div className="header-navbar-item">
                <Link to="">FAQ</Link>
            </div>
            <div className="header-navbar-item">
                <Link to="">Новини</Link>
            </div>
            <div className="header-navbar-item">
                <Link to="">Контакти</Link>
            </div>

            <div className="header-navbar-inv">
                <FooterIconBag />
                <div>Інвестування</div>
            </div>
            <div className="header-navbar-paymant">
                <img src={baseURL + "/Images/Paymant.png"} alt="" />
            </div>
            <div className="header-navbar-text">
                © <b>Power</b>Gifts. Ukrainian promo gifts b2b company. All Rights
                Reserved. Let’s create.
            </div>
        </div>
    )
}
