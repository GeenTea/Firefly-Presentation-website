import React, { useEffect, useState } from 'react';
import AnimatedBackground from '../assets/BackgroundAnimation/backgroundAnimation';
import Header from '../components/header/header';
import MoveUpAnimationImg from '../assets/MoveUpAnimation/moveupanimation';

const Home: React.FC = () => {
    const [moved, setMoved] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMoved(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return(
        <>
            <Header />
            <AnimatedBackground backgroundImage='/backgroundWelcome.png' />
            <div className='!mt-[20vh] pointer-events-none select-none relative flex justify-center'>
                <MoveUpAnimationImg imageSrc='/Firefly-Splash-.png' />
            </div>

            {/*Text for character sector*/}
            <div className={`!ml-70 transition-transform ease-in-out duration-1000 ${moved ? '-translate-y-[50rem]' : 'translate-y-0'}`}>
                <h1 className='text-[55px] '>Firefly</h1>
                <p className='w-[28rem] text-[23px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia rem adipisci reprehenderit! Error repellendus harum ducimus fugiat quaerat explicabo eveniet.</p>
            </div>

            {/*Galary sector*/}

            <div>
                <h1 className='text-[5rem] text-center'>GALARY</h1>
            </div>

            <div>
                
            </div>
        </>
    );
}

export default Home;