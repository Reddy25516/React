
window.onload = () => {
    // let data=""
    let board= document.querySelector("#board")

    let new_data=document.createElement('div');
    new_data.classList.add("row");
    for(let i=0;i<=9;i++){
        new_data.innerHTML+=`<div class="square" id=${i}>${i}</div>`
    }
    board.appendChild(new_data);
    let icon1=document.createElement('i');
    icon1.classList.add("fa-solid")
    icon1.classList.add("fa-street-view")
    icon1.classList.add("blue")
    // document.getElementById("7").appendChild(icon1);
    let a=1;
    document.querySelector(".btn1").addEventListener("click",function(){
        let count=Math.floor(Math.random() * (7 - 1)) + 1
        a+=count;
        if(a>9){
            a=a-6;
        }
        console.log(count);
        document.getElementById(a).appendChild(icon1);
    })
};