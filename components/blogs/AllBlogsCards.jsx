"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import img1 from "@/public/Images/blogs/2.jpg";
import img2 from "@/public/Images/blogs/3.jpg";
import img3 from "@/public/Images/blogs/4.jpg";
import img4 from "@/public/Images/blogs/5.jpg";
import img5 from "@/public/Images/blogs/6.webp";
import img6 from "@/public/Images/blogs/7.webp";
import img7 from "@/public/Images/blogs/8.png";
import img8 from "@/public/Images/blogs/9.jpg";
import img9 from "@/public/Images/blogs/10.jpg";
import img10 from "@/public/Images/blogs/11.jpg";
import img11 from "@/public/Images/blogs/12.jpg";
import img12 from "@/public/Images/blogs/13.jpg";
import img13 from "@/public/Images/blogs/14.jpg";
import img14 from "@/public/Images/blogs/15.jpg";
import img15 from "@/public/Images/blogs/16.jpg";
import img16 from "@/public/Images/blogs/17.jpg";
import img17 from "@/public/Images/blogs/18.jpg";
import { useRouter } from "next/navigation";

const blogs = [
  {
    id: 2,
    title: "The Science of Rasayana: Anti-Aging and Immunity Boosters in Ayurveda",
    excerpt:
      "Rasayana, one of the eight branches of Ayurveda, represents the essence of rejuvenation and longevity..",
    image: img1,
    slug: "the-science-of-rasayana-anti-aging-and-immunity-boosters-in-ayurveda",
  },
  {
    id: 3,
    title: "The Evolution of Ayurveda: From Ancient Texts to Modern Practices",
    excerpt:
      "Ayurveda, the ancient Indian system of medicine, has traveled through millennia, evolving from the profound...",
    image: img2,
    slug: "the-evolution-of-ayurveda-from-ancient-texts-to-modern-practices",
  },
  {
    id: 4,
    title: "Integrating Ayurveda with Modern Medicine: A Holistic Approach to Healing",
    excerpt:
      "In today’s fast-paced world, healthcare often leans heavily on modern medicine, with pharmaceutical drugs and...",
    image: img3,
    slug: "integrating-ayurveda-with-modern-medicine-a-holistic-approach-to-healing",
  },
  {
    id: 5,
    title: "Herbal Remedies in Ayurveda: The Power of Nature’s Pharmacy",
    excerpt:
      "For thousands of years, Ayurveda has been harnessing the healing power of nature’s most potent...",
    image: img4,
    slug: "herbal-remedies-in-ayurveda-the-power-of-natures-pharmacy",
  },
  {
    id: 6,
    title: "Ayurvedic Nutrition: Eating Right According to Your Dosha",
    excerpt:
      "In today’s world, where diet trends come and go, Ayurveda offers a timeless approach to...",
    image: img5,
    slug: "ayurvedic-nutrition-eating-right-according-to-your-dosha",
  },
  {
    id: 7,
    title: "Ayurveda for Skin Health: Ancient Remedies for a Modern Glow",
    excerpt:
      "In a world flooded with skincare products and beauty trends, it’s easy to forget that...",
    image: img6,
    slug: "ayurveda-for-skin-health-ancient-remedies-for-a-modern-glow",
  },
  {
    id: 8,
    title: "Top 8 Paradises Nestled in the Himalayas-Uttarakhand",
    excerpt:
      "Embark on a spiritual journey to Haridwar, one of the seven holiest Hindu cities. In...",
    image: img7,
    slug: "top-8-paradises-nestled-in-the-himalayas-uttarakhand",
  },
  {
    id: 9,
    title: "Top 10 tourist City in Uttarakhand",
    excerpt:
      "Nestled in the majestic lap of the Himalayas, Uttarakhand is a state unlike any other....",
    image: img8,
    slug: "top-10-tourist-city-in-uttarakhand",
  },
  {
    id: 10,
    title: "Top 10 tourist places in Thano",
    excerpt:
      "Unfortunately, due to limitations in publicly available information, it’s challenging to confirm the existence of...",
    image: img9,
    slug: "top-10-tourist-places-in-thano",
  },
  {
    id: 11,
    title: "Top 10 tourist places in Dehradun",
    excerpt:
      "Nestled in the picturesque foothills of the Himalayas, Dehradun is a city full of charm....",
    image: img10,
    slug: "top-10-tourist-places-in-dehradun",
  },
  {
    id: 12,
    title: "Top 10 tourist places in Rishikesh",
    excerpt:
      "Rishikesh, nestled in the serene embrace of the Himalayas along the sacred Ganges River, is...",
    image: img11,
    slug: "top-10-tourist-places-in-rishikesh",
  },
  {
    id: 13,
    title: "Top 10 tourist places in Haridwar",
    excerpt:
      "Nestled in the foothills of the Himalayas, Haridwar is a place where peace and spiritual...",
    image: img12,
    slug: "top-10-tourist-places-in-haridwar",
  },
  {
    id: 14,
    title: "Sulphhur Pond",
    excerpt:
      "Sulphur Pond in Dehradun, India is a man-made pond known for its therapeutic properties. The...",
    image: img13,
    slug: "sulphhur-pond",
  },
  {
    id: 15,
    title: "Neem Karoli Baba",
    excerpt:
      "Kainchi Dham is a spiritual retreat positioned in Uttarakhand. For many Hindus, this site is...",
    image: img14,
    slug: "neem-karoli-baba",
  },
  {
    id: 16,
    title: "Kalu siddh Baba",
    excerpt:
      "Located in Kaluwala village near Bhaniwala or Bhaniyawala, Kalu Siddh is a holy shrine dedicated...",
    image: img15,
    slug: "kalu-siddh-baba",
  },
  {
    id: 17,
    title: "Best Family-Friendly Resorts in Thano, Dehradun, Uttarakhand",
    excerpt:
      "Dehradun, in the beautiful Indian state of Uttarakhand, is a treasure trove of holiday spots...",
    image: img16,
    slug: "best-family-friendly-resorts-in-thano-dehradun-uttarakhand",
  },
  {
    id: 18,
    title: "Dehradun Tourist Places",
    excerpt:
      "Dehradun, the capital city of Uttarakhand in India, is nestled between the foothills of the...",
    image: img17,
    slug: "dehradun-tourist-places",
  },
];


const AllBlogsCards = () => {
  const route = useRouter()
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 md:px-12">
      <h1 className="text-3xl md:text-4xl font-bold  font-alegreya  italic text-center text-[#a17633] mb-10">
        Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ scale: 1.05 }}
            className="bg-[#fbf7f0] rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Blog Image */}
            <img
              src={blog.image.src}
              alt={blog.title}
              className="h-64 w-full object-cover"
            />

            {/* Blog Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-alegreya  italic font-semibold text-yellow-700/90 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm flex-1 line-clamp-2">{blog.excerpt}</p>

              <button
                type="button"   // 👈 isse reload nahi hoga
                onClick={() => route.push(`/blogs/${blog.slug}`)}
                style={{
                  animation: "blink 1s infinite",
                  WebkitAnimation: "blink 1s infinite",
                }}
                className="mt-4 w-[50%] mx-auto text-center flex border-yellow-700/90 rounded-md justify-center items-center gap-2 border py-2 px-4 text-yellow-700/90 font-medium"
              >
                Read More <FaLeaf className="text-yellow-700/90" />
                <style jsx>{`
    @keyframes blink {
      0%, 50%, 100% { opacity: 1; }
      25%, 75% { opacity: 0.5; }
    }
  `}</style>
              </button>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsCards;