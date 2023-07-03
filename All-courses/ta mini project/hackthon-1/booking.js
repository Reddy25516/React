


window.onload= async function(){

 

    function getBookingData(){
        var data = JSON.parse(localStorage.getItem("booking_data"));
        return data;
    }


   
    const cards_body= document.getElementById("display-cards");

    let date_of_travel=JSON.parse(localStorage.getItem("date_of_travel"));
    let date_of_return=JSON.parse(localStorage.getItem("date_of_return"));


// **************************************************************************



    // departure checked elements and then onclick function 


    let time_checked_array=[];

    let a_array=[1,2,3,4,5,6];
    let b_array=[7,8,9,10,11];
    let c_array= [12,13,14,15,16,17];
    let d_array=[18,19,20,21,22,23];

    const time_check_elements= document.getElementsByClassName('time_check');
    
    for(let i=0;i<time_check_elements.length;i++){
        time_check_elements[i].onclick= function(e){
            if(i==0){
                if(e.target.checked== true){
                    time_checked_array=[...time_checked_array,...a_array]
                }
                else{
                    time_checked_array = time_checked_array.filter(item => 
                        a_array.indexOf(item)==-1);
                }
            }
            else if(i==1){
                if(e.target.checked== true){
                    time_checked_array=[...time_checked_array,...b_array]
                }
                else{
                    time_checked_array = time_checked_array.filter(item => 
                        b_array.indexOf(item)==-1);
                }
            }

            else if(i==2){
                if(e.target.checked== true){
                    time_checked_array=[...time_checked_array,...c_array]
                }
                else{
                    time_checked_array = time_checked_array.filter(item => 
                        c_array.indexOf(item)==-1);
                }
            }

            else{
                if(e.target.checked== true){
                    time_checked_array=[...time_checked_array,...d_array]
                }
                else{
                    time_checked_array = time_checked_array.filter(item => 
                        d_array.indexOf(item)==-1);
                }
            }
            overall_sorting();
        }
    }
    
    //  function to filter by departure

    function filter_by_departure(data){
        if(time_checked_array.length==0){
            return data;
        }

        let new_array=[]

        for(let i=0;i<data.length;i++){
            let value= data[i].Arrival_time[0];
            if(time_checked_array.indexOf(value)!=-1){
                new_array.push(data[i]);
            }
        }
        return new_array;
    }

    


// **************************************************************************

    var from_value=JSON.parse(localStorage.getItem("from_value"));
    var to_value=JSON.parse(localStorage.getItem("to_value"));
    var checked_way_value=JSON.parse(localStorage.getItem("checked_way_type"));
    
    //  checking whether the plane exist on particular area 
    
    function get_planes_by_name(data){

        let new_data=[]
        let return_data=[];
        

        for(let i=0;i<data.length;i++){ 
            
            let country1= data[i].source_country.toLowerCase();
            let city1= data[i].source_city.toLowerCase();

            let country2= data[i].destination_country.toLowerCase();
            let city2= data[i].destination_city.toLowerCase();

            let source_airport= data[i].source_airport.toLowerCase();
            let destination_airport =data[i].destination_airport.toLowerCase();


            if((country1.includes(from_value)||city1.includes(from_value)
                ||source_airport.includes(from_value))
            &&(country2.includes(to_value)||city2.includes(to_value)
            ||destination_airport.includes(to_value))
            ){
                data[i].date_of_travel=date_of_travel;
                data[i].return="false";
                console.log(data[i]);
                new_data.push(data[i]);

            }

            if(checked_way_value==2){
                if((country2.includes(from_value)||city2.includes(from_value)
                ||destination_airport.includes(from_value))
                &&(country1.includes(to_value)||city1.includes(to_value)
                ||source_airport.includes(to_value))){
                    data[i].return ="true";
                    data[i].date_of_travel=date_of_return;
                    return_data.push(data[i]);
                }
            }
        }

        new_data=get_planes_by_day(new_data);
        return_data= get_planes_by_day_return(return_data);

        new_data= [...new_data,...return_data];
        console.log(new_data);
        return new_data
    }

    
// **************************************************************************

    
    //  checking whether the plane exist on the particular day 

    // var date_of_travel=JSON.parse(localStorage.getItem("date_of_travel"));
    date_travel= new Date(date_of_travel);
    date_travel=date_travel.getDay();

    function get_planes_by_day(data){
        let new_data=[]
        for(let i=0;i<data.length;i++){
            if(data[i].availabe_days.indexOf(date_travel)!=-1){
                new_data.push(data[i]);
            }
        }
        return new_data;
    }

    //  checking whether return  plane exist on the return day 

    // var date_of_return=JSON.parse(localStorage.getItem("date_of_return"));
    date_return= new Date(date_of_return);
    date_return=date_return.getDay();

    function get_planes_by_day_return(data){
        let new_data=[]
        for(let i=0;i<data.length;i++){
            if(data[i].availabe_days.indexOf(date_return)!=-1){
                new_data.push(data[i]);
            }
        }
        return new_data;
    }



// **************************************************************************

    // getting the class type and fixing the price_index value for it 

    var class_type=JSON.parse(localStorage.getItem("class_type"));

    let price_index=0;

    if(class_type=="economy"){
        price_index=0;
    }
    else if( class_type=="business"){
        price_index=1;
    }
    else{
        price_index=2;
    }


// **************************************************************************
    
    //  price range slider 

    const slider1 = document.getElementById("slider1");
    const slider2 = document.getElementById("slider2");

    const input1= document.getElementById("input1");
    const input2= document.getElementById("input2");

    // const input1 = document.getElementById("input1");
    // const input2 = document.getElementById("input2");

    const slider_track= document.querySelector('.slider_track');
    fillColor();
    slider1.addEventListener("input", function () {
        input1.value = slider1.value;
        if (slider1.value > input2.value) {
            slider1.value = input2.value;
            input1.value = input2.value;
        }
        fillColor();
        overall_sorting();

    });

    slider2.addEventListener("input", function () {
        input2.value = slider2.value;
        if (slider2.value <= input1.value) {
            slider2.value = input1.value;
            input2.value = input1.value;
        }
        fillColor();
        overall_sorting();
    });


    input1.addEventListener("keyup", function () {
        slider1.value = input1.value;
        fillColor();
        overall_sorting();
    });


    input2.addEventListener("keyup", function () {
        slider2.value = input2.value;
        fillColor();
        overall_sorting();
    });

    function fillColor(){
        percent1 = (slider1.value / 1000) * 100;
        percent2 = (slider2.value /1000) * 100;
        slider_track.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    }




    //  Range Slider sort function 4

    
    function range_slider_sort(data) {
        // var data = JSON.parse(localStorage.getItem("data"));
        let range_array = [];

        for (let i = 0; i < data.length; i++) {
            var x=data[i].price[price_index];
            if (x >= input1.value && x <= input2.value) {
                range_array.push(data[i]);
            }
        }
        return range_array;
    }

// *************************************************************************

//  checkbox airlines 
     

    const airlines= document.getElementsByClassName('airlines');

    let airlines_data= [];

    for(let i=0;i<airlines.length;i++){
        
        airlines[i].onclick= function(e){
            if(e.target.checked== true){
                airlines_data.push(e.target.value);
                overall_sorting();
            }
            else{
                e.target.checked=false;
                airlines_data =airlines_data.filter(item => item !== e.target.value);
                overall_sorting();
            }
        }
    }


    function sorting_by_airlines(data){

        let array_checked_data = [];
        if(airlines_data.length==0){
            return data;
        }

        for (let i = 0; i < data.length; i++){
            for (let j=0;j<airlines_data.length;j++){
                let name_value = data[i].flight_brand.toLowerCase();
                if (name_value.includes(airlines_data[j])) {
                    if(array_checked_data.indexOf(data[i])== -1){
                        array_checked_data.push(data[i]);
                    }
                }
            }
        }
        return array_checked_data;

    }


// *************************************************************************

    //  filtering by stops 

    stops_filter= document.getElementsByClassName('stops');

    let stops_data= [];

    for(let i=0;i<stops_filter.length;i++){
        
        stops_filter[i].onclick= function(e){

            if(e.target.checked==true){
                if(e.target.value==4){
                    for(let k=4;k<10;k++){
                        stops_data.push(k)

                    }

                }
                else{
                    stops_data.push(parseInt(e.target.value));
                }

                overall_sorting();
            }
            else{
                e.target.checked=false;
                if(e.target.value==4){
                    stops_data =stops_data.filter(item => item < 4);
                }
                else{
                    stops_data =stops_data.filter(item => item != e.target.value);
                }
                overall_sorting();
            }
        }
    }


    function sorting_by_stops(data){

        let array_checked_data = [];
        if(stops_data.length==0){
            return data;
        }

        for (let i = 0; i < data.length; i++){
            let name_value = parseInt(data[i].stops);
            if(stops_data.indexOf(name_value)!=-1){
                array_checked_data.push(data[i]);
            }
        }
        return array_checked_data;

    }



// *************************************************************************

    let search_value="";

    const search_input= document.getElementById('search-input');

    const search_icon = document.getElementById("search-display");
    search_icon.onclick = function () {
        search_value = search_input.value;
        overall_sorting();
    };

    function sortby_search(data) {
        let search_value=search_input.value;
        let array_search = [];

        if (search_value==''){
            return data;
        }

        search_value= search_value.toLowerCase();
        for (let i = 0; i < data.length; i++) {

            let name_value = data[i].flight_brand.toLowerCase();
            let source_airport= data[i].source_airport;
            source_airport= source_airport.toLowerCase();
            let destination_airport =data[i].destination_airport;
            destination_airport = destination_airport.toLowerCase();

            if (name_value.includes(search_value))
            {
                array_search.push(data[i]);
            }
            else if(source_airport.includes(search_value)){
                array_search.push(data[i]);
            }
            else if(destination_airport.includes(search_value)){
                array_search.push(data[i]);
            }
        } 
        return array_search
    }


//*********************************************************************


    let sort_type ="sort";

    const sortby = document.getElementById("sortby");
    sortby.addEventListener('click',function(){
        sort_type ="sort"
        overall_sorting();
    })


    //  sort by price high to low function 

    const sortby_price = document.getElementById("sortby-price");

    sortby_price.addEventListener('click',function(){
        sort_type="price";
        overall_sorting();
    })


    function sort_by_price(data) {
        data.sort(function (a, b) {
            var x = a.price[price_index];
            var y = b.price[price_index];
            return x-y;
        });
        return data
    };

    //  sort by duration 

    const sortby_duration=document.getElementById("sortby-duration");

    sortby_duration.addEventListener('click',function(){
        sort_type="duration";
        overall_sorting();
    })

    function sort_by_duration(data) {
        data.sort(function (a, b) {
            var x = a.duration;
            var y = b.duration;
            return x-y;
        });
        return data
    };



    
// **************************************************************************


    //function to update duration based on arrival and departure time

    function getDuration(data){
        let a=data.Arrival_time[0];
        let b=data.Arrival_time[1];
        let c=a*60+b;

        let d=data.Departure_time[0];
        let e=data.Departure_time[1];
        let f=d*60+e;
        b=f-c
        return b
    }


// **************************************************************************



    //  over all looping of data 

    function overall_sorting(){
        let data_array= getBookingData();
        data_array.reverse();
        console.log(data_array);

        if (search_value==""){
            data_array= range_slider_sort(data_array);
            data_array=sorting_by_airlines(data_array);
            data_array=sorting_by_stops(data_array);
            data_array=filter_by_departure(data_array);
        }
        else{
            data_array=sortby_search(data_array);
        }

        if(sort_type=="price"){
            new_array=sort_by_price(data_array);    
        }
        else if(sort_type=="duration"){
            new_array= sort_by_duration(data_array);
        }
        show_cards(data_array);
    }


// *************************************************************************

    // clear_all function 

    const clearall = document.getElementById('clear-all');
    clearall.onclick= function(){

        function clear_range(){
            input1.value=1
            input2.value=999
            slider1.value=1
            slider2.value=999;
            fillColor();
        }
        clear_range();


        function clearcheck(elements){
            for(let i=0;i<elements.length;i++){
                if(elements[i].checked== true){
                    elements[i].checked= false;
                }
            }
        }
        search_value="";
        time_checked_array=[];
        airlines_data=[];
        sort_type="sort";
        clearcheck(time_check_elements);
        clearcheck(airlines);


        

        overall_sorting();

    }


    //  ********************************************************************


    //  function to get the available days (sunday, monday,tuesday);
    
    function days_available(data){
        let new_array=[]
        days=data.availabe_days
        for(let i=0;i<days.length;i++){
            if(days[i]==0){
                new_array.push("sunday");
            }
            else if(days[i]==1){
                new_array.push("monday");
            }
            else if(days[i]==2){
                new_array.push("tuesday");
            }
            else if(days[i]==3){
                new_array.push("wednesday");
            }
            else if(days[i]==4){
                new_array.push("thursday");
            }
            else if(days[i]==5){
                new_array.push("friday");
            }
            else {
                new_array.push("saturday");
            }
        }
        return new_array
        
    }
    
    overall_sorting();
    function show_cards(data){
        
        const max_flight= document.getElementById('max-flight');
        max_flight.innerHTML= data.length;
        
        // const cards_body= document.getElementById("display-cards");
        cards_body.innerHTML="";
        
        for(let i=0;i<data.length;i++){

            let return_value="";
            if(data[i].return=="true"){
                return_value="Return"
            }

            let k=data[i].duration;
            let a= parseInt(k/60)
            let b=k%60;

            let days_available_array= days_available(data[i]);

            card= document.createElement('div');

            card.innerHTML=
            `
            <div class="card">

            <div id="flight-name">${data[i].flight_brand} 
            <span class="return_type">${return_value}</span>
            </div>
                <div class="card_details">
                    <div class="card_div">
                        <div>${data[i].source_city}, ${data[i].source_country}</div>
                        <div>${data[i].Arrival_time[0]}h:${data[i].Arrival_time[1]}m</div>
                        
                    </div>

                    <div class="card_div">
                        <div>Duration</div>
                        <div>${a}h:${b}m</div>
                    
                    </div>
                    <div class="card_div">
                        <div>${data[i].destination_city},
                        ${data[i].destination_country}</div>
                        <div>${data[i].Departure_time[0]}h:
                        ${data[i].Departure_time[1]}m
                        </div>
                    </div>
                    <div id="flight-price" class="flight_price">
                        $${data[i].price[price_index]}
                    </div>
    
                    <button class="book">Booked</button>
                </div>
                <button id="details-btn" class="flight"  >Flight Details </button>
                
                <div id="details-div"  class="flight_details flight_details_div" > 
                <div>  Id : ${data[i].id}</div>
                
                <div>Flight Name : ${data[i].flight_name} </div>
                    <div>Source Airport : ${data[i].source_airport} </div>
                    <div>Destination Airport : ${data[i].destination_airport} </div>
                    <div>No of Stops : ${data[i].stops} </div>
                    <div>Flight Id : ${data[i].flight_id} </div>
                    <div> Date of Travel : ${data[i].date_of_travel}</div>
                    <div> Date Booked : ${data[i].booked_date}</div>
                </div>
            </div>
            `
            cards_body.appendChild(card);

        }

        const flights= document.getElementsByClassName("flight");

        const details_divs=document.getElementsByClassName("flight_details");

        for(let i=0;i<flights.length;i++){
            flights[i].onclick= function(){
                if(details_divs[i].classList.contains("flight_details_div")){
                    details_divs[i].classList.remove("flight_details_div");
                }
                else{
                    details_divs[i].classList.add("flight_details_div");
                }
            }
        }

        const book_buttons= document.getElementsByClassName("book");
        for(let i=0;i<book_buttons.length;i++){
            book_buttons[i].onclick= function(e){
                e.target.innerHTML="Booked";
                
                let data1=getBookingData("booked_data");
                if(data[i].return=="true"){
                    data[i].date_travel=date_of_return;
                
                }
                else{
                    data[i].date_travel=date_of_travel;
                }
                let currentDate = new Date().toJSON().slice(0, 10);
                data[i].booked_date=currentDate;
                data1.push(data[i]);
                updateBookingDate(data1);
                console.log(data1);
                
            }
        }



    }


    // filter slide operation

    const filter_bar= document.getElementById("filter");
    const slide_menu= document.getElementById('slider_menu');
    const display_cards= document.getElementById('display-cards')

    slide_menu.onclick= function(){
        if(filter_bar.classList.contains("filter_slide")){
            filter_bar.classList.remove("filter_slide");
            display_cards.style.width="72%";
        }
        else
        {
            filter_bar.classList.add("filter_slide");
            display_cards.style.width="92%";
        }
    }
}
