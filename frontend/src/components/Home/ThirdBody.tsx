import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


import 'react-loading-skeleton/dist/skeleton.css'

const ThirdBody = () => {
    return (
        <React.Fragment>
            <section className="px-2 py-32 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight ">

                                    <span className="block text-indigo-600 xl:inline">
                                        Demonstrate branding Consequntly think outside
                                    </span>
                                </h1>
                                <div>
                                    <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                                        Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
                                    </p>
                                    <ul className='mt-5 lg:text-xl md:max-w-3xl'>
                                        <li className=''>
                                            <FontAwesomeIcon className='text-blue-500 mr-2' icon={faCheck} /> Enterprise-grade security
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='text-blue-500 mr-2' icon={faCheck} /> 99.9% guaranteed uptime SLA
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='text-blue-500 mr-2' icon={faCheck} /> Designated customer success team
                                        </li>
                                    </ul>


                                </div>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a
                                        href="#_"
                                        className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                                    >
                                        Start Now
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 ml-1"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1={5} y1={12} x2={19} y2={12} />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl relative">
                                <img src="https://s3-alpha-sig.figma.com/img/b842/7ca0/1e20d6b57efa617bac9104366369abf8?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zxg8Svbb6SKEEbb0negsmdBRyPUxTdNrSiJJ86LgbWUyqVrF6sTLXUxJUtwyhG-voL6hKUOnbZ~OA8DNcHgJDQ2lmJkfFW3ImMc7xtfwcJTeCmhzNwuo0c53ZIplKDCl7kFJZFnFaA-gBDHgiElYCFwbD0xncUNkKt32Qc1jFjUW4ataAdhMUJaFIs-wD26PfqXvwULBIGyKDQ48~w1ii9e-z7u1MlvFzu~cE2v3GINuH~QCqsaIWlELig7Y-R~Pqew7nForjrI2rixHSoUTCsz9CoNBUeqk6ikmMuEe2D3kzfZeqJ~~gk-J-ZDfNNfvIP0kRh561ID4vQ9oEhcHXg__" />
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                                    <p className="text-lg">Your Text Here</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">Button</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default ThirdBody