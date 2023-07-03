



// array methods
//pop method
'it will remove the last element in the array'


var values=[4,6,7]
values.pop()
console.log(values)//  [ 4, 6 ]

'============================================'


'here we can see that last element is removed here'



var values=[4,6,7]
console.log(values.pop())
console.log(values)


/*output:
7
[ 4, 6 ]
*/

'============================================'

var values=[4,6,7]
values.pop(2)
//  here value inside the parenthesis doesnt matter 
console.log(values)

/*
Output:
[ 4, 6 ]
*/



'============================================'


// adding values to an array using push
'with push we can add multiple or single elements at a time'
'push will add elements at the end of the array'

var values=[4,6,7,'reddy']
'whenever we add string it should be enclosed with single quotes'

values.push(8,3)
console.log(values)  // [ 4, 6, 7, 'reddy', 8, 3 ]

values.push(9)
console.log(values)


/*
[ 4, 6, 7, 'reddy', 8, 3, 9 ]

*/

'---------------------------------------------------------'


value=[2,2,21,34,5,4,9]
value.push(8,9,"reddy")
value[20]=value[1]

console.log(value)

/*
Output:

[ 2, 2, 21, 34, 5, 4, 9, 8, 9, 'reddy', <10 empty items>, 2 ]
'
*/


// *****************************************************




// shift method
'it will remove data from the first'


var values=[4,6,7]
console.log(values.shift())
console.log(values)

/*
4
[ 6, 7 ]
*/



'-------------------------------'

//unshift method
'it will add elements at the begining'



var values=[4,6,7]
console.log(values.unshift(7))
console.log(values)

/*output:
4
[ 7, 4, 6, 7 ]
*/





value.unshift(8,9)
'we can even add multiple elements '


'---------------------------------------------------------'



