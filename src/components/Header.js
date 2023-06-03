import logo from '../assets/Logo.svg';
import Nav from './Nav';

function Header() {
    return (
        <header id='header' className='container'>
            <a href='/home'>
                <img src={logo} alt='Logo' height={60} width={200} />
            </a>
            <Nav />
        </header>
    )
}

export default Header;