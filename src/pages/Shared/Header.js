import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/biotechnology.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState(false)
    console.log(user)

    const handelTheme = () => {
        setTheme(!theme)
    }


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="px-4 py-3 mx-auto bg-lime-100 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center">
                    <Link to='/' className="inline-flex items-center mr-8">
                        <img className='h-10' src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
                            B-Bio.com
                        </span>
                    </Link>
                    <ul className=" items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link to='/courses' className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-lime-600">
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link to='/faq' className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-lime-600">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to='/blog' className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-lime-600">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <button onClick={handelTheme} className={`inline-flex items-center justify-center h-8 px-4 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-gray-100 hover:bg-yellow-600 focus:shadow-outline focus:outline-none ${theme ? 'bg-white text-black' : 'bg-black text-white'}`}>
                                Theme
                            </button>
                        </li>
                    </ul>
                </div>
                <ul className="items-center hidden space-x-8 lg:flex">

                    {
                        user?.uid ?
                            <>
                                <li>
                                    <div className="tooltip tooltip-bottom" data-tip= {user.displayName}>
                                        <Link to='/login' >
                                            <img alt="" data-tip="hello" className="w-10 h-10 tooltip border rounded-full" src={user?.photoURL} />
                                        </Link>
                                    </div>

                                </li>
                                <li>
                                    <Link to='/' className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-600 hover:bg-lime-600 focus:shadow-outline focus:outline-none">
                                        <button onClick={handleLogOut}>
                                            Logout
                                        </button>
                                    </Link>
                                </li>
                            </>

                            : <>
                                <li>
                                    <Link to='/login' className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-lime-600">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/register' className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-lime-600 hover:bg-yellow-600 focus:shadow-outline focus:outline-none">
                                        Register
                                    </Link>
                                </li>
                            </>
                    }


                </ul>

                {/* ------- For mobile display--------- */}
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link to='/' className="inline-flex items-center mr-8">
                                            <img className='h-10' src={logo} alt="" />
                                            <span className="ml-2 text-xl font-bold tracking-wide uppercase text-gray-800 ">
                                                B-Bio.com
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/courses' className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-lime-600">
                                                Courses
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/faq' className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-lime-600">
                                                FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/blog' className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-lime-600">
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/about' className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-lime-600">
                                                About us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/login' className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-lime-600">
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/register' className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-lime-600 hover:bg-yellow-600 focus:shadow-outline focus:outline-none">
                                                Register
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;