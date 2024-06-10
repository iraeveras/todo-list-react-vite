import { Formtask } from '../Formtask/Formtask';
import './Wrapper.css';

export const Wrapper = () => {
    return (
        <div className='main-wrapper'>
            <section className='task-section'>
                <Formtask />
            </section>
        </div>
    )
}