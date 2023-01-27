import React from "react";
class Item extends React.Component{
    state={
        Product:{
        Product_Name : " Hybrid Cycle",
        Price : 5499,
        qty : 1,
        image :"https://rukminim1.flixcart.com/image/416/416/xif0q/cycle/q/a/s/city-26-fully-fitted-26-18-5-cradiac-121-single-speed-original-imagksuvcnfgqhmx.jpeg?q=70"
    }
}
    decrHandler=()=>{
        this.setState({
            ...this.state.product,qty:this.state.qty -1
        })
    }
    incrHandler=()=>{
        this.setState({
            ...this.state.product,qty:this.state.qty + 1
        })
    }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.Product.Product_Name}</td>
                                <td><img src={this.state.Product.image} width="130px" alt="" /></td>
                                <td>{this.state.Product.Price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.Product.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.Product.qty * this.state.Product.Price}</td>
                            </tr>
                            <tr>
                                <td>{this.state.Product.Product_Name}</td>
                                <td><img src={this.state.Product.image} width="130px" alt="" /></td>
                                <td>{this.state.Product.Price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.Product.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.Product.qty * this.state.Product.Price}</td>
                            </tr>
                            <tr>
                                <td>{this.state.Product.Product_Name}</td>
                                <td><img src={this.state.Product.image} width="130px" alt="" /></td>
                                <td>{this.state.Product.Price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.Product.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.Product.qty * this.state.Product.Price}</td>
                            </tr>
                            <tr>
                                <td>{this.state.Product.Product_Name}</td>
                                <td><img src={this.state.Product.image} width="130px" alt="" /></td>
                                <td>{this.state.Product.Price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.Product.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.Product.qty * this.state.Product.Price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.Product.Product_Name}</td>
                                <td><img src={this.state.Product.image} width="130px" alt="" /></td>
                                <td>{this.state.Product.Price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.Product.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.Product.qty * this.state.Product.Price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>





    }
}
export default Item
