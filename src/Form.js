import React, { useState } from 'react'

export default function Form(props) {
    const handleUpClick = () => {
        console.log("Clicked Up")
        let newText = text.toUpperCase()
        // setText("You clicked handleUpClick ")
        setText(newText)
    }
    const handleLowClick = () => {
        console.log("Clicked Up")
        let newText = text.toLowerCase()
        // setText("You clicked handleUpClick ")
        setText(newText)
    }
    const handleDelete = () => {
        setText(" ")
    }
    const handleOnChange = (event) => {
        console.log("OnChange")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter the text")
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-primary mx-4' onClick={handleUpClick}>UpperCase</button>
                <button className='btn btn-primary mx-4' onClick={handleLowClick}>Lower Case</button>
                <button type="button" class="btn btn-info mx-4" onClick={handleDelete}>Delete Content</button>
            </div>
            <div className='container my-4'>
                <h1>Your Text Summary</h1>
                <p>{text.split().length} word and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read.</p>
            </div>
        </>
    )
}
