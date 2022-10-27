import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import ReactToPdf from 'react-to-pdf'
import { useRef } from 'react';

const CourseDetails = () => {
    const ref = useRef()
    const course = useLoaderData()
    const { title, description, id, image, goal, duration } = course

    return (
        <section className="p-4 lg:p-12 text-gray-900">
            <div className="container flex flex-col mx-auto lg:flex-row">
                <img className='w-full lg:w-1/3' src={image} alt="" />

                <div className="flex flex-col w-full p-4 lg:w-2/3 md:pl-6 ">

                    {/* -------------- Download Pdf section ----------------- */}
                    <div>
                        <ReactToPdf targetRef={ref} filename="course-details.pdf">
                            {({ toPdf }) => (
                                <button onClick={toPdf} className=' text-lime-600 hover:text-yellow-600 text-4xl'>
                                    <FaDownload />
                                </button>
                            )}
                        </ReactToPdf>

                        <div ref={ref}>
                            <div className='pt-10 lg:pl-10'>
                                <h2 className="text-3xl font-semibold leading-none">{title}</h2>
                                <p className="my-4 text-md"><strong>Our Goal:</strong> {goal}</p>
                                <p className="text-md text-red-700">
                                    <strong>Time Duration for the Course: {duration} month</strong> </p>
                                <p className="mt-4 mb-8 font-semibold text-sm"><strong>Description:</strong> {description}</p>
                            </div>
                        </div>

                    </div>
                    {/* ---------------------------------------------- */}

                    <div className='lg:flex pl-10 items-center'>
                        <Link className=' ' to={`/courses/checkout/${id}`}>
                            <button className="self-start px-6 py-2 text-lg font-medium rounded bg-lime-600 hover:bg-yellow-600 text-gray-900">Get premium access</button>
                        </Link>
                        <Link to='/courses'>
                            <button className="self-start px-3 py-1 mt-4 lg:mt-0 lg:ml-4 text-md font-medium rounded bg-gray-100  border border-lime-700 hover:bg-yellow-600  text-gray-900">Try another course</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;