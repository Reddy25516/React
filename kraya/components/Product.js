import React, { useEffect } from 'react';
import { userContext} from '../App';
import { useContext } from 'react';
import {useParams } from 'react-router-dom';
import '../css/product.css'
import data from '../data.json';
import {useDispatch,useSelector} from "react-redux";
import {AiOutlineHeart} from 'react-icons/ai'
function Product() {
    const dispatch =useDispatch();
    const values =useSelector(state=>state)

    let posts = values.data

    const [addToCart, load_rating, addToWishList,filterAll]  = useContext(userContext);
    let { userId } = useParams();
    let post=posts[userId-1];

    const load_star=()=>{
        let ratings = document.getElementsByClassName('fa-star');
        for (let i = 0; i < ratings.length; i++) {
            var val = parseInt(post.rating)
            if (i < val) {
                ratings[i].classList.add("red");
            }
        }
    }

    const clickImage=()=>{
        let images= document.getElementsByClassName('small-img');
        for(let i=0;i<images.length;i++){
            images[i].addEventListener('click',function(){
                document.getElementById('large-image').src=images[i].src;
            })
        }
    }

    useEffect(()=>{
        load_star();
        clickImage()
    },[posts])

    return (
        <>
        <div className='col-10 product d-flex'>
           <div className='left col-6  row '>
                <div className='col-2 side-images'>
                    <img className="img-fluid small-img" src={post.images[0]} alt="img0"></img>
                    <img className="img-fluid small-img" src={post.images[1]} alt="img0"></img>
                    <img className="img-fluid small-img" src={post.images[2]} alt="img0"></img>
                    <img className="img-fluid small-img" src={post.images[3]} alt="img0"></img>
                </div>
                <div className='img1 col-8'>
                    <img className="img-fluid" id="large-image" src={post.thumbnail} alt="img0"></img>
                </div>
                <div className='col-1 heart'>
                    <button 
                        onClick={addToWishList} name={post.id} 
                        className={post.wish===false? 'fa-regular fa-heart heart1' : 'fa-solid fa-heart heart1 red'}>
                    </button>
                </div>
                <div className='btn1 col-10'>
                    <button className="btn col-5" type='button' onClick={addToCart} name={post.id}>
                        {post.cart_count===0 ? 'Add to Cart' : 'Added'}</button>
                    <button className="btn col-5"type='button' name={post.id}>Buy Now</button>
                </div>
           </div>


           <div className='right col-6'>
                <div className='title' key={post.id}>{post.title}</div>
                <div className="d-flex ratings">
                    <div >
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <span className="rating-count">(1287)</span>
                </div>
                <div className='cost'>${post.price}</div>
                <div className='stock'> Stock left :{post.stock}</div>

                <div className='color'>
                    <div>Color :
                        <span>Sapphire BLue</span>
                    </div>
                    <div className='colors d-flex'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className='d-flex'>
                    <div className='storage'>
                        <div>Storage <span>32GB</span></div>
                        <div className='ram'>
                            <div>32GB</div>
                            <div>64GB</div>
                        </div>
                    </div>

                    <div className='storage'>
                        <div>Ram <span>2GB</span></div>
                        <div className='ram'>
                            <div>2GB</div>
                            <div>4GB</div>
                        </div>
                    </div>
                </div>

                <div className='details'>
                    + PRODUCT DETAILS
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Product
