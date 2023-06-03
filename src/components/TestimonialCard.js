import headshot from '../assets/headshot.png';

function TestimonialCard(props) {
    return (
        <card className='testimonial'>
            <div className='testimonial-container'>
                <p className="testimonial-rating"><b>Rating:</b> {props.rating}</p>
                <div className="person">
                    <img
                        alt='Testimonial'
                        src={headshot}
                        width={55}
                        height={55}
                    />
                    <p className='testimonial-name'>{props.name}</p>
                </div>
                <p className='testimonial-review'><b>Review:</b> "{props.review}"</p>
            </div>
        </card>
    )
}

export default TestimonialCard;