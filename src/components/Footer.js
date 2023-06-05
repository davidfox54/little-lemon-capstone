import restaurant from '../assets/restaurant.jpg';
import NavLinks from './NavLinks';

function Footer() {
    return (
        <footer id='footer'>
            <div className='footer-container container'>
                <div className='footer-image'>
                    <img
                        src={restaurant}
                        height={240}
                        width={175}
                        alt='Restaurant peaceful'
                    />
                </div>
                <nav className='footer-doormat-nav'>
                    <h5>Doormat navigation</h5>
                    <NavLinks />
                </nav>
                <div className='footer-contact'>
                    <h5>Contact</h5>
                    <ul>
                        <li><b>Address:</b> 123 Blvd ln</li>
                        <li><b>Email:</b> noreply@gmail.com</li>
                        <li><b>Phone Number:</b> 111-222-3333</li>
                    </ul>
                </div>
                <div className='footer-socials'>
                    <h5>Social Media Links</h5>
                    <ul>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;