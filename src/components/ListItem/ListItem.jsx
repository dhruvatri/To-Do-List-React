import React from 'react';
import './ListItem.css';

const ListItem = ({ item, itemList, setItemList, inputText, setInputText, inputState, setInputState }) => {
    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        const updatedItemList = itemList.map((Item) => {
            if (Item.name === item.name) {
                return { ...Item, status: newStatus };
            }
            return Item;
        });
        setItemList(updatedItemList);
    };

    function editHandler(){
        setInputText(item.name);
        setInputState(item.status);
        const updatedItemList = itemList.filter((Item) => {
            return Item.name !== item.name;
        });
        setItemList(updatedItemList);
    }

    function deletehandler(){
        const updatedItemList = itemList.filter((Item) => {
            return Item.name !== item.name;
        });
        setItemList(updatedItemList);
    }

    return (
        <div id='task'>
            <div id='tasktext'>
            {item.name}  
            </div>
            <div id='status'>
            <select 
                name='selectList' 
                id='statusSelector' 
                value={item.status} 
                onChange={handleStatusChange}
            >
                <option value="toDo">to-do</option>
                <option value='inProgress'>in-progress</option>
                <option value='completed'>completed</option>
            </select>
            <button id='edit' onClick={editHandler}>Edit</button>
            <button id='delete' onClick={deletehandler}>Delete</button>
            </div>
        </div>
    );
}

export default ListItem;
