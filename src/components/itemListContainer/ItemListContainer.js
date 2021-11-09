import { useState } from "react"
import { useEffect } from "react"

import './itemListContainer.css'
import ItemList from "../itemList/ItemList"


const ItemListContainer = ({id, name, imgUrl, stock}) => {



    const [producto, setProducto] = useState([])

    useEffect(()=>{
        const promise = new Promise ((res, rej)=>{
            setTimeout(()=>{
                res([
                    {id:1, name: "Alfaflores", imgUrl: 'img/alfajores.jpg', stock: "10"},
                    {id:2, name: "Marroc", imgUrl: 'img/maarroc.jpg', stock: "10"},
                    {id:3, name: "cookies", imgUrl: 'img/cookies.jpg', stock: "10"}, 
                ])
            }, 2000)
        })

        promise.then(item=>setProducto(item))
    })




    return (
        <div className="ilc">
            <ItemList productos={producto}/>

        </div>
    )
}

export default ItemListContainer
