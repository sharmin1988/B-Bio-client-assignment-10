import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="h-full lg:py-24 py-16">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is the scope after pursuing M.Sc. in Biotechnology?</summary>
                            <div className="px-4 pb-4">
                                <p>After pursuing M.Sc. in Biotechnology, a student can go for a PhD in this field or get a research-based job in various sectors.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Are there any prerequisite courses or experiences?</summary>
                            <div className="px-4 pb-4">
                                <p>There are no prerequisites, but we recommend some basic biology and math courses. We also recommend some lab experience, even if just through class labs. </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Are we allowed to take other classes during the internship?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>No, you are prohibited from taking additional courses during the internship.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;