"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
const blogs = [
  {
    id: 1,
    title: "Garden of Divine Elixir",
    excerpt:
      "Step into a sanctuary where every leaf whispers the secrets of ancient wisdom. Inspired by Lord Dhanvantri, this garden blends rare herbs, blossoms & sacred roots into the nectar of life.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
];

const AllBlogsCards = () => {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 md:px-12">
      <h1 className="text-3xl md:text-4xl font-bold  font-alegreya  italic text-center text-yellow-900/90 mb-10">
         Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />

            {/* Blog Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-alegreya  italic font-semibold text-yellow-700/90 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm flex-1">{blog.excerpt}</p>

              {/* Read More button (future me SingleBlog ke liye use hoga) */}
              <button
                className="mt-4  w-[50%] mx-auto text-center flex border-yellow-700/90 rounded-md justify-center items-center gap-2 border py-2 px-4 text-yellow-700/90 font-medium "
              >
                Read More <FaLeaf className="text-yellow-700/90" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsCards;
