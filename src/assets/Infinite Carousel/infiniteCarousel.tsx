import React from 'react';
import {motion} from 'framer-motion';
import Card from '../Card/card';


const slides =[
    {id:1, image:<Card img='/firefly1.jpg' />},
    {id:2, image:<Card img='/firefly2.jpg' />},
    {id:3, image:<Card img='/firefly3.jpg' />},
    {id:4, image:<Card img='/firefly4.jpg' />},
    {id:5, image:<Card img='/firefly5.jpg' />},
];

const infiniteCarousel:React.FC = () => {
    const dublicatedSlides =[...slides, ...slides];

    return(
        <div className='w-full overflow-hidden'>
            <motion.div
                className='flex'
                animate = {{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration:10,
                        repeat: Infinity,
                    }
                }}
            >

            {dublicatedSlides.map((slide, index) => (
                <div key={index} className='min-w-[20%]'>
                    <div>
                        {slide.image}
                    </div>
                </div>
            ))}
            </motion.div>
        </div>
    );
};

export default infiniteCarousel;