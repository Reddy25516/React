import React, { useEffect } from 'react';
import { userContext} from '../../App.js';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import { changeData ,toggleWish,changeCartCount,changeMyAccount} from '../../action.js';

const WishList = () => {
    const dispatch =useDispatch();
    const values =useSelector(state=>state)
    let wishCount=values.cart.wishCount

    const navigate=useNavigate()
    let posts = values.data

    const [addToCart, load_rating, addToWishList,filterAll]= useContext(userContext);
    const [data,setData] =useState([]);
    
    useEffect(()=>{
        loadData();
        console.log("it is happening");
        console.log(data);
    },[posts]);
    
    const loadData= () =>{
        let obj=posts;
        let new_data=[]
        for(let i=0;i<obj.length;i++){
            if(obj[i]['wish']==true){
                new_data=[...new_data,obj[i]]
            }
        }
        setData([...new_data])
        console.log(new_data);
    }

    const removeFromWishList=(e)=>{
        let id=e.target.name;
        let obj=posts;
        for(let i=0;i<obj.length;i++){
            if(obj[i]['id']==id){
                obj[i]['wish']=false;
            }
        }
        dispatch(changeData([...obj]))
        dispatch(toggleWish(wishCount-1))

    }

    return (
        <>
        <div className='col-12 cart'>
        {
           data.length>0 ? (
            <>
           <table className='col-12 border' >
            <tr className='border'>
                <th className='col-6 td1'>Product</th>
                <th className='col-2'>Price</th>
                <th className='col-4 text-center'>Actions</th>
                
            </tr>
            {
            data.map(post=> 
                <>
            <tr className='border'>
                <td>
                    <div className=' td1 col-12 d-flex'>
                        <img className='col-3' src={post.thumbnail} alt="image1"/>
                        <h3 className='col-8 title'>{post.title}</h3>
                    </div>
                </td>
                <td className="price " >
                    ${post.price}
                </td>
                <td className='btns text-center'>
                    <button type='button' className='border btn2' onClick={removeFromWishList} name={post.id}> Remove from wishlist </button>
                    <button type='button' className='border btn2' name={post.id} onClick={addToCart}>{post.cart_count==0 ? 'Add to Cart' : 'Added'}</button>
                </td>
            </tr>
                </>
            )}
            </table>
            <div className='btns col-6 text-center d-flex'>
                    <Link className='nav-link' to='/'> 
                        <button className='btn btn1'  type='button'><i className="fa-solid fa-arrow-left"></i>Shopping</button>
                    </Link>
                    <Link className='nav-link' to='/cart'> 
                        <button className='btn btn1' type='button'> Cart <i className="fa-solid fa-arrow-right"></i></button>
                    </Link>
            </div>
           
            </>
            ) : (
            <>
                <div className='col-10'>
                    <h3>No products in your cart</h3>
                    <Link className='nav-link' to='/'> 
                        <button className='btn btn1' type='button'><i className="fa-solid fa-arrow-left"></i>Shopping</button>
                    </Link>
                </div>
            </>)

        }
        </div>
        </>
    )
}
export default WishList
