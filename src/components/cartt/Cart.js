import { useContext } from "react"
import { contexto } from "../cart/CartContext"

const Cart = () => {

    const {clearCart, cart} = useContext(contexto)

    console.log(cart);

    return (
        <div style={{color:"white"}}>

            {cart.map (item => (
                <article key={item.producto.id}>
                    <h3>{item.producto[0].name}</h3>
                    <img src={item.producto[0].img} alt={item.producto.name} />
                    <p>Total : {item.producto.price * item.cantidad} (cant: {item.cantidad})</p>
                </article>
            ))}
            
            
            Hola soy el carrito je
            <button onClick={clearCart}>Eliminar productos</button>
        </div>
    
    )}

export default Cart
