



window.onload=function(){

    button=0
    var a='';
    var b='';
    
    function fun(val){
        val.addEventListener('click', function(event) {	
            if (button==1){
                a=a+val.value
                document.getElementById('input1').value=a;
            }
            else if(button==2){
                b=b+val.value
                document.getElementById('input2').value=b
            }
            else{

                document.getElementById('output').value="click on button first"
            }
        });
    }

    function funoperator(val){
        val.addEventListener('click', function(event) {	
            operator=val.value
        })
    }


    
    function display(value){
        document.getElementById('output').value=value;
    }
    

    function funclear(val){
        val.addEventListener('click', function(event) {	
            if (button==1){
                a = a.slice(0, -1);
                document.getElementById('input1').value=a;
            }
            else if (button==2){
                b=b.slice(0,-1)
                document.getElementById('input2').value=b;
            }
        });
    }

    const clear= document.getElementById('clear');
    funclear(clear)
        
    function calculate() {
        c=a+operator+b
        string=eval(c)
        display(string)
        string=''
    }

    radio1=document.getElementById('radio1')
    radio1.addEventListener('click',function(){
        button=1
    })

    radio2=document.getElementById('radio2')
    radio2.addEventListener('click',function(){
        button=2
    })

    const enter = document.getElementById('enter');
    enter.addEventListener('click',function(){
        calculate();
    })

    enter.addEventListener('dblclick',function(){
        document.getElementById('input1').value=''
        document.getElementById('input2').value=''
        document.getElementById('output').value=''

    })
    
    const one = document.getElementById('one');
    fun(one);
    
    const two = document.getElementById('two');
    fun(two)
    
    const three = document.getElementById('three');
    fun(three)
    
    
    const four = document.getElementById('four');
    fun(four)
    
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
    funoperator(plus)
    
    
    const minus = document.getElementById('minus');
    funoperator(minus)
    
    const div = document.getElementById('div');
    funoperator(div)
    
    const mul = document.getElementById('mul');
    funoperator(mul)
    
    const mod = document.getElementById('mod');
    funoperator(mod)
    
   
    
}
    
        
        