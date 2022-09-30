import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../Products/ItemCount";
import getSingleItem  from "../services/mockAPI";
import "./itemDetailContainer.css"


export default function ItemDetailContainer(){
    const [data,setData] = useState({})
    const {id} = useParams()
    useEffect(() =>{
        console.log(id)
        getSingleItem(id).then((respuestasDatos) =>{
            console.log(respuestasDatos)
            setData(respuestasDatos)
        })
    },[])
    return (
        <section className="row">
        <div className=" detail-container">
            <img className="img-detail" src={data.img} alt="" />
            <h3>{data.title}</h3>
            <h4>{data.detail}</h4>
            <h4>{data.price}</h4>
            <p>{data.description}</p>
            <ItemCount stock ={data.stock}/>
        </div>
        </section>
    )
}