import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { Contador } from './Components/Contador/Contador';
function App() {
  const onAdd= () =>{
    console.log ("Soy onAdd")
  }
  return (
 <div className='App'>
  <NavBar/>
  <ItemListContainer greeting= "Hola, estoy pasando datos desde mi app.js"/>
  <Contador stock={5} initial={1} onAdd={0}/>
     </div>
  );
}

export default App;
