import { Formtask } from '../Formtask/Formtask';
import { Task } from '../Task/Task';
import './Wrapper.css';

export const Wrapper = () => {
    return (
        <div className='main-wrapper'>
            <section className='task-section'>
                <Formtask />
                <Task />
            </section>
        </div>
    )
}