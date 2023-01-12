import "./ItemListContainer.css";
import { useEffect } from "react";
import { useState } from "react";
import Card2 from "../Card/Card2"; 
import { pedirDatos } from "../helpers/pedirDatos";
import { useParams } from 'react-router-dom'



export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()


  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoryId){
            setProductos(res.filter(prod => prod.category === categoryId))
        } else {
            setProductos(res)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

  const cards = productos.map((s) => {
    return (
      <Card2
        key={s.id}
        item={{...s}}
      /> 
    );
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {cards}
    </div>
  );
};
