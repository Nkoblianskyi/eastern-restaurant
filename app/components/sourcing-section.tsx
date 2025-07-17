import Image from "next/image"

export default function SourcingSection() {
  return (
    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Sourcing & Sustainability</h3>
          <p className="text-lg text-slate-600 mb-6">
            We believe in responsible sourcing and supporting both local Belgian producers and traditional Asian
            suppliers who share our values of quality and sustainability.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-900">Direct Trade Partnerships</h4>
                <p className="text-slate-600 text-sm">
                  We work directly with tea gardens in Fujian, spice farms in Thailand, and sake breweries in Japan
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-900">Local Belgian Produce</h4>
                <p className="text-slate-600 text-sm">
                  Fresh vegetables and herbs sourced from local Belgian farms, supporting our community
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-900">Sustainable Seafood</h4>
                <p className="text-slate-600 text-sm">
                  All our fish and seafood are sustainably sourced and certified by marine conservation organizations
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-900">Zero Waste Initiative</h4>
                <p className="text-slate-600 text-sm">
                  We compost organic waste and use biodegradable packaging for all takeaway orders
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/62e8bad98ef02260fc44c20efb59265c.jpg"
            alt="Fresh Ingredients"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
