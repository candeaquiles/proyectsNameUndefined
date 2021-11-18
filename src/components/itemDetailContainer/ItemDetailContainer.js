import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import ItemDetail from "../itemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [obtener, setObtener] = useState([]);
  const { id } = useParams();

  useEffect(() => {

    firestore.collection("products").get()
        .then((firestore)=>{
            const data = firestore.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
        })

        .then((products)=>{
          const producto = products.filter((item) => item.id == id);
          setObtener(producto);

        })


  }, [id]);
  
  
  

  return (
    <div>
      <ItemDetail productos={obtener} />
    </div>
  );
};
export default ItemDetailContainer;
