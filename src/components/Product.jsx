import axios from 'axios'
import React, { useState } from 'react'
import axiosInstance from '../helper/axiosInstance'
import { useNavigate } from 'react-router-dom'

const Product = () => {

  let [pname, setPname] = useState("")
  let [pqty, setPqty] = useState("")
  let [pprice, setPprice] = useState("")
  let navigate = useNavigate("")

  let addProduct = (e)=>{
    e.preventDefault()
    let payload = {
      pname, pqty, pprice
    }
    axiosInstance.post("/posts" , payload)
    navigate("/cart")
  }
  return (
    <div>
        <form style={{textAlign:'center'}}>
            <fieldset>
                <legend>ADD product</legend><br/><br/>

                <label >Product Name : </label>
                <input type='text' onChange={(e)=>{
                  setPname(e.target.value)
                }} /><br/><br/>

                <label>Product Qty</label>
                <input type='text' onChange={(e)=>{
                  setPqty(e.target.value)
                }}/><br/><br/>

                <label>Product price</label>
                <input type='text' onChange={(e)=>{
                  setPprice(e.target.value)
                }}/><br/><br/>

                <button onClick={addProduct}>addProduct</button><br/><br/>
                <button type="reset">Cancel</button><br/><br/>
               
            </fieldset>
        </form>
    </div>
  )
}

export default Product