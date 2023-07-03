
'form validation :'



// import './App.css';
import React from 'react'


class App extends React.Component{

  state={
    email : "",
    password : ""
  }
  formSubmit=(e) =>{
    e.preventDefault();
    console.log(this.state.email, this.state.password)
  }
  
  render(){
    return(
      <div className="App">
        <h1>login panel</h1>

      <div>
      <form onSubmit={this.formSubmit}>
        <div class="form-group" style={{marginLeft :200}}>

          <label>Email:</label><br></br>
          <input type="email" name="email" onChange={(event)=>{this.setState({email:event.target.value})}}></input><br></br>
          <strong style={{color : "red"}}>Email Invalid</strong><br></br>
            {/* here we are should that our email is invalid manually 
            but we dont need to manullay 
             */}
          <label>password:</label><br></br>
          <input type="password" name="password" onChange={(event)=>{this.setState({password:event.target.value})}}></input><br></br>
          <strong style={{color : "red"}}>Password  Invalid</strong><br></br>
          <button type="submit">Submit</button>
        </div>

      </form>
      </div>
      </div>
    )

  }
}
export default App;

'-------'
"error showing"



// import './App.css';
import React from 'react'


class App extends React.Component{

  state={
    email : "",
    password : "",
    emailError :"",
    passError : ""
  }

  //this is the process of validation of our email
  validate(){
    if(!this.state.email>0 && !this.state.password>0){
        // !this.state.email>0 means if email is empty then it executes 

      this.setState({emailError:"Email and password Required"});
    }
    else if(!this.state.email>0){
      this.setState({emailError:"Email Required"});

    }
    else if(!this.state.password>0){
      this.setState({passError:"Password Required"});

    }
    else{
      return true;
    }
  }
  /*
  this is the form validation 
  if we keepin either email or password empty
  this shows an error 
  */

  formSubmit=(e) =>{
    e.preventDefault();
    if(this.validate()){  // if validate returns true this loop executes 
      alert("form submitted successfully")
    }
  }
  
  render(){
    return(
      <div className="App">
        <h1>login panel</h1>

      <div>
      <form onSubmit={this.formSubmit}>
        <div class="form-group" style={{marginLeft :200}}>

          <label>Email:</label><br></br>
          <input type="email" name="email" onChange={(event)=>{this.setState({email:event.target.value})}}></input><br></br>
          <strong style={{color : "red"}}>{this.state.emailError}</strong><br></br>
            {/* this.state.emailError will get the updated value 
            what the error is 
             */}

          <label>password:</label><br></br>
          <input type="password" name="password" onChange={(event)=>{this.setState({password:event.target.value})}}></input><br></br>
          <strong style={{color : "red"}}>{this.state.passError}</strong><br></br>
          <button type="submit">Submit</button>
        </div>

      </form>
      </div>
      </div>
    )

  }
}
export default App;

'======================================================================='
