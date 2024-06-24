
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
              <button className="navbar-titles-item" style={{borderTop:0}}>Електроніка</button>
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
        </div>
    )
}
