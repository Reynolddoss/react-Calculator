import React, { useState, useRef, useEffect } from 'react';
import '../Calculator.css';


function Calculator(props) {
    const [result, setResult] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }
    )
    const inputClicked = e => {
        setResult(
            result.concat(e.target.name)
        )
    }
    const backSpace = () => {
        setResult(
            result.slice(0, result.length - 1)
        )
    }
    const clearClicked = () => {
        setResult('')
    }
    const calculateClicked = () => {
        try {
            setResult(eval(result).toString())
        } catch{
            setResult("Error !!")
        }
    }
    return (
        <div className="calc-app">
            <form>
                <input type='text' ref={inputRef} value={result} />
            </form>
            <div className="keypad" >
                <button id="clear-btn" onClick={clearClicked} >Clear</button>
                <button id="back-btn" onClick={backSpace}>Back</button>

                <button className="exp-btn" name="/" onClick={inputClicked}>/</button>
                <button className="numbtn" name="7" onClick={inputClicked}>7</button>
                <button className="numbtn" name="8" onClick={inputClicked}>8</button>
                <button className="numbtn" name="9" onClick={inputClicked}>9</button>
                <button className="exp-btn" name="*" onClick={inputClicked}>&times;</button>
                <button className="numbtn" name="4" onClick={inputClicked}>4</button>
                <button className="numbtn" name="5" onClick={inputClicked}>5</button>
                <button className="numbtn" name="6" onClick={inputClicked}>6</button>
                <button className="exp-btn" name="-" onClick={inputClicked}>-</button>
                <button className="numbtn" name="1" onClick={inputClicked}>1</button>
                <button className="numbtn" name="2" onClick={inputClicked}>2</button>
                <button className="numbtn" name="3" onClick={inputClicked}>3</button>
                <button className="exp-btn" name="+" onClick={inputClicked}>+</button>
                <button className="numbtn" name="0" onClick={inputClicked}>0</button>
                <button className="numbtn" name="." onClick={inputClicked}>.</button>

                <button id="result-btn" onClick={calculateClicked}>=</button>
            </div>
        </div>
    );
}

export default Calculator;