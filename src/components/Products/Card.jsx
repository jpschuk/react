/** @format */
import { Link } from "react-router-dom";
import "./card.css";
import ItemCount from "./ItemCount";
function Card({ img, titulo, descripcion, precio,id }) {
const urlDetalle = `/tienda/${id}}`
    return (
        <section className='col-3 boxbox'>
            <div className='card-container'>
                <div className='card-body'>
                    <img className='img-card' src={img} alt='' />
                </div>
                <div className='card-detail'>
                    <h5 className='titulo-card'>{titulo}</h5>
                    <p className='card-descripcion'>{descripcion}</p>
                    <p>{precio}</p>
                    <button className='carrito-boton'>
                        Agregar al Carrito
                    </button>
            <Link to= {urlDetalle}>
                    <button>Ver Mas</button>
            </Link>
                </div>
            </div>
        </section>
    );
}
export default Card;
