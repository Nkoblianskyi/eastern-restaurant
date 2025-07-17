import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center shadow-lg">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
              HyperLiquid
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/menu" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              Menu
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              About Us
            </Link>
            <Link
              href="/eastern-cuisine"
              className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Eastern Cuisine
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg rounded-full px-6"
            >
              <Link href="/reservation">Reserve Table</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
