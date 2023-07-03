import React, { useEffect, useState } from 'react'
import '../css/filters.css';
import { displayContext } from './Display';
import { useContext } from 'react';
const SortOrder = (props) => {
  const { posts, setPosts ,filterAll,b,setB} = props;
  const sortorders=document.getElementsByClassName("sortOrder");
  const [showValues]= useContext(displayContext);

  for(let i=0;i<sortorders.length;i++){
    sortorders[i].addEventListener("click", function() {
      for(let j=0;j<sortorders.length;j++){
        if(i==j){
          sortorders[j].classList.add("sort-item");
        }
        else{
          sortorders[j].classList.remove("sort-item");
        }
      }
    })
  }
  
  useEffect(()=>{

  },[b]);

  return (
    <div className='sort d-flex'>
      <div className='col-3 ps-3'>BreadCrumbs</div>
      <div className='col-4'>Showing 1-{b} of {b} results</div>
      <div className='d-flex sortby'>
        <div>Sort By</div>
        <div onClick={filterAll} id="price" className='sortOrder'>Price</div>
        <div onClick={filterAll} id="ratings" className='sortOrder'>Ratings</div>
      </div>
    </div>
  )
}

export default SortOrder
