"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const featuredTools = [
  {
    id: 1,
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description: "WAN 2.2 model. Exceptional prompt adherence and high quality outputs. Optimized for speed.",
    image1: "/ai-image-generation-interface.jpg",
    image2: "/ai-creative-tools-interface.jpg",
    badge: "Try WAN 2.2",
  },
  {
    id: 2,
    title: "Open Sour",
    subtitle: "FLUX1 Krea",
    description:
      "Experience the power of FLUX1 Krea model with enhanced creative capabilities and superior output quality for professional projects.",
    image1: "/ai-creative-tools-interface.jpg",
    image2: "/neural-art-generator-interface.jpg",
    badge: "Explore",
  },
  {
    id: 3,
    title: "Neural Art",
    subtitle: "Advanced AI Art Generator",
    description:
      "Create stunning artwork with our advanced neural networks. Perfect for artists and designers looking for inspiration.",
    image1: "/neural-art-generator-interface.jpg",
    image2: "/ai-image-generation-interface.jpg",
    badge: "Create Art",
  },
]

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredTools.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredTools.length) % featuredTools.length)
  }

  return (
    <section className="relative w-full">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featuredTools.map((tool) => (
            <div key={tool.id} className="w-full flex-shrink-0">
              <Card className="border-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row min-h-[500px]">
                    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-balance">{tool.title}</h2>
                      <h3 className="text-xl lg:text-2xl text-gray-300 mb-4">{tool.subtitle}</h3>
                      <p className="text-gray-400 mb-8 text-lg leading-relaxed max-w-md">{tool.description}</p>
                      <Button className="w-fit bg-white text-black hover:bg-gray-100 font-medium px-6 py-2">
                        {tool.badge}
                      </Button>
                    </div>
                    <div className="flex-1 relative min-h-[300px] lg:min-h-[500px] flex">
                      <div className="flex-1 relative overflow-hidden">
                        <img
                          src={tool.image1 || "/placeholder.svg"}
                          alt={`${tool.title} preview 1`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 relative overflow-hidden">
                        <img
                          src={tool.image2 || "/placeholder.svg"}
                          alt={`${tool.title} preview 2`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {featuredTools.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}
