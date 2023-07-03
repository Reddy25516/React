import React from 'react'
import { userContext} from '../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [posts]= useContext(userContext);

  return (
    <div className='container d-flex'>
      {/* {console.log("the post data is ",post)} */}
          <div className='row justify-content-around'>
          {
            posts.map(post=> 
            <div className='col-sm-6 col-md-5 col-xl-3 border m-2 p-5 '>
                <div>
                <Link className='nav-link' to={`/product/${post.id}`}><img class="img" src={post.thumbnail}></img></Link>
                <div className='h5 text-center pt-3' key={post.id}>{post.title}</div>
                {/* <li> {post.id}</li> */}
                {/* <li>{post.brand}</li> */}
                {/* <li>{post.description}</li> */}
                <div className='h6 text-center'>${post.price}</div>
                {/* <div class="d-flex  justify-content-between align-items-center">
                    <div class="ratings">
                        <i class="fa fa-star rating-color"></i>
                        <i class="fa fa-star rating-color"></i>
                        <i class="fa fa-star rating-color"></i>
                        <i class="fa fa-star rating-color"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h5  class="review-count"></h5>
                </div> */}
                {/* <li>{post.rating}</li> */}
                {/* <div> Stock left :{post.stock}</div> */}
                {/* <li>{post.category}</li> */}
                {/* <div> Brand : {post.brand}</div> */}
                </div>
                <button className="btn btn-primary ms-5 mt-2" type='button'>Add to cart</button>
            </div>)
           }
        </div>
    </div>
  )
}

export default Home
