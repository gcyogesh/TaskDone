import React from 'react'

const FirstBody: React.FC = () => {
  return (
    <React.Fragment>
      <div className=" mx-auto  p-7  bg-gray-100">
        <p className=' text-blue-800  text-center  relative top-6  mt-7 '>1% of the Industry</p>
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-5xl font-semibold text-black  m-9">
              Hype got you here. <br />
              Stay for the support.
            </h2>
            <p>We’ve been told it is possible to revolutionize the payment industry. We <br /> have not reinvented the wheel, we decided to build upon it - successfully.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FirstBody