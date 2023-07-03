
"Lists view "



import React from 'react'


class App extends React.Component{

  render(){

    // this is the easy way of viewing a list in react js 

    const names= ['A','B','C','D']
    const items = names.map((item,index) => {
      return <li key={index}>{index}-{item}</li>
    });

    return(
      <div className="App">
      <h1>Students list </h1>
      {items}
      </div>
    )

  }
}
export default App;


'================================================================================'

"Json array list "



import React from 'react'


class App extends React.Component{

  render(){
      // these is json array list type 
    const names= [
      {name :"reddy", age:22 , height : 4.8},
      {name :"teju", age:20 , height : 5.4},

    ]
    const items = names.map((item,index) => {
      return <li key={index}>
        Name :{item.name} , age :{item.age}, height: {item.height}
        <button>Edit</button>  |   <button>delete</button>
        </li>
    });
    return(
      <div className="App">
      <h1>Students list </h1>
      {items}
      </div>
    )

  }
}
export default App;

/*
Name :reddy , age :22, height: 4.8Edit | delete
Name :teju , age :20, height: 5.4Edit | delete

here in the output we can see thate there is s edit and delete button 
it just a button , it is not assined with any operation to perform 

*/