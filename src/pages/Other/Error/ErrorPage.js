import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-10996.jpg?size=626&ext=jpg&ga=GA1.2.1239272833.1664376337&semt=sph" alt="" />
                <p className="text-3xl font-bold text-lime-800">Page not found!!!</p>
                <p className="text-xl">Try refining your search OR use the navigate below...</p>
                <Link rel="noopener noreferrer" to ="/" className="px-8 py-3 font-semibold rounded bg-lime-300 text-gray-900">Back to homepage</Link>
            </div>
        </section>
    );
};

export default ErrorPage;