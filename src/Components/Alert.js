import React from 'react'

export default function Alert(props) {

const cap=(txt)=>{
    return txt.charAt(0).toUpperCase()+txt.slice(1);
}
  return (
    <div style={{height:'30px'}}>
        {props.alert &&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{cap(props.alert.type==="success"?props.alert.type:"ERROR")}</strong>: {props.alert.msg}
    </div>}
  </div>
  )
}
