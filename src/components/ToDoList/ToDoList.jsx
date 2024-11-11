import React from 'react'
import { useState } from 'react';
import ListItem from '../ListItem/ListItem';
import InputBar from '../InputBar/InputBar';
import './ToDoList.css';


const ToDoList = () => {
    const [inputText, setInputText] = useState('');
    const [inputState, setInputState] = useState('toDo');
    const [itemList, setItemList] = useState([]);
    const [sorted, setSorted] = useState(false);
    // itemList contain object containing name and status

    function clearCompletehandler(){
        const updatedItemList = itemList.filter((item)=>{
            return item.status !== 'completed';
        });
        setItemList(updatedItemList);
    }

    const sortedItemList = sorted
        ? [...itemList].sort((a, b) => {
              const statusOrder = ['toDo', 'inProgress', 'completed'];
              return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
          })
        : itemList;

    const sortManipulator = () => {
        setSorted(!sorted)
    }
    
    return (
    <div id='mainContainer'>
      <InputBar inputText={inputText} setInputText={setInputText} itemList={itemList} setItemList={setItemList} inputState={inputState} setInputState={setInputState}/>
      <div id='tasks'>
        {/* <h1>Tasks</h1> */}
        <div id="sortToggle">
        <input type='checkbox' id='isSorted' checked={sorted} onChange={sortManipulator} className='cm-toggle'></input>
        <label htmlFor='isSorted'>Sort</label>
        </div>
        <div id='tasks'>
        {
            (sortedItemList.length!==0) && (sortedItemList.map((item, index) => {
                return <ListItem key={index} item = {item} itemList={itemList} setItemList={setItemList} inputText={inputText} setInputText={setInputText} inputState={inputState} setInputState={setInputState}/>
            }))
        }
        </div>
        
      </div>
        <button id="clearCompletedList" onClick={clearCompletehandler}>Clear Completed List</button>
        
    </div>
  )
}

export default ToDoList
 