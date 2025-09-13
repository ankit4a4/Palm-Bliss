"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Car, Coffee, Tv, Wind, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Import your images here
import mud1 from "@/public/Images/AllPhotos/mud-house.webp";
import mud2 from "@/public/Images/mudHouse/1.jpg";
import mud3 from "@/public/Images/mudHouse/2.jpg";
import mud4 from "@/public/Images/mudHouse/3.jpg";
import mud5 from "@/public/Images/mudHouse/4.jpg";
import mud6 from "@/public/Images/mudHouse/5.jpg";
import mud7 from "@/public/Images/mudHouse/6.jpg";
import garden1 from "@/public/Images/AllPhotos/gardenView.webp";
import garden2 from "@/public/Images/AllPhotos/DSC06399.webp";
import swiss1 from "@/public/Images/swissRooms/1.jpg";
import swiss2 from "@/public/Images/swissRooms/2.jpg";
import swiss3 from "@/public/Images/AllPhotos/swiss.webp";
import luxury1 from "@/public/Images/luxeryRooms/1.webp";
import luxury2 from "@/public/Images/luxeryRooms/2.webp";
import luxury3 from "@/public/Images/luxeryRooms/3.webp";
import luxury4 from "@/public/Images/luxeryRooms/4.webp";
import family1 from "@/public/Images/familyRoom/3.webp";
import family2 from "@/public/Images/familyRoom/5.webp";
import family3 from "@/public/Images/familyRoom/4.webp";
import family4 from "@/public/Images/familyRoom/2.webp";
import family5 from "@/public/Images/familyRoom/1.webp";

