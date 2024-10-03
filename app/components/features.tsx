import React from "react";

function Features() {
    return (
        <section className='px-4 py-10 m-0 text-white w-full'>
            <h1 className='text-violet-500 text-center'>Main Features</h1>
            <h2 className="text-4xl font-bold text-center">Discover the perfect ride</h2>
            <p className="text-lg text-center mb-8">Explore the key features</p>

            <div className='flex flex-col space-y-10'> 
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-B_GIA9BOSstmvWEIaiIPy5yQWzUgxPibnMWoD47H_AqNLUEAVkuS8uXN-_b43DHuXI&usqp=CAU"
                        alt="TrailBlazer Motorcycle"
                        className="w-full md:w-1/3 max-w-xs h-auto mx-auto rounded-lg shadow-lg"
                    />
                    <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left px-4 mx-auto"> 
                        <h1 className='font-bold text-2xl'>ThunderBolt</h1>
                        <p className="text-lg mt-2">Dominate the streets with unmatched agility</p> 
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg mt-4">
                            Buy Now
                        </button>
                    </div>
                    </div>

                <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
                    <div className="mt-4 md:mt-0 md:mr-8 text-center md:text-left px-4 mx-auto">
                        <h1 className='font-bold text-2xl'>StreetRider</h1>
                        <p className="text-lg mt-2">Embrace the perfect blend</p> 
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg mt-4">
                            Buy Now
                        </button>
                    </div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-B_GIA9BOSstmvWEIaiIPy5yQWzUgxPibnMWoD47H_AqNLUEAVkuS8uXN-_b43DHuXI&usqp=CAU"
                        alt="StreetRider Motorcycle"
                        className="w-full md:w-1/3 max-w-xs h-auto mx-auto rounded-lg shadow-lg"
                    />
                </div>

                <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-B_GIA9BOSstmvWEIaiIPy5yQWzUgxPibnMWoD47H_AqNLUEAVkuS8uXN-_b43DHuXI&usqp=CAU"
                        alt="TrailBlazer Motorcycle"
                        className="w-full md:w-1/3 max-w-xs h-auto mx-auto rounded-lg shadow-lg"
                    />
                    <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left px-4 mx-auto"> 
                        <h1 className='font-bold text-2xl'>TrailBlazer</h1>
                        <p className="text-lg mt-2">Elevate your riding experience. Precision engineering meets unparalleled comfort.</p>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg mt-4">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
