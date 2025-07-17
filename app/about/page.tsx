import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Users, Award, Heart, Globe, MapPin, Clock } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Authenticity",
      description: "We are committed to preserving traditional Eastern culinary techniques and flavors.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building connections through food and creating memorable dining experiences for all.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Using only the finest ingredients and maintaining the highest standards in everything we do.",
    },
    {
      icon: Globe,
      title: "Cultural Bridge",
      description: "Bringing the rich culinary heritage of the East to the heart of Belgium.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-award w-4 h-4 mr-2"
                ></svg>
                Est. 2025 • Award-Winning Cuisine
              </div>
              <h1 className="text-5xl font-bold text-slate-900 leading-tight">About Hyperswap</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Welcome to Hyperswap, where the rich culinary traditions of the East meet the warm hospitality of
                Belgium. Located in the heart of Wijnegem Shopping Center, we have been serving authentic Eastern
                cuisine since 2025.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our restaurant is more than just a dining destination – it's a cultural bridge that brings together the
                diverse flavors, techniques, and traditions from across Asia, all while embracing the multicultural
                spirit of Belgium.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every dish we serve tells a story, every ingredient is carefully selected, and every meal is prepared
                with the passion and respect that Eastern cuisine deserves.
              </p>
            </div>
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/6c3b53de32c34246e656ebd1d243048b.jpg"
                  alt="Hyperswap Restaurant Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Hyperswap, from sourcing ingredients to serving our
              guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Meet Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our passionate team of chefs and staff are dedicated to providing you with an exceptional dining
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
              <div className="relative h-64">
                <Image src="/fa776887cf09fcfe47521683d4fdb674.jpg" alt="Head Chef" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <p className="text-emerald-600 mb-3 font-medium">Head Chef & Co-founder</p>
                <p className="text-slate-600 text-sm">
                  With over 15 years of experience in Eastern cuisine, Chef Maria brings authentic flavors and
                  innovative techniques to every dish.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
              <div className="relative h-64">
                <Image src="/fa2f65f61d760a0167d8a9f2f4787a34.jpg" alt="Sous Chef" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <p className="text-emerald-600 mb-3 font-medium">Sous Chef & Co-founder</p>
                <p className="text-slate-600 text-sm">
                  David's passion for Eastern culture and cuisine drives our commitment to authenticity and quality in
                  every meal we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/9ec30707366b87dee99c0c466c1f1016.jpg"
                  alt="Restaurant Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-emerald-600 mb-3 font-medium">Restaurant Manager</p>
                <p className="text-slate-600 text-sm">
                  Sarah ensures that every guest receives exceptional service and has a memorable dining experience at
                  Hyperswap.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Visit Us</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Located in the heart of Wijnegem Shopping Center, we're easily accessible and ready to welcome you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Address</h3>
                  <p className="text-slate-600">
                    Shopping Center Wijnegem
                    <br />
                    Turnhoutsebaan 5<br />
                    2110 Wijnegem, Belgium
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Opening Hours</h3>
                  <div className="text-slate-600 space-y-1">
                    <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
