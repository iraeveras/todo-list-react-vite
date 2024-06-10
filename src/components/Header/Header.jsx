import ImgUser from '../../assets/foto-perfil.jpg'
import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <a href="#" className='logo'>ToDo <span>List</span></a>
            <nav className='nav'>
                <ul className='nav-link'>
                    <li className='link'><a href='#'>Tarefas concluídas</a></li>
                </ul>

                <div className='container-img-profile'>
                    <img src={ImgUser} width="40px" alt="Imagem do usu´srio" />
                </div>
            </nav>
        </header>
    )
}