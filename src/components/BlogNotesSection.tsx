import React from "react";

const blogPosts = [
  { date: "2024-05-20", title: "How to Build a React Component from Scratch" },
  { date: "2024-04-15", title: "Understanding Tailwind CSS Utility Classes" },
  { date: "2024-03-10", title: "A Guide to Modern JavaScript Patterns" },
];

const BlogNotesSection = () => {
  return (
    <section className="mb-12" id="blog">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <hr className="border-gray-200 mb-4" />
      <div className="space-y-0">
        {blogPosts.map((post) => (
          <div
            key={post.title}
            className="flex justify-between items-center py-3 border-b border-gray-200"
          >
            <span className="text-gray-500 text-sm w-24">{post.date}</span>
            <a
              href="#"
              className="text-blue-600 underline font-semibold flex-1 hover:opacity-80"
            >
              {post.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogNotesSection;
