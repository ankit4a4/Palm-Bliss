"use client";
import { motion } from 'framer-motion';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi, Car, Coffee, Tv, Wind, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import mud1 from "@/public/Images/AllPhotos/mud-house.webp";
import mud2 from "@/public/Images/mudHouse/1.jpg";
import mud3 from "@/public/Images/mudHouse/2.jpg";
import mud4 from "@/public/Images/mudHouse/3.jpg";
import mud5 from "@/public/Images/mudHouse/4.jpg";
import mud6 from "@/public/Images/mudHouse/5.jpg";
import mud7 from "@/public/Images/mudHouse/6.jpg";
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

const rooms = [
  {
    id: 2,
    title: "Mud Houses",
    description:
      "Experience rustic charm in our traditional mud house, featuring a separate living area and ample space.",
    price: "₹6,999",
    capacity: "2 Adults",
    amenities: ["Living Room", "Garden View", "Dining Area"],
    images: [mud2, mud1, mud3, mud4, mud5, mud6, mud7],
    features: [Wifi, Car, Coffee, Tv, Wind, Users],
  },
  {
    id: 4,
    title: "Swiss Cottages",
    description:
      "Relax in our luxurious Swiss cottages, where you'll find a comfortable bed, exclusive experiences, and all modern amenities.",
    price: "₹5,999",
    capacity: "2 Adults",
    amenities: ["Yoga Mat", "Meditation Corner", "Tv", "Sound System"],
    images: [swiss1, swiss2],
    features: [Wifi, Car, Coffee, Tv, Wind, Users],
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
  },
  {
    id: 8,
    title: "Luxury Room",
    description:
      "Finest comfort with breathtaking mountain views, modern interiors, and exquisite service.",
    price: "₹8,999",
    capacity: "2 Adults",
    amenities: ["Mountain View", "Balcony", "King Bed", "Sitting Area"],
    images: [luxury1, luxury2, luxury3, luxury4],
    features: [Wifi, Car, Coffee, Tv, Wind, Users],
  },
];

const RoomsGrid = () => {
  const router = useRouter();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white border-gray-200 hover:shadow-2xl rounded-xl overflow-hidden transition-all duration-300 flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={room.images[0]}
                    fill
                    alt={room.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 700px) 100vw, 33vw"
                    style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                    priority={index < 2}
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-royal-gold text-black font-semibold shadow-lg">
                      {room.price}/night
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-playfair font-bold text-black mb-2">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-4 w-4 text-royal-gold" />
                    <span className="text-sm text-gray-600">{room.capacity}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-1">
                      {room.amenities.slice(0, 4).map((amenity, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {room.amenities.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{room.amenities.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-3">
                    <div className="flex gap-2">
                      {room.features.slice(0, 4).map((Feature, idx) => (
                        <Feature key={idx} className="h-4 w-4 text-royal-gold" />
                      ))}
                    </div>
                    <Button
                      onClick={() => router.push(`/contact?id=${room.id}`)}
                      className="bg-royal-gold hover:bg-royal-gold-dark rounded-full px-6 font-semibold text-black shadow-lg"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsGrid;
