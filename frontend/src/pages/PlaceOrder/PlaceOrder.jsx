import React, { useContext, useEffect } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import { useEffect } from 'react';

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext);

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChanegHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
  }

  // useEffect(()=>{
  //   console.log(data);
  // },[data])

  const placeOrder = async (event) =>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    // console.log(orderItems);
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+30,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);              //send the user to the session_url
    } else {
      alert("Error");    
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      navigate('/cart')
    }
    else if (getTotalCartAmount()===0)
    {
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChanegHandler} value={data.firstName} type="text" placeholder='First Name' />
          <input required name='lastName' onChange={onChanegHandler} value={data.lastName} type="text" placeholder='Last Name' />
        </div>
        <input required name='email' onChange={onChanegHandler} value={data.email} type="email" placeholder='Your Email Adderss' />
        <input required name='street' onChange={onChanegHandler} value={data.street} type="text" placeholder='street'/>
        <div className="multi-fields">
          <input required name='city' onChange={onChanegHandler} value={data.city} type="text" placeholder='City' />
          <input required name='state' onChange={onChanegHandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChanegHandler} value={data.zipcode} type="text" placeholder='Zip code' />
          <input required name='country' onChange={onChanegHandler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChanegHandler} value={data.phone} type='text' placeholder='Phone'/>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
            <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>₹{getTotalCartAmount()===0?0:30}</p>
                </div>
                <hr/>
                <div className="cart-total-details">
                  <p>Total</p>
                  <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+30}</p>
                </div>
              </div>                
              <button type='submit'>PROCEED TO CHECKOUT</button>          
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
