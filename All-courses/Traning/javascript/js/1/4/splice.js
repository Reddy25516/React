

//splice method
'here it will remove all the elements from that index '

let values=[4,6,7]
console.log(values.splice(2))
console.log(values)

/*
[ 7 ]   
[ 4, 6 ]
*/



let values=[4,6,73,3,2,2,4,5,7]
console.log(values.splice(3))
console.log(values)

/*
[ 3, 2, 2, 4, 5, 7 ]
[ 4, 6, 73 ]
*/

'------------------------'

'we can also remove one elements ,2 elements etc'
/*
splice(a,b)
here a index number and b is no of elements
*/

let values=[4,6,73,3,5,7]
console.log(values.splice(3,1))
console.log(values)

/*
[ 3 ]
[ 4, 6, 73, 5, 7 ]
*/
'here it only removes element at index 3'

'------'

let values=[4,6,73,3,5,7]
console.log(values.splice(3,2))
console.log(values)
'here it removes two elements'

/*
[ 3, 5 ]
[ 4, 6, 73, 7 ]
*/

'------------'


/*
(method) Array<any>.splice(start: number, deleteCount?: number): any[] (+1 overload)
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@returns — An array containing the elements that were deleted.
*/



/*

*/

'==========================================================='

'splice'
nums=[1,2,33,66,43,32]
nums.splice(3,0,7,8);
console.log(nums)  //  [   1,   2, 33,  7,  8,  66, 43, 32,44, 55]



nums=[1,2,33,66,43,32]
nums.splice(3,2,7,8);
console.log(nums)  //  [ 1, 2, 33, 7, 8, 32 ]

/*
'here we can see that (3,2,7,8)
here a is the position or index at which the operation should start
b is the count of number of elements to be deleted 
7 and 8 are the elements to be added at that position 
*/
