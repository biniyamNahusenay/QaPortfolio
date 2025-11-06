// app/contact/page.tsx
'use client'; // This directive makes the component a Client Component

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null); // Use formRef consistent with your old code
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Your EmailJS credentials (extracted from your previous portfolio)
  const serviceId = 'service_d9n8u1i';
  const templateId = 'template_ns7j5bt';
  const publicKey = 'ZOkyBnmZpGtjTzQiQ'; // Renamed to publicKey for clarity with EmailJS

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage(''); // Clear previous messages

    if (!formRef.current) {
        setLoading(false);
        setAlertMessage('Form reference is not available.');
        setIsSuccess(false);
        return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: 'Biniyam Nahusenay', // Your name, as the recipient
          from_email: form.email,
          to_email: 'bininahu12@gmail.com', // Your target email
          message: form.message,
        },
        publicKey
      );

      setLoading(false);
      setIsSuccess(true);
      setAlertMessage('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);
      setIsSuccess(false);
      setAlertMessage('Ahh, something went wrong. Please try again.');
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Information Section */}
        <section className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, and discussions about software
            quality and automation. Feel free to reach out through the form or connect with me via
            the links below!
          </p>

          <div className="space-y-4">
            <div className="flex items-center text-lg text-gray-800">
              <FaEnvelope className="text-blue-500 mr-3 text-xl" />
              <a href="mailto:bininahu12@gmail.com" className="hover:underline text-blue-600">
                bininahu12@gmail.com
              </a>
            </div>
            <div className="flex items-center text-lg text-gray-800">
              <FaPhone className="text-blue-500 mr-3 text-xl" />
              <a href="tel:+251989290516" className="hover:underline text-blue-600">
                +251 989290516
              </a>
            </div>
            <div className="flex items-center text-lg text-gray-800">
              <FaMapMarkerAlt className="text-blue-500 mr-3 text-xl" />
              Addis Ababa, Ethiopia
            </div>
          </div>

          <div className="mt-8 flex space-x-6">
            <Link
              href="https://www.linkedin.com/in/biniyam-nahusenay-076967298"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-4xl" />
            </Link>
            <Link
              href="https://github.com/biniyamNahusenay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-4xl" />
            </Link>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Send Me a Message</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name" // Matches form.name
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                placeholder="What's your good name?"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email" // Matches form.email
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message" // Matches form.message
                rows={7}
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {alertMessage && (
              <p className={`mt-4 text-center ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                {alertMessage}
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}