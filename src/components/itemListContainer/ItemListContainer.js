import { useState } from "react"
import { useEffect } from "react"
import { firestore } from "../firebase"
import ItemList from "../itemList/ItemList"


const ItemListContainer = () => {

    const [producto, setProducto] = useState([])

    useEffect(()=>{
        
        firestore.collection("products").get()
        .then((firestore)=>{
            const data = firestore.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setProducto(data)
            console.log("soy el producto", producto);
        })



    }, [])
    


    return (
        <div>
        <ItemList productos={producto}/>
            
        </div>
    )
}

export default ItemListContainer

