import { FiCheckSquare } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";
import './Task.css';

export const Task = () => {
    return (
        <ul className='task-list'>
            <li className='list'>
                <div className='task-group'>
                    <p className='task'>Enviar FGTS</p>
                    <p className='task-completion-date'>10/06/2024</p>
                </div>
                <div className='btn-group'>
                    <button>
                        <FiCheckSquare/>
                    </button>
                    <button>
                        <FiEdit/>
                    </button>
                    <button>
                        <FiXSquare/>
                    </button>
                </div>
            </li>
            
            <li className='list'>
                <div className='task-group'>
                    <p className='task'>Enviar FGTS</p>
                    <p className='task-completion-date'>10/06/2024</p>
                </div>
                <div className='btn-group'>
                    <button>
                        <FiCheckSquare/>
                    </button>
                    <button>
                        <FiEdit/>
                    </button>
                    <button>
                        <FiXSquare/>
                    </button>
                </div>
            </li>
            
        </ul>
    )
}