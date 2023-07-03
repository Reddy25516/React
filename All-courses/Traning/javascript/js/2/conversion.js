


'to convert floating point into number we need to use parseInt'

num=897
console.log(num/10)   //89.7
console.log(parseInt(num/10))   //89

'here // wont work'





var num=938373347

while (num>0){
    console.log(num%10);
    num=parseInt(num/10)
}

/*output:
7
4
3
3
7
3
8
3
9
*/




// string to num

// here N should be in caps 
var use =Number('123')
console.log(use,typeof use)    //123 number





x=Number('123 reddy')
console.log(x)  //NaN



// parseInt will get the numbers in the string
x=parseInt('123 reddy')
console.log(x)   //123


x=parseInt('123 reddy 65')
console.log(x)   //123


x=parseInt('123reddy65')
console.log(x)  //123





// type coercion


var use =5
console.log(use,typeof use)    
/*output:
5 number
*/



// here S   should be in caps
var usr =String(5)
console.log(usr,typeof usr)  //5 string




// here coercion take place
var user =6+'string'
console.log(usr,typeof usr)  //  6string string


// here coercion take place
var user =6-'string'
console.log(usr,typeof usr) 

/*
NaN number
*/



// here coercion take place
var user ='string'-6
console.log(usr,typeof usr) 

/*
NaN number
*/




var x=''
x=x-2
console.log(x,typeof x)

'-2 number'



// ! (exclamation ) it means not 

x=9
x=!x
console.log(x,typeof(x))
'output: false'




x=9
x=!x
console.log(x,typeof(x))
'false boolean'


x=0
x=!x
console.log(x,typeof(x))
'true boolean'

'0 is false and other numbers are true '


console.log(Boolean(null))
'false'


console.log(Boolean(undefined))
'false'


console.log(Boolean('reddy'))
'true'





x='8'
x=x+2
console.log(x) //82


'when we add + at begining it convert string into number'
x='8'
x=+x+2 
console.log(x)  //10
//  without plus at begining the output  is 82 


x=8;
console.log(typeof x); // number 
console.log(typeof x.toString());  // string





