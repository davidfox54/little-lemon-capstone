import { Link } from 'react-router-dom';

function Reservations() {
    return (
        <section id='reservations'>
            <div className='reservations-container container'>
                <h1 id='reservations-title'>Reserve a table</h1>
                <form>
                    <label htmlFor="res-date" className="res-label">Choose date</label>
                    <input type="date" id="res-date" className="res-input" />
                    <label htmlFor="res-time" className="res-label">Choose time</label>
                    <select id="res-time" className="res-input">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label htmlFor="guests" className="res-label">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" className="res-input" />
                    <label htmlFor="occasion" className="res-label">Occasion</label>
                    <select id="occasion" className="res-input">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <Link to='/reservation-confirmation'>
                        <button type='submit' className="btn btn-submit">
                            Make your reservation
                        </button>
                    </Link>
                </form>
            </div>
        </section>
    )
}

export default Reservations;