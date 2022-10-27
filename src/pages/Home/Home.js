import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animation from '../../assets/58698-bioproducts.json'

const Home = () => {

	const defaultOptions = {
		loop: true,
		autoplay: true, 
		animationData: animation,
		rendererSettings: {
		  preserveAspectRatio: 'xMidYMid slice'
		}}

	return (
		<div className='lg:flex'>
			<div className=" text-gray-900 bg-cover mt-2 rounded-md lg:w-3/4 ">
				<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-6  xl:max-w-3xl">
					<h1 className="text-4xl font-bold leading-none sm:text-5xl">Hello!!! lerner welcome To <br /> <span className="text-lime-700">B-Bio</span>
					</h1>
					<p className='text-lg'><small>your Bio-tech partner!!</small></p>
					<p className="px-8 mt-6 mb-12 text-lg">The biotechnology industry is growing in the world, and students have a good scope ahead for this field. Several job opportunities after this course include research fields, private-sector jobs or entrepreneurship. Graduates can also go for their higher education studies like M.Tech, M.Sc. and even PhD. They are also hired into sectors like medicine, pharmaceuticals, agricultural sector, research sector.</p>
					<div className="flex flex-wrap justify-center">
						<Link to='/courses'>
							<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-lime-700  hover:bg-yellow-700 text-white">Get started</button>
						</Link>
						<button className="px-8 py-3 m-2 text-lg  border rounded text-gray-900 border-gray-700">Learn more</button>
					</div>
				</div>
			</div>

			<div className=' lg:w-1/2 '>
				<div className='w-full lg:h-full h-96 '>
					<Lottie options={defaultOptions}>

					</Lottie>
				</div>
			</div>
		</div>
	);
};

export default Home;