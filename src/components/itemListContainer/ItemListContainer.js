import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"

import './itemListContainer.css'
import ItemList from "../itemList/ItemList"


const ItemListContainer = () => {




    const [producto, setProducto] = useState([])
    const {id} = useParams()

    useEffect(()=>{

        const datos = fetch("https://618ac7e834b4f400177c489f.mockapi.io/maryjuane/v1/products")

        datos.then((data)=>{
            const info = data.json()
            console.log(info);
            return info

        
        })

        .then((products)=>{
            setProducto(products)
        })

        if((id > 0) && (id < 3)){

            console.log("Condicional con id");

            const promesa = new Promise((res, rej)=>{

                setTimeout(()=>{
                    res(producto.filter[id])
                }, 2000)

            })

        }else{

            console.log("Condicional sin filtro");

            const promesa = new Promise((res, rej)=>{

                setTimeout(()=>{
                    res(producto)
                }, 2000)

            })

        }




    }, [])

    /*useEffect(()=>{
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
        <div className="ilc">
            <ItemList productos={producto}/>

        </div>
    )
}

export default ItemListContainer
