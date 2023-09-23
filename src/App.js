import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { CartProvider } from './contexts/CartContext';

function App() {
return(
<CartProvider>
<BrowserRouter>
<NavBar />
 <Routes>
    <Route path="/" element= {<ItemListContainer greeting="Hi!"/>} />
    <Route path="/category/:id" element= {<ItemListContainer greeting="Hi!"/>} />
    <Route path="/item/:id" element= {<ItemDetailContainer />} />
    {/* <Route path="/cart" element= {<Cart />} /> */}
 </Routes>
</BrowserRouter>
</CartProvider>
);}

export default App;
