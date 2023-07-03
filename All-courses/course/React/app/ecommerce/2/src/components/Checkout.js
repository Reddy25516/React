import React from 'react'
import { userContext} from '../App';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../css/checkout.css';
import $ from 'jquery';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Checkout = () => {
    const navigate =useNavigate();
    const [posts, addToCart, jsonData, setPosts, load_rating,
        cartCount, setCartCount, addToWishList,setWishCount,wishCount,filterAll,setIsSigned,isSigned,myAccount,setMyAccount,setLocal]= useContext(userContext);
    const [data,setData] =useState([]);
    const [subTotal,setSubTotal]=useState(0);
    const [grandTotal,setGrandTotal]=useState(parseInt(0));
    const [shippingPrice,setShippingPrice]=useState(parseFloat(6.99));
    const [discount,setDiscount]=useState();
    const [tax,setTax]=useState(0);

    
    useEffect(()=>{
        if(!isSigned){
            navigate('/signin')
        }
        loadData();
    },[posts]);

    

    useEffect(()=>{
        getTax();
        getGrandTotal();
    },[subTotal,shippingPrice])

    const getGrandTotal=()=>{
        console.log("the shippig price is",shippingPrice);
        let value1= parseFloat(subTotal)+ parseFloat(shippingPrice) + parseFloat(tax)
        // value1.toFixed(2);
        value1=Math.round(value1*100)/100
        console.log("the grand total value is",value1);
        setGrandTotal(value1);
    }

    const getTax=()=>{
        let value=parseFloat(subTotal)+parseFloat(shippingPrice)
        value= value*0.3
        value= parseFloat((value/100).toFixed(2));
        console.log("the tax value is",value);
        setTax(value)
    }
    
    const loadData= () =>{
        let obj=posts;
        let new_data=[]
        for(let i=0;i<obj.length;i++){
            if(obj[i]['cart_count']>=1){
                new_data=[...new_data,obj[i]]
            }
        }
        setData([...new_data])
        setSubTotal(getPrice(new_data));
    }

    // $('input[type=radio]').on("click", function(){
    //     setShippingPrice(parseFloat(this.value));
    //     console.log("the shiipig value is",this.value)
    //     $('input[type=radio]').checked=false;
    //     this.checked=true;
    // })
    
    const getPrice=(new_data)=>{
        let price=0
        for(let i=0;i<new_data.length;i++){
            // console.log(new_data[i].price)
            // console.log(new_data[i].cart_count);
            price+=new_data[i].price* new_data[i].cart_count
        }
        return price
    }

    const placeOrder=()=>{
        let obj= posts;
        for(let i=0;i<obj.length;i++){
            obj[i].cart_count=0;
        }
        setLocal(obj);
        setCartCount(0);
        navigate('/success');
    }


    let shippings=document.getElementsByClassName('shipping1');
        for(let i=0;i<shippings.length;i++){
        shippings[i].addEventListener("click",function(e){
            e.target.checked=true;
            console.log("e.taret value is",e.target.value);
            setShippingPrice(e.target.value);
        })
    }
    

  return (
    <>
    <div className='col-9 checkout container'>
    {
       data.length>0 ? (
        <div className='d-flex'>
        <div className='col-6 '>
            <table className='col-11 products ' >
                    <tr className='text-center'>
                        <th className='col-4 text-start '>Product Name</th>
                        <th className='col-1'>Price</th>
                        <th className='col-1 '>Quantity</th>
                        <th className='col-1 text-end'>Total Price</th>
                    </tr>
                {
                data.map(post=> 
                    <>
                <tr className=' text-center '>
                    <td className='title text-start'>
                        {post.title}
                    </td>
                    <td className="price " >
                        ${post.price}
                    </td>
                    <td className='price '>
                        {post.cart_count}
                    </td>
                    <td  className="price col-1 text-end">
                        ${post.price*post.cart_count}
                    </td>
                </tr>
                    </>
                )}
                <tr className='last-row '>
                    <td></td>
                    <td></td>
                    <td className='text-end price'>Total Price</td>
                    <td className='price text-end'>${subTotal}</td>
                </tr>
            </table>

            <div className='shipping col-11 '> 
                <p className='title'>SHIPPING METHOD</p>
                <div>
                    <input type="radio" name="shipping1" className='shipping1' value="6.99"></input>
                    <p className='col-8'>Standard Delivery 3-5 days</p>
                    <p className='price col-2 text-end'> $6.99</p>
                </div>
                <div>
                    <input type="radio" name="shipping1" className='shipping1' value="15.99"></input>
                    <p className='col-8'>Next Day & evening delivery</p>
                    <p className='price col-2 text-end'> $15.99</p>
                </div>
            </div>
        </div>
        <div className='right col-6'>
            <div className='promo col-8'>
                <p>APPLY PROMOCODE</p>
                <p>Promocode</p>
                <input type="text" className='col-12'></input>
                <button className='apply col-5'>APPLY</button>
            </div>
            <div className='summary col-8 '>
                <table className='col-12'>
                    <tr className='col-11 '>
                        <th className='col-7 ms-4'>SUMMARY</th>
                        <td className='col-3'></td>
                    </tr>
                    <tr><td >Subtotal</td><td >${subTotal}</td></tr>
                    <tr><td>Shipping</td><td>${shippingPrice}</td></tr>
                    <tr><td>Discount</td><td>$0</td></tr>
                    <tr><td>Tax</td><td>${tax}</td></tr>
                    <tr><td>Total</td><td>${grandTotal}</td></tr>
                </table>
            </div>
            <div className='place-order '>
                {/* <Link to="/success"> */}
                <button className='white' onClick={placeOrder}>Place Order <i className="fa-solid fa-arrow-right"></i></button>
                {/* </Link> */}
            </div>
        </div>
        </div>
        ) : (<></>)}
                
    </div>
    </>
  )
}

export default Checkout
