import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>


      <Header/>

      <Routes>

      <Route path="/products" component={ItemListContainer} exact/>

      <Route path="/categoria/:id" component={ItemDetailContainer}/>


      </Routes>

      <ItemListContainer/>
      
      
      
      
      
      <ItemCount stock="10" initial="0"/>
      <ItemDetailContainer/>

      </BrowserRouter>



    </div>
  );
}

export default App;
