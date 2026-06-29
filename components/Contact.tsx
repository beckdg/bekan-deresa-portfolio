
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:bekanderesa27@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold text-center mb-4 text-[#ccd6f6] flex items-center justify-center gap-4">
        <span className="text-[#64ffda] font-mono">05.</span> Get In Touch
      </h2>
      <p className="text-[#8892b0] mb-12 max-w-xl mx-auto">
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8">
        <div className="floating-label-group">
          <input
            type="text"
            id="name"
            name="name"
            className="floating-input w-full p-4 bg-[#112240] text-[#ccd6f6] border-2 border-[#233554] rounded-md focus:outline-none focus:border-[#64ffda] transition-colors duration-300"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="floating-label">Name</label>
        </div>
        <div className="floating-label-group">
          <input
            type="email"
            id="email"
            name="email"
            className="floating-input w-full p-4 bg-[#112240] text-[#ccd6f6] border-2 border-[#233554] rounded-md focus:outline-none focus:border-[#64ffda] transition-colors duration-300"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="floating-label">Email</label>
        </div>
        <div className="floating-label-group">
          <textarea
            id="message"
            name="message"
            rows={5}
            className="floating-input w-full p-4 bg-[#112240] text-[#ccd6f6] border-2 border-[#233554] rounded-md focus:outline-none focus:border-[#64ffda] transition-colors duration-300 resize-none"
            placeholder=" "
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label htmlFor="message" className="floating-label">Message</label>
        </div>
        <button
          type="submit"
          className="px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded-md font-medium transition-all duration-300 hover:bg-[#64ffda] hover:bg-opacity-10 w-full sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
