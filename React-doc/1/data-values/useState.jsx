

` a program to increment the value on clicking the button.`

import React from 'react'
import { useState } from 'react';

const App = () => {
  const [count,setCount] = useState(0);
  return (
    <div className='app body'>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}> Click </button>
    </div>
  )
}
export default App;


/*
Here in the above we are declaring the 
count value and when ever you click on it 
the value will be incrementing based on setCount method 

here in the above we can see that
we defined const function for the onclick beause it will not work if it 
is not const  function while using the inine function 

*/
_____________________________


`calling the const function with onclick , this is same above above`

import React from 'react'
import { useState } from 'react';

const App = () => {
  const [count,setCount] = useState(0);

//    this is using the const function 
  const increment=()=>{
    setCount(count+2)
  }

//   this is using normal function 
  function incrementFun(){
    setCount(count+1)
  }

  return (
    <div className='app body'>
      <h3>{count}</h3>
      <button onClick={increment} >Click</button>
      <button onClick={incrementFun} >Click</button>
    </div>
  )
}
export default App;

_____________________________



// below is the way to set state for an object 

// here we can change , the input values all at once 
// we are not required to change the value for each input or state ,

import React, { useState } from 'react'

const App =()=>{
  var states={
    username :"reddy",
    phone : "",
    email : "",
    city : ""
  }
  const [state,setState]=useState(states);

  const changeData=(e)=>{
    console.log(state);
    let new_state=state;
    let name = e.target.name ;  
    let input_value =e.target.value;
    setState({...new_state,[name]:input_value});
  }
  
    return(
      <>
      <div className="App">
        <h1>user name : {state.username}</h1>
        <h1> email : {state.email}</h1>
        <h1> phone :{ state.phone}</h1>
        <h1>city :{state.city}</h1>
      <div>
      <form >
        <div class="form-group" style={{marginLeft :200}}>
          <label>User name:</label>
          <input type="text" name="username" onChange={changeData} value={state.username}></input><br></br>

          <label>Phone_number:</label>
          <input type="text" name="phone" onChange={changeData}></input><br></br>

          <label>email:</label>
          <input type="text" name="email" onChange={changeData}></input><br></br>

          <label>City:</label>
          <input type="text" name="city" onChange={changeData}></input><br></br>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
      </div>
    </>
    )
}

export default App;

'****************************************************'