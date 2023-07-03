

let day=1

switch(day){
    case 1:
        console.log('1');
        
    case 2:
        console.log('2');
        
    case 3:
        console.log('3');
        
    case 4:
        console.log('4');
}
    
'when we run these the output is'
/*
1
2
3
4
*/


//break means jump out of the block

let day=1

switch(day){
    case 1:
        console.log('1');
        
    case 2:
        console.log('2');
        
    case 3:
        console.log('3');
        
    case 4:
        console.log('4');
}


'but we dont need 2 3 4 so we use '
// we get 
//1





'we can also use this way '
let day=4

switch(day){
    case 1:
        console.log('1');
        break
        
    case 2:
    case 3:
    case 4:
        console.log('2 or 3 or 4');
        break
    case 5:
        console.log('5')
}

'the output here is '
//2 or 3 or 4





// using default 
'when none of the cases get executed it goes to default value'
let day=8

switch(day){
    case 1:
        console.log('1');
        break
        
    case 2:
    case 3:
    case 4:
        console.log('2 or 3 or 4');
        break
    case 5:
        console.log('5')
    default:
        console.log('it none of it')
}

//it none of it


//  switch using true 

let a=10;

switch(true){
  case a>0:
    console.log("positive number")
    break
  case a<0:
    console.log("negative number")
    break
  case a==0:
    console.log("it is neither positive nor negative")
    break
  default: 
    console.log("enter a numeric value ")
}
/*
above is the way of writing a switch with true 
break stament must be written 
*/