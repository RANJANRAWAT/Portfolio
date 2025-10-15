'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'ranjanrawat7979@gmail.com',
      link: 'mailto:ranjanrawat7979@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 7979783190',
      link: 'tel:+917979783190',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Gurgoan, India',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: '🐙',
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: '💼',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: '🐦',
      color: 'from-sky-400 to-sky-600'
    },
    {
      name: 'Email',
      url: 'mailto:ranjan@example.com',
      icon: '📧',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-32 bg-[#0B1220] min-h-[700px] md:min-h-[800px]">
      {/* Decorative background rings */}
      <div className="pointer-events-none absolute inset-0" style={{height:"110%"}}>
        {/* Rings (match Projects.tsx vibe) */}
        <div className="absolute -left-16 top-1/3 h-72 w-72 rounded-full border border-teal-500/10 [mask-image:radial-gradient(closest-side,white,transparent)]"></div>
        <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full border border-cyan-500/10 [mask-image:radial-gradient(closest-side,white,transparent)]"></div>

        {/* Subtle gradient blobs */}
        <div className="absolute inset-0 blur-3xl opacity-30">
          <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-cyan-500/30"></div>
          <div className="absolute bottom-16 right-1/4 w-72 h-72 rounded-full bg-indigo-500/25"></div>
          <div className="absolute top-1/2 left-10 w-56 h-56 rounded-full bg-blue-500/20"></div>
        </div>

        {/* Starfield grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0'
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`relative z-20 text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{padding: 16}}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              GET IN <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">TOUCH</span>
            </h2>
            <div className="flex items-center justify-center">
              <p className="text-lg text-slate-300 p-6 max-w-3xl text-center">
                Have a project in mind? Lets work together to bring your ideas to life.
              </p>
            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} >
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8" style={{marginLeft:"6%"}}>
                Lets <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Connect</span>
              </h3>

              <div className="space-y-6 mb-12" style={{marginLeft:"0%", padding: 16}}>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-indigo-500/30 blur-xl z-0"></div>
                    <div className="relative z-10 w-full rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-6 flex items-center gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-2xl`}>{info.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{info.title}</h4>
                        <p className="text-slate-300 text-lg">{info.value}</p>
                      </div>
                      <div className="ml-auto text-slate-400 group-hover:text-cyan-400 transition-colors">
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Follow <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Me</span></h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-16 h-16 bg-gradient-to-r ${social.color} text-white rounded-2xl flex items-center justify-center text-2xl hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${800 + index * 100}ms` }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative rounded-2xl">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-indigo-500/30 blur-xl z-0"></div>
                <div className="relative z-10 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-800/60 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-800/60 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-200 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-800/60 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-800/60 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner w-6 h-6"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
