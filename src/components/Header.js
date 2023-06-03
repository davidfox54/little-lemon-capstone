import logo from '../assets/Logo.svg';
import Nav from './Nav';

function Header() {
    return (
        <header>
            <img src={logo} alt='Logo' height={60} width={200} />
            <Nav />
        </header>
    )
}

export default Header;