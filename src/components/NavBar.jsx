import { CartWidget } from "./CartWidget"
import { NavLink } from 'react-router-dom'

export const NavBar = () => (
 <header>
  {/* -- LOGO -- */}
  <h1>NORDIC BROS</h1>
  {/* -- SECCIONES -- */}
  <nav>
    <ul>
     <li><NavLink to="/">INICIO</NavLink></li>
     <li><NavLink to="/category/bidones">BIDONES</NavLink></li>
     <li><NavLink to="/category/barras">BARRAS</NavLink></li>
     <CartWidget />
    </ul>
  </nav>
 </header>);