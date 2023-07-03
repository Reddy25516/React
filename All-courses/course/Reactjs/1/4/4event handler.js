
/*
there are 3 types 

onChange
onSUbmit 
onClick event handler 

*/


// onclick 

import React from 'react';

const App=()=>{
  return (
    <div>
      <center>
        <button onClick={()=> alert("hello")}>Click Me</button>
        {/* we defined an arrow function here itself  */}
      </center>
    </div>
  )
}
export default App 

'whenever we click on it we get an alert (windows)'

'==================================='

// onchange 


import React,{useState} from 'react';

const App=()=>{
  const [name,setName]= useState('');
  //const [name,setName]= useState('reddy');
  'we can also use this this gets erased when we enter the value in the text box '
  //we given name as nill 
  return (
    <div>
      <center>
        Name : {name} <br/>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        {/* whenever we enter the text here it will be displayed in the above name */}
      </center>
    </div>
  )
}
export default App 

// here whenever we try to change input it will be displayed in the name above 


'==================================================='

"e.preventDefault -- without it our page get loaded nd the data will be lost by us "



import React,{useState} from 'react';

const App=()=>{
  const [data,setData]= useState({
    email : '',
    password : ''
  });

  const changeHandler= e => {
    setData({...data,[e.target.name]:e.target.value})
  }

  const submitHandler= e =>{
    e.preventDefault();
    alert(data.email)
    // here we get an alert displaying the email on a alert 
  }
  return (
    <div>
      <center>
      <form onSubmit={submitHandler }>
        <label>E-mail</label><br/>
        <input type="text" name="email" onChange={changeHandler} /> <br/>
        
        <label> Password : </label><br/>
        <input type="password" name="password" onchange={changeHandler} /><br/>

        <input type="submit" value="login"/>
      </form>
      </center>
    </div>
  )
}
export default App 

'===================================================='

// form validatation :


import React,{useState} from 'react';

const App=()=>{
  const [data,setData]= useState({
    email : '',
    password : ''
  });

  const changeHandler= e => {
    setData({...data,[e.target.name]:e.target.value})
  }

  const submitHandler= e =>{
    e.preventDefault();
    // here we used form validation whenever the size is less than 5 it gives us alert
    if (data.password.length<5){
      alert("provide data password length greater than 5")
    }
    else{
      alert("the entered email is ",data.email,
      "and the password is ",data.password)
    }  
  }
  return (
    <div>
      <center>
      <form onSubmit={submitHandler }>
        <label>E-mail</label><br/>
        <input type="text" name="email" onChange={changeHandler} /> <br/>
        
        <label> Password : </label><br/>
        <input type="password" name="password" onchange={changeHandler} /><br/>

        <input type="submit" value="login"/>
      </form>
      </center>
    </div>
  )
}
export default App 

'================================================================'

// sytling in react js 

<html>
<form onSubmit={submitHandler }>
        <label style={{color:"red", 'fontFamily':"cursive"}}>E-mail</label><br/>
        <input type="text" name="email" onChange={changeHandler} /> <br/>
        
        <label> Password : </label><br/>
        <input type="password" name="password" onchange={changeHandler} /><br/>

        <input type="submit" value="login"/>
</form>
</html>


'=========================================================='

bootstrap : 

'   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">      '

// this is a css link added to the index.html before the title 

<html>

<div>
      <center>
      <form onSubmit={submitHandler }>
        <label style={{color:"red", 'fontFamily':"cursive"}}>E-mail</label><br/>
        <input type="text" name="email" onChange={changeHandler} /> <br/>
        
        <label> Password : </label><br/>
        <input type="password" name="password" onchange={changeHandler} /><br/>

        <input type="submit" value="login" className='btn btn-primary'/>
        {/*  here we added the btn btn-primary style from the 
        bootstrap css file using a className attribute  */}
      </form>
      </center>
    </div>

</html>

'==============================================='


import React,{useState} from 'react';
import './App.css';
// this is the way to import a file 
const App=()=>{
  return (
    <div className='App'>
      <form>
        <label style={{color:"red", 'fontFamily':"cursive"}}>E-mail</label><br/>
        <input type="text" name="email"  /> <br/>
        
        <label> Password : </label><br/>
        <input type="password" name="password"  /><br/>

        <input type="submit" value="login" className='btn btn-primary'/>
      </form>
    </div>
  )
}
export default App 

'=============================================='

// to install react-router-dom 
'npm i react-router-dom@6'

'this is the cmd to install that '


