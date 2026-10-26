import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { profile } from '../data/profile';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-400 block mb-1">
            Connect
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Contact
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xl">
            Direct channels for software projects, collaboration, and professional inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-white/10">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 text-amber-400 flex items-center justify-center border border-white/5 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">Email</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profile.email, 'email')}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check size={15} className="text-emerald-400" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-white/10">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 text-amber-400 flex items-center justify-center border border-white/5 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">Phone</span>
                    <a
                      href={profile.phoneHref}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profile.phone, 'phone')}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="Copy phone"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <Check size={15} className="text-emerald-400" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 text-amber-400 flex items-center justify-center border border-white/5 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 block font-medium">Location</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Profiles */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-white/10 space-y-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block">
                Profiles
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/5 text-gray-300 hover:text-white border border-white/5 transition-colors text-xs font-medium"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                  <ExternalLink size={11} className="ml-auto text-gray-500" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/5 text-gray-300 hover:text-amber-400 border border-white/5 transition-colors text-xs font-medium"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                  <ExternalLink size={11} className="ml-auto text-gray-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 rounded-xl bg-[#12151c] border border-white/10">
              <h3 className="text-base font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-gray-400 mb-5">
                Draft an email inquiry directly to Amarwin Jasan.
              </p>

              {submitted ? (
                <div className="p-5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white">Draft Initialized</h4>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto">
                    Your email client has opened with your inquiry. You can also write directly to{' '}
                    <strong className="text-amber-400">{profile.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-300"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3 py-2 rounded-lg bg-[#090b0e] border border-white/10 focus:border-amber-400 focus:outline-none text-xs text-white placeholder-gray-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-[#090b0e] border border-white/10 focus:border-amber-400 focus:outline-none text-xs text-white placeholder-gray-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project inquiry / Opportunity"
                      className="w-full px-3 py-2 rounded-lg bg-[#090b0e] border border-white/10 focus:border-amber-400 focus:outline-none text-xs text-white placeholder-gray-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Message <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-3 py-2 rounded-lg bg-[#090b0e] border border-white/10 focus:border-amber-400 focus:outline-none text-xs text-white placeholder-gray-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send size={14} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
