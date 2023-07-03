import React from 'react'
import { userContext} from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { displayContext } from '../Display';

function Phones() {
  const [posts,addToCart,jsonData,setPosts,load_rating,cartCount,setCartCount,addToWishList] = useContext(userContext);
  const [b,setB]= useContext(displayContext);
  let newPost = posts.filter((post) => (post.category=="smartphones"));
  setB(newPost.length);
  useEffect(() => {
      load_rating()
  }, []);
    return (

      <div className='container cards'>
      {
        newPost.map(post =>
          <div key={post.id} className='card ms-3 mb-4 pt-4 pb-5'>
            <div>
              <div className='col-9 image d-flex'>
                <Link className='nav-link' to={`/product/${post.id}`}>
                  <img className="img-fluid col-8 img" src={post.thumbnail}></img>
                </Link>
                <button onClick={addToWishList} name={post.id} className={post.wish==false? 'fa-regular fa-heart heart1' : 'fa-solid fa-heart heart1 red'}></button>
              </div>
              <div className='title text-center pt-3' key={post.id}>{post.title}</div>

              <div className="rating-bar col-8 d-flex" >
                <div className="ratings" id={post.rating}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <span>(9887)</span>
              </div>
              <div className='h6 text-center price'>${post.price}</div>
            </div>
            <div className="row justify-content-center">
              <button type="submit" className="btn btn-primary col-8 mt-2" onClick={addToCart} name={post.id}>
              {post.cart_count==0 ? 'Add to Cart' : 'Added'}</button>
            </div>
          </div>)
      }
    </div>
    )
}
export default Phones
