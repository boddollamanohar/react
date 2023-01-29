import React, { Component } from 'react'

 class Employe extends Component {
  render() {
    return (
      <form>
        <div className="container">
<div className="row">
    <div className="colmun">
        <div className="row-ml-6">
            <h1> Employee Details</h1>
 <div><input type="text" placeholder='Ename' /></div>
 <div><input type="text" placeholder='EmailId' /></div>
 <div><input type="text" placeholder='Phone' /></div>
 <div><input type="submit" value='login' /></div>

        </div>
    </div>
</div>
        </div>
      </form>
    )
  }
}

export default Employe