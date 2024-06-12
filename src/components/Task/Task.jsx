import { FiCheckSquare } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";
import { Button } from "../Button/Button";
import './Task.css';



export const Task = (props) => {
    
    return (
        <div className='task-list'>
            <div className='list'>
                <div className='task-group'>
                    <p className='task'>{props.task}</p>
                    <p className='task-completion-date'>{props.dateCompletion}</p>
                    <p className='task-create-date'>{props.createDatetask}</p>
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
            </div>            
        </div>
    )
}