useEffect(()=>{
    // console.log(formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues);
      // var values=[formValues]
      var values=JSON.parse(localStorage.getItem("Details"));
      var new_values= [...values,formValues]
      localStorage.setItem("Details",JSON.stringify(new_values));
      console.log("form submitted successfully");
    }
  },[formErrors])


// this is the way of setting it to local storage 
// make sure you pass the array to a local storage not the object or something 


// ***************************************************

// here we can see the difference between both the ways
// one is json.strigify will convert an object into a string
//json.parse convert a string into object 

var a= {name:"John", age:30, city:"New York"}
const obj = JSON.stringify(a);
console.log(obj);
// {"name":"John","age":30,"city":"New York"}



var b= JSON.parse(obj);
console.log(b);
// { name: 'John', age: 30, city: 'New York' }


// *********************************************************





