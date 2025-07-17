import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star, Flame, ArrowRight, Clock, Users, ChefHat } from "lucide-react"
import { mockMenuData } from "@/lib/mock-data"

export default function MenuPage() {
  const categories = [
    {
      id: "appetizers",
      title: "Appetizers",
      subtitle: "Perfect Starters",
      description: "Begin your culinary journey with our carefully crafted appetizers",
      icon: "🥟",
    },
    {
      id: "mains",
      title: "Main Courses",
      subtitle: "Signature Dishes",
      description: "Authentic main courses that showcase the best of Eastern cuisine",
      icon: "🍜",
    },
    {
      id: "desserts",
      title: "Desserts",
      subtitle: "Sweet Endings",
      description: "Traditional desserts to complete your dining experience",
      icon: "🍡",
    },
  ]

  const renderMenuSection = (category: any, items: any[]) => (
    <section id={category.id} className="mb-24">
      {/* Category Header */}
      <div className="text-center mb-16">
        <div className="text-6xl mb-4">{category.icon}</div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">{category.title}</h2>
        <p className="text-xl text-emerald-600 font-medium mb-2">{category.subtitle}</p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{category.description}</p>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {items.map((item) => (
          <Card
            key={item.id}
            className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {item.popular && (
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs flex items-center font-medium shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </div>
                )}
                {item.spicy && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs flex items-center font-medium shadow-lg">
                    <Flame className="w-3 h-3 mr-1" />
                    Spicy
                  </div>
                )}
              </div>

              {/* Origin Badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  {item.origin}
                </div>
              </div>

              {/* Quick Info */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {item.prepTime}
                </div>
                <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {item.servings}
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3">{item.description}</p>

              <Button
                asChild
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Link href={`/dish/${item.id}`} className="flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #059669 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-8">
              <ChefHat className="w-4 h-4 mr-2" />
              Authentic Eastern Flavors • Crafted with Passion
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                Menu
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Explore our carefully curated selection of traditional Eastern dishes, each crafted with authentic
              ingredients and time-honored techniques by our expert chefs. From delicate appetizers to hearty main
              courses and exquisite desserts.
            </p>

            {/* Menu Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{mockMenuData.appetizers.length}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide">Appetizers & Starters</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{mockMenuData.mains.length}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide">Main Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{mockMenuData.desserts.length}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide">Traditional Desserts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-12 bg-slate-50 sticky top-20 z-40 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:bg-emerald-50 hover:text-emerald-600"
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="font-medium">{category.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <div className="container mx-auto px-4 py-20">
        {categories.map((category) =>
          renderMenuSection(category, mockMenuData[category.id as keyof typeof mockMenuData]),
        )}

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Cuisine?</h2>
          <p className="text-xl mb-8 opacity-90">
            Reserve your table and embark on a culinary journey through the East
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-emerald-600 hover:bg-slate-50 px-8 py-4 rounded-full shadow-lg text-lg font-semibold"
          >
            <Link href="/reservation" className="flex items-center space-x-2">
              <span>Reserve Your Table</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
