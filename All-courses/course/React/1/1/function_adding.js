
// way of using a function in html 

import React, { useEffect } from 'react'

function Home() {
    const [posts,addCart]= useContext(userContext);

    const Rating =()=>{
      return(
        <>
          <div>Hello </div>
          <div>Genny</div>
        </>
      )
    }
    return (
      <div className='container cards col-12'>
            {
            posts.map(post=> 
        <>
            <div className='h5 text-center pt-3' key={post.id}>{post.title}</div>
            < Rating />
            <div className='h6 text-center'>${post.price}</div>
        </>
            )
            }
      </div>
    )
}
export default Home


// *****************************************************


