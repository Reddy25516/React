

'creating a new project in firebase.google.com  '

// way of posting  a data in firebase database 


import React,{useState} from 'react'

const App = () => {
  const [data,setData] =useState({
    name : "",
    age :" "
  })
  //assing values when on change 
  const changeHandler=e=>{
    setData({
      ...data,[e.target.name]:e.target.value
    });
  }
  const submitHandler=e=>{
    e.preventDefault();
    // here we are fectching the firebase data base link 
    fetch('https://test-api-f3b07-default-rtdb.firebaseio.com/data.json',
    {
      method : "POST",
      body:JSON.stringify(data),
      headers: {
        "content-type":"application/json; "
      }
    }
    // if data gets posted successfully it prints data posted 
    // else it gives us an error 
    ).then(res=>alert("data posted")).catch(err=>console.log(err))
  }

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <label>Name :</label>
          <input type="text" name="name" onChange={changeHandler}/> <br/>

          <label>Age :</label>
          <input type="text" name="age" onChange={changeHandler}/><br/>

          <input type="submit" value="Post data"/>
        </form>
      </center>
      
    </div>
  )
}

export default App


/*
Name :dsafdabhl fd
Age :23adf
post data

*/

'this is the data that posted in the database '
'when we post again then we get an another data posted '

/*


-N6NZZp9eFZpStonk3bl
age
:
"23"
name
:
"dsaf"



-N6NZec8FuWtO4RCL52P
age
:
"23adf"
name
:
"dsafdabhl fd"



*/


'====================================='

In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

import { Switch, Route } from "react-router-dom";
to

import { Routes ,Route } from 'react-router-dom';


'============================================='


import React from 'react'

const Edit = () => {
  return (
    <div>
        <center>
        <h2 style={{textAlign:"center"}}>Edit form</h2><br/>
        <form className="form-horizontal" autoComplete='off'>
            <div className='form-group'>
            <label className='control-label col-sm-2'>First Name</label>
            <div className='col-sm-4'>
                <input type="text" className='form-control' placeholder='FirstName' name="firstname"/>
            </div>
            </div>

            <div className='form-group'>
            <label className='control-label col-sm-2'>Last Name</label>
            <div className='col-sm-4'>
                <input type="text" className='form-control' placeholder='Last Name' name="firstname"/>
            </div>
            </div>

            <div className='form-group'>
            <label className='control-label col-sm-2'>Email</label>
            <div className='col-sm-4'>
                <input type="email" className='form-control' placeholder='Email'
                name="email"/>
            </div>
            </div>


            <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
                <input type="submit" className="btn btn-success" value ="Save"/>
            </div>
            </div>
            

        </form>
        </center>
      
    </div>
  )
}

export default Edit

'========================================='

import React from 'react'

const Home = () => {
    const [data,setData]=useState({
        firstname :"john",
        
    })
  return (
    <div>
        <center>
        <h2 style={{textAlign:"center"}}>Register form</h2><br/>
        <form className="form-horizontal" autoComplete='off'>
            <div className='form-group'>
            <label className='control-label col-sm-2'>First Name</label>
            <div className='col-sm-4'>
                <input type="text" className='form-control' placeholder='FirstName'
                name="firstname"/>
            </div>
            </div>


            <div className='form-group'>
            <label className='control-label col-sm-2'>Last Name</label>
            <div className='col-sm-4'>
                <input type="text" className='form-control' placeholder='Last Name' name="firstname"/>
            </div>
            </div>

            <div className='form-group'>
            <label className='control-label col-sm-2'>Email</label>
            <div className='col-sm-4'>
                <input type="email" className='form-control' placeholder='Email'
                name="email"/>
            </div>
            </div>

            <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
                <input type="submit" className="btn btn-success" value ="Submit"/>
            </div>
            </div>
        </form>
        </center>
      
    </div>
  )
}

export default Home


'=============================================='