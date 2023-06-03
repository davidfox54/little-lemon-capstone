import chef from '../assets/restaurant chef B.jpg';
import bothChefs from '../assets/Mario and Adrian A.jpg';

function About() {
    return (
        <section id='about'>
            <div className='about-container container'>
                <div className="about-text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut dignissim blandit ex, vitae gravida libero
                        condimentum nec. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Ut dignissim blandit ex,
                        vitae gravida libero condimentum nec.
                    </p>
                </div>
                <div className="about-images">
                    <img
                        src={chef}
                        alt='Chef cooking'
                        width={375}
                        height={440}
                    />
                    <img
                        src={bothChefs}
                        alt='Our chefs'
                        width={375}
                        height={440}
                    />
                </div>
            </div>
        </section>
    )
}

export default About;