const ItemDetail = ({productos}) => {


    console.log(productos);

    
    




    return (



        <div>
            {
                productos.map((producto) =>{
                    return(
                        <div key={producto.id}>
                            <img src={producto.img} alt={producto.name} />
                            <h3>Nombre : {producto.name}</h3>
                            <p>Stock: {producto.stock}</p>
                        </div>
                    )
                })
            }
            

            

            
        </div>
    )
}

export default ItemDetail
