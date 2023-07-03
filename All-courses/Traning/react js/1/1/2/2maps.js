

"List Rendereing :"

// map 

var arr=[1,2,3,4,5]
const map1= arr.map(x=> x*2)
console.log(map1)
// [ 2, 4, 6, 8, 10 ]


'----------------'

//rfce
import React from 'react'

function Namelist() {
    const names  =["reddy","teju ","satya"]
  return (
    <div>
      <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>
    </div>
  )
}

export default Namelist

'these dispalys one down one '

'--------------'

'these works same as above '

function Namelist() {
    const names  =["reddy","teju ","satya"]
  return (
    <div>
        {
      names.map(name => <h2>{name}</h2>)
        }
    </div>
  )
}

'------------------'
// works same as above 

function Namelist() {
    const names  =["reddy","teju ","satya"]
    const namelist= names.map(name =><h2>{name}</h2>)
    return <div>{namelist}</div>
}

'========================================'


//rfce

import React from 'react'
function Namelist() {
    const persons=[
        {
            name : "reddy",
            age:22
        },
        {
            name: "teju",
            age : 20 
        }
    ]
    const personlist = persons.map(person=>
        <h2>i am {person.name} , {person.age} old</h2>
        )
    return <div>{personlist}</div>
}
export default Namelist


/*
i am reddy , 22 old
i am teju , 20 old
*/


'==========================================='

// above using two class  
// we get the same output as above 

//rfce
import React from 'react'
import Person from './Person'

function Namelist() {
    const persons=[
        {
            name : "reddy",
            age:22
        },
        {
            name: "teju",
            age : 20 
        }
    ]
    const personlist = persons.map(person=> <Person person={person}/>)
    // const personlist = persons.map(person=> <Person key={person.name} person={person}/>)
    /*
    here key ={person.name}
    is used to ensure that every key is unique
    when ever u know that particular name or age is unique
    then u have to assign it to the key 
    */
    return <div>{personlist}</div>
}
export default Namelist

'--------------'

import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>i am {person.name} , {person.age} old</h2>
    </div>
  )
}

export default Person


'=============================================='


"Lists and Keys "

//rfce
import React from 'react'
import Person from './Person'

function Namelist() {
    const names  =["reddy","teju ","satya"]
    const namelist= names.map(name =><h2 key={name}>{name}</h2>)
    return <div>{namelist}</div>
}
export default Namelist
// here key is used to ensure no error in the console
//but what if it contains duplicate elements 

'----------------'

/*
here in the below we are taking the unique key as index not name age etc
so that they always unique
*/

function Namelist() {
  const names  =["reddy","teju ","satya","reddy"]
  const namelist= names.map((name,index )=><h2 key={index}>{index} {name}</h2>)
  return <div>{namelist}</div>
}


'------------------------'
