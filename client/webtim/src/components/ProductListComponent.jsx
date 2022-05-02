import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import ProductService from '../services/ProductService'

const ProductListComponent = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      ProductService.getProducts().then((response) => {
          setProducts(response.data)
      }).catch(error =>{
          console.log(error);
      })
    }, [])
    

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

                      </tr>
                  </thead>
                  <tbody>
                      {
                          products.map(
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
                          products.reduce((previous, current) => previous + current.amount*current.price, 0)
                      }
              </b></em></h3>
          </div>


      </div>
  )
}

export default ProductListComponent

// export default class ProductListComponent extends Component {



//     constructor(props){
//         super(props)
//         this.state = {
//             products: []

//         }
//         this.addProduct = this.addProduct.bind(this);
//     }

//     addProduct(){
//         let navigate = useNavigate();
//         navigate('/add')
//     }

//     componentDidMount(){
//         ProductService.getProducts().then((res) => {
//             this.setState({ products: res.data});
//         });
//     }

//   render() {
//     return (
//       <div>
//           <h1 className="text-center">Products in the basket</h1>
//           <div className='row'>
//               <button className='btn btn-primary' onClick={this.addProduct}>Add Product</button>

//           </div>
//           <div className="row">
//               <table className='table table-striped table-bordered table-hover'>
//                   <thead className='thead-dark'>
//                       <tr>
//                           <th>Name</th>
//                           <th>Price</th>
//                           <th>Amount</th>

//                       </tr>
//                   </thead>
//                   <tbody>
//                       {
//                           this.state.products.map(
//                               product =>
//                               <tr key={product.name}>
//                                   <td>{product.name}</td>
//                                   <td>{product.price}</td>
//                                   <td>{product.amount}</td>

//                               </tr>
//                           )
//                       }
//                   </tbody>

//               </table>
//               <br/>
//               <h3 className='text-center'><em><b>
//                       Total price: {
//                           this.state.products.reduce((previous, current) => previous + current.amount*current.price, 0)
//                       }
//               </b></em></h3>
//           </div>


//       </div>
//     )
//   }
// }

