import { baseURL } from "../../utils/utils"
import { HeaderIconSearch } from "../svg/HeaderIcon"
import {
    NavbarIconsElectronics,
    NavbarIconsBags,
    NavbarIconsCar,
    NavbarIconsCloses,
    NavbarIconsDishes,
    NavbarIconsGifts,
    NavbarIconsHome,
    NavbarIconsOffice,
    NavbarIconsSets,
    NavbarIconsTools,
} from "../svg/NavbarIcons"
import "./navbar.scss"

export const Navbar = () => {
    return (
        <div className="navbar">
            <button className="navbar-item">
                <NavbarIconsElectronics />
                <p>Електроніка</p>
            </button>
            <button className="navbar-item">
                <NavbarIconsTools />
                <p>Інструменти</p>
            </button>
            <button className="navbar-item">
                <NavbarIconsCloses />
                <p>Одяг</p>
            </button>
            <button className="navbar-item">
                <NavbarIconsBags />
                <p>Сумки</p>
            </button>
            <button className="navbar-item">
                <NavbarIconsDishes />
                <p>Посуд</p>
            </button>
            <button className="navbar-item">
                <NavbarIconsHome />
                <p>Дім</p>
            </button>
            <button className="navbar-item">
                <NavbarIconsOffice />
                <p>Офіс</p>
            </button>
            <button className="navbar-item">
                <NavbarIconsCar />
                <p>Авто</p>
            </button>
            <button className="navbar-item">
                <NavbarIconsSets />
                <p>Набори</p>
            </button>
            <button className="navbar-item">
                <NavbarIconsGifts />
                <p>Пакування</p>
            </button>
            <div className="navbar-titles">
                <div>
                    <button
                        className="navbar-titles-item"
                        style={{ borderTop: 0 }}
                    >
                        Електроніка
                    </button>
                    <button className="navbar-titles-item">Інструменти</button>
                    <button className="navbar-titles-item">Одяг</button>
                    <button className="navbar-titles-item">Сумки</button>
                    <button className="navbar-titles-item">Посуд</button>
                    <button className="navbar-titles-item">Дім</button>
                    <button className="navbar-titles-item">Офіс</button>
                    <button className="navbar-titles-item">Авто</button>
                    <button className="navbar-titles-item">Набори</button>
                    <button className="navbar-titles-item">Пакування</button>
                </div>
                <div className="navbar_products">
                    <div className="catalog-main-list">
                        <div className="catalog-main-product">
                            <div className="catalog-main-product-img">
                                <img
                                    src={
                                        baseURL +
                                        "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                                    }
                                    alt=""
                                />
                            </div>
                            <h5>Power product $</h5>
                        </div>
                        <div className="catalog-main-product">
                            <div className="catalog-main-product-img">
                                <img
                                    src={
                                        baseURL +
                                        "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                                    }
                                    alt=""
                                />
                            </div>

                            <h5>Power product $</h5>
                        </div>
                        <div className="catalog-main-product">
                            <div className="catalog-main-product-img">
                                <img
                                    src={
                                        baseURL +
                                        "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                                    }
                                    alt=""
                                />
                            </div>
                            <h5>Power product $</h5>
                        </div>

                        <div className="catalog-main-product">
                            <div className="catalog-main-product-img">
                                <img
                                    src={
                                        baseURL +
                                        "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                                    }
                                    alt=""
                                />
                            </div>
                            <h5>Power product $</h5>
                        </div>
                        <div className="catalog-main-product">
                            <div className="catalog-main-product-img">
                                <img
                                    src={
                                        baseURL +
                                        "/Images/Speaker_Cube_PowerGifts_130210-V1.png"
                                    }
                                    alt=""
                                />
                            </div>
                            <h5>Power product $</h5>
                        </div>
                        <div className="catalog-main-product">
                            <div className="catalog-main-product-lihgt">
                                <img
                                    src={baseURL + "/Images/lightning.png"}
                                    alt=""
                                />
                            </div>
                            <p>Cтвори свій унікальній Power gift!</p>
                            <h4>Запросити прорахунок</h4>
                        </div>
                        <div className="catalog-main-product catalog-main-mob-product  catalog-main-product-mobitem">
                            <div className="catalog-main-product-img">
                                <img
                                    src={baseURL + "/Images/ShopCat.png"}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="catalog-main-product catalog-main-product-mobitem"
                            // onClick={handleOpenFilter}
                        >
                            <div className="catalog-main-product-img catalog-main-mob-product-search">
                                <HeaderIconSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
