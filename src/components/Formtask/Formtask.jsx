'use client'
import { useState } from "react";
import { Button } from "../Button/Button";
import { FiPlus } from "react-icons/fi";
import { dateAtual } from "../../variables/constants";
import './Formtask.css';

export const Formtask = () => {

    const [inputTextTask, setInputTextTask] = useState('')
    const [inputDateTask, setInputDateTask] = useState('')

    
    
    const handleTaskAdd = () => {
        // e.PreventDefault()
        // const { task, dateCompletion, createDatetask } = taskValue
        
        
        // const task = {
        //     taskValue: inputTextTask, 
        //     dateValue: inputDateTask,
        //     dateAtual: dateAtual
        // }

        // console.log(task)
        // setinputTaxtTask('')
        
    }

    return (
        <>
            <h3 className='title'>Adicionar tarefas</h3>
            <section className='task-form'>
                <div>

                    <input 
                    type="text" 
                    name="input-text-task"
                    placeholder='Digite sua tarefa...' 
                    className='input-text-task' 
                    onChange={(e) => setInputTextTask(e.target.value)}
                    value={inputTextTask}
                    />

                    <input 
                    type="date" 
                    name='input-date-task' 
                    className='input-date-task' 
                    onChange={(e) => setInputDateTask(e.target.value)}
                    value={inputDateTask}
                    />
                </div>

                <button
                type="button"
                className='btn-add-task'
                onClick={handleTaskAdd}
                >
                    <FiPlus />
                </button>

                
            </section>
            
        </>
    )
}