

window.onload = async function () {
    const response = await fetch("cards.json").then((response) =>
        response.json()
    );
    console.log("the current response is",response);
    localStorage.setItem("data", JSON.stringify(response));

    // console.log(JSON.parse(JSON.stringify(response)));

    //  function to update the local storage

    function updateLocalStorage(data) {
        localStorage.setItem("data", JSON.stringify(data));
    }

    //  function to get local storage data
    function getLocalStorage() {
        var data = JSON.parse(localStorage.getItem("data"));
        return data;
    }

    function update_storage_wish(data1){
        localStorage.setItem("wish", JSON.stringify(data1));
    }

    // data=getLocalStorage();
    // update_storage_wish(data);

    function get_storage_wish(){
        var data1 = JSON.parse(localStorage.getItem("wish"));
        return data1;

    }
    // update_wish_count(0);
    function update_wish_count(value){
        localStorage.setItem("wish_count",JSON.stringify(value))
    }

    function get_wish_count(){
        var data1 = JSON.parse(localStorage.getItem("wish_count"));
        return data1;
    }

    function update_cart_count(value){
        localStorage.setItem("cart_count",JSON.stringify(value));
        count_cart.innerHTML=value;
        
    }
 
    function get_cart_count(){
        var data1 = JSON.parse(localStorage.getItem("cart_count"));
        return data1;
    }


    // remove storage wish   
    function remove_storage_wish(){
        let data= get_storage_wish();
        for(let i=0;i<data.length;i++){
            data[i].wish_flag=false;
        }
        update_storage_wish(data);
        update_wish_count(0);
    }


    // remove storage cart 
    function remove_storage_cart(){

        let data= get_storage_wish();
        for(let i=0;i<data.length;i++){
            data[i].cart=false;
        }
        update_storage_wish(data);
        update_cart_count(0);
       
    }


    // storage original data 
    original_data = getLocalStorage();

    let sort_value='';
    let search_value='';

    const loadmore = document.getElementById("load");
    const olddiv = document.getElementById("display");

    const dialog_box = document.getElementById("dialog");

    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");

    const wish_count = document.getElementById("count-wish");
    wish_count.innerHTML=get_wish_count();

    const count_cart= document.getElementById("count-cart");
    count_cart.innerHTML= get_cart_count();

    // ************************************************************************

    // apple= document.getElementById('apple');
    // apple.onclick= f
    // display cards
    data= get_storage_wish();
    display_cards(data);

    // ************************************************************************


    const filter_slide=document.getElementById('filter-slide');
    const filter= document.getElementById('filter');


    //******************************************************************** 

    const search_input = document.getElementById("search-input");

    //  Sort By  functions

    // search icon functionality sort by

    const search_icon = document.getElementById("search-icon");
    search_icon.onclick = function () {
        search_value = search_input.value;
        overall_sorting();
    };

    function sortby_search(data) {
        search_value=search_input.value;
        let array_search = [];

        if (search_value==''){
            
            return data;
        }
        for (let i = 0; i < data.length; i++) {
            let name_value = data[i].name.toLowerCase();
            if (name_value.includes(search_value)) {
                array_search.push(data[i]);
            }
        } 
        return array_search
    }


    // ************************************************************************

    //  original data sorting

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
        data.sort((a, b) =>{
            var x = a.current_price;
            var y = b.current_price;
            return y-x;
        });
        // data = [...new Set(data)];
        return data

    };

 // ************************************************************************

    //  sort by rating

    // sortby_rating = document.getElementById

    const sortby_rating = document.getElementById("sortby-rating");

    sortby_rating.addEventListener('click',function(){
        sort_type="rating";
        overall_sorting();
    })

    function sort_by_rating(data) {
        data.sort(function (a, b) {
            var x = a.rating;
            var y = b.rating;
            return x - y;
        });

        data.reverse();
        return data
    };

 // ************************************************************************

    //  sort by new first

    const sortby_new = document.getElementById("sortby-new");

    sortby_new.addEventListener('click',function(){
        sort_type="new";
        overall_sorting();
    })
    
    function sort_by_new(data){
        let array1 = [];
        let array2 = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].new == "new") {
                array1.push(data[i]);
            } else {
                array2.push(data[i]);
            }
        }
        data = [...array1, ...array2];
        return data
        // loadmore.style.display = "block";
    };


