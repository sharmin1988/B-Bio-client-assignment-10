import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { title, goal, id, image } = course

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-lg bg-lime-50 ">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-48 bg-gray-500" />
                <div className="flex flex-col justify-between p-4 h-64 ">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                        <p className="text-gray-900 mb-0">{goal}</p>
                    </div>
                    <Link to = {`/courses/${id}`}>
                        <button type="button"
                            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-lime-600 hover:bg-yellow-600 text-white mt-2">
                            Read more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;