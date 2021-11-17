import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [obtener, setObtener] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getResult = fetch(
      "https://618aec9634b4f400177c4924.mockapi.io/maryjane/v1/products/"
    );
    getResult
      .then((data) => {
        const result = data.json();
        return result;
      })
      .then((products) => {
        const productoSeleccionado = products.filter((item) => item.id == id);
        console.log(productoSeleccionado);
        setObtener(productoSeleccionado);
      });
    console.log(obtener);
  }, [id]);
  
  
  
  /*useEffect(() => {
    const getResult = fetch(
      "https://618aec9634b4f400177c4924.mockapi.io/maryjane/v1/products/"
    );

    
    getResult.then((data) => {
        const result = data.json();
       //console.log(result);
        return result;
      })

      .then((products)=>{
        const product = products.filter((products) => products.id === "id");
        setObtener(product);
      })
      .then((products) => {
        const newProducts = products.filter((item) => item.id == id);
        setObtener(newProducts);
        console.log(products);
      })
     



  }, [id]);
*/

  return (
    <div>
      <ItemDetail productos={obtener} />
    </div>
  );
};
export default ItemDetailContainer;
