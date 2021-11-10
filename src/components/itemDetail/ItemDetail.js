const ItemDetail = ({productos}) => {

    console.log(productos);

    
    




    return (

        <div>

            <img src={productos.img} alt={productos.img} />
            <h3>Nombre : {productos.name}</h3>
            <p>Stock : {productos.stock}</p>

            



            

 
    
        </div>
    )
}

export default ItemDetail
