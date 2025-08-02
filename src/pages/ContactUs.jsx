import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network delay
    setTimeout(() => {
      console.log('Form submitted:', form);
      alert('Thank you for contacting us!');
      setForm({ name: '', email: '', message: '' });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden p-8">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">📩 Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'email', 'message'].map((field, i) => (
            <div className="relative" key={i}>
              {field !== 'message' ? (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 pt-6 pb-2 text-gray-900 placeholder-transparent border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder={field}
                />
              ) : (
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="peer w-full px-4 pt-6 pb-2 text-gray-900 placeholder-transparent border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Message"
                />
              )}
              <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all capitalize">
                {field === 'message' ? 'Your Message' : field === 'name' ? 'Full Name' : 'Email Address'}
              </label>
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex justify-center items-center gap-3 text-lg transition ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
