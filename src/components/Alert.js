import React from 'react'

function Alert(props) {
    const captalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.chatAt(0).toLowerCase()+lower.slice(1)
    }
  return (
    <div style={{height:'60px'}}>
 {  props.alert&&   <div class={`alert alert-warning alert-dismissible fade show`} role="alert">
       <strong>   {props.alert.type} </strong>      {props.alert.msg}
 
</div>}
</div>
  )
}

export default Alert