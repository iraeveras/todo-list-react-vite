import { useState } from 'react';
import './Header.css';


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    function handleBtnToggle() {
        setMenuOpen(!menuOpen)
        
    }

    return (
        <header className='header'>
            <a href="#" className='logo'>ToDo<span>List</span></a>
            <nav className='nav'>
                <ul className='nav-link'>
                    <li className='link'><a href='#'>Tarefas concluídas</a></li>
                    <li className='link'><a href='#'>Tarefas concluídas</a></li>
                    <li className='link'><a href='#'>Tarefas concluídas</a></li>
                    <li className='link'><a href='#'>Tarefas concluídas</a></li>
                </ul>

                <button className="btn-toggle" onClick={handleBtnToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            <ul className={`dropdown ${menuOpen ? 'show' : !menuOpen}`}>
                <li className='link'><a href='#'>Tarefas concluídas</a></li>
                <li className='link'><a href='#'>Tarefas concluídas</a></li>
                <li className='link'><a href='#'>Tarefas concluídas</a></li>
                <li className='link'><a href='#'>Tarefas concluídas</a></li>
            </ul>
        </header>
    )
}