import { useState } from "react";

export default function ItemCount({initial = 1, stock}) {
    const [count, setCount] = useState(initial);
    function handleAdd() {
        if (count >= stock) {
            alert("si el stock es x cantidad porque queres pedir mas, sos hijo de primo o que?");
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
        <div>
            <button onClick={handleAdd}>+</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-</button>
            <span>Stock:{stock}</span>
        </div>
    );
}
