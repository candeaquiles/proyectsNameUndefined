import { useState } from "react"

const ItemListContainer = ({nombre, apellido, stock, initial, onAdd}) => {


        const [sumar, setRestar] = useState(0)
    
        const aumento = () => {
    
            if(sumar < stock){
                setRestar(sumar + 1)
            }else{
                <p>Se ha excedido del monto</p>
            }
    
            console.log(sumar);
    
    
        }
    
        const disminuir = () => {
    
            if (sumar > 0){
                setRestar(sumar - 1)
            }else{
                <p>No hay mas productos</p>
            }
    
        }



    return (
        <div>
            <p>Bienvenido al sitio {nombre} {apellido} </p>


            <button onClick={aumento}>Agregar</button>
    
                       <p>Usted tiene {sumar}</p>
    
                       <button onClick={disminuir}>Quitar</button>
        </div>
    )
}

export default ItemListContainer
