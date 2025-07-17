"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, Users, Phone, User, MessageSquare, Star, CheckCircle } from "lucide-react"

export default function ReservationPage() {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmation(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Table Reservation
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Reserve Your Table</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Book your dining experience at HyperLiquid and enjoy authentic Eastern cuisine in our elegant atmosphere. We
              look forward to welcoming you.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Make a Reservation</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="flex items-center text-slate-700 font-medium">
                      <User className="w-4 h-4 mr-2 text-emerald-600" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="flex items-center text-slate-700 font-medium">
                      <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg"
                      placeholder="+32 XXX XX XX XX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="date" className="flex items-center text-slate-700 font-medium">
                      <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                      Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="time" className="flex items-center text-slate-700 font-medium">
                      <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                      Time
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("time", value)} required>
                      <SelectTrigger className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                        <SelectItem value="17:30">5:30 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="18:30">6:30 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                        <SelectItem value="19:30">7:30 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                        <SelectItem value="20:30">8:30 PM</SelectItem>
                        <SelectItem value="21:00">9:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="guests" className="flex items-center text-slate-700 font-medium">
                    <Users className="w-4 h-4 mr-2 text-emerald-600" />
                    Number of Guests
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("guests", value)} required>
                    <SelectTrigger className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="notes" className="flex items-center text-slate-700 font-medium">
                    <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg"
                    placeholder="Any dietary restrictions, special occasions, or other requests..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-full shadow-lg"
                >
                  Reserve Table
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="max-w-md rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-center text-slate-900 text-xl">Reservation Confirmed!</DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <p className="text-slate-700 mb-6">
              Thank you, {formData.name}! Your table reservation has been confirmed.
            </p>
            <div className="bg-slate-50 p-6 rounded-lg text-left space-y-2">
              <p className="text-sm text-slate-600">
                <strong className="text-slate-900">Date:</strong> {formData.date}
              </p>
              <p className="text-sm text-slate-600">
                <strong className="text-slate-900">Time:</strong> {formData.time}
              </p>
              <p className="text-sm text-slate-600">
                <strong className="text-slate-900">Guests:</strong> {formData.guests}
              </p>
              <p className="text-sm text-slate-600">
                <strong className="text-slate-900">Phone:</strong> {formData.phone}
              </p>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              We'll call you to confirm your reservation. See you soon at HyperLiquid!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
