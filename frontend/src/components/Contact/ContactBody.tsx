import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ContactBody = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    getInTouch: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');

    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.getInTouch || !formData.message) {
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all fields',
        icon: 'error'
      });
      return; // Exit the function if any field is empty
    }



    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(formData.phone)) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please enter a valid phone number.',
        icon: 'error'
      });
      return;
    }

    try {
      const response = await fetch('https://taskdone-jxtp.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log(result);
      Swal.fire({
        title: 'Success',
        text: 'Contact message sent successfully',
        icon: 'success'
      });
    } catch (error) {
      console.log(error, 'Error fetching data');
      Swal.fire({
        title: 'Error',
        text: 'Failed to send contact message',
        icon: 'error'
      });
    }
  };

  return (
    <React.Fragment>
      <div className="bg-black text-white py-20">
        <div className="mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className="mx-auto max-w-lg">
            <form onSubmit={handleSubmit} action="">
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
                      />
                    </div>
                    <div className="w-full md:w-48%">
                      <label htmlFor="getInTouch" className="block mb-2 text-lg">Get in Touch With Us</label>
                      <select
                        id="getInTouch"
                        name="getInTouch"
                        value={formData.getInTouch}
                        onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
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
              <Link to='/contact/table'>
              <button
                  type="submit"
                  className="bg-white hover:bg-green-900 text-black font-semibold px-6  ml-40 mt-5  flex justify-center py-3 rounded-full"
                >
                  Go TO Table Page
                </button>
                </Link>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactBody;
