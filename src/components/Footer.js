import restaurant from '../assets/restaurant.jpg';

function Footer() {
    return (
        <footer>
            <img src={restaurant} height={240} width={175}
            alt='Restaurant peaceful'/>
            <div>
                <h3>Doormat navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Email</li>
                    <li>Phone Number</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;