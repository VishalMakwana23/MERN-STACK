import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
const Home = ({ setLoginUser }) => {

    const navigate = useNavigate();
    const[prodData,setProdData] = useState([]);
 





    const getProducts = () => {
        axios.get("/api/productList").then((res) => {
            const productData = res.data.data
            setProdData(productData);
            console.log(productData)
        })
    }

    useEffect(() => {
        getProducts();
    },[])
    
    const deleteProduct = (pid) => {
  
        axios.post('/api/deleteProduct',{"id":pid}).then((res)=> {
            alert(res.data.data)
            getProducts();           
        })
        
    }

    const updateProduct = (t) => {

        axios.put('/api/updateProduct',{_id:t}).then((res) => {

           
        })
      
    }
    
    return (
        <div align="center">
            <h1>Home Page</h1>
            <div className="table">
              <table>
                  <thead>
                  <tr id='row'>
                      
                      <th>Count</th>
                      <th></th>
                      <th>Title</th>
                      <th>Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  {prodData.map((item,index)=> (        
                    <tr key={item._id}>
                    
                     <td>{index+1}</td>  
                     <td><img src={item.pimg} style={{ width: "75px",height: "75px",borderRadius: "50%", objectFit: "cover"}}  alt="..."  /></td>   
                     <td>{item.pname}</td>
                     <td>{item.pdesc}</td>
                     <td ><button onClick={()=>deleteProduct(item._id)}>delete</button></td>
                     <td ><button onClick={()=> navigate('/update',{state : {id:item._id,pimg: item.pimg,pname:item.pname,pdesc:item.pdesc,pprice:item.pprice}} )}>update</button></td>
                    </tr>
                 ))}
                   </tbody>
              </table>
            </div> 
            <button onClick={() => navigate('/addProduct')}>Add Product</button>
            <button onClick={() => setLoginUser({})}>Logout</button>
        </div>
    )
}

export default Home
