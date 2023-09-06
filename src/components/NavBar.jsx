import { CartWidget } from "./CartWidget"

export const NavBar = () => (
 <header>
  {/* -- LOGO -- */}
  <h1>NORDIC BROS</h1>
  {/* -- SECCIONES -- */}
  <nav>
    <ul>
      <li><a href="/">INICIO</a></li>
      <li><a href="/category/bidones">BIDONES</a></li>
      <li><a href="/category/barras">BARRAS</a></li>
      <CartWidget />
    </ul>
  </nav>
 </header>);