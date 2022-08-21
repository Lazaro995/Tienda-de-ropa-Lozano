import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { Contador } from './Components/Contador/Contador';
function App() {
  const onAdd = (contador)=>{
    console.log ("Soy onAdd y el valor del contador es:", contador)
  }
  return (
 <div className='App'>
  <NavBar/>
  <ItemListContainer greeting= "Hola, estoy pasando datos desde mi app.js"/>
  <Contador stock={5} initial={0} onAdd={onAdd}/>
     </div>
  );
}

export default App;
