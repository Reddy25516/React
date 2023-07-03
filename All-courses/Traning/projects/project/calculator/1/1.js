



    window.onload=function(){
    
    var string=""
    
    function fun(val){
        val.addEventListener('click', function(event) {	
            string+=val.value
            display(string)
        });
    }
    
    function display(value){
        document.getElementById('display').innerHTML=value;
    }
    
    function funclear(val){
        val.addEventListener('click', function(event) {	
            if(string.length!=0){
                str = string.slice(0, -1);
                display(str)
            }
        });
    }
    
    function calculate(val) {
        
    }
    
    const one = document.getElementById('one');
    fun(one);
    
    
    const two = document.getElementById('two');
    fun(two)
    
    const three = document.getElementById('three');
    fun(three)
    
    
    const four = document.getElementById('four');
    fun(three)
    
    const five = document.getElementById('five');
    fun(five)
    
    const six = document.getElementById('six');
    fun(six)
    
    
    const seven = document.getElementById('seven');
    fun(seven)
    
    
    const eight = document.getElementById('eight');
    fun(eight)
    
    const nine = document.getElementById('nine');
    fun(nine)
    
    const zero = document.getElementById('zero');
    fun(zero)
    
    const plus = document.getElementById('plus');
    fun(plus)
    
    
    const minus = document.getElementById('minus');
    fun(minus)
    
    const div = document.getElementById('div');
    fun(div)
    
    const mul = document.getElementById('mul');
    fun(mul)
    
    const mod = document.getElementById('mod');
    fun(mod)
    
    const clear= document.getElementById('clear');
    funclear(clear)
    
    const enter = document.getElementById('enter');
    enter.addEventListener('click',function(){
        calculate(string);
    })
    
    }
