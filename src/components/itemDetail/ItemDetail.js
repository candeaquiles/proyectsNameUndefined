const ItemDetail = ({products}) => {

    
    




    return (
        <div>
             <img src={products.img} alt={products.name} />
            <p>Nombre: {products.name}</p>
            <p>Stock: {products.stock}</p>
           



            
        </div>
    )
}

export default ItemDetail
