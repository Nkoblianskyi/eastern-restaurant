import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function MenuPreview() {
  const menuCategories = [
    {
      title: "Appetizers",
      description: "Traditional starters to awaken your palate",
      image: "/c2bbbc6f3f94bf6b4a0f1e3cb7a2519b.jpg",
      href: "/menu#appetizers",
    },
    {
      title: "Main Courses",
      description: "Authentic dishes from across the East",
      image: "/49b542a11f913683f629ad3cfe083ddc.jpg",
      href: "/menu#mains",
    },
    {
      title: "Desserts",
      description: "Sweet endings with traditional flavors",
      image: "/6ed9c0c46cd6bd1ca1e32c0df89b3ee2.jpg",
      href: "/menu#desserts",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Menu</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of traditional Eastern dishes, prepared with authentic ingredients
            and time-honored techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {menuCategories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-slate-600 mb-4">{category.description}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-semibold"
                >
                  <Link href={category.href} className="flex items-center space-x-2">
                    <span>View Items</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full shadow-lg"
          >
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
