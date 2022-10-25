import React from 'react';

const Home = () => {
    return (
        <section className=" text-gray-800">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Hello!!! lerner welcome To <br /> <span className="text-lime-700">B-Bio</span> 
		</h1>
        <p className='text-xl'><small>your Bio-tech partner!!</small></p>
		<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-lime-700 text-white">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded text-gray-800 border-gray-700">Learn more</button>
		</div>
	</div>
</section>
    );
};

export default Home;