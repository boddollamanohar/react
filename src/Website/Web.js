import React, { Component } from 'react'

export class Web extends Component {
    Hero_name = "Sudigali Sudheer";
    Hero_image2 = "https://szcdn.ragalahari.com/nov2022/hd/sudigali-sudheer-gaalodu-interview/sudigali-sudheer-gaalodu-interviewthumb.jpg"
render() {
    return (
      <div className='hello'>
        <h1>Hero details</h1>
        <h2>{this.Hero_name}</h2>
        {/* <img src={this.Hero_image} alt="MB"  height={200} width={300}/> */}
        <img src={this.Hero_image2} alt="MB" height={200} width={200}/>
        
      </div>
    )
  }
}

export default Web