import { useState } from "react"
import { useEffect } from "react"
import { firestore } from "../firebase"
import { useParams } from "react-router"
import ItemList from "../itemList/ItemList"


const ItemListContainer = () => {

    const [producto, setProducto] = useState([])
    const { id } = useParams()

    useEffect(()=>{
        
        firestore.collection("products").get()
        .then((firestore)=>{

            /*const db = firestore

            const collection = db.collection("products")
            let query = collection.where("id", "==", id)
            query = query.where("price", ">", 300)

            const consulta = query.get()*/

        
            const data = firestore.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
                
            })
            if(id){
                setProducto(data.filter((item)=> item.categoria == id))
            }else{
                setProducto(data)
            } 
            

            
        })


    }, [id])
    


    return (
        <div>
        <ItemList productos={producto}/>
            
        </div>
    )
}

export default ItemListContainer

