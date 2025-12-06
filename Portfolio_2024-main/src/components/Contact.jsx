import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        message: formData.message,
        to_name: 'Prajith',
        reply_to: formData.email,
      },
      PUBLIC_KEY
    ).then((result) => {
      console.log('Email successfully sent!', result.text);
      alert("Message Sent! I'll get back to you shortly.");
    }, (error) => {
      console.log('Failed to send the email, error:', error.text);
    });

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font-m">
          CONTACT
        </span>
      </h2>

      <div className="flex justify-center">
        <motion.form
          className="w-full max-w-lg bg-neutral-900 p-8 rounded-lg shadow-lg"
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: -20 }} // Animation on load
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
          transition={{ duration: 0.5 }} // Transition duration
        >
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105" // Added scaling on hover
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-center">
            <motion.button
              className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-pink-300 to-purple-500 px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
              type="submit"
              whileHover={{ scale: 1.05, rotate: 5 }} // Slight rotation and scaling on hover
            >
              <span className="text-lg">Send Message</span>
              <div
                className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
              >
                <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
