import { Button } from "@/components/ui/button"
import { Grid, List } from "lucide-react"

export function GallerySection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Grid className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <img
              src={`/ai-generated-art-.jpg?height=200&width=200&query=AI+generated+art+${index + 1}`}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
