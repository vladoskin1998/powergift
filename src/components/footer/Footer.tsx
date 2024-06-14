import { baseURL } from "../../utils/utils"
import { FooterIconShare, FooterIconBag } from "../svg/FooterIcon"
import {
    HeaderIconSearch,
    HeaderIconLike,
    HeaderIconUser,
    HeaderIconBasket,
} from "../svg/HeaderIcon"
import "./footer.scss"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-item">
                <img src={baseURL + "/Images/flagua.png"} alt="" />
            </div>
            <div className="footer-info">
                <div className="footer-text">
                    <div>УКРАЇНСЬКА КОМПАНІЯ</div>
                    <div className="footer-text-gr">©</div>
                    <div className="footer-text-gr">All right reserved.</div>
                </div>
                <div className="footer-inv">
                    <FooterIconBag />
                    <div>Інвестування</div>
                </div>
            </div>
            <div className="footer-item">
                <FooterIconShare />
            </div>
            <div className="footer-mob">
                <button className="footer-mob-item">
                    <HeaderIconSearch />
                </button>
                <button className="footer-mob-item">
                    <HeaderIconLike />
                </button>
                <button className="footer-mob-item">
                    <HeaderIconUser />
                </button>
                <button className="footer-mob-item">
                    <HeaderIconBasket />
                </button>
                <button className="footer-mob-item">
                    <HeaderIconSearch />
                </button>
            </div>
        </div>
    )
}
