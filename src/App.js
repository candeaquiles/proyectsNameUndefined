import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>


      <Header/>

      <Routes>

          <Route exact path="/productos" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemDetailContainer/>} />
          </Routes>
      <ItemListContainer/>
      <ItemDetailContainer/>



      
      
      
      



      </BrowserRouter>



    </div>
  );
}

export default App;
