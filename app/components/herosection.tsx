
import React from 'react';
// import { Button } from 'shadcn/ui'; // Import Button from shadcn/ui

const HeroSection: React.FC = () => {
  return (
    <div className='rotation hero'>
      <nav className='flex justify-between items-center p-2 text-white'>
        <div className='text-1xl font-bold'>Bike Bliss</div>
        <button className='bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg'>
          Get Started
        </button>
      </nav>
      <section className='flex flex-col lg:flex-row px-5 py-10 text-white'>
        <div className='space-y-8'>
          <h1 className='text-2xl font-bold'>Lorem ipsum dolor sit</h1>
          <p className='text-lg'>In ultrices pellentesque in porttitor fusce tristique placera lorem.</p>
          <img
            src='https://images.unsplash.com/photo-1698695290237-5c7be2bd52a8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZCUyMG1vdG9yY3ljbGV8ZW58MHx8MHx8fDA%3D'
            alt='Red Motorcycle'
            className='w-full rounded-lg shadow-lg'
          />
          <button className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg justify-between items-center mx-auto block'>
            Buy Now
          </button>
        </div>
      </section>
      <section className='px-8 text-white'>
         
      <div className="flex flex-col lg:flex-row">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Lorem ipsum dolor sit</h2>
          <p >In ultrices pellentesque in porttitor.</p>
          <img
            src="https://i.pinimg.com/736x/8a/31/b7/8a31b7039d982b3e879780e73795badf.jpg"
            alt="White Motorcycle"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
       
      </div>

      <div className="flex flex-col lg:flex-row ">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Lorem ipsum dolor sit</h2>
          <p >In ultrices pellentesque in porttitor.</p>
          <img
            src="https://i.pinimg.com/originals/06/2e/cd/062ecddd5b990b226b44e40cb4376c6e.jpg"
            alt="Black Motorcycle"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    </div>
  );
};



export default HeroSection;
