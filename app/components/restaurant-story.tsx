import Image from "next/image"
import { Award } from "lucide-react"

export default function RestaurantStory() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
      <div className="space-y-6">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
          <Award className="w-4 h-4 mr-2" />
          Est. 2018 • Award-Winning Cuisine
        </div>
        <h2 className="text-4xl font-bold text-slate-900">Our Story</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Founded in 2018, HyperLiquid began as a dream to bring authentic Eastern cuisine to Belgium. Our founders, Maria
          Chen and David Van Der Berg, having traveled extensively across Asia for over a decade, were inspired by the
          rich culinary traditions and warm hospitality they experienced in countries like China, Thailand, Japan, and
          Korea.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          What started as a small family venture has grown into one of Belgium's most respected Eastern cuisine
          destinations. We've maintained our commitment to authenticity while embracing the multicultural spirit of our
          Belgian home, creating a unique dining experience that honors both traditions.
        </p>
        <div className="grid grid-cols-3 gap-6 pt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">5+</div>
            <div className="text-sm text-slate-500">Years Serving</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">10K+</div>
            <div className="text-sm text-slate-500">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">50+</div>
            <div className="text-sm text-slate-500">Authentic Dishes</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/a667354f93b47ab81b6500114e34c6d3.jpg"
          alt="Restaurant Founders"
          width={600}
          height={500}
          className="rounded-2xl shadow-xl"
        />
      </div>
    </div>
  )
}
