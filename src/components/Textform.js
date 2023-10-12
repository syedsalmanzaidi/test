import { getByDisplayValue } from '@testing-library/react';
import React, { useState } from 'react';


export default function Textform(props) {
  const [Text, setText] = useState("Enter the text"); 
const uppercase=()=>{
  // console.log("Upper cass was clicked.")
  let newtext= Text.toUpperCase();
  setText(newtext)
  props.showAlert("Convert to UpperCase","Success")
}
const onchanged=(event)=>{
  console.log("Onchanged")
  setText(event.target.value)
}
const lowercase=()=>{
  // console.log("Lower was clicked..")
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

  <textarea className="form-control" value={Text} onChange={onchanged} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,
   color:props.mode==='light'?'black':'white'}} id="box" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={uppercase}>Convert to upercase</button>
<button className="btn btn-primary mx-1" onClick={lowercase}>Convert to lowercase</button>
<button className="btn btn-danger mx-1" onClick={clear}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={copytxt}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={extra}>Remove ExtraSpaces</button>
<div className="container">
    <h1>Your Text summary</h1>
  
      {/* <p> {Text.split(" ").length} words and {Text.length} charactors</p> */}
      <p>Words {Text.trim(" ").split(" ").filter( (e) => e !="").length} And Cahracters {Text.length}</p>

    
    

    <p> {0.008* Text.split(" ").length} MInutes to read charactors</p>
   
</div>
<h2>Preview</h2>
    <div  className="mb-3">
      

  
    <p>{Text.length>0?Text:"Enter the text in above box to preview here:"}</p>


  </div>

</div>


   )
}
