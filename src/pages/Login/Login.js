import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('')
    const { signIn, setLoading, googleSinIn, gitHubSinIn, } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(setLoading(false))
    }

    const handleGoogleSignIn = () => {
        googleSinIn(provider)

            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })

            }).catch((error) => {
                console.error(error)
            });
    }
    const handleGitHubSignIn = () => {
        gitHubSinIn(gitHubProvider)

            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })

            }).catch((error) => {
                console.error(error)
            });
    }

    return (
        <section>
            <div className="flex min-overflow-hidden">
                <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-16 xl:px-20">
                    <div className="w-full max-w-xl mx-auto lg:w-96">
                        <div>
                            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">Login.</h2>
                        </div>

                        <div className="mt-8">
                            <div className="mt-6">
                                <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-600"> Email address </label>
                                        <div className="mt-1">
                                            <input name="email" type="email" required="" placeholder="Your Email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-neutral-600"> Password </label>
                                        <div className="mt-1">
                                            <input name="password" type="password" required="" placeholder="Your Password" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>

                                    <div className="text-sm">
                                        <span className="font-medium text-black"> New to the website? <Link to='/register' className="font-medium text-blue-600 hover:text-blue-500" >Please register</Link> </span>
                                    </div>

                                    <div>
                                        <button type="submit"
                                            className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-lime-700 rounded-xl hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            Login
                                        </button>
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
                                    <button onClick={handleGoogleSignIn} className=" text-2xl" >
                                        <FaGoogle />
                                    </button>
                                    <button onClick={handleGitHubSignIn} className="text-2xl" >
                                        <FaGithub />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
                    <img className="absolute inset-0 object-fill w-full h-full" src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=740&t=st=1666701566~exp=1666702166~hmac=c295e8ce94d7cb2539d9c6f145651f3969c865ac695fe820b346be44cebaed07" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Login;