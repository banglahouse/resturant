import { render } from '@testing-library/react';
import React ,{useState}from 'react'
import { Component } from 'react';
import './style.css';
import EmptyCart from '../EmptyCart';
import {connect, useDispatch} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {cartclearItem} from '../../../redux/cart/cart.action'
import axios from "axios";
import Success from "../../common/Success"

const OrderForm =(props,dispatch ) => {

const[name,setName] = useState("")
const[email,setEmail] = useState("")
const[phone,setPhone] = useState("")
const[city,setCity] = useState("")
const[address,setAddress] = useState("")

// const dataFromCart = (name,title) =>
//  { props.list.cartList.map((data)=> 
// console.log(data.name,data.quantity))
// }
const dataFromCart = (props.list.cartList)
console.log(dataFromCart)


const id = dataFromCart.map((data) =>
  (data.itemid))

const quantity = dataFromCart.map((data) =>
(data.quantity))

  const price = dataFromCart.map((data) => (data.itemPrice))
  

  const total = (props.list.cartTotal)
 const nameOfCust =  JSON.stringify({name})
 const custPhone = JSON.stringify({phone})
 const emailAddress =  JSON.stringify({email})
 const custaddress = JSON.stringify({address})

  const headers = {
    'Content-Type': 'application/json',
   
  }
        
        
        const handleSubmit = (event) => {
            // alert(`${name}`)
            event.preventDefault()
          const data = {
            name : JSON.stringify({name}),
            phone: JSON.stringify({phone}),
            emailAddress: JSON.stringify({email}),
            address: JSON.stringify({address}),
         
            total: total,
            quantity: JSON.stringify(quantity),
            itemPrice: JSON.stringify(price),
            itemName: JSON.stringify(id),

              
            // itemPrice: price,
          
          // customerCity:{city},
        

        
          }

          {
          axios.post("http://hikebackend.herokuapp.com/api/order/",data,{
            headers: headers
          })  
          .then(function(response) {
            const status = response.status;
            // console.log(data)
            //redirect logic
            if (response.status === 200,201) {
              console.log(response)
              window.location = "/success"
           

            }
            props.clearCart()
        })
          .catch(function(error) {
            if (error){
              
              window.location = "/error"
              {console.log(error)}

            }
          }); 
     
          
           
      
          
           
          }  
        }
        
 

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className = "orderForm" >
            <h1 className = "orders-heading">Place Your Order!</h1>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" value={name} onChange = {(event)=>setName(event.target.value)}placeholder="John M. Doe"/>

          <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email"  value={email} onChange = {(event)=>setEmail(event.target.value)} placeholder="john@example.com"/>
            <label for="adr"><i class="fa fa-location-arrow"></i> Address</label>
            <input type="text" id="adr" name="address"  value={address} onChange = {(event)=>setAddress(event.target.value)} placeholder="542 W. 15th Street"/>
            {/* <label for="city"><i class="fa fa-map-marker"></i> City</label>
            <input type="text" id="city" name="city"  value={city} onChange = {(event)=>setCity(event.target.value)} placeholder="Nashik"/> */}
            <label for="Phone"><i class="fa fa-mobile"></i> Phone</label>
            <input type="text" id="phone" name="phone"  value={phone} onChange = {(event)=>setPhone(event.target.value)}  placeholder="+91"/>
            <div className ="button-container"  >
            <button type = "submit"  className = "button">Submit</button> 
            </div>

        


        </div>
        </form>
            
        </>
    )


    }
    const mapStateToprops = state =>{
      return{

      }
    }
    const mapDispatchToprops = dispatch =>{ 
      return{
        clearCart: () => dispatch({type: 'CART_CLEAR'})
      }
    }


export default connect(mapStateToprops, mapDispatchToprops) (OrderForm);
