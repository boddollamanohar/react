import React from "react";
class Message extends React.Component {
    state = {
        salary: 50000
    }
    updateSalary(value){
        this.setState({value});
    }
render(){
return <div>
    <h1>Message component</h1>
    <button onClick={this.updateSalary.bind()}>100% hike</button>
    <button>50% hike</button>
    <button>10% hike</button>
    <button>0% hike</button>
</div>

}
}
export default Message