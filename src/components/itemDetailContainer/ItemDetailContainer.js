import { useState } from "react"
import { useEffect } from "react"
import ItemDetail from "../itemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [obtener, setObtener] = useState([])

    useEffect(()=>{

        const getResult = fetch("https://6182ea6691d76c00172d16e7.mockapi.io/redeyes/v1/1/products/5")

        getResult.then((data)=>{
            const result = data.json()
            return result

            
        })

 



        .then((product)=>{
            setObtener(product)
        })


    }, [])

    return (

        <div>

            <ItemDetail products={obtener} />

 

        </div>

    )

   
}

export default ItemDetailContainer
