import ItemList from "../itemList/ItemList"
import { useParams } from "react-router"
import { useState, useEffect } from "react"

const ItemCategoriaContainer = () => {

    const {categoria} = useParams()
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch(`https://618aec9634b4f400177c4924.mockapi.io/maryjane/v1/products/${categoria}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    })



    return (
        <div>
            <ItemList products={products}/>
            
        </div>
    )
}

export default ItemCategoriaContainer
