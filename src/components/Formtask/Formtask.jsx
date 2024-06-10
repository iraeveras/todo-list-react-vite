import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { dateAtual } from "../../variables/constants";
import './Formtask.css';

export const Formtask = () => {

    const [inputTaxtTask, setinputTaxtTask] = useState('')
    const [inputDateTask, setInputDateTask] = useState('')

    const handleTaskAdd = (e) => {
        e.preventDefault();
        const task = {
            taskValue: inputTaxtTask, 
            dateValue: inputDateTask,
            dateAtual: dateAtual
        }
        console.log(task)
        setinputTaxtTask('')
    }
    return (
        <>
            <h3 className='title'>Adicionar tarefas</h3>
            <form className='task-form'>
                <div>

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
                </div>

                <button onClick={handleTaskAdd} className='btn-add-task'>
                    <FiPlus />
                </button>
            </form>
            
        </>
    )
}