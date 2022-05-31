import { Button } from 'react-bootstrap'
import { Modal, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react'
import ProductService from '../services/ProductService'
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router'



const UpdateProductForm = ({ product }) => {

    // const [name, setName] = useState(product.name)
    // const [price, setPrice] = useState(product.price)
    // const [amount, setAmount] = useState(product.amount)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [amount, setAmount] = useState('')

    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
    const navigate = useNavigate();


    const updateProduct = (e) => {
        e.preventDefault();
        const product = { name, price, amount, uid }
        ProductService.updateProduct(product).then((response) => {
            console.log(response)
            
        }).catch(error => {
            console.log(error);
        })
        navigate('/products')

    }


    return (
        <Form>
            <Form.Group style={{ margin: 20 }}>
                <Form.Control
                    type="text"
                    placeholder="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                >

                </Form.Control>
            </Form.Group>
            <Form.Group style={{ margin: 20 }}>
                <Form.Control
                    type="number"
                    placeholder="price"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                >

                </Form.Control>
            </Form.Group>
            <Form.Group style={{ margin: 20 }}>
                <Form.Control
                    type="number"
                    placeholder="amount"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                >

                </Form.Control>
            </Form.Group>

            <Button variant="success" type="submit" style={{ margin: 20, background: "deepskyblue" }} onClick={(e) => updateProduct(e)}> Save </Button>

        </Form>
    )
}

export default UpdateProductForm