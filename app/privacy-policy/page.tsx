import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Protection
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information at Hyperswap.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Privacy Information</CardTitle>
            </CardHeader>
            <CardContent className="p-8 lg:p-12 space-y-10">
              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Information We Collect</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We collect information you provide directly to us, such as when you make a reservation, contact us, or
                  interact with our website.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-600 pl-6 bg-emerald-50 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-600">
                      <li>Name and contact information (phone number, email address)</li>
                      <li>Reservation details (date, time, number of guests)</li>
                      <li>Special dietary requirements or requests</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-emerald-600 pl-6 bg-emerald-50 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Automatically Collected Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-600">
                      <li>Website usage data and analytics</li>
                      <li>Device information and browser type</li>
                      <li>IP address and location data</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">How We Use Your Information</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-3 text-slate-600 ml-4">
                  <li>Processing and managing your restaurant reservations</li>
                  <li>Communicating with you about your reservations or inquiries</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                  <li>Sending you promotional materials (only with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Information Sharing</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except in the
                  following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-3 text-slate-600 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety, or that of others</li>
                  <li>
                    With trusted service providers who assist us in operating our website or conducting our business
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Data Security</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-3 text-slate-600 ml-4">
                  <li>Secure data transmission using SSL encryption</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Secure storage of physical and electronic records</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Your Rights</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Under applicable data protection laws, you have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-3 text-slate-600 ml-4">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate or incomplete information</li>
                  <li>Right to delete your personal information</li>
                  <li>Right to restrict processing of your information</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Data Retention</h2>
                <p className="text-slate-600 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes for which it
                  was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
                  Reservation data is typically retained for 2 years for business and legal purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact
                  us:
                </p>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <p className="text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Hyperswap Restaurant</strong>
                    <br />
                    Shopping Center Wijnegem
                    <br />
                    Turnhoutsebaan 5<br />
                    2110 Wijnegem, Belgium
                  </p>
                </div>
              </section>

              <section className="bg-slate-50 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Updates to This Policy</h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                  legal requirements, or other factors. We will notify you of any material changes by posting the
                  updated policy on our website with a new effective date.
                </p>
                <p className="text-slate-600 mt-4">
                  <strong className="text-slate-900">Last Updated:</strong> {new Date().toLocaleDateString("en-GB")}
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
