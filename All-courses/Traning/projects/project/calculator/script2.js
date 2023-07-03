
window.onload = function () {
	// global delcaration of variables 

  var operator = "";
  var button = 0;
  var a = "";
  var b = "";


  input1 = document.getElementById("input1");
  input2 = document.getElementById("input2");
  output = document.getElementById("output");

	//   function to add the values given in the input
  function calculate() {
	if (a=="" || b==""){
		window.alert("insert the variable first");

	}
    if (operator == "") {
		// if the operator is not given then 
      	window.alert("click operator");
    } else {

      c = a + `${operator}` + b;
      c = a + operator + b;
      string = eval(c);
      output.value = string;
      string = "";
    }
  }

  radio1 = document.getElementById("radio1");
  radio1.addEventListener("click", function () {
    button = 1;
  });

  radio2 = document.getElementById("radio2");
  radio2.addEventListener("click", function () {
    button = 2;
  });

  const enter = document.getElementById("enter");
  enter.addEventListener("click", function () {
    calculate();
  });

  enter.addEventListener("dblclick", function () {
    input1.value = "";
    input2.value = "";
    output.value = "";
  });

  var nums = [];
  nums = document.getElementsByClassName("num");
  for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function () {
      if (button == 1) {
        a = a + nums[i].value;
        input1.value = a;
      } else if (button == 2) {
        b = b + nums[i].value;
        input2.value = b;
      } else {
        output.value = "click btn first";
      }
    });
  }

  var ops = [];
  ops = document.getElementsByClassName("oper");
  for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener("click", function () {
      operator = ops[i].value;
    });
  }

  const clear = document.getElementById("back");
  clear.addEventListener("click", function (event) {
    if (button == 1) {
      a = a.slice(0, -1);
      input1.value = a;
    } else if (button == 2) {
      b = b.slice(0, -1);
      input2.value = b;
    }
  });
};



// how to add dialog box 
// how to add alert button 
// add an error msg in the dialog box 
// user should only select or type numbers only 
