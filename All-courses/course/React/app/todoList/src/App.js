
import './components/styles.css';
import React from 'react';
import './App.css'
import {  useEffect, useState } from 'react';

function App() {
  
const [myArray, updateMyArray] = useState([]);
const [value,setValue]=useState('');
const [count,setCount]=useState(1);
const [isActive,setIsActive]=useState(false);
const [editValue,setEditValue]=useState('');
const [editId,setEditId]=useState(0);

const sortHandler =()=>{
  // var new_arr =[...myArray.reverse()]
  var new_arr= myArray.reverse()
  new_arr=[...new_arr];
  updateMyArray(new_arr);
}
const changeHandler =(e)=>{
  setValue(e.target.value)
}

const onSubmit = (e) => {
  e.preventDefault()
  var obj ={ id : count, item : value}
  setCount(count+1);
  var new_Array = [...myArray, obj]
    updateMyArray(new_Array);
};


const deleteHandler =(indexValue)=>{
  const newTodos = myArray.filter((todoitem,index)=> index!==indexValue);
  updateMyArray(newTodos);
}


const editHandler=(idValue)=>{
  setIsActive(true);
  setEditId(idValue);
}

const editChange=(e)=>{
  setEditValue(e.target.value);
}

const editClick=()=>{
  let new_array=[];
  var idValue=editId;
  myArray.forEach((todoItem,index)=>{
      if(todoItem['id']==idValue){
        todoItem['item']=editValue;
      }
      console.log(todoItem);
      console.log("i am in the edit handler")
  });
  new_array=[...myArray];
  updateMyArray(new_array);
  setIsActive(false);
  setEditValue('');
}

return (<>

    <div class="box">
        <h3> TO DO LIST APPLICATION</h3>
        <form  onSubmit={onSubmit}>
            <div class="input-container">
                <input type="text"  onChange={changeHandler} placeholder="enter item to add to list"></input>
            </div>
            <button type="sumbit" class="btn" value="sort">Add Item</button>
        </form>	
    </div>

    <div className="list">
        <div className="buttons">
          <button onClick={ sortHandler } >reverse</button>
        </div>
        <table className='table'>
            <tr>
                <th className=''>index</th>
                <th className=''>id</th>
                <th className='th2'>value</th>
                <th className=''>button</th>
                <th > Edit</th>
            </tr>
            <input className='editInput' style={{display: isActive ? 'block' : 'none'}} type="text" 
            onChange={editChange} value={editValue}></input>
            <button className="editInput" style={{display: isActive ? 'block' : 'none'}} 
            onClick={editClick}>Add</button>

            {myArray.map((todoItem,index)=>(
              <>
                <tr key={index}>
                    <td>{index}   </td>
                    <td>{todoItem.id}</td>
                    <td>{todoItem.item} </td>
                    <td><button className="delete" onClick={()=>deleteHandler(todoItem.id)}>Delete</button></td>
                    <td><button className='delete' onClick={()=>editHandler(todoItem.id)}>Edit</button></td>
                </tr>
                
              </>
            ))}
        </table>
    </div>
    </>
);
}
export default App;
