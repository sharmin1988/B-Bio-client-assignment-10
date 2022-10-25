import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='py-2 px-6 md:py-4 md:px-10 xl:max-w-3xl'>
            <h4 className='text-xl text-center font-bold mb-3'>Our Courses {courses.length}</h4>

            <div>
            {
                    courses.map(course => <p className='mb-6 transition-colors font-semibold duration-200 hover:text-lime-700' key = {course.id}>
                        <Link to={`/course/${course.id}`}>{course.title}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideNav;