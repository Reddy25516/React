

'here sort will sort the strings in the alphabetical order'

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)

//[ 'Apple', 'Banana', 'Mango', 'Orange' ]







'The reverse() method reverses the elements in an array.'


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits)

// [ 'Orange', 'Mango', 'Banana', 'Apple' ]




"Numeric Sort"

/*
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:
*/

'If the result is negative a is sorted before b.'

'If the result is positive b is sorted before a.'

'If the result is 0 no changes are done with the sort order of the two values.'

'ascending order'

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
points.sort((a,b)=> a-b);
console.log(points)

// [ 1, 5, 10, 25, 40, 100 ]



'descending order'

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points)

// [ 100, 40, 25, 10, 5, 1 ]





'Max and min values'

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value


'=========================================================================='



"Sorting Object Arrays"


var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];


cars.sort(function(a, b){return a.year - b.year});


/*
[
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 },
  { type: 'Volvo', year: 2016 }
]
*/


'=================================================================='


'to sort in the descending order '

var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

cars.sort(function(a, b){return a.year - b.year}).reverse();
console.log(cars)

/*

[
  { type: 'Volvo', year: 2016 },
  { type: 'BMW', year: 2010 },
  { type: 'Saab', year: 2001 }
]

*/


'=================================================================='


//  objects data sorting 

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort((a, b) => a.value - b.value);


// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

'=================================================================='

