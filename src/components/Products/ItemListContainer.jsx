/** @format */
import Card from "./Card";
import ItemCount from "./ItemCount";
function ItemlistContainer({ greeting }) {
    return (
        <section className='page-content'>
            <h2>{greeting}</h2>
            <div className='row main-container'>
                <Card
                    titulo='Inodoro de loza'
                    img='https://familiabercomat.quickresults.co/product/image/medium/147318_0.jpg'
                    descripcion='Inodoro de loza capea tradicional'
                    precio='$1000'
                    stock = {9}
                />
                <Card
                    titulo='Bidet de loza'
                    img='https://centerceramicos.com/wp-content/uploads/2021/06/BIDET-ITALIANA-300x300.jpg'
                    descripcion='Bidet de loza capea'
                    precio='$200'
                    stock = {4}
                />

                <Card
                    titulo='lavatorio de loza'
                    img='https://images.cerymatlaplata.com.ar/products/5e0de517bc8981577968919.jpg'
                    descripcion='Lavatorio de loza completo'
                    precio='$300'
                    stock = {10}
                />
                <Card
                    titulo='Migitorio'
                    img='https://http2.mlstatic.com/D_NQ_NP_897514-MLM43172109111_082020-O.jpg'
                    descripcion='Migitorio de loza capea'
                    precio='$500'
                    stock = {4}
                />
            </div>
        </section>
    );
}
export default ItemlistContainer;
