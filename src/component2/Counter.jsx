import React,{useState} from'react'
let Counter=()=>{
    let[state,setState]=useState(1)
    return<>

    <h1>Counter</h1>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h1>Counter value:{state}</h1>
                        <div className="card-body">
                         <button  className="btn btn-danger"onClick={()=>{setState(state-1)}}>DECR</button>
                         <button className="btn btn-success ml-4"onClick={()=>{setState(state+1)}}>INCR</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
}
export default Counter