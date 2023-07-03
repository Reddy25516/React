

'Function expression :'


const sum=function(a,b){
    let res = a+b 
    return a+b 
}
    
console.log(sum(8,7))



'========================================================================'

'Rest parameters (*) '


function sum(...args){
    console.log(args)    // [ 8, 7, 7, 7 ]
    let m=0  
    for( let i of args){
        m+=i 
    }
    return m  //30
}

console.log(sum(8,7,7,7))


/*
here in the above we can see that ...args is like  * in python 
...args here form an array 
there should be 3 dots in the args not more than that 

*/


'===================================='

