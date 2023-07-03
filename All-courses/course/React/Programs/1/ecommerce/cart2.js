import React, { useEffect } from 'react';
import { userContext} from '../App';
import { useContext } from 'react';
import { useState } from 'react';
import {useRef} from 'react';

const Cart = ()=> {

    const [posts,addCart,cart,setCart]= useContext(userContext);
    const [cartData,setCartData] =useState([]);
    let ref = useRef(null);

    useEffect(()=>{
        console.log("the card dat", cartData);
        loadData();
    },[cart]);
    
    const loadData= () =>{
        let new_cart=cart.map((val)=>parseInt(val));
        const count=(arr,ele)=> arr.filter(element => {
            return element === ele;
        }).length;
        
        let cart_data=posts.filter(myfunction);
        function myfunction(data){
            if(new_cart.includes(data.id)){
                let cou= count(new_cart,data.id)
                data.cart_count=cou;
                return data;
            }
        }
        console.log(cart_data);
        setCartData(cart_data)
    }

    const decreaseQuantity =(e)=>{
        console.log("the id is",e.target.name);
        let id=e.target.name;
        remove(id);
        function remove(item){
            const index = cart.indexOf(item);
            cart.splice(index, 1);
            console.log("the cart is ",cart);
            setCart(cart);
        }
        console.log("the new cart is",cart);
        loadData();
    }

    const increaseQuantity=(e)=>{
        console.log("the id is",e.target.name);
        let id=e.target.name 
        add(id);
        function add(item){
            cart.push(item);
            console.log("the cart is ",cart);
            setCart(cart);
        }
        console.log("the new cart is",cart);
        loadData();
    }

    const setQuantity=(e)=>{
        let id =e.target.name;
        let value=e.target.value;
        console.log("the value is",value);
        let arr = cart.filter(item=>(item !== id))
        for(let i=0;i<value;i++){
            arr.push(id);
        }
        let cart_data=cartData;
        cart_data[id-1].cart_count=value;
        setCartData(cart_data);
        setCart([...arr]);
    }

    const removeFromCart=(e)=>{
        console.log("the target id is is",e.target.name);
        let id =e.target.name;
        let arr = cart.filter(item=>(item !== id))
        setCart([...arr]);
    }

    return (
        <>
        <div className='container '>
              <div className='row cart'>
        {
        cartData.map(post=> 
                <div className="cartItem d-flex col-8">
                    <div className='ms-4 col-3 '>
                        <img className='cart-image' src={post.thumbnail} />
                    </div>
                    <div className='ms-4 col-3'>
                        <h3 className=''>{post.title}</h3>
                    </div>
                    <div className="countHandler">
                        <h5>Quantity</h5>
                        <button onClick={decreaseQuantity} name={post.id}> - </button>
                        <input type="text" className='col-2 text-center fw-5' value={post.cart_count} name={post.id} onChange={setQuantity}/>
                        <button onClick={increaseQuantity} name={post.id}> + </button>
                        <button onClick={removeFromCart} name={post.id} class="fa-sharp fa-solid fa-trash"></button>
                    </div>
                    <div>
                        <h4>Price</h4>
                        <h2>${post.price}</h2>
                    </div>
                </div>
        )}
            </div>
        </div>
        </>
     )
}
export default Cart
