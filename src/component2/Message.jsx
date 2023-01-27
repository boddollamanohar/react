import React from 'react'
import { useState } from 'react'



 const Message = () => {
    let[msg,SetMsg]=useState({
        product_Name : "SAMSUNG ",
        price : 344900,
        qty : 1,
        image : "https://rukminim1.flixcart.com/image/416/416/j7m7y4w0/television/s/h/z/samsung-65q8c-original-imaevyz6fm2t3bzq.jpeg?q=70"

    })
   let change=()=>{
    SetMsg({...msg,price:50000000})
   }

  return (
    <div>

        <h1>Message component</h1>
        <h1>{msg.product_Name}</h1>
        <h1>{msg.price}</h1>
        <h1>{msg.qty}</h1>
        <h1>{msg.image}</h1>
        <button  onClick={change}>GM</button>
        <button >GN</button>
    </div>
  )
}

export default Message