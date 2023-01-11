import React from 'react'
class Venkat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "venkat",
            link: "https://upload.wikimedia.org/wikipedia/commons/d/de/Malekallu_Tirupathi-balaji%2C_Arsikere.jpg"
        }
    }
    render() {
        return <div>
            <h1> venkat compounant </h1>
            <h1> {this.state.name} </h1>
            <img src={this.state.link} alt="" />
        </div>

    }
}

export default Venkat
