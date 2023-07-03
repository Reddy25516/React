

<html>
    <img id='img' className='img1'/>
    <input id="imgInput" accept="image/*" type="file" placeholder='set Photo'/>
</html>




'for the below blog error occured'

const inputImg = document.getElementById('imgInput')
// const img = document.getElementById('img')
function getImg(event){
    //  const file = event.target.files;
    // //  console.log("file==>", file);
    //  let reader = new FileReader();
    //  reader.readAsDataURL(file.files[0]);
    //  console.log(reader);
    
    const file = event.target.files[0];
    //  console.log(file);
    let url = window.URL.createObjectURL(file);
     setImageUrl(url);
    data=JSON.parse(localStorage.getItem("myAccount"));
    let account_data=JSON.parse(localStorage.getItem("accounts"))
    data[0].image_src=url;
    let id= data[0].id
    account_data[id]=data[0];
    localStorage.setItem("accounts",JSON.stringify(account_data));
    localStorage.setItem("myAccount",JSON.stringify(data));
}
inputImg?.addEventListener('change', getImg)
// **********************************************