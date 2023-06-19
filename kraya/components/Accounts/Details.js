import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { accountContext } from './Account';
import {useDispatch,useSelector} from "react-redux";
import { changeData ,toggleWish,changeCartCount,changeMyAccount} from '../../action';

const Details = () => {

  const dispatch =useDispatch();
  const values =useSelector(state=>state)
  let myAccount= values.myAccount

  const [imageUrl,setImageUrl,name,setName,phone,setPhone] = useContext(accountContext);

  let data=myAccount
  let firstname=data.firstName;
  let lastname=data.lastName;
  let email= data.email? data.email : "*****";
  let gender=data.gender ? data.gender : "******"
  let location=data.location ? data.location : "******";


  useEffect(()=>{
    const inputImg = document.getElementById('imgInput')
    function getImg(event){
      const imageFile = event.target.files[0];
      if (imageFile) {
          const reader = new FileReader();
          reader.readAsDataURL(imageFile);
          reader.addEventListener('load', () => {
          setImageUrl(reader.result);
          let account_data=JSON.parse(localStorage.getItem("accounts"))
          data.image_src= reader.result;
          let id= data.id
          account_data[id]=data;
          localStorage.setItem("accounts",JSON.stringify(account_data));
          dispatch(changeMyAccount(data))
          });
      }
      
    }
    inputImg?.addEventListener('change', getImg)
    
    let btn = document.querySelector('#btn');
    let edits = document.querySelectorAll('.edit');
    btn.addEventListener('click',function(){

      if(btn.value=="false"){
        btn.value="true";
        console.log("we are here");
        btn.innerHTML="Save";
        for(let i=0;i<edits.length;i++){
          edits[i].classList.toggle("edit_input")
          edits[i].contentEditable=true;
        }
      }else{
        btn.value="false";
        btn.innerHTML="Edit";
        for(let i=0;i<edits.length;i++){
          console.log(edits[i].innerHTML);
          edits[i].contentEditable=false;
          edits[i].classList.toggle("edit_input")
        }

        data=myAccount
        let account_data=JSON.parse(localStorage.getItem("accounts"))
        data.firstName=edits[0].innerHTML;
        data.lastName=edits[1].innerHTML;
        setName(edits[0].innerHTML+" "+edits[1].innerHTML)
        data.gender=edits[2].innerHTML;
        data.phone= edits[3].innerHTML;
        setPhone(edits[3].innerHTML)
        data.location= edits[4].innerHTML;
        let id= data.id
        account_data[id]=data;
        localStorage.setItem("accounts",JSON.stringify(account_data));
        dispatch(changeMyAccount(data))

      }
    })

  },[]);

  return (
    <div className='details d-flex'>
      <div className='col-4 image'>
        <img id='img' src={imageUrl} alt="profilePicture" className='img1'/>
        <label for="imgInput" className="btn">Set Photo</label>
        <input id="imgInput" accept="image/*" style={{visibility:"hidden"}} type="file" placeholder='set Photo'/>
      </div>
      <div className='info col-7'>
        <span className='d-flex col-12'>
            <p className='info col-11'>PERSONAL INFORMATION</p>
            <p className=''><button className='col-2 btn2'  value="false" id="btn">Edit</button></p>
        </span>
        <div className='d-flex'>
            <p>FirstName</p><p className='edit' contentEditable="false">{firstname}</p>
        </div>
        <div className='d-flex'>
            <p>LastName</p><p className='edit' contentEditable="false">{lastname}</p>
        </div>
        <div className='d-flex'>
          <p>Gender</p ><p className='edit' contentEditable="false">{gender}</p>
        </div>
        <div className='d-flex'>
          <p>Phone</p><p className='edit' contentEditable="false">{phone}</p>
        </div>
        <div className='d-flex'>
          <p>Email</p><p>{email}</p>
        </div>
        <div className='d-flex'>
            <p>Location</p><p className='edit' contentEditable="false">{location}</p>
        </div>
      </div>
    </div>

  )
}

export default Details
