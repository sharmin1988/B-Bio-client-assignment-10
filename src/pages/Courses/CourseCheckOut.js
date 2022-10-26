import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseCheckOut = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div>
            <section>
                <h2 className='text-3xl font-bold text-lime-700 my-4 text-center'>{course.title}</h2>
                <h2 className='text-lg font-bold text-yellow-700 text-center'>Duration : {course.duration} Month</h2>
                <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
                    <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                        <div className="justify-center mx-auto space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:mx-auto xl:max-w-2xl xl:mx-0 xl:grid-cols-2">
                            <div className="bg-gray-50 rounded-xl">
                                <div className="p-6 text-center">
                                    <h2 className="text-lg font-medium leading-6 text-neutral-600">Basic</h2>

                                    <p className="mt-8 text-4xl">
                                        <span className="font-black text-blue-600 uppercase">free</span>
                                        <span className="font-medium text-gray-500">/mo</span>
                                    </p>
                                    <span className="text-xs text-neutral-600">No credit card required</span>
                                    <div className="mt-6">
                                        <Link to="/login" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get access</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-lime-50 border rounded-xl">
                                <div className="p-6 text-center">
                                    <h2 className="text-lg font-medium leading-6 text-neutral-600">Premium</h2>

                                    <p className="mt-8 text-4xl">
                                        <span className="font-black text-lime-800 uppercase">$ {course.price}</span>
                                        <span className="font-medium text-gray-500">/mo</span>
                                    </p>
                                    <span className="text-xs text-neutral-600">No credit card required</span>
                                    <div className="mt-6">
                                        <Link to="/"
                                            className="w-full items-center block px-10 py-3.5 text-base font-medium text-center bg-lime-600  transition duration-500 ease-in-out transform border-2  text-white  shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-yellow-600 focus:ring-gray-500">
                                            Buy for $ {course.price}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CourseCheckOut;