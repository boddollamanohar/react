import React from "react";
function Compb(Props) {
    
  return (
    <div>
        <h2> component B</h2>
        <pre>{JSON.stringify(Props)}</pre>
        <h5>properity 1 :{Props.Prop1}</h5>
        <h5>properity 2 :{Props.Prop2}</h5>
    </div>
  )

}
export default Compb