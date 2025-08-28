"use client";
import Image from "next/image";

const AyushDishesShowcase = () => {
  const dishes = [
    {
      id: 2,
      name: "Poha",
      image:
        "https://i.pinimg.com/736x/a8/a4/9d/a8a49de5fc1a71c4db0cc2b20c30ab3d.jpg",
      description: "Flattened rice cooked with aromatic spices and herbs",
    },
    {
      id: 3,
      name: "Rogan Butter Milk",
      image:
        "https://i.pinimg.com/736x/9b/7f/85/9b7f8585e335cd4c4fbe063a5820e572.jpg",
      description: "Traditional spiced buttermilk for digestive wellness",
    },
    {
      id: 4,
      name: "Vegetable Curd",
      image:
        "https://i.pinimg.com/736x/81/52/37/815237cd223506c22a95194319fc877a.jpg",
      description: "Fresh yogurt with seasonal vegetables and herbs",
    },
    {
      id: 5,
      name: "Amla Juice",
      image:
        "https://i.pinimg.com/736x/df/ff/cd/dfffcd6e40b3b738fafd85e61b0a2a55.jpg",
      description: "Pure Indian gooseberry juice rich in vitamin C",
    },
    {
      id: 6,
      name: "Khazoor Ladoo",
      image:
        "https://i.pinimg.com/1200x/f3/40/a6/f340a6849a30a4774602cf07238a2d7e.jpg",
      description: "Natural date balls sweetened with jaggery and nuts",
    },
    {
      id: 7,
      name: "Beetroot Soup",
      image: "https://i.pinimg.com/736x/ff/ce/da/ffceda842939d4446c5e37ad5dbf5d80.jpg",
      description: "Nourishing beetroot soup with healing herbs",
    },
    {
      id: 8,
      name: "Tomato Soup",
      image: "https://i.pinimg.com/736x/32/e2/b0/32e2b01c923bd8a575289ae494b15e20.jpg",
      description: "Fresh tomato soup infused with ayurvedic spices",
    },
    {
      id: 9,
      name: "Herbal Tea",
      image:
        "https://i.pinimg.com/1200x/c0/99/b4/c099b4110cb9116eb5cf02025e4b7931.jpg",
      description: "Healing blend of mountain herbs and spices",
    },
    {
      id: 10,
      name: "Tulsi Tea",
      image: "https://i.pinimg.com/736x/50/c1/9e/50c19e16a330e2ed6e911687450c83d4.jpg",
      description: "Sacred basil tea for immunity and peace of mind",
    },
    {
      id: 11,
      name: "Cinnamon Tea",
      image: "https://i.pinimg.com/736x/05/43/8e/05438e2152ffe1f31ec1abf382e46c64.jpg",
      description: "Warming cinnamon tea with digestive properties",
    },
    {
      id: 12,
      name: "Besan & Suji Pancake",
      image: "https://i.pinimg.com/1200x/9b/e8/2f/9be82f5181a5fda6a4cac88729151a77.jpg",
      description: "Protein-rich pancakes made with gram flour and semolina",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-yellow-700/90 text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Our Sacred Menu
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Each dish is carefully crafted with natural ingredients and ancient
            Ayurvedic wisdom, nourishing both body and soul in perfect harmony
            with nature.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100/30">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-yellow-700/90 text-xl font-bold mb-3 leading-tight">
                  {dish.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 max-w-4xl mx-auto">
            <h3 className="text-yellow-700/90 text-2xl font-bold mb-4">
              A Journey of Wellness Through Food
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every meal at Ayush Dining is a celebration of health, taste, and
              mindfulness. Prepared with fresh, natural ingredients and served
              with love, our dishes are designed to nourish your body while
              delighting your senses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyushDishesShowcase;
