import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function BookingConfirmationPage() {
    return (
        <>
            <Header />
            <div id='confirmation'>
                <div className='res-confirmation-container container'>
                    <h1>Your table has been booked!</h1>
                    <Link to='/'>
                        <button type='submit' className='btn'>
                            Return home
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BookingConfirmationPage;