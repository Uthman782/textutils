import React,{useState} from 'react'
import Model from "./Model";

export default function TextForm(props) {
  const [removeSpace, setRemoveSpace] = useState("RSpace")
  const handleUpClickUpper = ()=>{
    // let newText = text.toUpperCase();
    setText(text.toUpperCase())
  }
   const handleUpClickLower = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleUpClickClear = () =>{
    let Atext = document.getElementById("myBox");
    Atext.value = "";
    let newText = "";
    setText(newText);
  } 
  const handleOnChange =(event)=>{
    let newst = event.target.value;
    // setText(event.target.value);
    setText(newst);
  }
  const handleCopyText =()=>{
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    let nText = document.getElementById('myBox').value
    setTextModel(nText) 
    setCopy("Copied!");
      setTimeout(()=>{
        setCopy("Copy");
      }, 4500)
  }
  const handleRemoveSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    setRemoveSpace("Removed Spaces!")
    setCol("12")
    setTimeout(()=>{
      setRemoveSpace("RSpace");
      setCol("6")

    }, 4500)
  }
    const [text,setText] = useState("");
    const [copy, setCopy] = useState("Copy");
    const [textModel, setTextModel] = useState(text);
    const [col,setCol] = useState("6")

    // text = "So this is wrong way to change . . .";
    // setText  = "So wrong way . . ";
  return (
    <div>
        <div className="container">
          <div className="row mt-3">
      <div className="col-md-5">
        {/* <p>{textModel}</p> */}
        <label htmlFor="myBox"><h4 className={`text-${props.mode === 'dark'?'light':'dark'}`}>Enter The Text To Converte</h4></label>
        <textarea name="" className={`text-${props.mode==='dark'?'light':'dark'} form-control bg-${props.mode} `} onChange={handleOnChange} id="myBox" cols="" rows="8" placeholder='Enter the Text to Convert'></textarea>
      </div>
      <div className="col-md-2 mt-md-5">
        <div className="row">
          <div className="col-3 mt-2 mt-md-0 col-md-6">
      <button className={`btn btn-${props.mode === 'dark'?'light':'dark'}`} disabled={text.length===0} onClick={handleUpClickUpper}>Upper</button>
          </div>
          <div className="col-3 mt-2 mt-md-0 col-md-6">
      <button className={`btn btn-${props.mode === 'dark'?'light':'dark'}`} disabled={text.length===0} onClick={handleUpClickLower}>Lower</button>
          </div>
          <div className="col-3 col-md-6 mt-2 mt-md-3">
      <button className={`btn btn-${props.mode === 'dark'?'light':'dark'}`} disabled={text.length===0} onClick={handleUpClickClear}> Clear </button>
          </div>
          <div className="col-3 col-md-6 mt-2 mt-md-3">
      <button className={`btn btn-${props.mode === 'dark'?'light':'dark'}`} disabled={text.length===0} onClick={handleCopyText} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">{copy}</button>
          </div>
          <div className={`"col-3 col-md-${col} mt-2 mt-md-3"`}>
      <button className={`btn btn-${props.mode === 'dark'?'light':'dark'}`} disabled={text.length===0} onClick={handleRemoveSpace}>{removeSpace}</button>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <label htmlFor="myBox"><h4 className={`text-${props.mode === 'dark'?'light':'dark'}`}>Your Converted Text Is Here</h4></label>
        <textarea name="" className={`bg-${props.mode} border border-0 text-${props.mode==='dark'?'light':'dark'} form-control `}  value={text} placeholder="Converte" id="myBox" cols="" rows="8" disabled></textarea>
      </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Your Text Summary</h2>
              <p>You have<span className='badge badge-dark text-dark'> {(text.split(" ").filter((element)=>{return element.length!==0}).length)} words </span> and <span className='badge badge-dark text-dark badge-pill'> {text.length}</span> Charactors.</p>
              <p>{0.8 * text.split(" ").filter((element)=>{return element.length!==0}).length} seconds</p>
              <h2>Preview</h2>
              <p>{text.length>0?text:"Nothing to Preview..."}</p>
            </div>
          </div>
    </div>
    <Model modelText = {textModel}
           funcToCopeid={handleCopyText}
           copy = {copy}
           mode = {props.mode}
    />
        </div>
  )
}
