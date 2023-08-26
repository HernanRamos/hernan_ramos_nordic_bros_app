import { CartWidget } from "./CartWidget"

export const NavBar = () => (
 <header>
  <h1>NORDIC BROS</h1>
  <nav>
    <ul>
      <li><a href="#">INICIO</a></li>
      <li><a href="#">PRODUCTOS</a></li>
      <li><a href="#">QUIENES SOMOS</a></li>
      <li><a href="#">CONTACTO</a></li>
      <li><a href="#">MAYORISTAS</a></li>
      <CartWidget />
    </ul>
  </nav>
 </header>);