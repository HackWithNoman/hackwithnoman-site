import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error status when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send this data to your backend
      console.log("Form submitted:", formData);
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mb-12" id="contact">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <hr className="border-border mb-6" />
      
      {submitStatus === 'success' && (
        <div className="bg-success-bg border border-success-border rounded-lg px-4 py-3 mb-6 text-[0.875rem] text-success-text flex items-center gap-2">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-error-bg border border-error-border rounded-lg px-4 py-3 mb-6 text-[0.875rem] text-error-text flex items-center gap-2">
          Failed to send message. Please try again.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-text-primary">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200"
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-text-primary">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block mb-1 text-sm font-medium text-text-primary">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200"
            placeholder="What's this about?"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium text-text-primary">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 h-32 resize-y"
            placeholder="Your message..."
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
      

    </section>
  );
};

export default ContactSection;