"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"
import Link from "next/link"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="p-4 bg-white shadow-xl border-0 rounded-xl">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-slate-900">Cookie Notice</h3>
          <Button variant="ghost" size="sm" onClick={declineCookies} className="h-6 w-6 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          We use cookies to enhance your browsing experience and provide personalized content. By continuing to use our
          site, you agree to our use of cookies.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={acceptCookies}
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
            size="sm"
          >
            Accept All
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-full bg-transparent"
          >
            <Link href="/cookie-policy">Learn More</Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}
