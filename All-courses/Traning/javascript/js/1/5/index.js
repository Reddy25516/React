

function one(val,fun){
    console.log("function 1",val);
    fun();
}
function two(){
    console.log("function 2");
}
one('three',two)