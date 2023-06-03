import car from '../assets/car.svg';

function SpecialsCard(props) {
    return (
        <card className='special'>
            <img
                alt='Special'
                src={props.image}
            />
            <div className='special-text'>
                <div className='special-name'>
                    <h3>{props.name}</h3>
                    <p className='price'>{props.price}</p>
                </div>
                <p className='description'>{props.description}</p>
                <div className='special-delivery'>
                    <p className='delivery'>Order delivery</p>
                    <img className='car' alt='Delivery' src={car} />
                </div>
            </div>
        </card>
    )
}

export default SpecialsCard;