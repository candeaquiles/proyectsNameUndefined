import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({productos}) => {

    console.log(productos);

    const onAdd = () =>{
        console.log("Funcionando");
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
                            <ItemCount id={producto.id} stock={producto.stock}  onAdd={onAdd} />
                        </div>
                    )
                

                })
            }


            

            
        </div>
    )
}

export default ItemDetail
