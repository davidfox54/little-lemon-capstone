import logo from '../assets/Logo.svg';
import NavLinks from './NavLinks';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id='header' className='container'>
            <Link to='/'>
                <img src={logo} alt='Logo' height={60} width={200} />
            </Link>
            <nav id='nav'>
                <NavLinks />
            </nav>
        </header>
    )
}

export default Header;