import { useState } from "react";
import { useEffect } from "react";
import getSingleItem  from "../services/mockAPI";


export default function ItemDetailContainer(){
    const [data,setData] = useState({})

    useEffect(() =>{
        getSingleItem().then((respuestasDatos) =>{
            setData(respuestasDatos)
        })
    },[])
    return (
        <section>
        <div className="main-container">
            <h1>{data.title}</h1>
            <h1>{data.detail}</h1>
            <h1>{data.price}</h1>
            <p>{data.description}</p>
            <img src={data.img} alt="" />
        </div>
        </section>
    )
}