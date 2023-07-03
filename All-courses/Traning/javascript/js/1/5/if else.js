
let num1=8
let num2=9

let result= num1>num2;
console.log(result)   //false



'if result if true then if block executed orelse it executes else block'

if(result)
    console.log('num1 is greater');
else
    console.log('num1 is lesser');
console.log('bye')

/*output
num1 is lesser
bye
*/


'this also works'
let num1=8
let num2=9


if(num1>num2)   
    console.log('num1 is greater');
else
    console.log('num1 is lesser');
console.log('bye')



'here we get wrong result'

let num1=8
let num2=9


if(num1>num2)   
    console.log('num1 is greater');
else
    console.log('num1 is lesser');
    console.log('reddy')
console.log('bye')

/*
here in  the output :
num1 is greater
reddy
bye

we also get the else block statement
but we should not get that 
*/

'when we are using indentation for the block then it takes only one line '



'to solve this we can uses braces '

let num1=8
let num2=6


if(num1>num2)   
    console.log('num1 is greater');
else{
    console.log('num1 is lesser');
    console.log('reddy')
}
console.log('bye')

'here the output is':
//num1 is greater
//bye

'now we get the correct output'




'program to find the greatest of 3 numbers'

a=9,b=90,c=7

if (a>b && a>c)
    console.log(a,'is greater')
else if (b>c)
    console.log(b,'greatest')
else
    console.log(c,'is greatest')



'program to even or odd number'
a=8
if (a%2===0)   // for better result use ===
    console.log(a,'is even')
else
    console.log(a,'is odd')



'============================================='
// using html and css 

<!DOCTYPE html>
<html lang="en">
<head>

    <title>Document</title>
</head>
<body>
    <script src="index.js"></script>
</body>
</html>

'--------------'

var x=90;

if (x<90){
    document.write(" x is less than 10");
}
else if (x>90){
    document.write("x is greater than 90 ");
}
else{
    document.write("x is equal to 90 ");
}