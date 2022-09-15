/** @format */
import './card.css';
function Card({ img, titulo, descripcion,precio }) {
	return (
		<section className='col-3 boxbox'>
			<div className='card-container'>
				<div className='card-body'>
					<img
						className='img-card'
						src={img}
						alt=''
					/>
				</div>
				<div className='card-detail'>
					<h5 className='titulo-card'>{titulo}</h5>
					<p className='card-descripcion'>{descripcion}</p>
					<p>{precio}</p>
					<button className='carrito-boton'>Agregar al Carrito</button>
				</div>
			</div>
		</section>
	);
}
export default Card;
