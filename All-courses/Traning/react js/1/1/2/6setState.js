

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

  '================================================='

  // when changing only one value 
  
  Changedata=(e)=>{
    let val= e.target.value;
    this.setState({name:val});
  }


  '===================================='

  
import React,{Component} from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state= {
            message : "welcome visitor",
            age : 22
        }
    }
    // we are defining a change on click method 
    // when we click on a button it automatically chnage the content what we want 

    changeMessage(){
        this.setState({
            message : "thanking for visiting "
        })
    }
    
    render(){
        return(
            <div>        
                <h1>{this.state.message}</h1>
                {/* here onClick method is written which calls the method chnage */}

                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message 

'===================================================='