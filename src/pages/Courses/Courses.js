import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import RightSideNav from './RightSideNav';

const Courses = () => {

    const courses = useLoaderData()

    return (
        <div className='lg:flex'>
            <div className='lg:w-1/4'>
                <RightSideNav></RightSideNav>
            </div>
            <div className='lg:w-3/4'>
                <div className=' grid md:grid-cols-3 gap-4 my-6 px-4'>
                    {
                        courses.map(course => <CourseCard
                            key={course.id}
                            course={course}
                        ></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;