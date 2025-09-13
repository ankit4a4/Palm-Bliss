"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/components/blogs/blogs.json";

export default function Page() {
  const params = useParams();
  const slug = params.slug;
  const blog = blogs.find((blog) => blog.slug === slug);
  const [searchTerm, setSearchTerm] = useState("");

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200">
        <div className="text-center p-8 bg-[#fbf7f0] rounded-xl shadow-xl">
          <h1 className="text-4xl font-bold text-amber-900 font-alegreya  italic">
            Blog Not Found
          </h1>
          <p className="text-gray-700 mt-3">
            The blog you’re looking for doesn’t exist.
          </p>
          <Link
            href="/"
            className="mt-5 inline-block px-6 py-2 bg-amber-600 text-[#f3e9cb] rounded-lg shadow-md hover:bg-amber-700 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = blogs
    .filter(
      (b) =>
        b.id !== blog.id &&
        b.categories.some((cat) => blog.categories.includes(cat))
    )
    .slice(0, 3);

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const renderContentWithHeadings = () => {
    if (!blog.content) return null;

    const paragraphs = blog.content.split("\n\n").filter((p) => p.trim());

    return paragraphs.map((paragraph, index) => {
      const matchingHeading = blog.headings && blog.headings[index];

      return (
        <div key={index} className="mb-8">
          {matchingHeading && (
            <h3 className="text-2xl font-bold font-alegreya  italic text-amber-700 mb-3 border-l-4 border-amber-500 pl-3">
              {matchingHeading}
            </h3>
          )}
          <p className="text-gray-800 leading-relaxed text-lg">{paragraph}</p>
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold font-alegreya  italic text-[#f3e9cb] drop-shadow-lg px-4">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Blog Content */}
          <div className="w-full lg:w-8/12">
            <div className="bg-[#fbf7f0] rounded-2xl shadow-lg p-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-72 object-cover rounded-xl mb-6 shadow-md"
              />

              {/* Meta Info */}
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-4">
                <span>✍️ By {blog.author}</span>
                <span>📅 {formatDate(blog.published_date)}</span>
                <span>⏱ {blog.read_time}</span>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-3 mb-8">
                {blog.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-400 to-amber-600 text-[#f3e9cb] shadow-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="prose max-w-none">
                {renderContentWithHeadings()}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap gap-3">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 bg-amber-100 border border-amber-400 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-200 transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-4/12 space-y-8">
            {/* Search */}
            <div className="bg-[#fbf7f0] rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-alegreya  italic font-bold text-amber-900 mb-4">
                🔍 Search Blogs
              </h3>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {searchTerm && (
                <div className="mt-5 space-y-3">
                  {filteredBlogs.length > 0 ? (
                    filteredBlogs.slice(0, 5).map((blog) => (
                      <Link
                        key={blog.id}
                        href={`/blog/${blog.slug}`}
                        className="block p-3 bg-amber-50 hover:bg-amber-100 rounded-lg transition shadow-sm"
                      >
                        <h5 className="font-semibold font-alegreya  italic text-amber-800">
                          {blog.title}
                        </h5>
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {blog.excerpt}
                        </p>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">
                      No blogs found matching your search.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Related */}
            <div className="bg-[#fbf7f0] rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold font-alegreya  italic text-amber-900 mb-5">
                📌 Related Blogs
              </h3>
              <div className="space-y-4">
                {relatedBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="flex gap-4 items-center group hover:bg-amber-50 rounded-lg p-2 transition"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded-lg shadow-sm group-hover:scale-105 transition"
                    />
                    <div>
                      <h4 className="font-medium font-alegreya  italic text-amber-800 group-hover:text-amber-600">
                        {blog.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {formatDate(blog.published_date)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent */}
            <div className="bg-[#fbf7f0] rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold font-alegreya  italic text-amber-900 mb-5">
                📰 Recent Blogs
              </h3>
              <div className="space-y-4">
                {blogs.slice(0, 3).map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="flex gap-4 items-center group hover:bg-amber-50 rounded-lg p-2 transition"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded-lg shadow-sm group-hover:scale-105 transition"
                    />
                    <div>
                      <h4 className="font-medium font-alegreya  italic text-amber-800 group-hover:text-amber-600">
                        {blog.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {formatDate(blog.published_date)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
