window.onload =  async function(){
    const response = await fetch("data.json").then((response) =>
        response.json()
    );
    localStorage.setItem("data", JSON.stringify(response));
    
    // localStorage.setItem("booking_data",JSON.stringify(booking_data));
    function getLocalStorage() {
        var data = JSON.parse(localStorage.getItem("data"));
        return data;
    }
    original_data= getLocalStorage();

    // one way two way condition 

   const one_way = document.getElementById("one-way");
   const two_way = document.getElementById("two-way");
   

   const return_date= document.getElementById("return-date");
   
   let checked_way_type=1;
   
   if(two_way.checked==true){
       return_date.style.display= "block";
       checked_way_type=2;

    }
    
    two_way.onclick= function(){
        return_date.style.display= "block";
        checked_way_type=2;
    }
    
    one_way.onclick= function(){
        return_date.style.display= "none";
        checked_way_type=1;

    }
    
    const from_place= document.getElementById("from");
    const to_place = document.getElementById("to");



    //  assigning date of travel to current date 
    const date_of_travel = document.getElementById("date_of_travel");
    date_of_travel.value=new Date().toISOString().slice(0, 10);
    date_of_travel.min=new Date().toISOString().slice(0, 10);



    function addDays(date1, days) {
        var result = new Date(date1);
        result.setDate(result.getDate() + days);
        return result;
      }
    var date1=new Date()

    let max_date=addDays(date1,60)
    date_of_travel.max=max_date.toISOString().slice(0, 10);

    
    const date_of_return= document.getElementById("date_of_return");
    date_of_return.value=new Date().toISOString().slice(0, 10);
    date_of_return.min=new Date().toISOString().slice(0, 10);
    date_of_return.max=max_date.toISOString().slice(0, 10);


    const class_type= document.getElementById('class_type');




   //dialog box 
   dialog= document.getElementById('dialog');

//    dialog.show();
    const pass_count= document.getElementById("pass_count");
    const btn_search= document.getElementById('btn-search');
    btn_search.onclick= function(){
        from_value= from_place.value.toLowerCase();
        to_value = to_place.value.toLowerCase();
        if(from_value==""||to_value==""){
            if(from_value==""){
                dialog.innerHTML= "please enter from ";
                dialog.show();
                setTimeout(() => { 
                    console.log("closed");
                    dialog.close()
                },1500);
            }
            
            else{
                dialog.innerHTML= "please enter destination";
                dialog.show();
                setTimeout(() => { 
                    console.log("closed");
                    dialog.close()
                },1500);
            }
        }
        else
        {   
            localStorage.setItem("passenger_count", JSON.stringify(pass_count.value));
            localStorage.setItem("from_value", JSON.stringify(from_value));
            localStorage.setItem("to_value", JSON.stringify(to_value));
            localStorage.setItem("date_of_travel",JSON.stringify(date_of_travel.value));
            localStorage.setItem("class_type",JSON.stringify(class_type.value));
            localStorage.setItem("date_of_return",JSON.stringify(date_of_return.value));
            localStorage.setItem("checked_way_type", JSON.stringify(checked_way_type));s
            document.location.href="display.html";
        }
        
    }


}