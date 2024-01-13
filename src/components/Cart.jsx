import React, { useState,useEffect } from 'react'
import axiosInstance from '../helper/axiosInstance'
import Product from './Product';

const Cart = () => {

  let [products, setProducts] = useState([])

  useEffect(()=>{
    let fetchdata= async ()=>{
    let {data} = await axiosInstance.get("/posts")
    setProducts(data)
    }
    fetchdata()
  },[])

  return (
    <div className='container'>
      {products.map((x)=>{
        return (
          <div className='cards'>
            <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${x.pname}`} />
            <h3>Product Name : {x.pname}</h3>
            <h3>Product Qty: {x.pqty} </h3>
            <h3>Product price : {x.pprice}</h3>
            <div className='btn-block'>
              <button>Update</button>
              <button>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cart