const ALL_ROOMS = [
  {
    id: 2,
    title: "Mud Houses",
    description:
      "Experience rustic charm in our traditional mud house, featuring a separate living area and ample space.",
    price: "₹6,999",
    capacity: "2 Adults",
    amenities: ["Living Room", "Garden View", "Dining Area"],
    images: [mud3, mud2, mud1, mud4, mud5, mud6, mud7],
    features: [Wifi, Car, Coffee, Tv, Wind, Users],
    detailedContent: {
      title: "Embrace Earth, Embrace Peace",
      description:
        "Step into our handcrafted mud houses, where tradition meets comfort. Built with natural materials that breathe with you, these earthy sanctuaries remain cool in summer and warm in winter, connecting you deeply to nature's rhythm. The soft scent of clay, gentle textures and calming silence create a cocoon of peace, letting you slow down, sleep deeply and wake to birdsong and fresh air.\n\nHere, you don't just stay—you return to the earth, to yourself.",
      poetry:
        "Within these walls of living clay,\nSoft winds sing and petals sway.\nSunlight dances on earthen hues,\nCradling dreams in morning dews.\n\nCool as dawn, warm as dusk,\nBreathing earth in every musk.\nA nest where silence softly weaves,\nStories of rain and rustling leaves.\n\nHere, time unfolds like jasmine bloom,\nStars pour light into your room.\nBarefoot heart upon soft sod,\nYou touch the earth, you touch God.\n\nIn these quiet mud homes you'll find,\nA gentle stillness for your mind—\nA hush that heals, a breath so deep,\nHere, the earth will rock you to sleep.",
      subtitle: "Earthen Sanctuaries, Whispering Calm",
    },
  },
  {
    id: 4,
    title: "Swiss Cottages",
    description:
      "Relax in our luxurious Swiss cottages, where you'll find a comfortable bed, exclusive experiences and all modern amenities.",
    price: "₹5,999",
    capacity: "2 Adults",
    amenities: ["Yoga Mat", "Meditation Corner", "Tv", "Sound System"],
    images: [swiss1, swiss2],
    features: [Wifi, Car, Coffee, Tv, Wind, Users],
    detailedContent: {
      title: "Swiss Cottage at Palm Bliss Resort",
      description:
        "Discover the timeless elegance of our Swiss Cottage, where Alpine warmth meets tropical tranquility. Crafted with rich wooden interiors and vaulted ceilings, each cottage welcomes you with a sense of serene comfort and understated luxury. Sunlight streams through large windows, illuminating handcrafted furniture and creating a warm, inviting glow throughout the space.\n\nStep onto your private balcony, where the gentle rustle of palms and songs of birds create a natural symphony, perfect for a quiet sunrise tea or an evening under the stars. Inside, a plush king-sized bed with soft linens awaits, complemented by cozy seating nooks ideal for reading or reflection. Thoughtfully curated details—woven rugs, soft lighting and earthy textures—bring the soulof the Swiss Alps to the heart of your island retreat.\n\n Your en-suite bathroom offers a spa-like experience with a rain shower, premium amenities and calming design, allowing you to refresh and rejuvenate in privacy.\n\nWhether you are seeking a romantic escape, a slow morning with nature, \n\nTucked amidst whispering palms and fragrant breezes, our Swiss Cottage invites you into a world where alpine warmth meets tropical calm. Crafted with sloping wooden ceilings and sun-kissed windows, each cottage feels like a comforting embrace, welcoming you to slow down and simply be. \n\nWake to soft light filtering through linen drapes as birdsong gently calls you into the day. Step onto your private balcony, where the rustle of leaves and distant mountain whispers create the perfect setting for your morning tea. Inside, the room blends rustic charm with gentle elegance—a plush king-sized bed dressed in crisp linens, handcrafted furniture and cozy corners designed for quiet reflection or a good book.",
      poetry:
        "Whispers of wood and morning light,\nPalms sway softly, hearts feel right.\nA quiet nest where dreams take flight,\nIn cottage calm, the soul grows bright.",
    },
  },
  {
    id: 6,
    title: "Family Suite",
    description:
      "Perfect for families with connecting rooms and child-friendly amenities.",
    price: "₹7,999",
    capacity: "2 Adults + 2 Children",
    amenities: [
      "Connecting Rooms",
      "Play Area",
      "Child Safety",
      "Family Dining",
    ],
    images: [family1, family2, family3, family4, family5],
    features: [Wifi, Car, Coffee, Tv, Wind, Users],
    detailedContent: {
      title: "Family Room – Twin Comfort, Triple Joy at Palm Bliss Resort",
      description:
        "Perfect for families seeking space and serenity,\nour Family Room offers two interconnected rooms with a total of three comfortable beds, ideal for a relaxed and harmonious stay.\n\nSurrounded by the calming greenery of the resort, this setup ensures both privacy and togetherness — a balance every family appreciates.Whether you're traveling with kids, parents, or close companions, there’s room for everyone to unwind, laugh and make memories.\n\nDesigned for bonding, built for comfort.Our Family Room is a spacious haven nestled in nature — where every corner invites laughter, warmth and connection.\nEnjoy plush bedding, cozy interiors and soothing natural tones that reflect the calm of the surrounding forest.\nLarge windows welcome fresh mountain air and serene views, while thoughtful amenities ensure every family member feels at home.\n\nWhether you're sharing stories over tea or waking up to birdsong together, the Family Room is your perfect retreat to reconnect, relax and rejoice — all under one roof.\n\nThoughtful interiors, natural light and modern amenities complete your stay — where every moment feels like home, just more peaceful with great pahadi touch.",
      // features: [
      //   // "Spacious connecting rooms for privacy and togetherness",
      //   // "Child-safe furniture and fittings throughout",
      //   // "Dedicated play area with safe, engaging activities",
      //   // "Family dining space with comfortable seating",
      //   // "Modern amenities including Wi-Fi and entertainment systems",
      //   // "Childproofed electrical outlets and corners",
      //   // "Extra storage space for family belongings",
      //   // "Easy access to resort facilities and activities",
      // ],
    },
  },
  {
    id: 8,
    title: "Luxury Room",
    description:
      "Finest comfort with breathtaking mountain views, modern interiors and exquisite service.",
    price: "₹8,999",
    capacity: "2 Adults",
    amenities: ["Mountain View", "Balcony", "King Bed", "Sitting Area"],
    images: [luxury1, luxury2, luxury3, luxury4],
    features: [Wifi, Car, Coffee, Tv, Wind, Users],
    detailedContent: {
      title: "Luxury Room at Palm Bliss - Where Comfort Meets Sophistication",
      description:
        "Step into a world of refined elegance with our Luxury Rooms at Palm Bliss. Thoughtfully designed for discerning travelers, each room is a blend of contemporary style and serene comfort. Large windows invite natural light and open up to lush green views, while interiors are crafted with soothing tones and premium furnishings.\n\nUnwind on a plush bed, enjoy modern amenities like smart TVs and high-speed Wi-Fi and rejuvenate in a spacious en-suite bathroom with herbal toiletries. Whether you're here for a wellness retreat or a relaxing escape, the Luxury Room offers a perfect balance of privacy, calm and understated opulence.",
      keyFeatures: [
        "King-size bed with premium bedding",
        "Windows with garden or forest views",
        "Elegant décor with warm earthy tones",
        "Spacious bathroom with rain shower and organic amenities",
        "In-room herbal tea & coffee setup",
        "Air conditioning and smart climate control",
        "Complimentary high-speed Wi-Fi",
      ],
      closing: "Let tranquility and luxury become your everyday at Palm Bliss.",
      surrounding:
        "Step into the emerald hush where sunbeams dance through ancient trees,\nEach breath alive with the scent of earth and wild lemongrass,\nBirdsong guides your path as leaves whisper their forest secrets,\nAnd every step draws you deeper into the gentle, green embrace of the jungle.\n✨",
    },
  },
];

