import './item.css'
import { Link } from 'react-router-dom'



const Item = ({id, name, imgUrl, price, stock}) => {

    return (
        <div className="totally" key={id}>


            
            <img alt={name} src={imgUrl} className="item" />
            <h3>Nombre: {name}</h3>
            <h3>Precio: $ {price}</h3>
            <p>Stock : {stock}</p>
            <Link to={`/productos/${id}`}>Ver mas</Link>

            

            
        </div>
    )
}

export default Item
//<Link to={`/item/${id}`}>