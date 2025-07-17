import Image from "next/image"

export default function RestaurantExperience() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.3)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.2)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Where <span className="text-emerald-400">Tradition</span> Meets{" "}
            <span className="text-emerald-400">Innovation</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Step into a world where every corner tells a story of Eastern heritage, crafted with modern Belgian
            sophistication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-400 pl-6">
                <h3 className="text-2xl font-bold text-emerald-400 mb-3">Architectural Harmony</h3>
                <p className="text-slate-300 leading-relaxed">
                  Our space seamlessly blends traditional Eastern architectural elements with contemporary Belgian
                  design. Hand-carved wooden screens from Vietnam create intimate dining alcoves, while modern lighting
                  highlights the natural textures of bamboo and stone.
                </p>
              </div>

              <div className="border-l-4 border-emerald-400 pl-6">
                <h3 className="text-2xl font-bold text-emerald-400 mb-3">Sensory Journey</h3>
                <p className="text-slate-300 leading-relaxed">
                  The gentle sound of water features, the subtle aroma of incense, and the warm glow of paper lanterns
                  create an immersive atmosphere that transports you to the bustling markets of Bangkok or the serene
                  tea houses of Kyoto.
                </p>
              </div>

              <div className="border-l-4 border-emerald-400 pl-6">
                <h3 className="text-2xl font-bold text-emerald-400 mb-3">Cultural Artifacts</h3>
                <p className="text-slate-300 leading-relaxed">
                  Authentic pieces collected from our travels across Asia adorn the walls - vintage tea sets from China,
                  traditional masks from Thailand, and calligraphy scrolls that tell ancient stories of culinary wisdom.
                </p>
              </div>
            </div>

            <div className="bg-emerald-900/30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/30">
              <h4 className="text-lg font-semibold text-emerald-300 mb-4">Design Philosophy</h4>
              <blockquote className="text-slate-300 italic leading-relaxed">
                "We believe that dining is not just about food, but about creating memories in a space that honors the
                past while embracing the future. Every element in our restaurant has been carefully chosen to enhance
                your culinary journey."
              </blockquote>
              <cite className="text-emerald-400 text-sm mt-3 block">— Maria Chen, Co-founder & Interior Designer</cite>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/43f5537bcdf40ad5b3f6dd6d3f134edc.jpg"
                  alt="Restaurant Interior Design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-emerald-600 text-white p-4 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">150</div>
                <div className="text-xs uppercase tracking-wide">Seats Available</div>
              </div>

              {/* Design Features Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                  <div className="text-emerald-400 font-semibold mb-2">Private Dining</div>
                  <div className="text-slate-300 text-sm">
                    Intimate rooms for special occasions with traditional low tables and floor seating
                  </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                  <div className="text-emerald-400 font-semibold mb-2">Open Kitchen</div>
                  <div className="text-slate-300 text-sm">
                    Watch our chefs craft your meal with theatrical teppanyaki stations
                  </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                  <div className="text-emerald-400 font-semibold mb-2">Zen Garden</div>
                  <div className="text-slate-300 text-sm">
                    Indoor bamboo garden with koi pond creating a peaceful dining ambiance
                  </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                  <div className="text-emerald-400 font-semibold mb-2">Tea Ceremony Corner</div>
                  <div className="text-slate-300 text-sm">
                    Traditional tea service area with authentic ceremony demonstrations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">2,500m²</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">Total Space</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">3</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">Dining Areas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">12</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">Private Rooms</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">Climate Control</div>
          </div>
        </div>
      </div>
    </section>
  )
}
