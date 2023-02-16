import React, { useState } from 'react'
// import React from 'react'
export default function Model(props) {
    const [copied, setCopied] = useState("Copy")
    const [textModel,setModelText] = useState("");    
    // const Upper = ()=>{
    //     let newText = textModel.toUpperCase();
    //     setModelText(newText)
    //   }
    //    const Lower = ()=>{
    //     let newText = document.getElementById("message-text");
    //         // textModel.toLowerCase();
    //     setModelText(newText.value.toLowerCase());
    // }
      const Clear = () =>{
        let Atext = document.getElementById("message-text");
        Atext.value = "";
        let newText = "";
        setModelText(newText);
    } 
      const handleToOnChange =(event)=>{
          let newst = event.target.value;
          // setText(event.target.value);
          setModelText(newst);
        }
        const handleCopiedText =()=>{
            let text1 = document.getElementById('recipient-name')
            let text2 = document.getElementById('message-text')
        text1.select();
        text2.select();
        navigator.clipboard.writeText(text1.value +" "+ text2.value);
        document.getSelection().removeAllRanges();
        setCopied("Copied!");
        setTimeout(()=>{
            setCopied("Copy");
        }, 4500)
    }
      return (
          <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className={`modal-content bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}>
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
                <button type="button" className="btn-close bg-primary" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className={`modal-body bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}>
                <div className="mb-1">
                    <label htmlFor="recipient-name" className="col-form-label">Your Text:</label>
                    <textarea type="text" className="form-control" id="recipient-name" value={props.modelText} placeholder='Nothing is copied yet'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">Add:</label>
                    <textarea className="form-control" id="message-text" cols="40" rows="10" value={textModel}  placeholder='Enter the New Text' onChange={handleToOnChange}></textarea>
                </div>
            </div>
            <div className="modal-footer">
                <button className={`btn btn-${props.mode === 'dark'?'light':'dark'}`} disabled={textModel.length===0} onClick={handleCopiedText}>{copied}</button>
                {/* <button className={`btn btn-${props.mode === 'dark'?'light':'dark'}`} onClick={Upper}>Upper</button> */}
                {/* <button className={`btn btn-${props.mode === 'dark'?'light':'dark'}`} onClick={Lower}>Lower</button> */}
                <button className={`btn btn-${props.mode === 'dark'?'light':'dark'}`} disabled={textModel.length===0} onClick={Clear}> Clear </button>

                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Send message</button> */}
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
