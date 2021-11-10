import { useState } from "react"
import { useEffect } from "react"
import ItemList from "../itemList/ItemList"


const ItemListContainer = () => {

    const [producto, setProducto] = useState([])

    useEffect(()=>{
        const promise  = new Promise ((res, rej) =>{
            setTimeout(()=>{
                res([
                    {id:1, name: "Alfajores", imgUrl:'img/alfajores.jpg', stock: "10"},
                    {id:2, name: "Marroc", imgUrl:'img/maarroc.jpg', stock: "10"},
                    {id:3, name: "Cookies", imgUrl:'img/cookies.jpg', stock: "10"}
                ])
            }, 2000)
        })
        promise.then(item=>setProducto(item))
    })

    /*const [producto, setProducto] = useState([])
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
        promise.then(item=>setProducto(item))*/

    return (
        <div>
        <ItemList productos={producto}/>
            
        </div>
    )
}

export default ItemListContainer

