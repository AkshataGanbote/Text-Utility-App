import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");
  
  let handleChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
  }

  let handleUpClick = ()=>{
    let upText = text.toUpperCase();
    setText(upText);
  }
  
  let handleLowClick = ()=>{
    let lowText = text.toLowerCase();
    setText(lowText);
  }

  let handleClear = ()=>{
    setText("");
  }


  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
  const handleStop = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.cancel();
  }

  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(" ");
    setText(newText);
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox"); //Selecting text from clipboard i.e. textarea
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Text copied successfully!")
  }

  const handleExtraSpaces = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const btnStyle = {
    color : props.theme ==='dark' ? 'rgb(13,202,240)' : '#198754', 
    backgroundColor : props.theme ==='dark' ? '#222E35' : 'white',
    // #198754 - green - success btn
    borderColor : props.theme ==='dark' ? 'rgb(13,202,240)' : '#198754',
  }

  // Main return statement
  return (
    <div style={{color : props.theme ==='dark' ? 'white' : 'black', }}>
        <h1 className= "text-center mt-4 mb-4">Text Utility App</h1>
        {/* This below div is for Flex */}
        <div className="d-flex align-items-center">
            <textarea 
              className="form-control form-control-outline-primary mb-3" 
              id="myBox" 
              rows="9"
              value={text}
              onChange={handleChange}
              placeholder='Type or paste your text...'
              style={{color : props.theme ==='dark' ? 'white' : 'black',
                      backgroundColor : props.theme ==='dark' ? '#1d3f54' : 'rgb(79 255 136 / 16%)',
                      //  #e6fd0d17  #A5E3B9 %)
                      // border : props.theme ==='dark' ? '3 px solid rgb(13,202,240)' : '3 px solid black',
                    }}
            >
            </textarea> 
            
        </div>

        {/* rgb(18 180 212) */}

        <div className="btnContainer">
          {/* <button 
            //  Button style 1 : Create other than bootstrap color button
            style={btnStyle} 
            className="btn me-2 my-1" onClick={handleUpClick}>Convert to Uppercase
          </button> */}

          <button 
            className={`btn ${props.theme ==='dark' ? 'btn-outline-info' : 'btn-success'}  me-2 my-1`} onClick={handleUpClick}>Convert to Uppercase
          </button>

          <button 
            // Button style 2 : Change to outline infor on dark mode - Dark mode hover
            className={`btn ${props.theme ==='dark' ? 'btn-outline-info' : 'btn-success'}  me-2 my-1`} onClick={handleLowClick}>Convert to Lowercase
          </button>

          {/* <button 
            // Button style 3  : Both Outline buttons - Hover for both
            className={`btn ${props.theme ==='dark' ? 'btn-outline-info' : 'btn-outline-success'}  me-2 my-1`} onClick={handleCapitalize}>Capitalize
          </button> */}

          <button 
            className={`btn ${props.theme ==='dark' ? 'btn-outline-info' : 'btn-success'}  me-2 my-1`} onClick={handleCapitalize}>Capitalize
          </button>

          <button
              
            className={`btn ${props.theme ==='dark' ? 'btn-outline-info' : 'btn-success'}  me-2 my-1`} onClick={handleCopy}>Copy Text
          </button>

          <button 
            // style={btnStyle}
            className={`btn ${props.theme ==='dark' ? 'btn-outline-info' : 'btn-success'}  me-2 my-1`} onClick={handleSpeak}>Speak
          </button> 

          <button 
            // style={btnStyle}
            className={`btn ${props.theme ==='dark' ? 'btn-outline-info' : 'btn-success'}  me-2 my-1`} onClick={handleStop}>Stop
          </button> 
          
          <button
            // style={btnStyle} 
            className={`btn ${props.theme ==='dark' ? 'btn-outline-info' : 'btn-success'}  me-2 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces
          </button> 

          <button 
            // style={btnStyle}
            className={`btn ${props.theme ==='dark' ? 'btn-outline-info' : 'btn-success'}  me-2 my-1`} onClick={handleClear}>Clear Text
          </button>
        </div>

        <div className='summary'>
          <h3 className='my-3'>Text Summary</h3>
          <h6 className='my-3'>Words : {text.split(" ").length-1}</h6>
          <h6 className='my-3'>Spaces : {text.split("").filter((ele)=>ele ===" ").length}</h6>
          <h6 className='my-3'>Characters : {text.length - text.split("").filter((ele)=>ele ===" ").length}</h6>

          {/* <p>Characters {countChars}</p> */}

          {/* 0.008 * number of words  */}
          <h6 className='my-3'>Reading Time : {0.008 * text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} </h6> 
        </div>
    </div>
  )
}