// Auto-sliding room image slider for main grid cards & modal
function RoomImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const nextImage = () => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="relative w-full h-[32rem] bg-gray-100 rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt="Room image"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
        </motion.div>
      </AnimatePresence>
      <button
        aria-label="Previous Image"
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#fbf7f0] bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
      >
        &#8678;
      </button>
      <button
        aria-label="Next Image"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#fbf7f0] bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
      >
        &#8680;
      </button>
    </div>
  );
}

function RoomDetailModal({ room, open, onClose }) {
  if (!open || !room) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 md:px-2">
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 100 }}
        className="bg-[#fbf7f0] shadow-2xl rounded-2xl w-full md:w-[80vw] lg:w-[60vw] max-w-4xl md:max-w-4xl p-0 overflow-hidden relative flex flex-col"
        style={{ maxHeight: "90vh" }}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 text-2xl font-bold z-10"
          aria-label="Close Room Modal"
        >
          ×
        </button>
        <div className="w-full">
          <RoomImageSlider images={room.images} />
        </div>
        <div className="p-6 overflow-y-auto">
          <h3 className="text-2xl font-bold font-playfair text-[#A67A35] mb-2">
            {room.title}
          </h3>
          <div className="mb-1">
            <Badge className="bg-[#A67A35] text-black font-semibold">
              {room.price}/night
            </Badge>
          </div>
          <p className="text-gray-600 mb-4">{room.description}</p>
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-[#A67A35]" />
            <span className="text-base">{room.capacity}</span>
          </div>
          <div className="mb-2">
            <h4 className="font-semibold mb-1">Amenities</h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((am, i) => (
                <Badge key={i} variant="outline">
                  {am}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            {room.features.slice(0, 5).map((Feature, i) => (
              <Feature key={i} className="h-5 w-5 text-[#A67A35]" />
            ))}
          </div>
          <div className="mt-6">
            <Button
              className="w-full bg-[#A67A35] hover:bg-[#8c672d] text-black font-semibold"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function RoomDetailedModal({ room, open, onClose }) {
  if (!open || !room) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
      <div className="min-h-screen flex items-start justify-center p-4">
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 100 }}
          className="bg-[#fbf7f0] shadow-2xl rounded-2xl w-full md:w-[85vw] lg:w-[70vw] max-w-5xl relative my-8"
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-gray-400 text-3xl font-bold z-10 hover:text-gray-600"
            aria-label="Close Detailed Modal"
          >
            ×
          </button>

          <div className="w-full">
            <RoomImageSlider images={room.images} />
          </div>

          <div className="p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-playfair text-[#A67A35] mb-6">
                {room.detailedContent.title}
              </h2>

              {room.detailedContent.subtitle && (
                <h3 className="text-xl text-center text-[#A67A35] mb-6 font-medium">
                  {room.detailedContent.subtitle}
                </h3>
              )}

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                  {room.detailedContent.description}
                </p>
              </div>

              {room.detailedContent.keyFeatures && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {room.detailedContent.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#A67A35] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {room.detailedContent.features && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Features:
                  </h4>
                  <ul className="space-y-2">
                    {room.detailedContent.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#A67A35] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {room.detailedContent.closing && (
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed italic text-center text-lg">
                    {room.detailedContent.closing}
                  </p>
                </div>
              )}

              {room.detailedContent.poetry && (
                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                  <pre className="text-gray-600 italic text-center leading-relaxed whitespace-pre-line font-serif">
                    {room.detailedContent.poetry}
                  </pre>
                </div>
              )}

              {room.detailedContent.surrounding && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Surrounding:
                  </h4>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-gray-700 italic whitespace-pre-line leading-relaxed">
                      {room.detailedContent.surrounding}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                <Button
                  className="flex-1 bg-[#A67A35] hover:bg-[#8c672d] text-black font-semibold"
                  onClick={() => {
                    // Handle booking logic
                  }}
                >
                  Book Now - {room.price}/night
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-[#A67A35] text-[#A67A35] hover:bg-[#A67A35] hover:text-[#f3e9cb]"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function RoomsSection() {
  const [openIdx, setOpenIdx] = useState(null);
  const [detailedOpenIdx, setDetailedOpenIdx] = useState(null);

  return (
    <section className="bg-[#FBF7F0] py-[3vh] md:py-[12vh] px-3 md:px-[4vw]">
      <div className="text-center space-y-[5vh] mx-auto mb-12">
        <h2 className="text-[6vw] md:text-[2.8vw] font-alegreya  italic capitalize text-yellow-700/90  font-semibold  leading-tight">
          Stay In <span>Harmony & Comfort</span>
        </h2>
        <div className="font-alegreya italic md:text-[1.2vw]">
          <p className="text-[2vh] md:text-[1.5vw] text-gray-700 leading-relaxed mx-auto">
            Our rooms are more than a place to rest —
          </p>
          <p >they're sanctuaries for deep sleep</p>
          <p>holistic healing and spiritual calm.</p>
        </div>
      </div>

      {/* 2x2 grid, full width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {ALL_ROOMS.map((room, idx) => (
          <div
            key={room.id}
            className="cursor-pointer transition-all duration-200"
            // onClick={() => setOpenIdx(idx)}
            onClick={(e) => {
              e.stopPropagation();
              setDetailedOpenIdx(idx);
            }}
          >
            <Card className="h-full bg-[#fbf7f0] border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <RoomImageSlider images={room.images} />
              <CardContent className="p-6">
                <h3 className="text-xl md:text-2xl font-alegreya  italic font-bold text-yellow-700/90 mb-2">
                  {room.title}
                </h3>
                <div className="mb-2">
                  <Badge className="bg-yellow-700/90 text-[#f3e9cb] font-semibold">
                    {room.price}/night
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {room.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-4 w-4 text-[#A67A35]" />
                  <span className="text-sm text-gray-600">{room.capacity}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold font-alegreya  italic text-black mb-2">Amenities</h4>
                  <div className="flex flex-wrap gap-1">
                    {room.amenities.slice(0, 4).map((am, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {am}
                      </Badge>
                    ))}
                    {room.amenities.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{room.amenities.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  {room.features.slice(0, 4).map((Feature, i) => (
                    <Feature key={i} className="h-4 w-4 text-[#A67A35]" />
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      // router.push(`/contact?id=${room.id}`);
                    }}
                    className="flex-1 bg-yellow-700/90 hover:bg-[#8c672d] text-[#f3e9cb] font-semibold"
                  >
                    Book Now
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDetailedOpenIdx(idx);
                    }}
                    variant="outline"
                    className="flex-1 border-[#A67A35] text-[#A67A35] hover:bg-[#A67A35] hover:text-[#f3e9cb]"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Quick view modal */}
      <RoomDetailModal
        room={typeof openIdx === "number" ? ALL_ROOMS[openIdx] : null}
        open={typeof openIdx === "number"}
        onClose={() => setOpenIdx(null)}
      />

      {/* Detailed content modal */}
      <RoomDetailedModal
        room={
          typeof detailedOpenIdx === "number"
            ? ALL_ROOMS[detailedOpenIdx]
            : null
        }
        open={typeof detailedOpenIdx === "number"}
        onClose={() => setDetailedOpenIdx(null)}
      />
    </section>
  );
}
