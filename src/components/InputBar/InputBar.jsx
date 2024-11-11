import React from 'react'
import StatusComponent from '../StatusComponent/StatusComponent';
import './InputBar.css';

const InputBar = ({inputText, setInputText, itemList , setItemList, inputState, setInputState}) => {
    
    function addTask(e){
        e.preventDefault();
        if(inputText === ''){
            alert('Please enter a task');
            return;
        }
        
        if(itemList.some(item => item.name === inputText)){
            const updatedItemList = itemList.map((item)=>{
                if (item.name === inputText){
                    console.log(inputState);
                    return {...item, status: inputState};
                }
                return item;
            });
            setItemList(updatedItemList);
            setInputText('');
            setInputState('toDo');
            alert('Task already exists - state updated');
            return;
        }
        setItemList([...itemList, {name: inputText, status: inputState}]);
        setInputText('');
        // console.log(itemList);
        setInputState('toDo');

    }

  return (
    <form id="inputBar" onSubmit={addTask}>
      <input type='text' id='inputText' placeholder='Add task' value={inputText} onChange={(e)=>{setInputText(e.target.value)}}></input>
      <select name='selectList' id='statusSelector' onChange={(e)=>{setInputState(e.target.value)}} value={inputState}>
        <option value="toDo">to-do</option>
        <option value='inProgress'>in-progress</option>
        <option value='completed'>completed</option>
      </select>
      <button id='ClickButton' type='submit'>Add Task</button>
    </form>
  )
}

export default InputBar
