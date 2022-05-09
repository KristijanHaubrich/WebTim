import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import ProductService from '../services/ProductService'

const ProductListComponent = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      getProducts();
    }, [])

    const getProducts = () => {
        ProductService.getProducts().then((response) => {
            setProducts(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteProduct = (name) => {
        ProductService.deleteProduct(name).then((response) =>{
         getProducts();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }
    

  return (
    <div className='container'>
          <h1 className="text-center">Products in the basket</h1>
          <Link to = "/add" className='btn btn-primary mb-2'>Add Product</Link>
          <div className="row">
              <table className='table table-striped table-bordered table-hover'>
                  <thead className='thead-dark'>
                      <tr>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Amount</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          products.map(
                              product =>
                              <tr key={product.name}>
                                  <td>{product.name}</td>
                                  <td>{product.price} kn</td>
                                  <td>{product.amount}</td>
                                  <td>
                                  <button className = "btn btn-danger" onClick = {() => deleteProduct(product.name)}> Delete</button>
                                  </td>

                              </tr>
                          )
                      }
                  </tbody>

              </table>
              <br/>
              <h3 className='text-center'><em><b>
                      Total price: {
                          products.reduce((previous, current) => previous + current.amount*current.price, 0)
                      } kn
              </b></em></h3>
          </div>


      </div>
  )
}

export default ProductListComponent
