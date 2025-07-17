import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Clock, Globe, Utensils, Star, Award } from "lucide-react"

export default function EasternCuisinePage() {
  const cuisineRegions = [
    {
      name: "Chinese Cuisine",
      description:
        "One of the world's oldest culinary traditions, emphasizing balance, harmony, and the use of fresh ingredients.",
      image: "/65af1339e214a946cc91ade500b95cde.jpg",
      facts: ["Over 5000 years of history", "8 major regional styles", "Philosophy of Yin and Yang in cooking"],
    },
    {
      name: "Japanese Cuisine",
      description: "Known for its emphasis on seasonality, quality ingredients, and beautiful presentation.",
      image: "/ff1d42e3c4b4c266a2ff908509f71cda.jpg",
      facts: ["UNESCO Intangible Cultural Heritage", "Emphasis on umami flavor", "Seasonal ingredient focus"],
    },
    {
      name: "Thai Cuisine",
      description: "Famous for its bold flavors, aromatic herbs, and perfect balance of sweet, sour, salty, and spicy.",
      image: "/c06de047f43b22843bb9d6914c5d209d.jpg",
      facts: ["Balance of 4 fundamental tastes", "Heavy use of fresh herbs", "Influenced by neighboring countries"],
    },
    {
      name: "Korean Cuisine",
      description: "Characterized by fermented foods, bold flavors, and the extensive use of vegetables.",
      image: "/4c2e1a4a8ba35bf67145b44ce940fec6.jpg",
      facts: ["Fermentation techniques", "Banchan side dish culture", "Health-focused ingredients"],
    },
  ]

  const interestingFacts = [
    {
      icon: Clock,
      title: "Ancient Origins",
      fact: "Eastern cuisine dates back over 5,000 years, with some cooking techniques still used today unchanged from ancient times.",
    },
    {
      icon: Globe,
      title: "Global Influence",
      fact: "Eastern cuisine has influenced cooking styles worldwide, with techniques like stir-frying and steaming now common globally.",
    },
    {
      icon: Utensils,
      title: "Chopstick Culture",
      fact: "Chopsticks were invented in China around 5,000 years ago and are now used by over 1.5 billion people daily.",
    },
    {
      icon: Star,
      title: "Tea Ceremony",
      fact: "The art of tea preparation in Eastern culture is considered a form of meditation and has influenced dining etiquette worldwide.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              5000+ Years of Culinary Heritage
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Eastern Cuisine Heritage</h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Discover the rich history, diverse traditions, and fascinating stories behind the culinary arts of the
              East. From ancient cooking techniques to modern innovations, Eastern cuisine represents thousands of years
              of cultural evolution and culinary mastery.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/d6c4fec037f11c58a3e5bd95832cf1a9.jpg"
                alt="Traditional Eastern Cooking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Cuisines */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Regional Traditions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each region of the East has developed its own unique culinary identity, shaped by geography, climate, and
              cultural influences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cuisineRegions.map((region, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <div className="relative h-56">
                  <Image src={region.image || "/placeholder.svg"} alt={region.name} fill className="object-cover" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">{region.name}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{region.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-emerald-700">Key Characteristics:</h4>
                    <ul className="space-y-2">
                      {region.facts.map((fact, factIndex) => (
                        <li key={factIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600">{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interesting Facts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Fascinating Facts</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover amazing facts about Eastern cuisine that showcase its rich history and cultural significance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interestingFacts.map((item, index) => (
              <Card
                key={index}
                className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy of Eastern Cooking */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900">Philosophy & Principles</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Eastern cuisine is built on fundamental principles that go beyond mere cooking. It's a philosophy that
                emphasizes balance, harmony, and respect for ingredients.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Balance of Flavors</h4>
                    <p className="text-slate-600">
                      Sweet, sour, salty, bitter, and umami work together in perfect harmony
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Seasonal Cooking</h4>
                    <p className="text-slate-600">
                      Using ingredients at their peak season for maximum flavor and nutrition
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Mindful Preparation</h4>
                    <p className="text-slate-600">
                      Every step of cooking is done with intention and respect for the ingredients
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Health & Wellness</h4>
                    <p className="text-slate-600">
                      Food as medicine, with ingredients chosen for their health benefits
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/d07fd540dbc4f1ae0aabcd4409246e95.jpg"
                  alt="Eastern Cooking Philosophy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
