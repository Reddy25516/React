import React, { useEffect, useState } from 'react'
import './demo.css';
import {TbPlayerTrackNext,TbPlayerTrackPrev} from "react-icons/tb";
import {BsSoundwave} from "react-icons/bs";
import sentences from './data.json'
import things from './things.json'
import words from './words.json'
import { motion } from "framer-motion";

const Demo = () => {

  const [value,setValue]=useState(0);
  const [data,setData]=useState();
  const [typingData,setTypingData]=useState();


  const setThings= ()=>{
    let new_data= things.sort(() => Math.random() - 0.5)
    setData(new_data)
    setTypingData()
  }
  
  const setWords=()=>{
    let new_data= sentences.sort(() => Math.random() - 0.5)
    setTypingData()
    setData(new_data)
  }

  useEffect(()=>{
    setWords();
    console.log(words[0].keyword);
  },[])

 
  const prevButton=()=>{
    document.querySelector('.flip-card-inner').classList.remove('flip')
    if(value===0){
      setValue(data.length-1)
    }else{
      setValue(value-1)
    }
  }

  const nextButton=()=>{
    document.querySelector('.flip-card-inner').classList.remove('flip')
    console.log("next button cliked");
    if(value>=data.length-1){
      setValue(0)
    }else{
      setValue(value+1)
    }
  }


  const soundClick=(event)=>{
    event.stopPropagation();
    const msg = new SpeechSynthesisUtterance()
    msg.text=document.querySelector(".p-index").innerHTML
    window.speechSynthesis.speak(msg)
  }

  const flipCard=()=>{
    document.querySelector('.flip-card-inner').classList.toggle('flip')
  }

  const updateTypingData=()=>{
    setData()
    let new_data= words.sort(() => Math.random() - 0.5)
    setTypingData(new_data)
    console.log(new_data)
    setValue(0)
  }

  const typeInput=(e)=>{
    // console.log(e.target.value)
    document.querySelector("#text").style.color="black";
    if(e.target.value===typingData[value].keyword){
      document.querySelector("#text").style.color="white";
      e.target.value="";
      if(value>=typingData.length-1){
        setValue(0)
      }else{
        setValue(value+1)
      }
    }
  }

  const setWhiteColorText=()=>{
    document.querySelector("#text").style.color="white";
  }


  return (
    <>
    <div className='body'style={{display: 'flex'}}>
      <div className='divisions'>
          <motion.div onClick={setThings} whileTap={{ scale: 1.2 }}>Things</motion.div>
          <motion.div onClick={setWords} whileTap={{ scale: 1.2 }}>Words</motion.div>
          <motion.div onClick={updateTypingData} whileTap={{ scale: 1.2 }}>Typing</motion.div>
      </div>
      {
      data&&
      <div className='main'>
          <div className="flip-card" onClick={flipCard}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {data[value].keyword.map((item,index)=>{
                    return <p key={index} className="p-index">{item}</p>
                  }) }
                <BsSoundwave className='sound-button'  onClick={soundClick}/>
              </div>
              <div className="flip-card-back">
                  {data[value].explanation?.map((item,index)=>{
                    return <p key={index}>{item}</p>
                  }) }        
              </div>
            </div>
          </div>
          <div className='buttons' >
            <motion.button onClick={prevButton}  whileTap={{ scale: 1.5 }}> <TbPlayerTrackPrev /></motion.button>
            <motion.button onClick={nextButton}  whileTap={{ scale: 1.5 }}> <TbPlayerTrackNext /></motion.button>
          </div>
      </div>
    }

    {
      typingData&&
      <div className="main">
         <div className='typing'>
            <p id="text" onClick={setWhiteColorText}>{typingData[value].keyword}</p>
            <input type="text" onKeyDown={typeInput}/>
         </div>
         <div className='buttons' >
            <motion.button onClick={prevButton}  whileTap={{ scale: 1.5 }}> <TbPlayerTrackPrev /></motion.button>
            <motion.button onClick={nextButton}  whileTap={{ scale: 1.5 }}> <TbPlayerTrackNext /></motion.button>
          </div>
      </div>
    }
      </div>
    </>
  )
}
export default Demo
