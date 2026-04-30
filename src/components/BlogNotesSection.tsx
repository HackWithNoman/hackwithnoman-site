"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  { date: "May 20, 2024", title: "How to Build a React Component from Scratch" },
  { date: "Apr 15, 2024", title: "Understanding Tailwind CSS Utility Classes" },
  { date: "Mar 10, 2024", title: "A Guide to Modern JavaScript Patterns" },
];

const BlogNotesSection = () => {
  return (
    <section className="py-20" id="blog">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section Heading */}
        <div className="mb-20 group select-none">
           <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl md:text-4xl font-black text-transparent [-webkit-text-stroke:1px_var(--color-border)] group-hover:[-webkit-text-stroke:1px_var(--color-accent)] transition-all duration-500 leading-none">
                02
              </span>
              <div className="h-[1px] w-12 bg-border group-hover:bg-accent/50 transition-all duration-500" />
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase leading-none">
             Writing
           </h2>
        </div>

        {/* Blog List */}
        <div className="space-y-2">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-border hover:border-accent transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                <span className="text-[0.75rem] font-black text-text-secondary uppercase tracking-[0.15em] sm:w-32">
                  {post.date}
                </span>
                <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
              </div>

              <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-accent/5 text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <ArrowRight size={16} />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BlogNotesSection;
