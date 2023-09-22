

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


'**************************************'



` useState with objects`


import { useState } from 'react';
function App() {
  const [values,setValue] = useState({ firstName:'', lastName: ''});
  return (
    <div>
      <h2>the first name is {values.firstName}</h2>
      <h2>the last  name is {values.lastName}</h2>
      <label>First Name</label>
      <input type="text" value={values.firstName} 
          onChange={(e)=>setValue({firstName:e.target.value})}></input>
      <br></br>
      <label>Last Name</label>
      <input type="text" value={values.lastName} 
          onChange={(e)=>setValue({lastName:e.target.value})}></input>
        
      <br /><br />
      <h2>the values are  {JSON.stringify(values)}</h2>
    </div>

    
  );
}
export default App;

'here the above will not work properly'
'when one value change the other value will erase'
/*
here in the values we can only see one value at a time 
bcoz 
while you are changing those value s

setValue({firstName:e.target.value})

    here it means you are the whole data will be cleared  and add this thing 
    when you are changing the first name , it looks like value 
    the values are {"firstName":"frd"}

 */
_____________________________


`changing the object or collection of valus at once `

import { useState } from 'react';
function App() {
  const [values,setValue] = useState({ firstName:'', lastName: ''});
  return (
    <div>
      <h2>the first name is {values.firstName}</h2>
      <h2>the last  name is {values.lastName}</h2>
      <label>First Name</label>
      <input type="text" value={values.firstName} 
          onChange={(e)=>setValue({...values,firstName:e.target.value})}></input>
      <br></br>
      
      <label>Last Name</label>
      <input type="text" value={values.lastName} 
          onChange={(e)=>setValue({...values,lastName:e.target.value})}></input>

      <br /><br />
      <h2>the values are  {JSON.stringify(values)}</h2>

    </div>
  );
}
export default App;

// note
`we can this ... as spread operator`
_____________________________


'changing the list of values, on change'
'it means, it is like to do application '

import { useState } from 'react';
function App() {
  const [items,setItems] = useState([]);

  const addItems=()=>{
    setItems([...items,{id :items.length, name: Math.floor(Math.random()*10)+1}
  ])
  }
  return (
    <div className='app body'>
       <button onClick={addItems}>Click</button>
       <ul>
         {items.map(items=>(
          <li key={items.id}>{items.name}</li>
         ))}
       </ul>
      <h2>the values are  {JSON.stringify(items)}</h2>
    </div>
  );
}
export default App;

'you can even display the array using json.stringify'

/*

Here in the above, when ever we click on the button 
a random number and an id(length of array) will be generated and added to the list

*/
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