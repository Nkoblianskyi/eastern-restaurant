import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TeamSection() {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Culinary Team</h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Our passionate team brings together decades of experience from kitchens across Asia and Europe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
          <div className="relative h-64">
            <Image src="/fa776887cf09fcfe47521683d4fdb674.jpg" alt="Head Chef Li Wei" fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <p className="text-emerald-600 mb-3 font-medium">Head Chef & Co-founder</p>
            <p className="text-slate-600 text-sm mb-4">
              Trained in Beijing and Hong Kong, Chef Li specializes in Cantonese and Sichuan cuisine. His 20+ years of
              experience brings authentic flavors to every dish.
            </p>
            <div className="flex justify-center space-x-2">
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">Cantonese</span>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">Sichuan</span>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
          <div className="relative h-64">
            <Image src="/fa2f65f61d760a0167d8a9f2f4787a34.jpg" alt="Chef Kenji Tanaka" fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <p className="text-emerald-600 mb-3 font-medium">Sushi Master</p>
            <p className="text-slate-600 text-sm mb-4">
              Tokyo-trained sushi master with 15 years of experience. Kenji brings precision and artistry to our
              Japanese dishes, from sashimi to traditional ramen.
            </p>
            <div className="flex justify-center space-x-2">
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">Sushi</span>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">Ramen</span>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/9ec30707366b87dee99c0c466c1f1016.jpg"
              alt="Chef Siriporn Nakamura"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6">
            <p className="text-emerald-600 mb-3 font-medium">Thai Cuisine Specialist</p>
            <p className="text-slate-600 text-sm mb-4">
              Born in Bangkok, Chef Siriporn brings authentic Thai flavors and techniques. Her expertise in balancing
              sweet, sour, salty, and spicy creates perfect harmony in every dish.
            </p>
            <div className="flex justify-center space-x-2">
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">Thai</span>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">Curry</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
