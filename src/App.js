import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
 <div className='App'>
  <NavBar/>
  <ItemListContainer greeting= "Hola, estoy pasando datos desde mi app.js"/>
     </div>
  );
}

export default App;
