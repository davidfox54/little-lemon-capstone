import React from 'react';
import SpecialsCard from './SpecialsCard';

import salad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.png';
import lemonpie from '../assets/lemon dessert.jpg';

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
        description: "An authentic lemon dessert straight out of grandma's recipe book."
    }
];

const Specials = () => {
    return (
        <section id='specials'>
            <div className='specials-container container'>
                <div className='specials-header'>
                    <h2>This week's specials!</h2>
                    <button type='submit' className='btn'>
                        Online Menu
                    </button>
                </div>
                <div className='specials-cards'>
                    {specials.map((special, index) => (
                        <SpecialsCard
                            key={index}
                            image={getImageBySpecial(special)}
                            name={special.name}
                            price={special.price}
                            description={special.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const getImageBySpecial = (special) => {
    switch (special.name) {
        case 'Greek Salad':
            return salad;
        case 'Bruchetta':
            return bruchetta;
        case 'Lemon Pie':
            return lemonpie;
        default:
            return '';
    }
};

export default Specials;
