
// here in the we are providing the source and destination input 
// when you click on the source and destination then  submit 
// you will get the details of that source and destination flight booking details 


import './components/styles.css';
import React from 'react';
import './App.css'
import  data from './data.json';
import axios from 'axios';
import {  useEffect, useState } from 'react';

function App() {

  const [post,setPost] =useState([]);
  // console.log(data);

  const initialValues = {source:"", destination:""};
  const [formValues,setFormValues] =useState(initialValues);

  const handleChange =(e) =>{
    const {name,value} =e.target;
    setFormValues({...formValues,[name]:value});
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('form submitted');
    // console.log(formValues.source);
    // console.log(formValues.destination);
    getPostData(formValues.source,formValues.destination)
  }
  const getPostData=(source,destination)=>{
    // console.log(data);
    let post_data= data.filter(item=>{
      source=source.toLowerCase();
      destination=destination.toLowerCase();
      var item_source=item.source_country.toLowerCase();
      var item_destinaton=item.destination_country.toLowerCase();
      if(item_source.includes(source) && item_destinaton.includes(destination)){
        return item;
      }
    })
    setPost(post_data);
  }

  return (<>
    <h1> Happy Journey</h1>
    <form onSubmit={handleSubmit}> 
        <label> Enter Source</label>
        <input type="text" name="source" onChange={handleChange}></input>
        <label> Enter Destination</label>
        <input type="text" name="destination" onChange={handleChange}></input>
        <br></br>
        <button>Click</button>
    </form>

    {post.map((item,index)=>(
                  <>
                    <div key={index}>
                        <div>Source Country is : {item.source_country}   </div>
                        <div>Destination Country is :{item.destination_country}   </div>
                        <div>Flight Id is : {item.flight_id}</div>
                        <div>Arrival Time is : {item.Arrival_time}</div>
                        <div>Departure Time is : {item.Departure_time}</div>
                        <div>Source Airport is : {item.source_airport}</div>
                        <div>Destination Airport is :{item.destination_airport}</div>
                    </div>
                    <h1>******************************</h1>
                  </>
                ))}
      </>
  );
}
export default App;
