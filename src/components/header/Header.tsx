import { Link, useNavigate } from "react-router-dom"
import {
    HeaderIconBasket,
    HeaderIconBurger,
    HeaderIconClose,
    HeaderIconLike,
    HeaderIconOpen,
    HeaderIconUser,
} from "../svg/HeaderIcon"
import "./header.scss"
import { HeaderSearch } from "./HeaderSearch"
import { baseURL } from "../../utils/utils"
import { FooterIconBag } from "../svg/FooterIcon"
import { useEffect, useRef, useState } from "react"
import { Basket } from "../basket/Basket"
import { AuthRouter } from "../auth/AuthRouter"

export const Header = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [openBasket, setOpenBasket] = useState(false)
    const [openAuth, setOpenAuth] = useState(false)


    let videoRef = useRef<HTMLVideoElement | null>(null)
    const handerClose = () => {
        setOpen(false)
    }


    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Auto-play was prevented:", error)
            })
        }
        return () => {
            videoRef.current = null
        }
    }, [])

    const handlerOpenBasket = () => {
        setOpenBasket(s => !s)
        setOpenAuth(false)
    }
  
    const handlerOpenAuth = () => {
        setOpenAuth(s => !s)
        setOpenBasket(false)
    }

    const navToHome = () => {
  //      navigate('/')
    }

    return (
        <div className="header">
            <a className="header-logo" onClick={navToHome} href="/">
                <video
                    className="header-logo-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    ref={videoRef}
                    preload="metadata"
                >
                    <source
                        src={
                            baseURL + `/Images/Power Gifts logo animate.gif.mp4`
                        }
                        type="video/mp4"
                    />
                </video>
            </a>
            <div className="header-links-name">
                <Link to={'/'}>
                    <h5>POWER </h5>
                    <p>GIFTS</p>
                </Link>
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
                <button className="header-item"  onClick={handlerOpenAuth}>
                    <HeaderIconUser />
                </button>
                <button className="header-item" onClick={handlerOpenBasket}>
                    <HeaderIconBasket />
                </button>
            </div>
            <HeaderNavBar open={open} handerClose={handerClose} />
            <Basket openBasket={openBasket} setOpenBasket={handlerOpenBasket} />
            <AuthRouter openAuth={openAuth} setOpenAuth={handlerOpenAuth}/>
        </div>
    )
}

export const HeaderNavBar = ({
    open,
    handerClose,
}: {
    open: boolean
    handerClose: () => void
}) => {
    return (
        <div className={`header-navbar ${open && "header-navbar-active"}`}>
            <div>
                <HeaderIconOpen />
            </div>
            <div
                className="header-navbar-item header-navbar-item-title"
                onClick={handerClose}
            >
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
                © <b>Power</b>Gifts. Ukrainian promo gifts b2b company. All
                Rights Reserved. Let’s create.
            </div>
        </div>
    )
}
