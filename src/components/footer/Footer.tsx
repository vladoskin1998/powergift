import { baseURL } from "../../utils/utils"
import { FooterIconShare } from "../svg/FooterIcon"
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