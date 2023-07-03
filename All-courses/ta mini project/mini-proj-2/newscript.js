
window.onload = async function(){
    const response = await fetch("cards.json");
    const data= await response.json();
    
    card_data= data[0];

    dialog_box =document.getElementById("display")
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

    function get_storage_wish(){
        var data1 = JSON.parse(localStorage.getItem("wish"));
        return data1;

    }
    
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