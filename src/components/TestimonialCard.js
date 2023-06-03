import headshot from '../assets/headshot.png';

function TestimonialCard(props) {
    return (
        <card className='testimonial-card'>
            <p className="testimonial-rating">{props.rating}</p>
            <div className="person">
                <img
                    src={headshot}
                    width={55}
                    height={55}
                />
                <p className='testimonial-name'>{props.name}</p>
            </div>
            <p className='testimonial-rating'>{props.rating}</p>
        </card>
    )
}

export default TestimonialCard;