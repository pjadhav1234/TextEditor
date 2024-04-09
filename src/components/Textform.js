import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here...');
    const [stack, setStack] = useState([]);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        setStack([...stack, text]);
        props.showAlert("Converted to uppercase!","success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        setStack([...stack, text]);
        props.showAlert("Converted to lowercase!","success");
    };

    
    const handleDeleteClick = () => {
        setText('');
        setStack([...stack, text]);
        props.showAlert("Text deleted!","success");
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("text copied to clipboard!","success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const countWords = (text) => {
        return text.trim().split(/\s+/).filter(Boolean).length;
    };

    const countChars = (text) => {
        return text.length;
    };
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
     
      }
    
      


    return (
       
        <div>
            <div className="mt-5">
            <textarea
    className={`form-control overflow-auto border-${props.mode === 'dark' ? 'white' : 'dark'} border-2 text-${props.mode === 'dark' ? 'white' : 'dark'}`}
    id="exampleFormControlTextarea1"
    rows="5"
    value={text}
    onChange={handleOnChange}
    style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white' }}
    
/>

            </div>
            <button className={`btn btn-primary m-2 `}  onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary m-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
            <button className='btn btn-primary m-2' onClick={handleDeleteClick}>Delete</button>
            <button className='btn btn-primary m-2' onClick={handleCopyClick}>Copy</button>
            <div className="container display-flex">
            <p className={` fw-bold text-${props.mode === 'dark' ? 'white' : 'black'} `}>Word Count: {countWords(text)}</p>
            <p className={` fw-bold text-${props.mode === 'dark' ? 'white' : 'black'}`}>Character Count: {countChars(text)}</p>
            </div>
        </div>
        
    );
}