// ************************************************************************

    // range slider code 

    const slider1 = document.getElementById("slider1");
    const slider2 = document.getElementById("slider2");

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
        if (input1.value > input2.value) {
            input1.value = input2.value;
            slider1.value = input2.value;
        }
        fillColor();
        overall_sorting();
    });


    input2.addEventListener("keyup", function () {
        slider2.value = input2.value;
        if (input2.value > input1.value) {
            input2.value = input1.value;
            slider2.value = input1.value;
        }
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
            var x=data[i].current_price;
            if (x >= input1.value && x <= input2.value) {
                range_array.push(data[i]);
            }
        }
        return range_array;
    }


// ************************************************************************


    //  function to toggle the  angle down button filters 

    function angle_operation(price_arrow, priceinfo) {
        price_arrow.addEventListener("click", function () {

            if (priceinfo.classList.contains("angle_down_fn")) {
                priceinfo.classList.remove("angle_down_fn");
                price_arrow.style.transform = "rotate(180deg)";
            } 
            else {
                price_arrow.style.transform = "rotate(0deg)";
                priceinfo.classList.add("angle_down_fn");
            }
        });
    }

    // toggling the price division and calling the angle operation 

    const price_arrow = document.getElementById("angle-down");
    const priceinfo = document.getElementById("priceshow");

    angle_operation(price_arrow, priceinfo);

    //brand angle down value in filters calling the angle operation 

    const brand_arrow = document.getElementById("brand-arrow");
    var brand_info = document.getElementById("brand-info");

    angle_operation(brand_arrow, brand_info);

    const rating_arrow = document.getElementById("rating-arrow");
    const rating_info = document.getElementById("rating-info");

    angle_operation(rating_arrow, rating_info);


    // ************************************************************************
  

    let checked_array= [];

    const checked_elements= document.getElementsByClassName("check_element");
    for(let i=0;i<checked_elements.length;i++){
        
        checked_elements[i].onclick= function(e){
            if(e.target.checked== true){
                checked_array.push(e.target.value);
                overall_sorting();
            }
            else{
                e.target.checked=false;
                // checked_array.remove(e.target.value);
                checked_array =checked_array.filter(item => item !== e.target.value);
                overall_sorting(); 
            }
        }
    }


    // ************************************************************************

    
    function checked_sortby(data){
        let array_checked_data = [];
        if(checked_array.length==0){
            return data;
        }

        for (let i = 0; i < data.length; i++){
            for (let j=0;j<checked_array.length;j++){
                let name_value = data[i].name.toLowerCase();
                if (name_value.includes(checked_array[j])) {
                    if(array_checked_data.indexOf(data[i])== -1){
                        array_checked_data.push(data[i]);
                    }
                }
            }
        }
        return array_checked_data;
        
    }

    // ********************************************************************

    //  sorting by rating check elements on click function 

    let rating_checked_array=[]
    const rating_checked_elements= document.getElementsByClassName("rating_check");
    for(let i=0;i<rating_checked_elements.length;i++){
        
        rating_checked_elements[i].onclick= function(e){
            if(e.target.checked== true){
                rating_checked_array.push(e.target.value);
                overall_sorting();
                
                // overall_sorting();
            }
            else{
                e.target.checked=false;
                // checked_array.remove(e.target.value);
                rating_checked_array =rating_checked_array.filter(item => item !== e.target.value);
                overall_sorting();
            }
        }
    }

    // ---------------------------------------------------------

    function rating_checked_sortby(data){

        let rating_array_checked_data = [];
        if(rating_checked_array.length==0){
            return data;
        }
        for (let i = 0; i < data.length; i++){
            for (let j=0;j<rating_checked_array.length;j++){
                
                if (data[i].rating==rating_checked_array[j]) {
                    rating_array_checked_data.push(data[i]);
                }
            }
        }
        return rating_array_checked_data;
        
    }

    // ********************************************************************


