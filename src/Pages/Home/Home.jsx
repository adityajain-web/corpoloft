import React from 'react';
import { Hero } from '../../Components/Components';
import { AboutSec, MissionSec, ServiceSec, WhyUsSec, Contact } from './Sections/Sections';

const Home = () => {
    return (
        <>
            <Hero />
            <main>
                <section className='mt-md-0 mt-5 mb-5'>
                    <AboutSec />
                </section>
                <section className='mb-5'>
                    <MissionSec />
                </section>
                <section>
                    <ServiceSec />
                </section>
                <section className='mb-3'>
                    <WhyUsSec />
                </section>
                <section>
                    <Contact />
                </section>
            </main>
        </>
    )
}

export default Home