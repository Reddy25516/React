
"text area: "


// import './App.css';
import React from 'react'


class App extends React.Component{

  state={
    email : "",
    details:'',
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
          
          <label>Details :</label><br></br>
          {/* here in text area is is like a square box we can enter even paragraphs 
          in it 
          we also added onChange property where ever we changes the content of the 
          text area it will be displayed 
          we also given default text here
          write down here will be present by default in the text area 
          */}

          <textarea onChange={(event)=>{this.setState({details:event.target.value})}}>
            write down here </textarea><br></br>
        {/* here in this.state.details we get the updated valued */}
          <h5>{this.state.details}</h5>
          <button type="submit">Submit</button>
        </div>

      </form>
      </div>
      </div>
    )

  }
}
export default App;

'=========================================================================='

"select options "

'here we are writing a select option ways '
// import './App.css';
import React from 'react'


class App extends React.Component{

  state={
    age :"",
  }

  formSubmit=(e) =>{
    e.preventDefault();
  }
  
  render(){
    return(
      <div className="App">
        <h1>login panel</h1>

      <div>
      <form onSubmit={this.formSubmit}>
        <div class="form-group" style={{marginLeft :200}}>

          <label>Your age :</label><br></br>
          {/* select options  */}

          <select  onChange={(event)=>{this.setState({age :event.target.value})}}>
            {/* here we choose
            selected disabled which means that we cant select that option 
            it will get disabled 
            even first option will also displays but to provide meaning to it
            we change its like a heading */}
        
          <option value="" selected disabled>Select your age</option>
          {/* this is the way of displaying the options  */}
          <option value="10-20">10-20</option>
          <option value="20-30">20-30</option>
          <option value="30-40">30-40</option>
          </select><br></br>

          <h5>{this.state.age}</h5>
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
login panel
Your age :

Select your age-- here there will be all the options we need to select one 

Submit
*/

'============================================================='
