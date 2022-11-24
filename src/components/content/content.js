import React, {useState} from "react";

export const Display = () => {
    //Hooks
    let [count, setCount] = useState(0);
    
    //Emoji Generator
    let emojiArray = undefined;
    let randomNum = (min, max) => {
        
        if (count >= 0) emojiArray = ["😀", "🍕", "🦄", "🚗", "🌱", "🚀", "🧤"];
        else if (count <= 0) emojiArray = ["🧟", "💀", "😱", "👩‍🦲", "🔫", "💸", "🎃"];


        let r = Math.floor(Math.random() * (max - min)) + min;
        let d = undefined;

        if (r === 1) d = emojiArray[0];
        else if (r === 2) d = emojiArray[1];
        else if (r === 3) d = emojiArray[2];
        else if (r === 4) d = emojiArray[3];
        else if (r === 5) d = emojiArray[4];
        else if (r === 6) d = emojiArray[5];
        else if (r === 7) d = emojiArray[6];

        console.log(d);
        return d;
    };

    //Functions
    const increaseCount = () => setCount(count+=1);
    const decreaseCount = () => setCount(count-=1);

    const handleClick = (e) => {
        e.target.value.document.prototype.execCommand("copy");
    }

    return (
        <>
            <div className="emoji--container">
                <h1>{randomNum(1, 7)}</h1>
            </div>

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
        </>
    );
};