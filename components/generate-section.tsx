import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown} from "lucide-react"

const generateTools = [
  {
    id: 1,
    name: "Images",
    description: "Create stunning visuals with advanced AI image generation",
    icon: "/ideogram-logo.jpg",
    badge: "NEW",
    badgeColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Krea",
    description: "Real-time AI image generation and enhancement",
    icon: "/krea-logo.jpg",
    badge: "",
    badgeColor: "",
  },
  {
    id: 3,
    name: "NextTiny",
    description: "Compress and optimize images with AI technology",
    icon: "/nexttiny-logo.jpg",
    badge: "",
    badgeColor: "",
  },
  {
    id: 4,
    name: "Enhanced",
    description: "Enhance image quality and resolution using AI",
    icon: "/enhanced-logo.jpg",
    badge: "NEW",
    badgeColor: "bg-blue-500",
  },
  {
    id: 5,
    name: "Zebra Lenses",
    description: "Advanced photo editing with AI-powered filters",
    icon: "/zebra-lenses-logo.jpg",
    badge: "NEW",
    badgeColor: "bg-blue-500",
  },
  {
    id: 6,
    name: "Serious Painter",
    description: "Transform photos into artistic paintings",
    icon: "/serious-painter-logo.jpg",
    badge: "NEW",
    badgeColor: "bg-blue-500",
  },
  {
    id: 7,
    name: "Tran",
    description: "AI-powered image translation and text extraction",
    icon: "/tran-logo.jpg",
    badge: "NEW",
    badgeColor: "bg-blue-500",
  },
   {
    id: 8,
    name: "Tran",
    description: "AI-powered image translation and text extraction",
    icon: "/tran-logo.jpg",
    badge: "",
    badgeColor: "",
  },

]

export function GenerateSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Generate</h2>

        <Button variant="ghost" className="text-blue-700 font-bold hover:text-primary/80">
          <ChevronDown className="w-4 h-4 " />
          View all
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {generateTools.map((tool) => (
          <Card
            key={tool.id}
            className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border/50 hover:border-border"
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={tool.icon || "/placeholder.svg"}
                      alt={`${tool.name} icon`}
                      className="w-8 h-8 object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      {tool.badge && (
                        <Badge className={`text-xs px-2 py-0.5 ${tool.badgeColor} text-white`}>{tool.badge}</Badge>
                      )}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-black border bg-gray-200 hover:bg-white hover:text-black font-bold"
                >
                  Open
                </Button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
