import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";

const CourseDetails = () => {
    const course = useLoaderData()
    const { title, description, id, image } = course
    return (
        <section className="p-4 lg:p-16 text-gray-900">

            <div className="container flex flex-col mx-auto lg:flex-row">

                <img className='w-full lg:w-1/3' src={image} alt="" />

                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 ">
                    <button className='pb-6 text-lime-600 text-3xl'>
                        <FaDownload />
                    </button>
                    <h2 className="text-3xl font-semibold leading-none">{title}</h2>
                    <p className="mt-4 mb-8 text-sm">{description}</p>

                    <Link className=' ' to='/courses'>
                        <button className="self-start px-6 py-2 text-lg font-medium rounded bg-lime-600 hover:bg-yellow-600 text-gray-900">Get premium access</button>
                        <button className="self-start px-3 py-1 mt-4 lg:mt-0 lg:ml-4 text-md font-medium rounded bg-gray-100  border border-lime-700 hover:bg-yellow-600  text-gray-900">Try another course</button>

                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;