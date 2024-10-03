
function cover(){

    return(

        <section className='flex flex-col lg:flex-row py-10 text-white'>
        <div className='space-y-8'>
        <h1 className='text-6xl font-bold text-center'>Ride with passion <br></br>Ride with us</h1>
        <p className='text-lg text-center'>Experience the thrill of the open road with our premium selection of bikes</p>
        <button className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg mt-4 mx-auto block'>
                Buy Now
        </button>
        <img
            src='https://images.unsplash.com/photo-1698695290237-5c7be2bd52a8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZCUyMG1vdG9yY3ljbGV8ZW58MHx8MHx8fDA%3D'
            alt='Red Motorcycle'
            className='w-1/3 rounded-lg shadow-lg mx-auto'
            />
        </div>
        </section>
    )
}

export default cover;