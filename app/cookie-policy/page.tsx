import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Cookies
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Cookie Policy</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Learn about how Hyperswap uses cookies to enhance your browsing experience and protect your privacy.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Cookie Usage Information</CardTitle>
            </CardHeader>
            <CardContent className="p-8 lg:p-12 space-y-10">
              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">What are Cookies?</h2>
                <p className="text-slate-600 leading-relaxed">
                  Cookies are small text files that are stored on your computer or mobile device when you visit our
                  website. They help us provide you with a better browsing experience by remembering your preferences
                  and improving our website's functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Types of Cookies We Use</h2>

                <div className="space-y-8">
                  <div className="border-l-4 border-emerald-600 pl-6 bg-emerald-50 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Essential Cookies</h3>
                    <p className="text-slate-600 leading-relaxed">
                      These cookies are necessary for the website to function properly. They enable basic functions like
                      page navigation, access to secure areas, and form submissions. The website cannot function
                      properly without these cookies.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-600 pl-6 bg-emerald-50 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Functional Cookies</h3>
                    <p className="text-slate-600 leading-relaxed">
                      These cookies allow the website to remember choices you make (such as your preferred language or
                      region) and provide enhanced, more personal features. They may be set by us or by third-party
                      providers whose services we have added to our pages.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-600 pl-6 bg-emerald-50 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Analytics Cookies</h3>
                    <p className="text-slate-600 leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting and
                      reporting information anonymously. This helps us improve our website's performance and user
                      experience.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Managing Your Cookie Preferences</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc list-inside space-y-3 text-slate-600 ml-4">
                  <li>Most web browsers allow you to control cookies through their settings preferences</li>
                  <li>You can set your browser to refuse all cookies or to indicate when a cookie is being sent</li>
                  <li>You can delete cookies that have already been set</li>
                  <li>You can use our cookie banner to manage your preferences when you first visit our site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Third-Party Cookies</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Some cookies on our website are set by third-party services that appear on our pages. These may
                  include:
                </p>
                <ul className="list-disc list-inside space-y-3 text-slate-600 ml-4">
                  <li>Google Analytics for website performance analysis</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Payment processors for secure transactions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Contact Us</h2>
                <p className="text-slate-600 leading-relaxed">
                  If you have any questions about our use of cookies, please contact us at our restaurant location in
                  Wijnegem Shopping Center or through our reservation system.
                </p>
              </section>

              <section className="bg-slate-50 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Last Updated</h2>
                <p className="text-slate-600 leading-relaxed">
                  This Cookie Policy was last updated on {new Date().toLocaleDateString("en-GB")}. We may update this
                  policy from time to time to reflect changes in our practices or for other operational, legal, or
                  regulatory reasons.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
