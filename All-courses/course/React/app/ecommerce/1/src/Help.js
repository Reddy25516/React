import React from 'react'
import { useEffect } from 'react';
const Help = () => {
    console.log("hello")
    useEffect(()=>{
     console.log("in use effect");
     },[]);

     return (
       <div>Hello</div>
     )
}
export default Help
