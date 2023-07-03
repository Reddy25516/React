import React, { useEffect } from 'react';
import { userContext} from '../App';
import { useContext } from 'react';
import { useState } from 'react';
import {useRef} from 'react';

const Cart = ()=> {

    const [posts,addCart,cartData,setCartData]= useContext(userContext);
    // console.log("the card data is",cartData);
    // console.log(cartData);
    
    const [data,setData] =useState([]);
    let ref = useRef(null);

    useEffect(()=>{
        console.log("use effect happening");
        loadData();
    },[cartData]);

    const loadData= () =>{
        console.log("the cart data is",cartData);
        console.log("we are in load data");
        let obj=cartData;
        let new_data=[]

        for(let i=0;i<obj.length;i++){
            if(obj[i]['cart_count']==null){
                // console.log("cart count is 1")
            }
            else if(obj[i]['cart_count']<=0){
                obj[i]['cart_count']=null;
                new_data[i]=obj[i]
            }
            else{
                new_data[i]=obj[i]
            }
        }
        setData(new_data)
        console.log("the new data is",new_data);
    }

    const decreaseQuantity =(e)=>{
        let id=e.target.name;
        remove(id);
        function remove(id){
            let obj=cartData;
            for(let i=0;i<obj.length;i++){
                if(obj[i]['id']==id){
                    if(obj[i]['cart_count']==1){
                        // console.log("cart count is 1")
                        obj[i]['cart_count']=1;
                    }else{
                        // console.log("the cart count is decreased")
                        obj[i]['cart_count']-=1
                    }
                }
            }
        setCartData([...obj])
        }
    }

    const increaseQuantity=(e)=>{
        let id=e.target.name;
        remove(id);
        function remove(id){
            let obj=cartData;
            for(let i=0;i<obj.length;i++){
                if(obj[i]['id']==id){
                    if(parseInt(obj[i]['cart_count'])>=20){
                        // console.log("cart count is 1")
                        obj[i]['cart_count']=20;
                    }else{
                        // console.log("the cart count is decreased")
                        obj[i]['cart_count']=parseInt(obj[i]['cart_count'])+1
                    }
                }
            }
        setCartData([...obj])
        }
    }

    const setQuantity=(e)=>{
        // console.log("blur qunaity happening");
        // let id=e.target.name;
        // let value=e.target.value;
        // console.log("the blue qunaith id is ",id);
        // change(id);
        // function change(id){
        //     let obj=cartData;
        //     for(let i=0;i<obj.length;i++){
        //         if(obj[i]['id']==id){
        //             obj[i]['cart_count']=value;
        //         }
        //     }
        // // setData([...obj]);
        // setCartData([...cartData]);
        // }
    }

    const changeQunatity=(e)=>{
        let id=e.target.name;
        let value=e.target.value;
        change(id,value);
        function change(id,value){
            let obj=data;
            obj[id-1]['cart_count']=value;
            setData([...obj])
        }
    }

    const removeFromCart=(e)=>{
        let id=e.target.name;
        remove(id);
        function remove(id){
            let obj=cartData;
            for(let i=0;i<obj.length;i++){
                if(obj[i]['id']==id){
                    obj[i]['cart_count']=null;
                }
            }
        setCartData([...obj])
        }
    }

    return (
        <>
        <div className='container '>
              <div className='row cart'>
        {
        data.map(post=> 
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
                        <input type="text" className='col-2 text-center fw-5' value={post.cart_count} name={post.id} onChange={changeQunatity} onBlur={setQuantity}/>
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
