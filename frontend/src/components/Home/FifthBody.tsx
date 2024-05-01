import React, { useState } from 'react';

const FifthBody = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleButton =()=>{
    setIsOpen(!isOpen);
  }
  return (
    <React.Fragment>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Frequently Asked Questions</h2>
            <p className="text-lg leading-relaxed  mt-3 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              Authentification Issues
            </p>
          </div>
        </div>

        <div  className='' data-accordion="open">
          <h2 >
            <button
              type="button"
              className="flex  items-center justify-between w-full p-8 font-medium rtl:text-right text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white hover:bg-gray-100 gap-3"
              data-accordion-target="#accordion-arrow-icon-body-1"
              aria-expanded="true"
              aria-controls="accordion-arrow-icon-body-1"
            >
              <span>
                <h1 className='text-black font-extrabold'>Authentification Issues</h1>
                <p className='text-gray-400'>Porttitor nec est nisi, id nunc.</p>
              </span>
            </button>
          </h2>
          <div id="accordion-arrow-icon-body-1"></div>

          <h2 id="accordion-arrow-icon-heading-2">
            <button
              type="button"
              onClick={toggleButton}

              className="flex items-center justify-between w-full p-7 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-700 hover:bg-gray-100 gap-3"
              data-accordion-target="#accordion-arrow-icon-body-2"
              aria-expanded={isOpen ? "true" : "false"}
              aria-controls="accordion-arrow-icon-body-2"
            >
              <span className=' flex'>
                <h1 className=''>Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.</h1>
                <p className=''>Updated last week</p>
               </span>
              <svg
                data-accordion-icon=""
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5 5 1 1 5"
                />
              </svg>
              
            </button>
          </h2>
          <div id="accordion-arrow-icon-body-2" className={isOpen ? "" : "hidden"}>
            <p>I have only made one dropdown. Just to prove i can do it.Haha And sorry for bad UI</p>
          </div>

          <h2 id="accordion-arrow-icon-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-7 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-700 hover:bg-gray-100 gap-3"
              data-accordion-target="#accordion-arrow-icon-body-3"
              aria-expanded="false"
              aria-controls="accordion-arrow-icon-body-3"
            >
              <span>Something something mate</span>
              <svg
                data-accordion-icon=""
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div id="accordion-arrow-icon-body-3" className="hidden"></div>
          <h2 id="accordion-arrow-icon-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-7 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-700 hover:bg-gray-100 gap-3"
              data-accordion-target="#accordion-arrow-icon-body-3"
              aria-expanded="false"
              aria-controls="accordion-arrow-icon-body-3"
            >
              <span>Cras vitae, scelerisque tortor augue.</span>
              <svg
                data-accordion-icon=""
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div id="accordion-arrow-icon-body-3" className="hidden"></div>

          <h2 id="accordion-arrow-icon-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-7 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-700 hover:bg-gray-100 gap-3"
              data-accordion-target="#accordion-arrow-icon-body-3"
              aria-expanded="false"
              aria-controls="accordion-arrow-icon-body-3"
            >
              <span>Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.</span>
              <svg
                data-accordion-icon=""
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/    svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div id="accordion-arrow-icon-body-3" className="hidden"></div>

          
          <h2 id="accordion-arrow-icon-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-7 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-700 hover:bg-gray-100 gap-3"
              data-accordion-target="#accordion-arrow-icon-body-3"
              aria-expanded="false"
              aria-controls="accordion-arrow-icon-body-3"
            >
              <span>Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.</span>
              <svg
                data-accordion-icon=""
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/    svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div id="accordion-arrow-icon-body-3" className="hidden"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FifthBody;
