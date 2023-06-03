import TestimonialCard from "./TestimonialCard";

function Testimonials() {

    const testimonials = [
        {
            rating: '5/5',
            name: 'John',
            review: 'Wonderful restaurant!'
        },
        {
            rating: '5/5',
            name: 'Bob',
            review: 'Amazing restaurant!'
        },
        {
            rating: '5/5',
            name: 'Chris',
            review: 'Great restaurant!'
        },
        {
            rating: '5/5',
            name: 'Jim',
            review: 'Tasty restaurant!'
        }
    ]

    return (
        <section id='testimonials' className="container">
            <h2>Testimonials</h2>
            <TestimonialCard
                rating={testimonials[0].rating}
                name={testimonials[0].name}
                review={testimonials[0].review}
            />
            <TestimonialCard
                rating={testimonials[1].rating}
                name={testimonials[1].name}
                review={testimonials[1].review}
            />
            <TestimonialCard
                rating={testimonials[2].rating}
                name={testimonials[2].name}
                review={testimonials[2].review}
            />
        </section>
    )
}

export default Testimonials;