import { useState } from "react"
import { useEffect } from "react"
import ItemDetail from "../itemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [obtener, setObtener] = useState([])

    useEffect(()=>{

        const getResult = fetch("https://618aec9634b4f400177c4924.mockapi.io/maryjane/v1/products/")

        getResult.then((data)=>{
            const result = data.json()
            console.log(result);
            return result

            
        })

 



        .then((products)=>{
            setObtener(products)
        })


    }, [])

    return (

        <div>

            <ItemDetail productos= {obtener}/>

 

        </div>

    )

   
}

export default ItemDetailContainer