//  overall sorting 
    
    function overall_sorting(){
        let new_data=[];
        data= get_storage_wish();
        new_data= range_slider_sort(data);
        new_data=checked_sortby(new_data);
        new_data=rating_checked_sortby(new_data);
        new_data=sortby_search(new_data);

        if(sort_type=="price"){
            new_data=sort_by_price(new_data);
            display_cards(new_data);
        }
        else if(sort_type=="rating"){
            new_data=sort_by_rating(new_data);
            display_cards(new_data);
        }
        else if(sort_type=="new"){
            new_data=sort_by_new(new_data);
            display_cards(new_data);
        }
        else{
            display_cards(new_data);
        }
        // 
    }


    // wishlist icon elements display 

    wishlist_icon= document.getElementById('wishlist-icon');
    wishlist_icon.onclick= function(){
        let new_array=[];
        data= get_storage_wish();
        // console.log(data);
        for(let i=0;i<data.length;i++){
            if(data[i].wish_flag==true){
                new_array.push(data[i]);
            }
        }
        display_cards(new_array);
    }

    cart_icon= document.getElementById('cart-icon');
    cart_icon.onclick= function(){
        let new_array=[];
        data= get_storage_wish();

        for(let i=0;i<data.length;i++){
            if(data[i].cart==true){
                new_array.push(data[i]);
            }
        }
        display_cards(new_array);
    }


    //  Clear all functionality 
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

        // console.log(rating_checked_elements);
        for(let i=0;i<rating_checked_elements.length;i++){
            if(rating_checked_elements[i].checked== true){

                rating_checked_elements[i].checked= false;
            }

        }

        function clearcheck(elements){
            for(let i=0;i<elements.length;i++){
                if(elements[i].checked== true){
                    elements[i].checked= false;
                }
            }
        }

        clearcheck(rating_checked_elements);
        clearcheck(checked_elements);
        sort_type="sort";
        search_input.value='';
        display_cards(original_data);
    }

    
    // ************************************************************************

    //  display cards 

    let count_wish_list = 0;
    
    function display_cards(data) {
        // console.log(data);
        let load_value = 8;
        let no_of_cards = 6;

        //  load more button and its functionality

        loadmore.style.display = "block";
        
        if (data.length > load_value) {
            loadmore.style.display = "block";
        } else {
            load_value = data.length;
            loadmore.style.display = "none";
        }

        //  updating the no of mobiles in the display 

        const max_phone= document.getElementById('max-phone');
        max_phone.innerHTML= data.length;

        const cur_phone= document.getElementById('cur-phone');
        cur_phone.innerHTML=load_value;


        //  load more function and the button 

        loadmore.addEventListener("click", load_more);
        
        function load_more(){

            load_value += no_of_cards;
            if (load_value > data.length) {
                load_value = data.length;
                loadmore.style.display = "none";
            }
            loadcards(data, load_value);

            cur_phone.innerHTML=load_value;
        }

         //calling load cards function 

        loadcards(data, load_value);

        function loadcards(data) {

            olddiv.innerHTML = "";

            //  for loop to add data to each card 

            for (let i = 0; i < load_value; i++) {

                const card = document.createElement("div");
                card.classList.add("card");
                olddiv.appendChild(card);

                
                // sale new wishlist
                const wishbar = document.createElement("div");
                wishbar.classList.add("wishbar");
                card.appendChild(wishbar);


                // sale nd new
                const salebar = document.createElement("div");
                salebar.classList.add("salebar");
                wishbar.appendChild(salebar);

                //  is new
                const is_new = document.createElement("div");
                let new_value = data[i].new;
                if (new_value != null) {
                    is_new.innerHTML = data[i].new;
                    is_new.classList.add("is_new");
                    salebar.appendChild(is_new);
                }
                
                //  is sale ?
                const is_sale = document.createElement("div");
                let val = data[i].sale;
                if (val != null) {
                    is_sale.innerHTML = val;
                    is_sale.classList.add("is_sale");
                    salebar.appendChild(is_sale);
                }

                //********************************************************************* */

                //  wish list button
                
                const wishlist = document.createElement("div");
                wishlist.classList.add("fa-regular");
                wishlist.classList.add("fa-heart");
                wishlist.classList.add("regular");
                if(data[i].wish_flag==true){
                    wishlist.classList.toggle("regular");
                    wishlist.classList.toggle("fa-regular");
                    wishlist.classList.toggle("fa-solid");
                    wishlist.classList.toggle("solid");
                }

                
                wishbar.appendChild(wishlist);
                
                //  toggling wish list
            
                
                // const wishlist_page = document.getElementById("wishlist_page");
                
                wishlist.addEventListener("click", function (e) {
                    if(data[i].wish_flag==false){
                        data[i].wish_flag=true;
                        var index= data[i].id;
                        let data2=get_storage_wish();
                        data2[index-1].wish_flag=true;
                        update_storage_wish(data2);

                        update_wish_count(get_wish_count()+1);
                        wish_count.innerHTML = get_wish_count();
                    }
                    else
                    {
                        data[i].wish_flag=false;
                        updateLocalStorage(data);

                        var index= data[i].id;
                        let data2=get_storage_wish();
                        data2[index-1].wish_flag=false;
                        update_storage_wish(data2);

                        update_wish_count(get_wish_count()-1);
                        wish_count.innerHTML = get_wish_count();
                        
                    }
                    e.target.classList.toggle("regular");
                    e.target.classList.toggle("fa-regular");
                    e.target.classList.toggle("fa-solid");
                    e.target.classList.toggle("solid");
                })
                
                
                //********************************************************************* */
                
                // image of mobile
                const  image = document.createElement("img");
                image.src = data[i].image;
                image.classList.add("image");
                card.appendChild(image);
                
                image.onclick= function(){

                    // const dialog_box = document.getElementById("dialog");
                    dialog_box.innerHTML='';
                    dialog_box_operation(data[i]);
                }
                //  mobile name , storage and color
                const  brand_info = document.createElement("div");
                brand_info.innerHTML = `
                ${data[i].name} (${data[i].color},${data[i].storage})
                `;
                brand_info.classList.add("brand_info");
                card.appendChild(brand_info);

                //********************************************************************* */

                //  rating stars
                rating_line();

                function rating_line() {
                    const rating_div = document.createElement("div");
                    rating_div.classList.add("rating_div");
                    card.appendChild(rating_div);

                    // 5 stars

                    var rating = document.createElement("div");
                    rating.classList.add("rating_box");
                    rating_div.appendChild(rating);

                    var_operation();

                    //  creating the stars and giving rating to it
                    function var_operation() {
                        let starValue = data[i].rating;
                        for (let index = 0; index < 5; index++) {
                            var rate = document.createElement("li");
                            rate.classList.add("fa-star");
                            rate.classList.add("fa");
                            if (index < starValue) {
                                rate.classList.add("star_true");
                            } else {
                                rate.classList.add("star_false");
                            }
                            rating.appendChild(rate);
                        }
                    }

                    //  numbers of ratings 

                    var rating_num = document.createElement("div");
                    rating_num.innerHTML = `(${data[i].rating_count})`;
                    rating_num.classList.add("rating_num");
                    rating_div.appendChild(rating_num);
                }

                //********************************************************************* */

                // Price bar

                //  price bar
                var price_tag = document.createElement("div");
                price_tag.classList.add("price_tag");
                card.appendChild(price_tag);

                //  current price
                var cur_price = document.createElement("div");
                cur_price.innerHTML = `$${data[i].current_price}`;
                cur_price.classList.add("cur_price");
                price_tag.appendChild(cur_price);

                //  original price
                var org_price = document.createElement("div");
                org_price.innerHTML = `$${data[i].original_price}`;
                org_price.classList.add("org_price");
                price_tag.appendChild(org_price);

                //  calculating discount from original price and current price

                let c = 0;
                cal_discount();
                function cal_discount() {
                    a = data[i].original_price;
                    b = data[i].current_price;

                    c = ((a - b) * 100) / a;
                    c = parseInt(c);
                }

                // discount
                var discount = document.createElement("div");
                discount.innerHTML = `${c}% off`;
                discount.classList.add("discount");
                price_tag.appendChild(discount);
            }
            // update_cart_count(data5);

            // ************************************************************************

            // dialog box operation 

            function dialog_box_operation(card_data) {

                dialog_box.classList.add("dialog_box");
                dialog_box.show();

                // dialog_box.classList.add("dialog_box");
                // dialog_box.show();
                
                const dialog_display = document.createElement("div");
                dialog_display.classList.add("dialog_display");
                dialog_box.appendChild(dialog_display);

                //  image in the dialog box 
                const image_show = document.createElement("img");
                image_show.src = card_data.image;
                image_show.classList.add("image_show");
                dialog_display.appendChild(image_show);

                //  adding wishlist in the dialog box 

                const wishlist_dialog = document.createElement("i");
                wishlist_dialog.classList.add("fa-regular","fa-heart");
                wishlist_dialog.classList.add("wishlist_dialog","regular");

                dialog_display.appendChild(wishlist_dialog);
                
                let data8= get_storage_wish();
                let index=card_data.id;
                if(data8[index-1].wish_flag==true){
                    wishlist_dialog.classList.toggle("regular");
                    wishlist_dialog.classList.toggle("fa-regular");
                    wishlist_dialog.classList.toggle("fa-solid");
                    wishlist_dialog.classList.toggle("solid");
                }

                const  btn_div = document.createElement("div");
                btn_div.classList.add("btn_div");
                dialog_display.appendChild(btn_div);

                //  cart button the dialog 
                btn_add_cart = document.createElement("button");
                // var data1= get_storage_wish();
                let ind=card_data.id;
                let data6= get_storage_wish();
                if(data6[ind-1].cart==true){
                    btn_add_cart.innerHTML = "Remove from cart";
                }
                else{
                    btn_add_cart.innerHTML = "Add to cart";
                }

                
                btn_add_cart.classList.add("btn_cart");
                btn_div.appendChild(btn_add_cart);

                btn_add_cart.onclick=function(){
                    index=card_data.id
                    var data1= get_storage_wish();
                    if(data1[index-1].cart==true){
                        btn_add_cart.innerHTML = "Add to cart";
                        data1[index-1].cart=false;
                        update_cart_count(get_cart_count()-1);
                    }
                    else{
                        data1[index-1].cart=true;
                        btn_add_cart.innerHTML = "remove from cart";
                        update_cart_count(get_cart_count()+1);
                    }
                    update_storage_wish(data1);
                }
                
                //  buy now button in the dialog
                btn_buy_now = document.createElement("button");
                btn_buy_now.innerHTML = "Buy Now";
                btn_buy_now.classList.add("btn_buy_now");
                btn_div.appendChild(btn_buy_now);

                // right side content in the dialog box 
                dialog_info = document.createElement("div");
                dialog_info.classList.add("dialog_info");
                dialog_box.appendChild(dialog_info);

                
                const dialog_close = document.createElement("div");
                dialog_close.innerHTML = "Close";
                dialog_close.classList.add("dialog_close");
                dialog_info.appendChild(dialog_close);

                //  dialog close on click function 
                dialog_close.onclick= function(){
                    dialog_box.classList.remove("dialog_box");
                    dialog_box.close();
                }
 
                // name in the dialog box 

                dialog_name = document.createElement("div");
                dialog_name.innerHTML = `
                
                <div>product Code ODE349879</div>
                <div class="brand_info_db">${card_data.name} (${card_data.color},
                    ${card_data.storage})</div>


                `;

                // dialog name 
                dialog_info.appendChild(dialog_name);
                rating_div_dl= document.createElement('div');
                rating_div_dl.classList.add('rating_div_db');
                dialog_info.appendChild(rating_div_dl);
 

                //  stars in the rating 
                
                let stars_count=card_data.rating;

                for (let index = 0; index < 5; index++) {
                    var rating=document.createElement("li")
                    rating.classList.add("fa-star")
                    rating.classList.add("fa")

                    if( index<stars_count){
                        rating.classList.add("star_true")
                    }
                    else{
                        rating.classList.add("star_false")
                    }
                    rating_div_dl.appendChild(rating)
                }


                var rating_num_dialog = document.createElement("div");
                rating_num_dialog.innerHTML = `(${card_data.rating_count})`;
                rating_num_dialog.classList.add("rating_num");
                rating_div_dl.appendChild(rating_num_dialog);


                var price_tag_db= document.createElement("div");
                price_tag_db.classList.add("price_tag");
                dialog_info.appendChild(price_tag_db);

                //  current price
                var cur_price_db= document.createElement("div");
                cur_price_db.innerHTML = `$${card_data.current_price}`;
                cur_price_db.classList.add("cur_price_db");
                price_tag_db.appendChild(cur_price_db);

                //  original price
                var org_price_db = document.createElement("div");
                org_price_db.innerHTML = `$${card_data.original_price}`;
                org_price_db.classList.add("org_price");
                price_tag_db.appendChild(org_price_db);

                // calculating discount in the dialog box 
                let c = 0;
                cal_discount();
                function cal_discount() {
                    a = card_data.original_price;
                    b = card_data.current_price;

                    c = ((a - b) * 100) / a;
                    c = parseInt(c);
                }

                // discount
                var discount_db= document.createElement("div");
                discount_db.innerHTML = `${c}% off`;
                discount_db.classList.add("discount");
                price_tag_db.appendChild(discount_db);

                //  content after the price bar in the dialog box 

                var in_stock= document.createElement('div');
                dialog_info.appendChild(in_stock)
                in_stock.innerHTML= `
                
                <div class="in_stock_db">in stock</div>
                <hr>
                <div > Color : <span class="color_db">${card_data.color}</span></div>
                
                <div>
                <i class="fa-solid fa-circle db_circle_1"></i>
                <i class="fa-solid fa-circle db_circle_2"></i>
                <i class="fa-solid fa-circle db_circle_3"></i>
                </div>

                <hr>

                <div class="storage_db">
                    <div> <span> Storage </span> 32GB </div>
                    <div> <span> RAM</span> 4GB</div>
                </div>
                                
                <div class="ram"> 
                    <div >
                        <div>64GB</div>
                        <div>128GB</div>
                    </div>
                    <div>
                        <div>2GB</div>
                        <div>4GB</div>
                    </div>
                </div>

                <div class="plus_db">+ PRODUCT DETAILS</div>
                <div class="plus_db">+ SPECIFICATIONS</div>
                <div class="plus_db">+ REVIEWS</div>
                
                `
            }
        }
    }

}


// this is the way of getting the inner html 
// outer html 
$(document).ready(function(){
    var btn= document.getElementById("btn");
    btn.onclick= function(){
        console.log("button is clikced");
        console.log(document.getElementById("pp").outerHTML);
    }
});


// innerHTML
$(document).ready(function(){
    var btn= document.getElementById("btn");
    btn.onclick= function(){
        console.log("button is clikced");
        console.log(document.getElementById("pp").innerHTML);
    }
});


// innerText 
$(document).ready(function(){
    var btn= document.getElementById("btn");
    btn.onclick= function(){
        console.log("button is clikced");
        console.log(document.getElementById("pp").innerText);
    }
});


parant 
1 
  2
  3 
4

1.appendChild(5)

