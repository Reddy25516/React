
// we can add content like this 
const App =() =>{
    var elements = [];
      for(let i = 0;i < 5;i++){
          elements.push(<div key={i}>Hello</div>);
      }
    return(
      <>
        <div>
          {elements}
        </div>
      </>
    )
  }
  export default App;