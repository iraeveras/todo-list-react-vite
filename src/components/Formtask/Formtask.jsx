
import { useState } from "react";
import  ButtonAdd  from "../Button/ButtonAdd";
import { dateAtual } from "../../variables/constants";
import api from "../../services/api";
import './Formtask.css';

export const Formtask = () => {

    const [inputTextTask, setInputTextTask] = useState('');
    const [inputDateTask, setInputDateTask] = useState('');

    const handleTaskAdd = () => {
        
        if (inputTextTask === "") {
            alert("informe a tarefa desejada.")
            return
        }

        if (inputDateTask === "") {
            alert("informe a data de conclusão da tarefa.")
            return
        }        
        
        const taskData = {
            taskValue: inputTextTask, 
            dateValue: inputDateTask,
            dateAtual: dateAtual
        }        
    }

    return (
        <>
            <section className='task-section-form'>
                <h3>adicionar tarefa</h3>
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
                    <ButtonAdd onClick={handleTaskAdd} />
                </div>
            </section>
        </>
    )
}