import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import ProductService from '../services/ProductService'
import { Link } from 'react-router-dom'


const AddProductComponent = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')


  const saveOrUpdateProduct = () => {

  }

  return (
    <div>
      <div className='container'>
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
                  >
                  </input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Price </label>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    name="price"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  >
                  </input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Amount </label>
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    name="amount"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  >
                  </input>
                </div>

                <button className="btn btn-success" onClick={(e) => saveOrUpdateProduct(e)} >Submit </button>
                <Link to="/products" className="btn btn-danger"> Cancel </Link>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductComponent