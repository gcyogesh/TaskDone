import React from 'react';

const ContactBody = () => {
  return (
    <React.Fragment>
      <div className="bg-black text-white py-20">
        <div className="mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className="mx-auto max-w-lg">
            <form action="">
              <div className="mb-6 flex flex-wrap justify-between">
                <div className="w-full md:w-48%">
                  <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-48%">
                      <label htmlFor="nameInput" className="block mb-2 text-lg">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="nameInput"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
                      />
                    </div>
                    <div className="w-full md:w-48%">
                      <label htmlFor="emailInput" className="block mb-2 text-lg">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        id="emailInput"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6 flex flex-wrap justify-between">
                <div className="w-full md:w-48%">
                  <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-48%">
                      <label htmlFor="phone" className="block mb-2 text-lg">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="+000"
                        className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
                      />
                    </div>
                    <div className="w-full md:w-48%">
                      <label htmlFor="getInTouch" className="block mb-2 text-lg">Get in Touch With Us</label>
                      <select
                        id="getInTouch"
                        name="getInTouch"
                        className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
                      >
                        <option value="">Select Option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="messageInput" className="block mb-2 text-lg">Message</label>
                <textarea
                  name="message"
                  id="messageInput"
                  rows={8}
                  placeholder="Hi! We are lookscout..?"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
                ></textarea>
              </div>
              <div className="mb-6">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                  />
                  <span className="ml-2 text-lg">I agree to the terms and conditions</span>
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-full"
                >
                  Submit  
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactBody;
