import React, {useState} from "react";
import ReactDOM from "react-dom";


const Display = () => {
    //Hooks
    let [count, setCount] = useState(0);

    //Functions
    const increaseCount = () => setCount(count++);
    const decreaseCount = () => setCount(count--);

    const handleClick = (e) => {
        e.target.value.document.prototype.execCommand("copy");
    }

    return (
        <div className="display--container">
            <section className="display--button--container">
                <button className="display--button display--decrease" onClick = {decreaseCount}>-</button>
            </section>

            <section className="display--counter--container" onClick = {() => handleClick}>
                <div className="display--counter">{count}</div>
            </section>

            <section className="display--button--container">
                <button className="display--button display--increase" onClick = {increaseCount}>+</button>
            </section>
        </div>
    );
};


export default Display;