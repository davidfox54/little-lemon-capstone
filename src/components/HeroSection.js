import restaurantFood from '../assets/restauranfood.jpg';

function HeroSection() {
    return (
        <section id='hero'>
            <div className='hero-container'>
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        We are a family owned Mediterranean restaurant
                        focused on traditional recipes served with a
                        modern twist.
                    </p>
                    <button type='submit' className='btn'>
                        Reserve a table
                    </button>
                </div>
                <div className="hero-image">
                    <img
                        src={restaurantFood}
                        alt='Restaurant food'
                        width={375}
                        height={440}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;