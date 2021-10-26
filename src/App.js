import './App.css';
import { Header } from './components/Nav/Header';
import Nav from './components/Nav/Nav';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">

      <Nav/>
      <ItemListContainer stock="10" initial="0"/>


      <Header/>

    </div>
  );
}

export default App;
