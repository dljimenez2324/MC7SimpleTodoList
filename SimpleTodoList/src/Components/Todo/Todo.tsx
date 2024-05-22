// imports typically live here
import { Key, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import styles from './Todo.module.css'

// our interface with props we will use go here
interface TodoItem {
    id: number
    taskName: string
    done: boolean
}

const Todo = () => {
    // useState for input
    const [input, setInput] = useState('');

    // useState for tracking our list
    const [list, setList] = useState<TodoItem[]>([]);

    // useState for holding the id that we want to edit
    const [editingId, setEditingId] = useState<Key>('');

    
    // useState for input for editing
    const [editInput, setEditInput] = useState('')



    // function to add items to our list and clear the input field after function is run

    // add check for if empty input
    const addToDo = (newItem:string) => {

        // check if the input is empty by looking for white space
        // if(newItem !== '') {

        // }
        // create an object that will add new items to our list
        const newTodo:TodoItem = {
            id: Math.random(),
            taskName: newItem,
            done: false
        }
        setList([...list,newTodo]);
        setInput("");
        console.log(`New item ID is ${newTodo.id}`)

    }

    // create a delete function and connect it to the X on the delete button in the li of our organized list
    const deleteTodoItem = (id: Key) => {
        const deleteListItem = list.filter((item) => item.id !== id);
        setList(deleteListItem);
    };

    // create an edit/update function and connect it to the pencil icon which sits to the left of the X delete button
    const editTodoList = (id:Key , newtext:string) => {

    }

    // toggleDone is in order to make the check box be check as on or off corresponding to true or false respectively
    const toggleDone = (id: Key) => {
        const updatedList = list.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item
        );
        setList(updatedList);
    };




  return (
    <>
        {/* This will populate our page with our List Title, input field, buttons and display each todo items */}
        <div className='listContainer'>
            <div className="row">
                <h1>Dad's List</h1>
                <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button className='addButton' onClick={()=>addToDo(input)}>Add</button>
            </div>

            {/* render list items within an ul inside of li tags that will be mapped with our list array */}
            {/* I want to create onMouseOver to change the icon to its negative <FaEdit /> HOW TO DO? */}
            <ul>
                {list.map(item => (
                    <li key={item.id}>
                        <input type="checkbox" className='checkboxStyle' checked={item.done} onChange={()=> toggleDone(item.id)} />
                        {item.taskName}   
                        <button className='editButton'><FaRegEdit /></button>
                        <button className='deleteButton' onClick={()=> deleteTodoItem(item.id)}><FaRegWindowClose /></button>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Todo