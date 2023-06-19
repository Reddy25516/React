import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Cards=({data,addToWishList,addToCart})=>{
    return (<>
      <div className='cards'>
        {
          data.map((post) => 
              <Card
              post={post}  key={post.id} addToWishList={addToWishList} addToCart={addToCart}/>
          )
        }
      </div>
    </>)
  }
export default Cards 




const Card=({post,addToWishList,addToCart})=>{
  const button = {
    pressed: { scale: 0.90 },
    hover: { scale: 1.07 },
    hover1: {scale:1.04}
  };

  return((
  <>
      <motion.div  className='card'
              variants={button}
              whileHover="hover1"
        >
                <div className='col-12 d-flex justify-content-center'>
                  <Link className='nav-link' to={`/product/${post.id}`}>
                    <img className="img-fluid" src={post.thumbnail} alt="productImage"></img>
                  </Link>
                  <motion.button 
                      onClick={addToWishList} name={post.id} 
                      className={post.wish? 'fa-solid fa-heart heart1 red': 'fa-regular fa-heart heart1 col-1'}
                      variants={button}
                      whileTap="pressed"
                      whileHover="hover"
                >
                </motion.button>
                </div>
                <div className='title text-center pt-3' key={post.id}>{post.title}</div>
  
                <div className="d-flex justify-content-center mt-2" >
                  <div className="ratings" id={post.rating}>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span className='ps-2'>(9887)</span>
                </div>
                <div className='h6 text-center price pt-2'>${post.price}</div>
  
                <div className="row justify-content-center card-button">
                  <motion.button 
                      className="btn btn-primary col-8" onClick={addToCart} name={post.id}
                      variants={button}
                      whileHover="hover"
                      whileTap="pressed"
                  >
                      {post.cart_count===0 ? 'Add to Cart' : 'Added'}
                  </motion.button>
                </div>
            </motion.div>
  </>))
}
  

