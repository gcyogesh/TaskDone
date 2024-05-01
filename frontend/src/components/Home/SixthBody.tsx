import React from 'react'
import { faGoogle, faPaypal, faPinterest, faMailchimp, faSlack, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SixthBody = () => {
    return (
        <React.Fragment>
            <div className=" mx-auto px-4 mt-9  bg-blue-600">
                <p className=' text-white  text-center  relative top-6   '>1% of the company</p>
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className="text-3xl font-semibold text-white  m-9">Welcome To your new digital reality that which will rock your world truelly at all</h2>
                        <div className="flex items-center justify-center space-x-4">
                            <a href="#" className="py-2 px-3 bg-white hover:bg-yellow-300 text-blue-800 hover:text-yellow-800 rounded transition duration-300">
                                Sign Up
                            </a>
                            <a href="#" className="py-2 px-3 bg-blue-400 hover:bg-yellow-300 text-white hover:text-yellow-800 rounded transition duration-300">
                                Login
                            </a>
                        </div>

                    </div>
                </div>
                <hr />
                <div>
  <ul className="text-white flex flex-wrap justify-center gap-14 p-7 font-bold">
    <li className="flex items-center mx-4 my-2">
      <FontAwesomeIcon icon={faTwitch} className="mr-2" />
      <h1>Twilio</h1>        {/* i am not able to get logo for Twillo  */}
    </li>
    <li className="flex items-center mx-4 my-2">
      <FontAwesomeIcon icon={faSlack} className="mr-2" />
      <h1>Slack</h1>
    </li>
    <li className="flex items-center mx-4 my-2">
      <FontAwesomeIcon icon={faGoogle} className="mr-2" />
      <h1>Google</h1>
    </li>
    <li className="flex items-center mx-4 my-2">
      <FontAwesomeIcon icon={faPaypal} className="mr-2" />
      <h1>Paypal</h1>
    </li>
    <li className="flex items-center mx-4 my-2">
      <FontAwesomeIcon icon={faPinterest} className="mr-2" />
      <h1>Pinterest</h1>
    </li>
    <li className="flex items-center mx-4 my-2">
      <FontAwesomeIcon icon={faMailchimp} className="mr-2" />
      <h1>MailChimp</h1>
    </li>
  </ul>
</div>

            </div>
        </React.Fragment>
    )
}

export default SixthBody