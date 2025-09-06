"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/components/blogs/blogs.json"; // Aapka blog data

export default function page() {
  const params = useParams();
  const slug = params.slug;
  const blog = blogs.find((blog) => blog.slug === slug);
  const [searchTerm, setSearchTerm] = useState("");

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Blog Not Found</h1>
          <p className="text-gray-600 mt-2">
            The blog you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Filter related blogs based on categories
  const relatedBlogs = blogs
    .filter(
      (b) =>
        b.id !== blog.id &&
        b.categories.some((cat) => blog.categories.includes(cat))
    )
    .slice(0, 3);

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Blog Content */}
          <div className="w-full lg:w-8/12">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full  object-cover rounded-lg mb-6"
              />

              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                <span className="mr-4 font-medium">By {blog.author}</span>
                <span className="mr-4">{formatDate(blog.published_date)}</span>
                <span>{blog.read_time}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {blog.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <div className="prose max-w-none text-gray-800 leading-relaxed">
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.content.replace(/\n/g, "<br/>"),
                  }}
                />
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 text-gray-800 text-sm font-medium rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Sidebar */}
          <div className="w-full lg:w-4/12">
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Search Blogs
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Search Results */}
              {searchTerm && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Search Results
                  </h4>
                  <div className="space-y-3">
                    {filteredBlogs.slice(0, 5).map((blog) => (
                      <Link
                        key={blog.id}
                        href={`/blog/${blog.slug}`}
                        className="block p-3 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <h5 className="font-medium text-gray-900">
                          {blog.title}
                        </h5>
                        <p className="text-sm text-gray-600 truncate">
                          {blog.excerpt}
                        </p>
                      </Link>
                    ))}
                    {filteredBlogs.length === 0 && (
                      <p className="text-gray-600 text-sm">
                        No blogs found matching your search.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Related Blogs */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Related Blogs
              </h3>
              <div className="space-y-4">
                {relatedBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="flex gap-3 group"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {formatDate(blog.published_date)}
                      </p>
                    </div>
                  </Link>
                ))}
                {relatedBlogs.length === 0 && (
                  <p className="text-gray-600 text-sm">
                    No related blogs found.
                  </p>
                )}
              </div>
            </div>

            {/* Recent Blogs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Recent Blogs
              </h3>
              <div className="space-y-4">
                {blogs.slice(0, 3).map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="flex gap-3 group"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-gray-600">
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
