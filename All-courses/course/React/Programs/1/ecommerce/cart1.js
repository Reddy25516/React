import React from 'react'
import { userContext} from '../App';
import { useContext } from 'react';

function Cart() {
    const [posts,addCart,cartData]= useContext(userContext);
    console.log("the cart items are ",cartData);
    return (
        <>
        <div className='container '>
              <div className='row '>
        {
        cartData.map(post=> 
                <div className="cartItem d-flex col-8">
                    <div className='ms-4 col-3'>
                        <img src={post.thumbnail} />
                    </div>
                    <div className='ms-4'>
                        <div className="description">
                            <p>
                            <b>{post.title}</b>
                            </p>
                            <p> Price: ${post.price}</p>

                        </div>
                        <div className="countHandler">
                            <button > - </button>
                            <input className='col-2 text-center fw-5' value={post.cart_count}/>
                            <button > + </button>
                        </div>
                    </div>
                </div>
        )}
            </div>
        </div>
        </>
     )
}
export default Cart
