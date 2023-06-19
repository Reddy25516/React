import React, { useEffect, useState } from 'react'
import '../css/filters.css';
import { displayContext } from './Display';
import { useContext } from 'react';
import { Dropdown } from 'rsuite';
import {Link, useLocation} from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { updateSortOrder } from '../action';
import {useDispatch} from "react-redux";

const SortOrder = (props) => {
  const {filterAll,b,setB} = props;
  const dispatch =useDispatch();
  // const [showValues]= useContext(displayContext);
  useEffect(()=>{
      const sortorders=document.getElementsByClassName("sortOrder");
      for(let i=0;i<sortorders.length;i++){
        sortorders[i].addEventListener("click", function(e) {
          // dispatch(updateSortOrder(e.target.id))
          for(let j=0;j<sortorders.length;j++){
            if(i===j){
              sortorders[j].classList.add("sort-item");
            }
            else{
              sortorders[j].classList.remove("sort-item");
            }
          }
          filterAll()  
        })
      }
  },[]);


  const items=[
    <Dropdown.Item key={1} id="price" className='sortOrder'>Price</Dropdown.Item>,
    <Dropdown.Item key={2} id="ratings" className='sortOrder'>Ratings</Dropdown.Item>
  ]

  return (
    <div className='sort d-flex'>
      <div className='col-md-3 col-3'><BreadCrumbs/></div>
      <div className='col-md-5 col-6'>Showing 1-{b} of {b} results</div>
      <div className='sortby col-md-4'>
        <div>Sort By</div>
        <div  id="price"  className='sortOrder'>Price</div>
        <div  id="ratings"  className='sortOrder'>Ratings</div>
      </div>
      <Dropdown className="sort-dropdown col-3" title="Sort Order" placement="bottomEnd">
          {items}
      </Dropdown>
    </div>
  )
  
}

export default SortOrder

const BreadCrumbs=()=>{
  const location = useLocation();
  let location_items= location.pathname.split('/')
  location_items= location_items.filter((ele)=> {return ele!==""})
  // console.log(location_items);
  return(
    <Breadcrumb className='breadcrumb'>
      {location_items.map((ele,index)=>{
          if(index===(location_items.length-1)){
            return(<Breadcrumb.Item key={index} active>{ele}</Breadcrumb.Item>)
          }else{
            return(<Breadcrumb.Item key={index} > <Link to={ele}> {ele}</Link></Breadcrumb.Item>)
          }
      })}
    </Breadcrumb>
  )
}