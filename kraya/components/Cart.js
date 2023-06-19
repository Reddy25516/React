import React, { useEffect } from 'react';
import { userContext} from '../App';
import { useContext } from 'react';
import { useState } from 'react';
import '../css/cart.css';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";

import { changeData, toggleWish,changeCartCount,changeNavData} from '../action';

const Cart = ()=> {

    const [addToCart, load_rating, addToWishList,filterAll] = useContext(userContext);

    const dispatch =useDispatch();
    const values =useSelector(state=>state)
    let posts = values.data;
    console.log(posts);
    let navData= values.navData;
    let cartCount= values.cart.cartCount;

    const [data,setData] =useState([]);
    const [totalPrice,setTotalPrice]=useState(0);

    const loadData= () =>{
        let obj=posts;
        let new_data=[]
        for(let i=0;i<obj.length;i++){
            if(obj[i]['cart_count']>=1){
                new_data=[...new_data,obj[i]]
            }
        }
        setData([...new_data])
        setTotalPrice(getTotalPrice(new_data));
    }

    useEffect(()=>{
        loadData();
    },[posts]);

    const getTotalPrice=(new_data)=>{
        let price=0
        for(let i=0;i<new_data.length;i++){
            console.log(new_data[i].price)
            console.log(new_data[i].cart_count);
            price+=new_data[i].price* new_data[i].cart_count
        }
        return price
    }

    const decreaseQuantity =(e)=>{
        let id=e.target.name;

        let obj=posts;
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
        // setLocal([...obj]);
        dispatch(changeData([...obj]))

        let nav_data=navData
        for(let i=0;i<nav_data.length;i++){
            if(nav_data[i].id===id){
                if (nav_data[i]['cart_count'] ===1 ) {
                nav_data[i]['cart_count'] = 1;
                } else {
                nav_data[i]['cart_count'] -= 1
                }
            }
        }
        dispatch(changeNavData([...navData]))
        
    }

    const increaseQuantity=(e)=>{
        let id=e.target.name;
        remove(id);
        function remove(id){
            let obj=posts;
            for(let i=0;i<obj.length;i++){
                if(obj[i]['id']==id){
                    if(parseInt(obj[i]['cart_count'])>=20){
                        obj[i]['cart_count']=20;
                    }else{
                        obj[i]['cart_count']=parseInt(obj[i]['cart_count'])+1
                    }
                }
            }
        // setLocal([...obj]);
        dispatch(changeData([...obj]))
        }

        let nav_data=navData
        for(let i=0;i<nav_data.length;i++){
            if(nav_data[i].id===id){
                if (nav_data[i]['cart_count'] == 20) {
                nav_data[i]['cart_count'] = 20
                } else {
                nav_data[i]['cart_count'] += 1
                }
            }
        }
        dispatch(changeNavData([...navData]))
    }
    

    const inputQuantity=(e)=>{
        let new_data=posts;
        let id=e.target.name;
        if(new_data[id-1]['cart_count']===""){
            new_data[id-1]['cart_count']=1;
        }
        // setLocal([...new_data])
        dispatch(changeData([...new_data]))

        let nav_data=navData
        for(let i=0;i<nav_data.length;i++){
            if(nav_data[i].id===id){
                if (nav_data[i]['cart_count'] === "") {
                nav_data[i]['cart_count'] = 1
                }
            }
        }
        dispatch(changeNavData([...navData]))
    }

    const changeQunatity=(e)=>{
        let id=e.target.name;
        let value=e.target.value;
        change(id,value);
        function change(id,value){
            let obj=data;
            var name = /^[0-9]+$/;
            if(value==""){
                obj[id-1]['cart_count']=value;
            }
            else if(value.match(name)){
                if(value>20){
                    value=20
                }
                if(value==0){
                    value=1
                }
                obj[id-1]['cart_count']=value;
            }

            setData([...obj])
        }
    }

    const removeFromCart=(e)=>{
        let id=e.target.name;
        let obj=posts;
        for(let i=0;i<obj.length;i++){
            if(obj[i]['id']==id){
                obj[i]['cart_count']=null;
            }
        }
        // setLocal(obj);
        dispatch(changeData([...obj]))
        dispatch(changeCartCount(cartCount-1))

        let nav_data=navData
        for(let i=0;i<nav_data.length;i++){
            if(nav_data[i].id===id){
                nav_data[i]['cart_count'] = null
            }
        }
        dispatch(changeNavData([...navData]))
    }


    return (
        <>
        <div className='col-9 cart'>
        {
           data.length>0 ? (
            <>
           <table className='col-12 border' >
            <tr className='border'>
                <th className='col-6 td1'>Product</th>
                <th className='col-1'>Price</th>
                <th className='col-2 ps-5'>Quantity</th>
                <th className='col-1'>Total Price</th>
                <th className='col-1'></th>
            </tr>
            {
            data.map(post=> 
                <>
            <tr className='border'>
                <td>
                    <div className=' td1 col-12 d-flex'>
                        <img className='col-3' src={post.thumbnail} alt="imag1" />
                        <h3 className='col-8 title'>{post.title}</h3>
                    </div>
                </td>
                <td className="price " >
                    ${post.price}
                </td>
                <td className='ps-5 td3'>
                    <button className='border' onClick={decreaseQuantity} name={post.id}> - </button>
                    <input type="text" className='col-2 text-center border' value={post.cart_count} name={post.id} onChange={changeQunatity} onBlur={inputQuantity} />
                    <button onClick={increaseQuantity} name={post.id}> + </button>
                </td>
                <td  className="price text-center">
                    ${post.price*post.cart_count}
                </td>
                <td>
                    <button onClick={removeFromCart} name={post.id} className="fa-solid fa-trash"></button>
                </td>
            </tr>
                </>
            )}
            <tr className='last-row'>
                <td></td>
                <td></td>
                <td className='text-end price'>Total Price</td>
                <td className='price text-center'>${totalPrice}</td>
            </tr>
            </table>
            <div className='btns col-6 text-center d-flex'>
                    <Link className='nav-link' to='/'> 
                        <button className='btn btn1'  type='button'><i className="fa-solid fa-arrow-left"></i>Shopping</button>
                    </Link>
                <Link to='/checkout'> 
                    <button className='btn btn1' type='button'>Checkout <i className="fa-solid fa-arrow-right"></i></button>
                </Link>
            </div>
           
            </>
            ) : (
            <>
                <div className='col-10'>
                    <h3>No products in your cart</h3>
                    <Link className='nav-link' to='/' > 
                        <button className='btn btn1'  type='button'><i className="fa-solid fa-arrow-left"></i>Shopping</button>
                    </Link>
                </div>
            </>)
        }
        </div>
        </>
     )
}
export default Cart
