import { CartWidget } from "./CartWidget"
import { NavLink } from "react-router-dom"
import logo from "../assets/img/logo_completo.png"

export const NavBar = () => (
 <header>
  <h1></h1>
  <img alt="logo_completo" src={logo} className="logo" />
  <nav>
    <ul>
     <li><NavLink to="/">INICIO</NavLink></li>
     <li><NavLink to="/category/bidones">BIDONES</NavLink></li>
     <li><NavLink to="/category/barras">BARRAS</NavLink></li>
     <CartWidget />
    </ul>
  </nav>
 </header>);