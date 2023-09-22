

`changing the values while you input` 

import React from 'react'
import { useState } from 'react';

const App = () => {
  const [value,setValue] = useState(0);

  return (
    <div className='app body'>
       <h2>the value is {value}</h2>
        <input type="text" value={value} 
          onChange={(e)=>setValue(e.target.value)}></input>
    </div>
  )
}

export default App;

`
output will be like 

input r     => output r 
re          => re 
red         => red
`
_____________________________

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

