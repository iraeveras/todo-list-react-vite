import { Formtask } from '../Formtask/Formtask';
import { Task } from '../Task/Task';
import './Wrapper.css';

export const Wrapper = ({task,dateCompletion,createDatetask}) => {
    return (
        <div className='main-wrapper'>
            <section className='task-section'>
                <Formtask />
                <Task task={task} dateCompletion={dateCompletion} createDatetask={createDatetask} />
            </section>
        </div>
    )
}