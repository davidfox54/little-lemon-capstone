import SpecialsCard from './SpecialsCard';

import salad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonpie from '../assets/lemon dessert.jpg';

function Highlights() {

    const specials = [
        {
            name: 'Greek Salad',
            price: '$12.99',
            description: 'The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese.'
        },
        {
            name: 'Bruchetta',
            price: '$5.99',
            description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic.'
        },
        {
            name: 'Lemon Pie',
            price: '$4.99',
            description: "An authentic lemon dessert straight out of grandmas recipe book."
        }
    ]

    return (
        <section id='highlights'>
            <div className='highlights-container'>
                <div className='highlights-header'>
                    <h2>This weeks specials!</h2>
                    <button type='submit' className='btn'>
                        Online Menu
                    </button>
                </div>
                <div className='highlights-specials'>
                    <SpecialsCard
                        image={salad}
                        name={specials[0].name}
                        price={specials[0].price}
                        description={specials[0].description}
                    />
                    <SpecialsCard
                        image={bruchetta}
                        name={specials[1].name}
                        price={specials[1].price}
                        description={specials[1].description}
                    />
                    <SpecialsCard
                        image={lemonpie}
                        name={specials[2].name}
                        price={specials[2].price}
                        description={specials[2].description}
                    />
                </div>
            </div>
        </section>
    )
}

export default Highlights;