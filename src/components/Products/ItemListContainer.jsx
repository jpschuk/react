/** @format */
import Card from "./Card";
import ItemCount from "./ItemCount";
import getSingleItem, { getItems } from "../services/mockAPI";
import { useEffect } from "react";
import { useState } from "react";
export default function ItemlistContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getItems().then((respuestasDatos) => {
            console.log(respuestasDatos);
            setData(respuestasDatos);
        });
    }, []);

    return (
        <section className='page-content'>
            <div className='row main-container'>
                {data.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            titulo={item.title}
                            img={item.img}
                            descripcion={item.detail}
                            precio={item.price}
                            stock={item.stock}
                            id={item.id}
                        />
                    );
                })}
            </div>
        </section>
    );
}
