import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { contexto } from "../cart/customComponent/CustomComponent";

const ItemDetail = ({productos}) => {

    const {addToCart} = useContext(contexto)

    const confirmar = (e) =>{
        e.stopPropagation()
        
    }

    const onAdd = (cantidad) =>{
        console.log("seleccionar la cantidad");
        console.log(cantidad, productos);
        addToCart(productos, cantidad)
    }

       return (

           <div>
            {
                productos.map((producto) =>{
                    return(
                        <div key={producto.id}>
                            <img src={producto.img} alt={producto.name} />
                            <h3>Nombre : {producto.name}</h3>
                            <p>Stock: {producto.stock}</p>
                            <ItemCount id={producto.id} stock={producto.stock}  confirmar={confirmar} onAdd={onAdd} />
                        </div>
                    )
                

                })
            }


            

            
        </div>
    )
}

export default ItemDetail
