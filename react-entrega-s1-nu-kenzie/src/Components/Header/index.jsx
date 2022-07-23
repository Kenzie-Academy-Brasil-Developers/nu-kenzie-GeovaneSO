import logo from '../../logo.svg';
import './style.css';
function Header(){
    return (
        <header className="header">
            <div className="header__container">
               <figure>
                    <img src={logo} className="logo" alt="logo" />
                </figure>
                <button>Inicio</button>
            </div>
        </header>
    );
}

export default Header;