// arrays

var values=new Array();
'this is the way of creating an array empty array'

var values=[];
'this is also a way to create an array'
console.log(values)

'output: []'



var values=[4,6,7,'reddy'];
console.log(values)
//output:  [ 4, 6, 7, 'reddy' ]

'we can have numbers strings etc in an array'

console.log(values.length)
'this will give the length of the array values'


'------------'

'even these works same as above'

var values=new Array(7,8,9,'reddy');
console.log(values)
console.log(values.length)


'-----------------------'



// adding values to an array using push
'with push we can add multiple or single elements at a time'
'push will add elements at the end of the array'

var values=[4,6,7,'reddy']
'whenever we add string it should be enclosed with single quotes'

values.push(8,3)
console.log(values)

values.push(9)
console.log(values)


/*

[ 4, 6, 7, 'reddy', 8, 3 ]
[ 4, 6, 7, 'reddy', 8, 3, 9 ]

*/


'------------------------------'

//fetching in arrays using 

'indexing always start with 0'

var values=[4,6,7,'reddy']
console.log(values[3])  //reddy

'here at index with we have reddy , so it returned'

'=========='

var values=[4,6,7,'reddy']
console.log(values[5])  //undefined

'when index value doesnt exist then it will return undefined'


'-------------------------------------------------'

//changing  values 

var values=[4,6,7,'reddy']
values[1]='teju'
console.log(values)  // [ 4, 'teju', 7, 'reddy' ]

'here we can see 6 is changed to teju'


// even this works

values=[1,2,2,3]
values[1]=5
console.log(values)



'-----------------------'


// we can also include objects in an array


var values=[4,6,7,{name :'reddy'}]
console.log(values) 
console.log(values[3]) 

/*output:

[ 4, 6, 7, { name: 'reddy' } ]
{ name: 'reddy' }

*/


value=[2,2,21,34,5,4,9]
value.push(8,9,"reddy")
value[20]=value[1]

console.log(value)

/*
Output:

[ 2, 2, 21, 34, 5, 4, 9, 8, 9, 'reddy', <10 empty items>, 2 ]
'
*/

'---------------------------------------'

var values=[4,6,7]
console.log(values.pop())
console.log(values)


/*output:
7
[ 4, 6 ]
*/

'---------------------------------------'

'------------------------------------'


//splice method
'here it will remove all the elements from that index '

var values=[4,6,7,4,3,2]
console.log(values.splice(2))
console.log(values)

/*
Output:
[ 7, 4, 3, 2 ]
[ 4, 6 ]
*/



var values=[4,6,7,8,2,2,1,3,4]
console.log(values[2:6])

/*
console.log(values[2:6])
                    ^

SyntaxError: Unexpected token ':'
*/


