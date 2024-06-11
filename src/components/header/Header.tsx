import { Link } from "react-router-dom"
import {
    HeaderIconBasket,
    HeaderIconLike,
    HeaderIconSearch,
    HeaderIconUser,
} from "../svg/HeaderIcon"
import "./header.scss"
import { HeaderSearch } from "./HeaderSearch"
import { baseURL } from "../../utils/utils"

export const Header = () => {
    return (
        <div className="header">
            <div className="header-item">
                <img src={baseURL + `/Images/logo.png`} alt="" />
            </div>
            <div className="header-links">
                <div className="header-links-name">
                    <h5>POWER </h5>
                    <p>GIFTS</p>
                </div>
                <div className="header-links-catalog header-links-nav-active ">
                        <Link to="">Каталог товарів</Link>
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
        </div>
    )
}
