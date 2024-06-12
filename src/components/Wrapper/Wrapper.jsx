import { Formtask } from '../Formtask/Formtask';
import { Task } from '../Task/Task';
import api from '../../services/api';
import './Wrapper.css';

export const Wrapper = () => {


    // const tasks = [
    //     {
    //     task_value: api.task,
    //     task_date_completion: api.completion_date,
    //     task_create_date: api.create_date
    // }]

    return (
        <div className='main-wrapper'>
            <section className='task-section'>
                <Formtask />
                
                {api.map((item) => {
                    
                return <Task 
                key={item.id} 
                task={item.task} 
                dateCompletion={item.completion_date} 
                createDatetask={item.create_date} 
                />
                })}
                
            </section>
        </div>
    )
}