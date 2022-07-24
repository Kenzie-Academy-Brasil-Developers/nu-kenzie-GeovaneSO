import logo from '../../logo.svg';
import './style.css';
function Header(){
    return (
        <header className="header">
                <div className='box'>
                    <figure>
                        <img src={logo} className="logo" alt="logo" />
                    </figure>
                </div>
                <div className='box'>
                    <button>Inicio</button> 
                </div>
        </header>
    );
}

export default Header;