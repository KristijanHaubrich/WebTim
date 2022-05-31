import React, {useEffect, useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import ProductService from '../services/ProductService'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import classes from "../styles/ProductList.module.scss";
import { Modal, Button } from 'react-bootstrap';
import UpdateProductForm from './UpdateProductForm';

const ProductListComponent = () => {

    const [show, setShow] = useState(false);

    const [products, setProducts] = useState([])
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        navigate('/SignIn')
      }
    });



    useEffect(() => {
      getProducts(uid);
    }, [])

    const getProducts = () => {
        ProductService.getProducts(uid).then((response) => {
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

     const updateProduct = (product) => {
        ProductService.updateProduct(product).then((response) =>{
         getProducts();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }

     const handleShow = () => setShow(true);
     const handleClose = () => setShow(false);

    

  return (
    <div className={classes.container}>
          <h1 className="text-center">Products in the basket {user.displayName}</h1>
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
                                  <button className={classes.button} style={{marginRight: 10, background: "deepskyblue"}} onClick = {handleShow} data-toggle="modal" > Update</button>
                                  <button className={classes.button}  onClick = {() => deleteProduct(product.name)}> Delete</button>
                                  </td>

                              </tr>
                          )
                      }
                  </tbody>

              </table>
              <br/>
              <h3 className='text-center'><em><b>
                      TOTAL PRICE: {
                          products.reduce((previous, current) => previous + current.amount*current.price, 0)
                      } kn
              </b></em></h3>
          </div>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                  <Modal.Title>
                      Update Product
                  </Modal.Title>

              </Modal.Header>
              <Modal.Body>
                      <UpdateProductForm/>
              </Modal.Body>
              <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>Cancel</Button>
              </Modal.Footer>
          </Modal>


      </div>
  )
}

export default ProductListComponent
