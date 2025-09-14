import { Header } from "@/components/header"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { GenerateSection } from "@/components/generate-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <Header />
      <main className="flex-1 w-full px-4 lg:px-6 xl:px-8 py-6 space-y-8 max-w-none">
        <FeaturedCarousel />
        <GenerateSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}
