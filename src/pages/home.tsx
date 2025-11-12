import React, { useEffect, useState } from 'react';
import AnimatedBackground from '../assets/BackgroundAnimation/backgroundAnimation';
import Header from '../components/header/header';
import MoveUpAnimationImg from '../assets/MoveUpAnimation/moveupanimation';
import InfiniteCarousel from '../assets/Infinite Carousel/infiniteCarousel';
import OpenCardAnimation from '../assets/OpenCardAnimation/opencardanimation';


const Home: React.FC = () => {
    const [moved, setMoved] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMoved(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleOpenChange = (open: boolean) => {
        setIsOpen(!open);
    }

    return(
        <>
            <Header />
            <div id='home'></div>
            <AnimatedBackground backgroundImage='/backgroundWelcome.png' />
            <div className='!mt-[20vh] pointer-events-none select-none relative flex justify-center'>
                <MoveUpAnimationImg imageSrc='/Firefly-Splash-.png' />
            </div>

            {/*Text for character sector*/}
            <div className={`!ml-70 transition-transform ease-in-out duration-1000 ${moved ? '-translate-y-[50rem]' : 'translate-y-0'}`}>
                <h1 className='text-[55px] '>Firefly</h1>
                <p className='w-[28rem] text-[23px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia rem adipisci reprehenderit! Error repellendus harum ducimus fugiat quaerat explicabo eveniet.</p>
            </div>
            {/*End text for character sector*/}

            {/*Galary sector*/}
            <div>
                <h1 className='text-[5rem] text-center !mb-10' id='galary'>GALARY</h1>
            </div>

            <div>
                <InfiniteCarousel />
            </div>
            {/*End galary sector*/}

            {/*Start about sector*/}
            <div>
                <div>
                    <h1 className='text-[5rem] text-center !mb-10 !mt-30' id='about'>ABOUT</h1>
                </div>

                <div className={`!mb-40 !mt-20 !ml-auto !mr-auto duration-700 ${isOpen ? 'w-[900px]' : 'w-[300px]'}`}>
                    <div onClick={() => handleOpenChange(isOpen)}>
                        <OpenCardAnimation />
                    </div>
                </div>
            </div>
            {/*End about sector*/}
        </>
    );
}

export default Home;