import React from "react"
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
            </button>
            <button className="navbar-item">
                <NavbarIconsTools />
            </button>
            <button className="navbar-item">
                <NavbarIconsCloses />
            </button>
            <button className="navbar-item">
                <NavbarIconsBags />
            </button>
            <button className="navbar-item">
                <NavbarIconsDishes />
            </button>
            <button className="navbar-item">
                <NavbarIconsHome />
            </button>
            <button className="navbar-item">
                <NavbarIconsOffice />
            </button>
            <button className="navbar-item">
                <NavbarIconsCar />
            </button>
            <button className="navbar-item">
                <NavbarIconsSets />
            </button>
            <button className="navbar-item">
                <NavbarIconsGifts />
            </button>
            <div className="navbar-titles">
              <button className="navbar-titles-item">Електроніка</button>
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
