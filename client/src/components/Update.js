import React from 'react'
import axios from 'axios'
import {  useLocation, useNavigate } from 'react-router-dom'
import {useState} from 'react'
const Update = (  ) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const {id} = state;
    const prodData = state;

    // const id = prodData._id;
    const [pimg,setPimg] = useState(prodData.pimg);
    const [pname,setPname] = useState(prodData.pname);
    const [pdesc,setPdesc] = useState(prodData.pdesc);
    const [pprice,setPprice] = useState(prodData.pprice);

  

    const onSubmit = (e) => {
        e.preventDefault()
       
        axios.put('/api/updateProduct/'+id,{pimg,pname,pdesc,pprice})
        .then(res =>{ 
            console.log(res.data)
            console.log(res.data.p)
            navigate('/')
        })
        
    }; 
    
    return (
        <div>
            <h3>Update Product</h3>
            
            <form onSubmit={onSubmit}>
            <input
                type='text' placeholder='Enter Product Url' value={pimg} onChange={(e) => setPimg(e.target.value)}
            /><br/>
            <input
                type='text' placeholder='Enter Product Name' value={pname} onChange={(e) => setPname(e.target.value)}
            /><br/>
            <input
                type='text' placeholder='Enter Product Description' value={pdesc} onChange={(e) => setPdesc(e.target.value)}
            /><br/>
            <input
                type='text' placeholder='Enter Product Price' value={pprice} onChange={(e) => setPprice(e.target.value)}
            /><br/>
             <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Update
