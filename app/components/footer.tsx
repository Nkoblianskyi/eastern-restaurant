import Link from "next/link"
import { MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              </div>
              <span className="text-2xl font-bold text-emerald-400">Hyperswap</span>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Authentic Eastern cuisine in the heart of Belgium. Experience traditional flavors with a modern twist in
              our elegant restaurant.
            </p>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-300">Shopping Center Wijnegem</p>
                <p className="text-slate-300">Turnhoutsebaan 5, 2110 Wijnegem, Belgium</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/menu" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/eastern-cuisine" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Eastern Cuisine
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()} Hyperswap Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
