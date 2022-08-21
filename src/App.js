import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import Counter from './Components/Counter/Counter';
function App() {
  return (
 <div className='App'>
  <NavBar/>
  <ItemListContainer greeting= "Hola, estoy pasando datos desde mi app.js"/>
  <Counter/>
     </div>
  );
}

export default App;
