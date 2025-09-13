// components/FounderVisions.js


export default function FounderVisions({ founders }) {
  return (
    <section className="w-full py-16 bg-[#fbf7f0]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-8 relative">
            <div className="absolute -inset-4 bg-amber-100 rounded-lg opacity-50"></div>
            <div className="relative rounded-lg overflow-hidden w-60 h-96 mx-auto border-4 border-amber-800 shadow-lg">
              <img
                src="/Images/founder.jpeg"
                alt="Ms. Shivani Agarwal, Founder of Palm Bliss Resort"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="italic font-serif text-xl text-amber-800 mb-2">Ms. Shivani Agarwal</h1>
          <h2 className="font-serif italic text-3xl md:text-4xl mb-4 text-amber-800">
            Vision of the Founder
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="font-serif italic text-xl md:text-2xl text-amber-700 px-4 leading-tight">
            The Palm Bliss Resort "Arivandha – Where Peace Finds You."
          </p>
        </div>

        {/* Main Content with Side Image */}
        <div className="flex flex-col md:flex-row gap-10 mb-16 items-start">
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              At the heart of every leaf, every breeze and every sunrise within
              Palm Bliss Resort lies the vision of its founder — a dreamer deeply
              rooted in nature, inspired by the healing silence of the jungle.
              Established with the essence of Arivandha, a soulful path toward
              awareness and inner balance, this retreat is more than just a
              destination — it's a return to self.
            </p>
          </div>
          <div className="md:w-1/3 bg-amber-50 p-6 rounded-lg shadow-sm border border-amber-100">
            <h3 className="font-semibold text-amber-800 mb-4 text-lg">The Founder Believes:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">When the world gets loud, we must return to the jungle.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">When life feels heavy, we must walk barefoot on the earth.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">When the soul is tired, silence is the greatest medicine.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Vision Elements */}
        <div className="  rounded-2xl p-8 mb-16 shadow-sm border border-amber-100">
          <p className="text-gray-700 text-lg mb-8 text-center">
            In a world rushing ahead, the founder envisioned a sacred pause —
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-6 bg-amber-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/Images/icons/forest-wind.png"
                  alt="Forest Whispers"
                  className="w-8 h-8"
                />
              </div>
              <h4 className="font-semibold text-amber-800 mb-2">Forest Whispers</h4>
              <p className="text-gray-700 text-sm">A space surrounded by forest whispers</p>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/Images/icons/leaf.png"
                  alt="Pure Oxygen"
                  className="w-8 h-8"
                />
              </div>
              <h4 className="font-semibold text-amber-800 mb-2">Pure Oxygen</h4>
              <p className="text-gray-700 text-sm">Breathing pure oxygen, untouched by noise</p>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/Images/icons/heart-care.png"
                  alt="Healing"
                  className="w-8 h-8"
                />
              </div>
              <h4 className="font-semibold text-amber-800 mb-2">Soulful Care</h4>
              <p className="text-gray-700 text-sm">Healing through stillness, simplicity and soulful care</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 text-lg mb-6">
              Palm Bliss isn't just a retreat. It's a soul reset — Built not just
              with mud and stone, but with conscious intention and deep-rooted
              love for wellness, purity and peace.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className=" p-4 rounded-lg border border-amber-200 shadow-sm">
                <p className="text-amber-800 font-medium text-sm">Here, the jungle doesn't isolate — it embraces.</p>
              </div>
              <div className=" p-4 rounded-lg border border-amber-200 shadow-sm">
                <p className="text-amber-800 font-medium text-sm">Here, every corner breathes wellness.</p>
              </div>
              <div className=" p-4 rounded-lg border border-amber-200 shadow-sm">
                <p className="text-amber-800 font-medium text-sm">Here, you don't just stay — you transform.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[#a17633] opacity-90"></div>
            <div className="relative py-12 px-8 md:px-16 text-center">
              <p className="italic text-amber-100 text-xl mb-6">
                "In Silence, You Heal. In Nature, You Awaken."
              </p>
              <p className="text-[#f3e9cb] leading-relaxed max-w-3xl mx-auto">
                Palm Bliss Resort was born from the vision of its founder — a soul
                deeply moved by the ancient wisdom of Yoga and Naturopathy and the
                need for true stillness in today's chaotic world. Set deep within a
                jungle sanctuary, the resort breathes peace, offering a Syndrome
                Silence Area where the only sounds are those of birdsong, wind and
                your own heartbeat. The founder's dream was simple yet profound: To
                create a space where the body rests, the mind clears and the soul
                realigns.
              </p>
            </div>
          </div>
        </div>

        {/* Practices Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="text-center p-6  rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
            <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/Images/icons/yoga.png" alt="Yoga" className="w-7 h-7" />
            </div>
            <p className="text-amber-800 font-medium text-sm">Here, Yoga isn't just exercise — it's inner alignment.</p>
          </div>

          <div className="text-center p-6   rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
            <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/Images/icons/leaf.png" alt="Naturopathy" className="w-7 h-7" />
            </div>
            <p className="text-amber-800 font-medium text-sm">Naturopathy heals not only the symptoms but the source.</p>
          </div>

          <div className="text-center p-6   rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
            <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/Images/icons/meditation.png" alt="Meditation" className="w-7 h-7" />
            </div>
            <p className="text-amber-800 font-medium text-sm">Meditation becomes a gateway to inner truth.</p>
          </div>

          <div className="text-center p-6   rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
            <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/Images/icons/wind.png" alt="Spirituality" className="w-7 h-7" />
            </div>
            <p className="text-amber-800 font-medium text-sm">Spirituality is felt in every breeze, every tree, every breath.</p>
          </div>
        </div>

        {/* Final Note */}
        <div className="bg-amber-50 rounded-2xl p-8 text-center border border-amber-200">
          <h3 className="font-serif text-2xl text-amber-800 mb-6">The Path of Atharva</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            At Palm Bliss, the food served follows the path of Atharva —{" "}
            <span className="font-semibold text-amber-700">
              pure, natural, sattvic vegetarian meals
            </span>{" "}
            — gently prepared with love and balance, using ingredients that
            nourish and detoxify the body naturally.
          </p>
        </div>
      </div>
    </section>
  );
}