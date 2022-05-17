import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('Enter your text here...');

    // To handle entering value into text-box 
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    //Change text to Upper case
    const upperCase = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    //Change to Lower case
    const lowerCase = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    //Reverse string
    const reverseString = () => {
        let revText = text.split("").reverse().join("");
        setText(revText);
    }

    return (
        <div>

            <div className="mb-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>{props.heading}</h2>
                <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="6" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#143F6B' }}></textarea>
            </div>

            <button className="btn btn-primary mx-3" onClick={upperCase}>Change to UPPERCASE</button>
            <button className="btn btn-primary mx-3" onClick={lowerCase}>Change to lowercase</button>
            <button className="btn btn-primary mx-3" onClick={reverseString}>Reverse Text</button>

            <div className="container text-start my-3" style={{ color: 'white' }}>
                <h3><u>Text Summary</u></h3>
                <p className='my-3'>Total Characters: {text.length}</p>
                <p>Total Words: {text.split(' ').length}</p>
                <p>Minutes to read: {0.008 * text.split(' ').length}</p>
                <h3>Preview:</h3>
                <p>{text}</p>
            </div>

        </div>
    )
}
