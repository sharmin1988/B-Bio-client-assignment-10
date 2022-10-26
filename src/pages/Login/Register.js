import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const { createUser, googleSinIn, updateUserProfile, verifyEmail } = useContext(AuthContext)
    const [error, setError] = useState('')
    const provider = new GoogleAuthProvider();

    const handelOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                handelUpdateUserProfile(name, photoURL)
                handelVerifyEmail()
                toast.success('Verification Email send to your inbox! PleaseCheck')
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            });
    }

    const handleGoogleSignIn = () => {
        googleSinIn(provider)

            .then((result) => {
                const user = result.user;
                console.log(user)

            }).catch((error) => {
                console.error(error)
            });
    }

    const handelUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => { })
    }

    const handelVerifyEmail = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }




    return (
        <section>
            <div className="flex min-overflow-hidden">
                <div className="flex flex-col justify-center flex-1 px-4 pb-12 sm:px-6 lg:flex-none lg:px-16 xl:px-20">
                    <div className="w-full max-w-xl mx-auto lg:w-96">
                        <div>
                            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">Register.</h2>
                        </div>

                        <div onSubmit={handelOnSubmit} className="mt-8">
                            <div className="mt-6">
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label for="name" className="block text-sm font-medium text-neutral-600">Name </label>
                                        <div className="mt-1">
                                            <input id="name" name="name" type="text" placeholder="Your Name" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-red-300 rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="photo" className="block text-sm font-medium text-neutral-600">Photo-URL </label>
                                        <div className="mt-1">
                                            <input id="photo" name="photoURL" type="url" placeholder="enter url" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-red-300 rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                                        <div className="mt-1">
                                            <input id="email" name="email" type="email" required placeholder="Your Email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-red-300 rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label for="password" className="block text-sm font-medium text-neutral-600"> Password </label>
                                        <div className="mt-1">
                                            <input id="password" name="password" type="password" required placeholder="Your Password" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-red-300 rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500" />
                                            <label for="remember-me" className="block ml-2 text-sm text-neutral-600"> Agreed term and conditions </label>
                                        </div>

                                        <div className="text-sm">
                                            <span className="font-medium text-black"> Already have an account? <Link to='/login' className="font-medium text-blue-600 hover:text-blue-500" >Please login</Link> </span>
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-lime-700 rounded-xl hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Register</button>
                                    </div>

                                    <p className="text-sm font-medium text-red-600">
                                        {error}
                                    </p>
                                </form>
                                <div className="relative my-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-neutral-600"> Or continue with </span>
                                    </div>
                                </div>
                                <div className='flex justify-center gap-4'>
                                    <button onClick={handleGoogleSignIn} className="" >
                                        <FaGoogle />
                                    </button>
                                    <button className="" >
                                        <FaGithub />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
                    <img className="absolute inset-0 object-fill w-full h-full" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1666702721~exp=1666703321~hmac=61d4177de8e783a2cb2c971e290a00b99fed280d98718560bfd5cbb6b5112da2" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Register;