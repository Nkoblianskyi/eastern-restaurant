import HeroSection from "./components/hero-section"
import MenuPreview from "./components/menu-preview"
import RestaurantStory from "./components/restaurant-story"
import PhilosophySection from "./components/philosophy-section"
import TeamSection from "./components/team-section"
import SourcingSection from "./components/sourcing-section"
import RestaurantExperience from "./components/restaurant-experience"
import CuisineFacts from "./components/cuisine-facts"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MenuPreview />

      {/* Expanded Restaurant Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <RestaurantStory />
          <PhilosophySection />
          <TeamSection />
          <SourcingSection />
        </div>
      </section>

      <RestaurantExperience />
      <CuisineFacts />
    </div>
  )
}
