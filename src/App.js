import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import CartContext from "./components/cart/CartContext";
import { CardWidget } from "./components/cardWidget/CardWidget";


//export const contexto = createContext([{id:1, name : "hola"}, {id:2, name : "chau"}])


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <CartContext>
        <Header />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<ItemDetailContainer/>} />
        </Routes>
        </CartContext>
      </BrowserRouter>

    </div>
  );
}


export default App;