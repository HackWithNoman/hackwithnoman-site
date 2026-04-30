"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-group", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (submitStatus === 'error') {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
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
    <section className="py-20" id="contact">
        <div className="mb-20 group select-none">
           <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl md:text-4xl font-black text-transparent [-webkit-text-stroke:1px_var(--color-border)] group-hover:[-webkit-text-stroke:1px_var(--color-accent)] transition-all duration-500 leading-none">
                05
              </span>
              <div className="h-[1px] w-12 bg-border group-hover:bg-accent/50 transition-all duration-500" />
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase leading-none">
             Connect
           </h2>
        </div>
      
      <div ref={containerRef} className="max-w-2xl">
        <AnimatePresence mode="wait">
          {submitStatus === 'success' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-accent/10 border border-accent/20 rounded-2xl px-6 py-4 mb-8 text-[0.875rem] text-accent font-bold flex items-center gap-3"
            >
              <CheckCircle2 size={18} />
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-error-bg border border-error-border rounded-2xl px-6 py-4 mb-8 text-[0.875rem] text-error-text font-bold flex items-center gap-3"
            >
              <AlertCircle size={18} />
              Failed to send message. Please try again.
            </motion.div>
          )}
        </AnimatePresence>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group flex flex-col gap-2">
              <label htmlFor="name" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-text-secondary ml-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-primary/30 border border-border rounded-xl focus:outline-none focus:border-accent focus:bg-transparent transition-all duration-300 text-sm placeholder:text-text-secondary/50"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="form-group flex flex-col gap-2">
              <label htmlFor="email" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-text-secondary ml-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-primary/30 border border-border rounded-xl focus:outline-none focus:border-accent focus:bg-transparent transition-all duration-300 text-sm placeholder:text-text-secondary/50"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="subject" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-text-secondary ml-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-primary/30 border border-border rounded-xl focus:outline-none focus:border-accent focus:bg-transparent transition-all duration-300 text-sm placeholder:text-text-secondary/50"
              placeholder="What's this about?"
              required
            />
          </div>
          
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="message" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-text-secondary ml-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-primary/30 border border-border rounded-xl focus:outline-none focus:border-accent focus:bg-transparent transition-all duration-300 text-sm placeholder:text-text-secondary/50 h-32 resize-none"
              placeholder="Your message..."
              required
            />
          </div>
          
          <div className="form-group pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative overflow-hidden flex items-center justify-center gap-3 w-full sm:w-auto border border-border rounded-full px-8 py-4 text-xs font-bold text-text-primary hover:text-white transition-colors duration-300 group/btn disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <Send size={15} className={`relative z-10 ${isSubmitting ? 'animate-pulse' : 'group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform duration-300'}`} />
              <span className="relative z-10 uppercase tracking-widest">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;