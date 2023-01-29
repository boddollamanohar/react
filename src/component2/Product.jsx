import React from 'react'

const Product = () => {
  let[product,setProduct]=React.useState({
    product_Name:"Iphone ",
    price:50000,
    qty:1

  })
  let incrHandler = () => {
    setProduct({ ...product, qty: product.qty + 1 })
}
let decrHandler = () => {
  setProduct({ ...product, qty: product.qty - 1 })
}
  return (
    <div >
        <div className="row">
          <div className="col-md-6">
            <table className='table'>
              <thead className="bg-secondary text-pink">
                <tr>
                  <td>Name</td>
                  <td>price</td>
                  <td>qty</td>
                  <td>total</td>
                </tr>
                <tr>
                  
                    <td>product.product_Name</td>
                    <td>product.price</td>
                    <td><i className="fa fa-minus-circle" onClick={() => {
                                setProduct({ ...product, qty: product.qty - 1 })
                            }}></i>{product.qty}<i className="fa fa-plus-circle" onClick={incrHandler} ></i></td>
                   <td>{product.qty*product.price}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
    </div>

  )
}

export default Product