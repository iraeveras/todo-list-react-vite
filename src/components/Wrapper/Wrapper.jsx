import { Formtask } from '../Formtask/Formtask';
import { Task } from '../Task/Task';
import api from '../../services/api';
import './Wrapper.css';

export const Wrapper = () => {

    let message = ""

    // const tasks = [
    //     {
    //     task_value: api.task,
    //     task_date_completion: api.completion_date,
    //     task_create_date: api.create_date
    // }]

    return (
        <div className='main-wrapper'>
            
            <Formtask />
            <Task />            
        </div>
    )
}