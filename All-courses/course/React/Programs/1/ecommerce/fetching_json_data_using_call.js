

// this is the code to get th products from the ajax call 


import React from 'react';
import './App.css'
import axios from 'axios';
import {  useEffect, useState } from 'react';

function App() {
    const [posts,setPosts] =useState([])
    function secondSet(){
        const first20 = posts.filter((element, index) => index < 20);
        setPosts(first20);
    }
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res =>{
            setPosts(res.data.products);
            console.log(res.data.products);
            // secondSet();
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return (
        <div className=''>
          {console.log("the post data is ",posts)}
           {
            posts.map(post=> 
            <div className='box'>
                <li key={post.id}>{post.title}</li>
                <li> {post.id}</li>
                <li>{post.brand}</li>
                <li>{post.description}</li>
                {/* <img class="img" src={post.images[0]}></img> */}
                <img class="img" src={post.thumbnail}></img>
                <li>{post.price}</li>
                <li>{post.rating}</li>
                <li>{post.stock}</li>
                {/* <li>{post.category}</li> */}
                <li>{post.brand}</li>
                
            </div>)
           }
        </div>
    )
}
export default App;


'**********************************************************************'
'**********************************************************************'


