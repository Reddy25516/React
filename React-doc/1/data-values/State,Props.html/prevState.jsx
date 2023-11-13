
// using without prevState

import React from 'react'
import { useState } from 'react';

const App = () => {
  const [count,setCount] = useState(0);

//   here we are calling setCount two times, it will not work.
// it will go with the last called one, that is 0.5

  const increment=()=>{
    setCount(count+1)
    setCount(count+0.5)
  }

  return (
    <div className='app body'>
      <h3>{count}</h3>
      <button onClick={increment} >Click</button>
    </div>
  )
}

export default App ''

`
when ever you call to call the set method twice in a function you have to 
call it will prevState method 
else it will not work 
`
_________________________________

// above same using previous state 

import React from 'react'
import { useState } from 'react';

const App = () => {
  const [count,setCount] = useState(0);

  const increment=()=>{
    setCount(prevCount=> prevCount+2);
    setCount(prevCount=> prevCount+1);
  }

  return (
    <div className='app body'>
      <h3>{count}</h3>
      <button onClick={increment} >Click</button>
    </div>
  )
}

export default App ''

`
Here above it works fine, the value will get incremented by 3
`

_________________________________