import './item.css'

const Item = ({id, name, imgUrl, stock}) => {
    return (
        <div className="totally" key={id}>

            <img alt="{name}" src={imgUrl} />
            <h3>Nombre: {name}</h3>
            <p>{stock}</p>
            
        </div>
    )
}

export default Item
