import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Star, Clock, Flame, ArrowLeft, ArrowRight, Users, ChefHat, Leaf, Award } from "lucide-react"
import { notFound } from "next/navigation"
import { getDishById } from "@/lib/mock-data"

export default function DishPage({ params }: { params: { id: string } }) {
  const dish = getDishById(params.id)

  if (!dish) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-8 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50">
          <Link href="/menu" className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Menu</span>
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Single Main Image */}
          <div className="space-y-6">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" />
              <div className="absolute top-6 left-6 flex gap-3">
                {dish.popular && (
                  <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    Popular Choice
                  </Badge>
                )}
                {dish.spicy && (
                  <Badge className="bg-red-500 hover:bg-red-600 text-white shadow-lg">
                    <Flame className="w-3 h-3 mr-1" />
                    Spicy
                  </Badge>
                )}
              </div>
              <div className="absolute top-6 right-6">
                <Badge className="bg-black/50 backdrop-blur-sm text-white">{dish.origin}</Badge>
              </div>
            </div>
          </div>

          {/* Dish Information */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">{dish.name}</h1>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>{dish.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span>{dish.servings}</span>
                  </div>
                  <Badge variant="outline" className="border-emerald-300 text-emerald-700">
                    {dish.category}
                  </Badge>
                </div>
                <div className="flex gap-2 mb-6">
                  {dish.dietaryTags?.map((tag: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">{dish.description}</p>

              {dish.longDescription && (
                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                  <div className="flex items-center mb-3">
                    <ChefHat className="w-5 h-5 text-emerald-600 mr-2" />
                    <h3 className="font-semibold text-emerald-800">Chef's Story</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{dish.longDescription}</p>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-full shadow-lg"
              >
                <Link href="/reservation" className="flex items-center justify-center space-x-2">
                  <span>Reserve Table for This Dish</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Leaf className="w-6 h-6 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-semibold text-slate-900">Fresh Ingredients</h3>
              </div>
              <div className="space-y-3">
                {dish.ingredients?.map((ingredient: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700">{ingredient}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Nutritional Info */}
          {dish.nutritionalInfo && (
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-emerald-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-slate-900">Nutrition Facts</h3>
                </div>
                <div className="space-y-4">
                  {Object.entries(dish.nutritionalInfo).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0"
                    >
                      <span className="text-slate-600 capitalize">{key}</span>
                      <span className="font-semibold text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Chef Notes & Pairings */}
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <ChefHat className="w-6 h-6 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-semibold text-slate-900">Chef's Notes</h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">{dish.chefNotes}</p>

              {dish.pairings && (
                <>
                  <h4 className="font-semibold text-slate-900 mb-3">Perfect Pairings</h4>
                  <div className="flex flex-wrap gap-2">
                    {dish.pairings.map((pairing: string, index: number) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-emerald-200 text-emerald-700 bg-emerald-50"
                      >
                        {pairing}
                      </Badge>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Allergen Information */}
      {dish.allergens && (
        <section className="container mx-auto px-4 pb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-red-50 to-orange-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Allergen Information</h3>
              <p className="text-slate-600 mb-4">Please inform our staff of any allergies or dietary requirements.</p>
              <div className="flex flex-wrap gap-3">
                {dish.allergens.map((allergen: string, index: number) => (
                  <Badge key={index} variant="outline" className="border-red-300 text-red-700 bg-red-50 px-3 py-1">
                    {allergen}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  )
}
