import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemListDetailContainer } from './components/ItemListDetailContainer';
import { NavBar } from './components/NavBar';

function App() {
return(
<>
<NavBar />
{/* <ItemListContainer greeting="Hi!"/> */} <ItemListDetailContainer />
</>);}

export default App;
