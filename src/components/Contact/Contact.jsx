import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';

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
        toast.success('Done');
        e.preventDefault();
        // For now, just open mail client with mailto link
        const mailtoLink = `mailto:${import.meta.env.VITE_GMAIL}?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message + '\\n\\nFrom: ' + formData.email)}`;
        window.location.href = mailtoLink;
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="relative overflow-hidden">
            <div className="px-4 py-12  relative z-10">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">
                    <span className="border-b-3 border-purple-600">Contact</span>
                </h2>
                <h3 className="text-gray-400 text-lg font-semibold text-center mb-8">Get in touch with me</h3>

                <div className="max-w-xl mx-auto px-4 sm:px-12 md:px-16">
                    {/* Contact Form */}
                    <div className="rounded-md border shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] bg-white dark:bg-[#0b1323] p-6 transition-transform duration-300">
                        <h4 className="text-xl text-center font-semibold mb-4 text-gray-800 dark:text-white">Connect With Me</h4>
                        <form onSubmit={handleSubmit} className="space-y-2">
                            <div className="flex md:flex-row flex-col gap-3">
                                <div className="w-full">
                                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors" placeholder="Your name" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors" placeholder="your.email@example.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-colors resize-none" placeholder="Your message here..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-violet-800 cursor-pointer to-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
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
