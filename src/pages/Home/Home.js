import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section  className=" text-gray-900 bg-cover mt-2 rounded-md ">
			<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-16 xl:max-w-3xl">
				<h1 className="text-4xl font-bold leading-none sm:text-5xl">Hello!!! lerner welcome To <br /> <span className="text-lime-700">B-Bio</span>
				</h1>
				<p className='text-xl'><small>your Bio-tech partner!!</small></p>
				<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
				<div className="flex flex-wrap justify-center">
					<Link to = '/courses'>
						<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-lime-700  hover:bg-yellow-700 text-white">Get started</button>
					</Link>
					<button className="px-8 py-3 m-2 text-lg  border rounded text-gray-900 border-gray-700">Learn more</button>
				</div>
			</div>
		</section>
	);
};

export default Home;