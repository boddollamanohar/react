import React from "react";
import Compb from "./components/compb";

function CompaA() {
    let a =1000
    let b =100

    return   <div>
        <h1>Component A </h1> <hr />
        <Compb Prop1 ={a} Prop2={b} />

    </div>

}
export default CompaA