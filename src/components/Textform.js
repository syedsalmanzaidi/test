import React, { useState } from 'react';


export default function Textform(props) {
  const [Text, setText] = useState("Enter the text"); 
const uppercase=()=>{
  let newtext= Text.toUpperCase();
  setText(newtext)
  props.showAlert("Convert to UpperCase","Success")
}
const onchanged=(event)=>{
  console.log("Onchanged")
  setText(event.target.value)
}
const lowercase=()=>{
  let newtxt=Text.toLowerCase();
  setText(newtxt)
  props.showAlert("Convert to LowerCase","Success")
}
const clear=()=>{
  setText("") 
  props.showAlert("Cleared Text","Success")
}
const copytxt=()=>{
  var text=document.getElementById("box")
  text.select()
  text.setSelectionRange(0,9999)
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text copied","Success")
}
const extra=()=>{
    let newText=Text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed Extra spaces","Success")
}
  return (
   <div className='container ' style={{color:props.mode==='dark'?'white':'black'}}>
    
    <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" value={Text} onChange={onchanged} style={{backgroundColor:props.mode==='dark'?'#031a3d':'white' ,
   color:props.mode==='light'?'black':'white'}} id="box" rows="8"></textarea>
</div>
<button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={uppercase}>Convert to upercase</button>
<button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={lowercase}>Convert to lowercase</button>
<button disabled={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={clear}>Clear Text</button>
<button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={copytxt}>Copy Text</button>
<button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={extra}>Remove ExtraSpaces</button>
<div className="container">
    <h1>Your Text summary</h1>
  
      {/* <p> {Text.split(" ").length} words and {Text.length} charactors</p> */}
      <p>Words {Text.trim(" ").split(/\s+/).filter( (e) => e !=="").length} And Cahracters {Text.length}</p>

    
    

    <p> {0.008* Text.split(" ").filter( (e) => e !=="").length} MInutes to read charactors</p>
   
</div>
<h2>Preview</h2>
    <div  className="mb-3">
      

  
    <p>{Text.length>0?Text:"Nothing to preview!"}</p>


  </div>

</div>


   )
}
