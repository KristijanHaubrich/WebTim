import React, { Component } from 'react'
import ProductService from '../services/ProductService'

export default class ProductListComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            products: []

        }
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }

  render() {
    return (
      <div>
          <h1 className="text-center">Products in the basket</h1>
          <div className="row">
              <table className='table table-striped table-bordered table-hover'>
                  <thead className='thead-dark'>
                      <tr>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Amount</th>

                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.products.map(
                              product =>
                              <tr key={product.name}>
                                  <td>{product.name}</td>
                                  <td>{product.price}</td>
                                  <td>{product.amount}</td>

                              </tr>
                          )
                      }
                  </tbody>

              </table>
              <br/>
              <h3 className='text-center'><em><b>
                      Total price: {
                          this.state.products.reduce((previous, current) => previous + current.amount*current.price, 0)
                      }
              </b></em></h3>
          </div>


      </div>
    )
  }
}
