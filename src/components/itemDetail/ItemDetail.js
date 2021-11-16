import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { contexto } from "../customComponent/CustomComponent";


const ItemDetail = ({ productos }) => {
  const { addToCart } = useContext(contexto);
  const [mostrar, setMostrar] = useState(false)//Clase Tecnicas de rendering:
  
  const onAdd = (cantidad) => {
    addToCart(productos, cantidad);
    setMostrar(!mostrar);
   
  }


    return (
        <div>
          {productos.map((producto) => {
            return (
              <div key={producto.id}>
                <img src={producto.img} alt={producto.name} />
                <h3>Nombre : {producto.name}</h3>
                <p>Stock: {producto.stock}</p>
               
                <ItemCount id={producto.id} stock={producto.stock} onAdd={onAdd} />
              </div>
            );
          })}
        </div>
      );
    
  
  
}

export default ItemDetail;