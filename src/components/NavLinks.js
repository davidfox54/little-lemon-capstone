import { Link } from "react-router-dom";

function NavLinks() {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/">Order Online</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>
    )
}

export default NavLinks;