// imports typically live here
import { useState } from 'react'
import styles from './Todo.module.css'

// our interface with props we will use go here
interface TodoItem {
    id: number
    taskName: string
    done: Boolean
}

const Todo = () => {
    // useState for input
    const [input, setInput] = useState('');

    // useState for tracking our list
    const [list, setList] = useState<TodoItem[]>([]);

    // function to add items to our list
    const addToDo = (newItem:string) => {
        
    }

  return (
    <>

    </>
  )
}

export default Todo