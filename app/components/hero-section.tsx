import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Award } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #059669 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Authentic Eastern Cuisine Since 2018
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
              <span className="block">Welcome to</span>
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                Hyperswap
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Experience the finest Eastern cuisine in Belgium, where traditional flavors meet modern elegance in every
              dish.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/menu" className="flex items-center space-x-2">
                <span>Explore Menu</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full bg-transparent"
            >
              <Link href="/reservation" className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Book Table</span>
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
            <div>
              <div className="text-3xl font-bold text-emerald-600">5+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wide">Years</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">10K+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wide">Guests</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">50+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wide">Dishes</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/6c3b53de32c34246e656ebd1d243048b.jpg"
              alt="Restaurant Interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-emerald-600 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-emerald-700 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">1000+ Happy Customers</div>
                <div className="text-xs text-slate-500">This month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
