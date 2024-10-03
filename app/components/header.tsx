import React from "react";

function Header() {
    return (
        <header className='bg-dark flex justify-between items-center p-6 text-white'>
            <p className='text-2xl font-bold'>Bike Bliss</p>
          
            <nav className='hidden md:flex space-x-4'>
                <a href='#' className='hover:underline'>Features</a>
                <a href='#' className='hover:underline'>Testimonials</a>
                <a href='#' className='hover:underline'>FAQs</a>
            </nav>

            <button className='bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg'>
                Contact
            </button>
        </header>
    );
}

export default Header;
