import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    requirement: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^\\S+@\\S+\\.\\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
    if (!formData.requirement.trim()) newErrors.requirement = 'Please tell us about your requirement.';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Clean, front-end only simulated submission
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        requirement: ''
      });
      setErrors({});
    }
  };

  return (
    <section id="contact-form" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-100">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-5 flex flex-col items-start animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                Send an Enquiry
              </span>
            </div>
            
            <h2 className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
              Tell Us About Your Requirement
            </h2>
            
            <p className="text-[17px] md:text-[19px] text-gray-600 leading-relaxed font-medium mb-12">
              Share your requirement with Xenex Fiber Works and our team can understand your enquiry and the fiberglass products or applications you are looking for.
            </p>

            <div className="mt-4 pt-8 border-t border-gray-200 hidden lg:block">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase text-gray-400">
                Professional &bull; Reliable
              </span>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="lg:col-span-7 w-full flex flex-col pt-4 lg:pt-0 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            
            {isSubmitted ? (
              <div className="bg-[#F6F7F9] border border-gray-200 p-12 lg:p-16 text-center animate-fade-in-up rounded-sm flex flex-col items-center justify-center min-h-[400px]">
                <svg className="w-14 h-14 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-[26px] md:text-[30px] font-semibold text-gray-900 mb-4">
                  Thank you.
                </h3>
                <p className="text-[17px] md:text-[19px] text-gray-600 font-medium">
                  Your enquiry has been received.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col gap-8 lg:gap-10">
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                  {/* Full Name */}
                  <div className="flex flex-col gap-3">
                    <label htmlFor="fullName" className="text-[12px] font-bold tracking-[0.1em] uppercase text-gray-500">
                      01 &mdash; Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={`w-full px-5 py-4 bg-[#F9FAFB] border ${errors.fullName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-gray-900 focus:ring-gray-900/10'} text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 rounded-sm transition-all duration-300 text-[16px] font-medium`}
                    />
                    {errors.fullName && <span id="fullName-error" className="text-red-500 text-[13px] font-medium">{errors.fullName}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-[12px] font-bold tracking-[0.1em] uppercase text-gray-500">
                      02 &mdash; Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-5 py-4 bg-[#F9FAFB] border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-gray-900 focus:ring-gray-900/10'} text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 rounded-sm transition-all duration-300 text-[16px] font-medium`}
                    />
                    {errors.email && <span id="email-error" className="text-red-500 text-[13px] font-medium">{errors.email}</span>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                  {/* Phone Number */}
                  <div className="flex flex-col gap-3">
                    <label htmlFor="phone" className="text-[12px] font-bold tracking-[0.1em] uppercase text-gray-500">
                      03 &mdash; Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`w-full px-5 py-4 bg-[#F9FAFB] border ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-gray-900 focus:ring-gray-900/10'} text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 rounded-sm transition-all duration-300 text-[16px] font-medium`}
                    />
                    {errors.phone && <span id="phone-error" className="text-red-500 text-[13px] font-medium">{errors.phone}</span>}
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-3">
                    <label htmlFor="company" className="text-[12px] font-bold tracking-[0.1em] uppercase text-gray-500">
                      04 &mdash; Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      className="w-full px-5 py-4 bg-[#F9FAFB] border border-gray-200 focus:border-gray-900 focus:ring-gray-900/10 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 rounded-sm transition-all duration-300 text-[16px] font-medium"
                    />
                  </div>
                </div>

                {/* Requirement */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="requirement" className="text-[12px] font-bold tracking-[0.1em] uppercase text-gray-500">
                    05 &mdash; Requirement *
                  </label>
                  <textarea
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="Tell us about your requirement"
                    required
                    rows={5}
                    aria-invalid={!!errors.requirement}
                    aria-describedby={errors.requirement ? "requirement-error" : undefined}
                    className={`w-full px-5 py-4 bg-[#F9FAFB] border ${errors.requirement ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-gray-900 focus:ring-gray-900/10'} text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 rounded-sm transition-all duration-300 text-[16px] font-medium resize-y min-h-[140px]`}
                  />
                  {errors.requirement && <span id="requirement-error" className="text-red-500 text-[13px] font-medium">{errors.requirement}</span>}
                </div>

                {/* Submit */}
                <div className="mt-4">
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-12 py-5 bg-gray-900 text-white text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-900/30 transition-all duration-300 rounded-sm cursor-pointer"
                  >
                    Send Enquiry
                  </button>
                </div>
                
              </form>
            )}

          </div>

        </div>
      </div>

      {/* Lightweight CSS animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />
    </section>
  );
}
