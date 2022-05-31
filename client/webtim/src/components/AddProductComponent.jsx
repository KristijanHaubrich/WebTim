import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import ProductService from '../services/ProductService'
import { Link } from 'react-router-dom'
import { getAuth } from "firebase/auth";
import classes from "../styles/AddProduct.module.scss";


const AddProductComponent = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid;
  


  const saveProduct = (e) => {
      e.preventDefault();
      const product = {name, price, amount, uid}
      ProductService.addProduct(product).then((response) =>{
        console.log(response.data)
        navigate('/products')
      }).catch(error => {
        console.log(error)
      })

  }
  

  return (
    <div>
      <br/>
      <div className={classes.container}>
        <div className='row'>
          <div className='card col-md-6 offset-md-3'>
            <h2 className='text-center'> Add new product</h2>
            <div className='card-body'>
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Name </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  >
                  </input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Price </label>
                  <input
                    type="number"
                    placeholder="Enter Price"
                    name="price"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  >
                  </input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Amount </label>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    name="amount"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  >
                  </input>
                </div>

                <button className={classes.button_success} onClick={(e) => saveProduct(e)} >Submit </button>
                <Link to="/products" className={classes.button_danger}> Cancel </Link>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductComponent