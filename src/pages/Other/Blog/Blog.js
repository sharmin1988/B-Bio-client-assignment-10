import React from 'react';

const Blog = () => {
    return (
        <section>
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
                    <div className="p-6">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="9"></circle>
                                <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                            </svg>
                        </div>
                        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> what is cors?</h1>
                        <p className="mx-auto text-base leading-relaxed text-gray-500">Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                    </div>
                    <div className="p-6">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="9"></circle>
                                <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                            </svg>
                        </div>
                        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Why are you using firebase? What other options do you have to implement authentication?</h1>
                        <p className="mx-auto text-base leading-relaxed text-gray-500">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        <br />
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="9"></circle>
                                <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                            </svg>
                        </div>
                        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">How does the private route work?</h1>
                        <p className="mx-auto text-base leading-relaxed text-gray-500">Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600 rounded-full bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="9"></circle>
                                <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                            </svg>
                        </div>
                        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">What is Node? How does Node work?</h1>
                        <p className="mx-auto text-base leading-relaxed text-gray-500">Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Blog;