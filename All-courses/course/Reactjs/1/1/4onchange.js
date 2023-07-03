
'style sheet and inline (css) in component'




'---------------------'


import React,{Component} from 'react'
import './Learning.css'  // this is the way of importing a file 


/*

state ={
        fruits:[
            {name: "Mango" , weight: '120gms'},
            {name: "Orange" , weight: '170gms'},
            {name: "Apple" , weight: '190gms'},
            ]
        }
        */
'we can also declare state like this in the class component '
class Learning extends Component{
    constructor(props){
    super(props)
    this.state ={
        fruits:[
            {name: "Mango" , weight: '120gms'},
            {name: "Orange" , weight: '170gms'},
            {name: "Apple" , weight: '190gms'},
            ]
        }
    }
    clickHandler =() =>{
        this.setState({
            fruits:[
                {name: "Realme" , weight: '120gms'},
                {name: "Apple" , weight: '170gms'},
                {name: "Oneplus" , weight: '190gms'},
            ]
        })
    }
    render(){
        // this is the way of adding a style in the file itself
        const b_style ={
            backgroundColor : "orange",
            font : "inherit",
            border : "2px solid maroon",
            padding : '10px',
            cursor : 'pointer',
            allign :"center"
        };

        return (
        <div>
            <button style={b_style} onClick={this.clickHandler}>Click me </button>

            {/* here we get card style from the learning.css file */}
            <h1 className="card"> Fruit name is {this.state.fruits[0].name}</h1>
            <h1 className="card"> Fruit name is {this.state.fruits[1].name}</h1>
            <h1 className="card"> Fruit name is {this.state.fruits[2].name}</h1>
        </div>
        )
    }
}
export default Learning 

'=============================================='

'the easy way of same above is '



import React,{Component} from 'react'

class Test extends Component{
  // here the state name should be same in a class component
    state ={
        fruit_name: "mango",
        shape :" round"
        }
    
    clickHandler =() =>{
        this.setState({
          fruit_name : "banana",
          shape : "curve"
            
        })
    }
    render(){
        
        return (
        <div>
            <button  onClick={this.clickHandler}>Click me </button>
            <h1 > Fruit name is {this.state.fruit_name}</h1>
            <h1  > Fruit shape is {this.state.shape }</h1>
          </div>
        )
    }
}
export default Test


'=========='

"single output: "

"app.js"

import React from 'react'

// import Learning from './components/Learning'
// import Check from './components/Check'


class App extends React.Component{  
  render(){
    return(
      <div className="App">  {/*there is not app style */}
        <h1>hello Easy Learning</h1>
      <div>
      <form>
        <div class="form-group">
          <label>User name:</label>
          <input type="text" name="username"></input>
          <button type="submit">Submit</button>
        </div>

      </form>
      </div>
      </div>
    )

  }
}
export default App;

/*
this gives 

hello Easy Learning
User name:--input_box-- Submit
*/

'==========================================='


// import './App.css';
import React from 'react'


class App extends React.Component{

  state={
    name:""
  }
  // here we defined a varialbe name 

// in the below code we are setting the value of name when the onChange function called

  Changedata=(e)=>{
    let val= e.target.value;
    this.setState({
      name:val
    });
  }


  render(){
    return(
      <div className="App">
        <h1>hello {this.state.name}</h1> {/*this is the place for name*/}
      <div>
      <form>
        <div class="form-group" style={{marginLeft : 200}}> {/*we are changing the style of the sheet (div section this is the way of styling a section it is called inLinie change)
        marginLeft (L should be in capital)*/}

          <label>User name:</label><br></br>
          <input type="text" name="username" onChange={this.Changedata}></input>
          <button type="submit">Submit</button>
        </div>

      </form>
      </div>
      </div>
    )

  }
}
export default App;


'==============================================================='

"Another way on change "
'on change using the name="username" '

// import './App.css';
import React from 'react'


class App extends React.Component{

  state={
    username :""     // we inputed here usernmae
  }
  Changedata=(e)=>{
    let val= e.target.name ;  // this is the username
    let input_value =e.target.value;  // this is the value entered in input
    this.setState({[val]:input_value});  //setting input_value to the username
  }


  render(){
    return(
      <div className="App">
       <h1>hello {this.state.username}</h1>    {/*//calling the username */}
      <div>
      <form>
        <div class="form-group" style={{marginLeft :200}}>

          <label>User name:</label><br></br>
          <input type="text" name="username" onChange={this.Changedata}></input>
          {/* this is the user name what we are accessing and working with  */}
          <button type="submit">Submit</button>
        </div>

      </form>
      </div>
      </div>
    )

  }
}
export default App;

/*
hello dk  //dk is the input (display)
User name:
dk  /// this is the input value once we enter it it goes to display
Submit

*/
'=================================================================='

