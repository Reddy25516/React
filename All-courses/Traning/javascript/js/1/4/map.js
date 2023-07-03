
'map data structures:'

let map = new Map();
map.set("name","reddy");
map.set("age",20);
console.log(map)

// Map(2) { 'name' => 'reddy', 'age' => 20 }


'================================================================='


'for in map'

let map = new Map();
map.set("name","reddy");
map.set("age",20);

for (let i of map)
{
    console.log(i);
}

/*

[ 'name', 'reddy' ]
[ 'age', 20 ]

*/



'================================================================='


'map.has'
'this is used to check whether a key exist in the map or not'

let map = new Map();
map.set("name","reddy");
map.set("age",20);

console.log(map.has("name")) // true
console.log(map.has("reddy"))  // false since it is not in the keys 



'================================================================='


'delete'
'to delete a key value pair form the map set'

let map = new Map();
map.set("name","reddy");
map.set("age",20);

map.delete('age')
console.log(map)
// Map(1) { 'name' => 'reddy' }



'================================================================='



'keys values clear'

let map = new Map();
map.set("name","reddy");
map.set("age",20);

console.log(map.values());   // [Map Iterator] { 'reddy', 20 }
console.log(map.keys());   // [Map Iterator] { 'name', 'age' }

map.clear()   
console.log(map)  //Map(0) {}


'================================================================='


