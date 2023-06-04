import logo from '../assets/Logo.svg';
import NavLinks from './NavLinks';

function Header() {
    return (
        <header id='header' className='container'>
            <a href='/home'>
                <img src={logo} alt='Logo' height={60} width={200} />
            </a>
            <nav id='nav'>
                <NavLinks />
            </nav>
        </header>
    )
}

export default Header;