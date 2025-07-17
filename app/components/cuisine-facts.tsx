import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChefHat, Star, Users } from "lucide-react"

export default function CuisineFacts() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Eastern Cuisine Facts</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the fascinating world of Eastern culinary traditions and their rich history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <ChefHat className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">5000+ Years</h3>
            <p className="text-slate-600">Eastern cuisine has over 5000 years of documented culinary history</p>
          </Card>
          <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <Star className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Balance & Harmony</h3>
            <p className="text-slate-600">
              Traditional Eastern cooking emphasizes the balance of flavors, colors, and textures
            </p>
          </Card>
          <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <Users className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Cultural Unity</h3>
            <p className="text-slate-600">Food brings families and communities together in Eastern culture</p>
          </Card>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full shadow-lg"
          >
            <Link href="/eastern-cuisine">Learn More About Eastern Cuisine</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
