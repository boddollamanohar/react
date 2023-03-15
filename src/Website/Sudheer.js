import React from 'react'
import './Style.css'
let Hero_name = 'Sudigali Sudheer'
let Hero_image = "https://cdn.tollywood.net/wp-content/uploads/2022/11/Sudigali-Sudheer-is-going-to-host-a-New-comedy-show-to-be-aired-on-Aha-to-compete-with-Jabardasth-jpg.webp"
 let Hero_image2 = "https://cdn.tollywood.net/wp-content/uploads/2022/11/Sudigali-Sudheer-is-going-to-host-a-New-comedy-show-to-be-aired-on-Aha-to-compete-with-Jabardasth-jpg.webp"


function Sudheer() {
  return (
    <div >
        <h1>Sudigali Sudheer</h1>
        <h2> {Hero_name}</h2>
        <img src={Hero_image} alt="" height={200} width={200} className="hello"/>
        <img src={Hero_image2} alt="" height={200} width={200}/>
    </div>
  )
}

export default Sudheer