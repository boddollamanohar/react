import React from "react";
class Product extends React.Component{
    state={
        product:{
            product_Name : "SAMSUNG ",
            price : 344900,
            qty : 1,
            image : "https://rukminim1.flixcart.com/image/416/416/j7m7y4w0/television/s/h/z/samsung-65q8c-original-imaevyz6fm2t3bzq.jpeg?q=70"

        }
        
    }
    decrHandler = ()=>{
        this.setState({
            product:{
                ...this.state.product , qty:this.state.product.qty - 1
            }
        })
    }
    incrHandler = ()=>{
        this.setState({
            product:{
                ...this.state.product , qty:this.state.product.qty + 1
            }
        })
    }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-10">
                    <table className='table'>
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
                                <td>{this.state.product.product_Name}</td>
                                <td><img src={this.state.product.image} width="80px" alt="" /></td>
                                <td>{this.state.product.price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.product.qty} <i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.product.price * this.state.product.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>

    }
}
export default Product
