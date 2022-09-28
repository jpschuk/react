import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./card.css";
export default function ItemCount({ initial = 1, stock }) {
    const [count, setCount] = useState(initial);
    function handleAdd() {
        if (count >= stock) {
            alert(
                "si el stock es x cantidad porque queres pedir mas, sos hijo de primo o que?"
            );
        } else {
            setCount(count + 1);
        }
    }

    function handleSubstract() {
        if (count <= 1) {
            alert("no puede ordenar menos");
        } else {
            setCount(count - 1);
        }
    }

    return (
        <section className='item-count-box'>
            <div className='item-count'>
                <button className='item-count-botton' onClick={handleAdd}>
                    <FaPlus />
                </button>
                <span className='item-amount'>{count}</span>
                <button className='item-count-botton' onClick={handleSubstract}>
                    <FaMinus />
                </button>
            </div>
            <span className='amount-stock'>Stock: {stock}</span>
        </section>
    );
}
