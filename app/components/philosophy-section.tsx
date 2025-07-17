import { Card } from "@/components/ui/card"
import { ChefHat, Star, Users } from "lucide-react"

export default function PhilosophySection() {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Philosophy</h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          At HyperLiquid, we believe that food is more than sustenance—it's a bridge between cultures, a celebration of
          tradition, and a way to bring people together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
            <ChefHat className="w-6 h-6 text-emerald-600" />
          </div>
          <h4 className="text-xl font-semibold text-slate-900 mb-3">Authentic Techniques</h4>
          <p className="text-slate-600">
            We use traditional cooking methods passed down through generations, from hand-pulled noodles to slow-braised
            broths that simmer for hours to achieve perfect depth of flavor.
          </p>
        </Card>

        <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-emerald-600" />
          </div>
          <h4 className="text-xl font-semibold text-slate-900 mb-3">Premium Ingredients</h4>
          <p className="text-slate-600">
            We source directly from trusted suppliers across Asia, importing specialty ingredients like Shaoxing wine,
            authentic miso, and hand-picked tea leaves to ensure every dish is genuine.
          </p>
        </Card>

        <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-emerald-600" />
          </div>
          <h4 className="text-xl font-semibold text-slate-900 mb-3">Cultural Respect</h4>
          <p className="text-slate-600">
            Every recipe tells a story. We honor the cultural significance of each dish while adapting to local tastes,
            creating an authentic yet accessible dining experience.
          </p>
        </Card>
      </div>
    </div>
  )
}
