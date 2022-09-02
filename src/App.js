import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { Contador } from './Components/Contador/Contador';
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  const onAdd = (contador) => {
    console.log("Soy onAdd y el valor del contador es:", contador)
  }
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola, estoy pasando datos desde mi app.js" />} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />

          
        </Routes>
      </BrowserRouter>
      <Contador stock={5} initial={0} onAdd={onAdd} />
    </div >
  );
}

export default App;
