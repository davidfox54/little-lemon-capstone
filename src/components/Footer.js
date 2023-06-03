import restaurant from '../assets/restaurant.jpg';

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
                <div className='footer-doormat-nav'>
                    <h5>Doormat navigation</h5>
                    <ul>
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/menu'>Menu</a></li>
                        <li><a href='/reservations'>Reservations</a></li>
                        <li><a href='/order-online'>Order Online</a></li>
                        <li><a href='/login'>Login</a></li>
                    </ul>
                </div>
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