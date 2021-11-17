import { createContext, useState, useEffect } from "react";

export const contexto = createContext();



//const { Provider, Consumer } = contexto
const { Provider } = contexto;
const CartContext = ({ children }) => {
 
    const [cart, setCart] = useState([]);
  
    console.log("soy el carrito en el context", cart);
  
    const addToCart = (producto, cantidad) => {
    setCart([...cart, { producto, cantidad }]);
  };
  const valorDeContexto = {
    cart: cart,
    addToCart: addToCart,
  };
  return (
    <div>
      <Provider value={valorDeContexto}>{children}</Provider>
    </div>
  );
};
export default CartContext
