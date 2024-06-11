import { FiCheckSquare } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";
import { Button } from "../Button/Button";
import './Task.css';

export const Task = ({task, dateCompletion, createDatetask}) => {
    
    return (
        <ul className='task-list'>
            <li className='list'>
                <div className='task-group'>
                    <p className='task'>{task}</p>
                    <p className='task-completion-date'>{dateCompletion}</p>
                    <p className='task-create-date'>{createDatetask}</p>
                </div>
                <div className='btn-group'>
                    <Button>
                        <FiCheckSquare/>
                    </Button>
                    <Button>
                        <FiEdit/>
                    </Button>
                    <Button>
                        <FiXSquare/>
                    </Button>
                </div>
            </li>            
        </ul>
    )
}