
import { useState } from "react";
import  ButtonAdd  from "../Button/ButtonAdd";
import { FiPlus } from "react-icons/fi";
import { dateAtual } from "../../variables/constants";
import server from "../../services/server";
import './Formtask.css';

export const Formtask = () => {

    

    const [inputTextTask, setInputTextTask] = useState('');
    const [inputDateTask, setInputDateTask] = useState('');
    const [tasks, setTasks] = useState([])

    async function handleTaskAdd () {
        
        // alert("enviando tarefa")
        
        if (inputTextTask === "") {
            alert("informe a tarefa desejada.")
            return
        }

        if (inputDateTask === "") {
            alert("informe a data de conclusão da tarefa.")
            return
        }        
        
        const taskData = {
            task: inputTextTask, 
            completion_date: inputDateTask,
            create_date: dateAtual
        }

        console.log(taskData);

        try {
            const response = await server.post('/tasks', taskData)
            console.log(response.data);
            setTasks([...tasks, response.data])

            setInputTextTask('');
            setInputDateTask('');
        } catch (err) {
            console.error("Erro ao adicionar uma tarefa:", err);
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
                    <button type='button' className='btn-add' onClick={handleTaskAdd}>
                        <FiPlus />
                    </button>
                </div>
            </section>
        </>
    )
}