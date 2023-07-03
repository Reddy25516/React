

cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });



  data.sort(function(a, b){return a.name - b.name});
  console.log(data)


//  this is the code to sort data from the web

window.onload= async function(){

  const response =await fetch("cards.json");
  const data = await response.json();

  
  data.sort(function(a,b){
        x = a.name.toLowerCase();
        y = b.name.toLowerCase();
        if(x<y){
            return 1
        }
        else{
            return -1
        }
  })

  console.log(data)  // this sort the data in the reverse order 

  console.log(data.reverse())
}








//  feteching data from web 

const request = new Request("cards.json");

fetch(request).then((response)=>
    response.json()).then((data)=>{
        console.log(data)

    })





// getting data that contains apple
  
window.onload= async function(){

  const response =await fetch("cards.json");
  const data = await response.json();

  new_array=[]

  data.sort(function(a){
      x = a.name.toLowerCase();
      
      if(x.includes("apple")){
          new_array.push(a);
      }
  })
  
  console.log(new_array)

}
  
  
