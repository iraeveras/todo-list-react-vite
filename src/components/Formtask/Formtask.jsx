import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import './Formtask.css';

export const Formtask = () => {

    const [inputTaxtTask, setinputTaxtTask] = useState('')
    const [inputDateTask, setInputDateTask] = useState('')

    const handleTaskAdd = (e) => {
        e.preventDefault();
        console.log(inputTaxtTask, inputDateTask)
        setinputTaxtTask('')
    }
    return (
        <>
            <h3 className='title'>Adicionar tarefas</h3>
            <form className='task-form'>
                <input 
                type="text" 
                placeholder='Digite sua tarefa...' 
                className='input-text-task' 
                onChange={(e) => setinputTaxtTask(e.target.value)}
                value={inputTaxtTask}
                />

                <input 
                type="date" 
                name='input-date-task' 
                className='input-date-task' 
                onChange={(e) => setInputDateTask(e.target.value)}
                value={inputDateTask}
                />

                <button onClick={handleTaskAdd} className='btn-add-task'>
                    <FiPlus />
                </button>
            </form>
        </>
    )
}