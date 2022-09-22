/** @format */
import Card from "./Card";
import ItemCount from "./ItemCount";
import {data} from "../services/mockAPI";
import { useEffect } from "react";
import { useState } from "react";
function ItemlistContainer({ greeting }) {
    const [products,setProducts] = useState([])
        const getData =()=>{
            return new Promise ((resolve) =>
                setTimeout(()=>{
                    resolve(data) 
                },5000)
            )
        }
        const getDataDos = async()=>{
            return setProducts (await getData())
        }
        useEffect(()=>{
            getDataDos()
        },[])
    return (
        <section className='page-content'>
            <h2>{greeting}</h2>
            <div className='row main-container'>
                {products.map((product) => {
                    return (
                        <Card
                            titulo={product.title}
                            img={product.img}
                            descripcion={product.detail}
                            precio={product.price}
                            stock={product.stock}
                            id={product.id}
                        />
                    );
                })}
            </div>
        </section>
    );
}
export default ItemlistContainer;
