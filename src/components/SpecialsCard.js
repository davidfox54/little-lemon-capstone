import car from '../assets/car.svg';

function SpecialsCard(props) {
    return (
        <card className='special'>
            <img
                alt='Special'
                src={props.image}
                width={230}
                height={105}
            />
            <h3>{props.name}</h3>
            <p className='price'>{props.price}</p>
            <p className='description'>{props.description}</p>
            <p>
                Order delivery
                <img src={car} width={30} height={30} />
            </p>
        </card>
    )
}

export default SpecialsCard;