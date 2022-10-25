import React from 'react';

const Register = () => {
    return (
        <section>
            <div class="flex min-overflow-hidden">
                <div class="flex flex-col justify-center flex-1 px-4 pb-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div class="w-full max-w-xl mx-auto lg:w-96">
                        <div>
                            <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">Register.</h2>
                        </div>

                        <div class="mt-8">
                            <div class="mt-6">
                                <form action="#" method="POST" class="space-y-6">
                                    <div>
                                        <label for="name" class="block text-sm font-medium text-neutral-600">Name </label>
                                        <div class="mt-1">
                                            <input id="name" name="name" type="text" required="" placeholder="Your Name" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-red-300 rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="photo" class="block text-sm font-medium text-neutral-600">Photo-URL </label>
                                        <div class="mt-1">
                                            <input id="photo" name="photo-URL" type="url" required="" placeholder="enter url" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-red-300 rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="email" class="block text-sm font-medium text-neutral-600"> Email address </label>
                                        <div class="mt-1">
                                            <input id="email" name="email" type="email" autocomplete="email" required="" placeholder="Your Email" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-red-300 rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>

                                    <div class="space-y-1">
                                        <label for="password" class="block text-sm font-medium text-neutral-600"> Password </label>
                                        <div class="mt-1">
                                            <input id="password" name="password" type="password" autocomplete="current-password" required="" placeholder="Your Password" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-red-300 rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>

                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500" />
                                            <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember me </label>
                                        </div>

                                        <div class="text-sm">
                                            <a href="/" class="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </a>
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-lime-700 rounded-xl hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Register</button>
                                    </div>
                                </form>
                                <div class="relative my-4">
                                    <div class="absolute inset-0 flex items-center">
                                        <div class="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div class="relative flex justify-center text-sm">
                                        <span class="px-2 bg-white text-neutral-600"> Or continue with </span>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        <div class="flex items-center justify-center">
                                            <span class="ml-4"> Register with Google</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex-1 hidden w-0 overflow-hidden lg:block">
                    <img class="absolute inset-0 object-cover w-full h-full" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1666702721~exp=1666703321~hmac=61d4177de8e783a2cb2c971e290a00b99fed280d98718560bfd5cbb6b5112da2" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Register;