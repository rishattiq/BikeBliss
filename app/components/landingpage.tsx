import React from 'react';
import HeroSection from './herosection';
import FeaturesSection from './featuresection';

const Landing: React.FC = () => {
  return (
    <div className='background landing'>
      <div className='pt-32'>
        <p className='BikeBliss'>Bike Bliss</p>
      </div>
      <div className='heading'>
        <h1 className='text-9xl font-bold'>LANDING<br /> PAGE</h1>
      </div>
      <div className='subhead'>
        <h2 className='text-7xl font-bold'>Desktop and <br /> Mobile Design</h2>
      </div>

      <div className='flex flex-row justify-between items-center p-10 space-x-10 absolute top-0 left-0 right-0'>
        <HeroSection />
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Landing;