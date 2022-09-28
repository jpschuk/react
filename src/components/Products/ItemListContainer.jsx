/** @format */
import Card from "./Card";
import ItemCount from "./ItemCount";
import getItems from "../services/mockAPI";
import { useEffect } from "react";
import { useState } from "react";
export default function ItemlistContainer({ greeting }) {
    const [data,setData] = useState([])

    useEffect(() =>{
        getItems().then((respuestasDatos) =>{
            setData(respuestasDatos)
        })
    },[])

return (
    <section className="page-content">
        <div className="row main-container">
            {data.map((item) =>{
                return(
                    <Card
                    titulo={item.title} X
                    img={item.img}
                    descripcion={item.detail}
                    precio={item.price}
                    stock={item.stock}
                    id={item.id}
                    ></Card>
                )
            })}
        </div>
    </section>
    )
    
}