'on submit '
'when we submit the changes will appear '



// import './App.css';
import React from 'react'


class App extends React.Component{

  state={
    username :""
  }
  Changedata=(e)=>{
    let val= e.target.name ;
    let input_value =e.target.value;
    this.setState({[val]:input_value});
  }

// below is the function for onsubmit

  formSubmit =(event) =>{
    event.preventDefault();// this here is used to prevent the web from loading 
    console.log(this.state.username) // this will be displayed in the console when we click on the submit button (inupt text)
  }
  //document.write("hi aryan");
  // when we use document.write it will clear all the data in the web page and 
  // it starts writing from scratch

  render(){
    return(
      <div className="App">
        <h1>hello {this.state.username}</h1>
      <div>
      <form onSubmit={this.formSubmit}>
        <div class="form-group" style={{marginLeft :200}}>

          <label>User name:</label><br></br>
          <input type="text" name="username" onChange={this.Changedata}></input>
          <button type="submit">Submit</button>
        </div>

      </form>
      </div>
      </div>
    )

  }
}
export default App;

'============================================================'

// single input value 

import React from 'react'


class App extends React.Component{

  state={
    username :"reddy",
  }

  Changedata=(e)=>{
    let val= e.target.name ;  
    let input_value =e.target.value;
    this.setState({
      [val]:input_value}
      );
  }
  
  render(){
    return(
      <div className="App">
        <h1>user name : {this.state.username}</h1>
          <label>User name:</label>
          {/* for label we get a break line 
          for input we dont get a break line so mention br only after the input 
          
          and in the below name ="username" should be written else 
          our data wont get changed 
          */}
          <input type="text" name="username" onChange={this.Changedata}></input><br></br>
      </div>
    )
  }
}
export default App;

/*
<input type="text" name="age" onChange={this.change}>example </input>

here we should not provide any values like examples or any space 
if you does so it gives error 

<br></br> 
we should not provide anything inside the br tag 

<input></input>
we should not provide anything inside the input tag too 

if we does so we get nothing in the output 
*/
'================================================================='

'multiple input'


// import './App.css';
import React from 'react'


class App extends React.Component{

  state={
    username :"",
    phone : "",
    email : "",
    city : ""
  }

  Changedata=(e)=>{
    let val= e.target.name ;  
    let input_value =e.target.value;
    /*
    here val will take username ,phone, email, city as input
    and input_value will take the corresponding input values 
    and in below it is assinged in the manner we given as an input
    */
    this.setState({[val]:input_value});
  }
  
  render(){
    return(
      <div className="App">
        <h1>user name : {this.state.username}</h1>
        <h1> email : {this.state.email}</h1>
        <h1> phone :{ this.state.phone}</h1>
        <h1>city :{this.state.city}</h1>

      <div>
      <form >
        <div class="form-group" style={{marginLeft :200}}>

          <label>User name:</label>
          <input type="text" name="username" onChange={this.Changedata}></input><br></br>

          <label>Phone_number:</label>
          <input type="text" name="phone" onChange={this.Changedata}></input><br></br>

          <label>email:</label>
          <input type="text" name="email" onChange={this.Changedata}></input><br></br>
{/* here the name should be same as 
state name else 
we get some error 
 */}
          <label>City:</label>
          <input type="text" name="city" onChange={this.Changedata}></input><br></br>
          <button type="submit">Submit</button>
        </div>

      </form>
      </div>
      </div>
    )

  }
}
export default App;

/*

user name :
email :
phone :
city :
User name:_____________

Phone_number:___________

email:____________

City: _________

Submit

when we type the content it will automaticaly displayed inthe required field
*/



'==============================================='

'set data to state in one line '


// import './App.css';
import React from 'react'


class App extends React.Component{

  state={
    email : "",
    password : ""
  }
  
  // formSubmit is used here to display the content in the console ouput 
  formSubmit=(e) =>{
    e.preventDefault();
    console.log(this.state.email, this.state.password)
  }

  render(){
    return(
      <div className="App">
        
        <h1> email : {this.state.email}</h1>
        <h1> password  :{ this.state.password}</h1>
      <div>
        
        {/* initializing the form submit */}
      <form onSubmit={this.formSubmit}>
        <div class="form-group" style={{marginLeft :200}}>

          <label>Email:</label>
          <input type="email" name="email" onChange={(event)=>{this.setState({email:event.target.value})}}></input><br></br>

      {/* here in these we removed the function on change and added here
      in a single line so that it is easy to write and work with 
       */}
          <label>password:</label>
          <input type="password" name="password" onChange={(event)=>{this.setState({password:event.target.value})}}></input><br></br>
      
          <button type="submit">Submit</button>
        </div>

      </form>
      </div>
      </div>
    )

  }
}
export default App;