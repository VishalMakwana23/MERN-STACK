import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const AddProduct = () => {

    const navigate = useNavigate()
    const product = {
        pimg:"",
        pname:"",
        pdesc:"",
        pprice:0
    }

    const addProduct = () => {
        axios.post("/api/addProduct",product)
        .then(res => {
            alert(res.data.data)
            navigate('/')
        })
    }

    return (
        <div>
            <h3>Add Product</h3>
            <input
                type='text' placeholder='Enter Product Url' onChange={(e) => {product.pimg = e.target.value}}
            /><br/>
            <input
                type='text' placeholder='Enter Product Name' onChange={(e) => {product.pname = e.target.value}}
            /><br/>
            <input
                type='text' placeholder='Enter Product Description' onChange={(e) => {product.pdesc = e.target.value}}
            /><br/>
            <input
                type='text' placeholder='Enter Product Price' onChange={(e) => {product.pprice = Number(e.target.value)}}
            /><br/>
             <button onClick={addProduct}>Add</button>
        </div>
    )
}

export default AddProduct
