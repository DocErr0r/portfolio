import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just open mail client with mailto link
        const mailtoLink = `mailto:your-email@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message + '\\n\\nFrom: ' + formData.email)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="px-4 py-12 font-sans relative overflow-hidden">
            {/* Polygon background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-50 to-white dark:from-purple-900 dark:via-purple-800 dark:to-gray-900">
                <div className="absolute inset-0 opacity-10 dark:opacity-20">
                    <svg width="100%" height="100%" className="absolute inset-0">
                        <defs>
                            <pattern id="contact-polygon-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-300 dark:text-purple-600" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#contact-polygon-pattern)" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">
                    <span className="border-b-3 border-purple-600">Contact</span>
                </h2>
                <h3 className="text-gray-400 text-lg font-semibold text-center mb-8">Get in touch with me</h3>

                <div className="max-w-4xl mx-auto px-4 sm:px-12 md:px-16">
                    {/* Contact Form */}
                    <div className="rounded-2xl border shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] bg-white dark:bg-gray-800 p-6 transition-transform duration-300">
                        <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Send a Message</h4>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder="your.email@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white transition-colors resize-none" placeholder="Your message here..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                                <FaPaperPlane />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
