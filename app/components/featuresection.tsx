// components/FeaturesSection.tsx
import React from 'react';



const FeaturesSection: React.FC = () => {
  return (
    <div className='features'>
      <nav className='flex justify-between items-center p-6 text-white'>
        <div className='text-2xl font-bold'>Bike Bliss</div>
        <div className='space-x-4'>
          <a href='#' className='hover:underline'>Link 1</a>
          <a href='#' className='hover:underline'>Link 2</a>
          <a href='#' className='hover:underline'>Link 3</a>
        </div>
        <button className='bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg'>
          Get Started
        </button>
      </nav>
      <section className='flex flex-col lg:flex-row py-10 text-white'>
        <div className='space-y-8'>
          <h1 className='text-3xl font-bold text-center'>Lorem ipsum dolor sit</h1>
          <p className='text-lg text-center'>In ultrices pellentesque in porttitor fusce tristique placera lorem.</p>
          <button className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg mt-4 mx-auto block'>
            Buy Now
          </button>
          <img
            src='https://images.unsplash.com/photo-1698695290237-5c7be2bd52a8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZCUyMG1vdG9yY3ljbGV8ZW58MHx8MHx8fDA%3D'
            alt='Red Motorcycle'
            className='image1 w-full rounded-lg shadow-lg'
          />
        </div>
      </section>
      <section className='px-8 py-10 text-white'>
       <div>
<div>
    <h1 className='text-violet-500 text-center'>Main features</h1>
  <h2 className="text-3xl font-bold text-center">Lorem ipsum dolor sit</h2>
  <p className="text-lg text-center">In ultrices pellentesque in porttitor.</p>
  </div>
 
<div className='para1 flex items-center justify-between'> 
     
  <img
    src="https://i.pinimg.com/736x/8a/31/b7/8a31b7039d982b3e879780e73795badf.jpg"
    alt="White Motorcycle"
    className="image2 rounded-lg shadow-lg"
  />
    <div className='ml-6'>
    <h1 className='font-bold text-2xl'>Heading</h1>
    <h2 className="text-xl mt-2">Lorem ipsum dolor sit</h2>
    <p className="text-lg mt-4">In ultrices pellentesque in porttitor.</p>
    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg mt-4 mx-auto block">
      Buy Now
    </button>
  </div>
</div>
</div>


<div className='para1 flex items-center justify-between'>
 
  <div className='mr-6'>
    <h1 className='font-bold text-2xl'>Heading</h1>
    <h2 className="text-xl mt-2">Lorem ipsum dolor sit</h2>
    <p className="text-lg mt-4">In ultrices pellentesque in porttitor.</p>
    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg mt-4 mx-auto block">
      Buy Now
    </button>
  </div>

 
  <img
    src="https://i.pinimg.com/originals/06/2e/cd/062ecddd5b990b226b44e40cb4376c6e.jpg"
    alt="White Motorcycle"
    className="image2 rounded-lg shadow-lg w-1/2"
  />
</div>

<div className='para1 flex items-center justify-between'> 
     
  <img
    src="https://i.pinimg.com/originals/06/2e/cd/062ecddd5b990b226b44e40cb4376c6e.jpg"
    alt="White Motorcycle"
    className="image2 rounded-lg shadow-lg"
  />
    <div className='ml-6'>
    <h1 className='font-bold text-2xl'>Heading</h1>
    <h2 className="text-xl mt-2">Lorem ipsum dolor sit</h2>
    <p className="text-lg mt-4">In ultrices pellentesque in porttitor.</p>
    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg mt-4 mx-auto block">
      Buy Now
    </button>
  </div>
</div>
</section>
</div>
);
};

export default FeaturesSection;
