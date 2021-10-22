import './App.css';
import { Header } from './components/Nav/Header';
import Nav from './components/Nav/Nav';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">

      <Nav/>
      <ItemListContainer nombre="Candelaria" apellido="Aquiles"/>


      <Header/>

    </div>
  );
}

export default App;
