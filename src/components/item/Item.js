import './item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({id, name, imgUrl, stock}) => {
    return (
        <div className="totally" key={id}>

            <img alt={name} src={imgUrl} className="item" />
            <h3>Nombre: {name}</h3>
            <p>{stock}</p>
            <ItemCount id={id} stock={stock} />
            
        </div>
    )
}

export default Item
