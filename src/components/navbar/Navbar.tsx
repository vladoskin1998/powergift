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
            <div className="navbar-item">
                <NavbarIconsElectronics />
            </div>
            <div className="navbar-item">
                <NavbarIconsTools />
            </div>
            <div className="navbar-item">
                <NavbarIconsCloses />
            </div>
            <div className="navbar-item">
                <NavbarIconsBags />
            </div>
            <div className="navbar-item">
                <NavbarIconsDishes />
            </div>
            <div className="navbar-item">
                <NavbarIconsHome />
            </div>
            <div className="navbar-item">
                <NavbarIconsOffice />
            </div>
            <div className="navbar-item">
                <NavbarIconsCar />
            </div>
            <div className="navbar-item">
                <NavbarIconsSets />
            </div>
            <div className="navbar-item">
                <NavbarIconsGifts />
            </div>
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
