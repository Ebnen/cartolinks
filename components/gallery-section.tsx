import { Button } from "@/components/ui/button"
import { Grid, List, Book, CreditCard} from "lucide-react"

export function GallerySection() {
  return (
    <section className="">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px]  font-bold text-foreground">Gallery</h2>
        <div className="flex items-center space-x-2">
          <Button variant="ghost"  className="text-muted-foreground text-black-300 hover:text-foreground">
            <Book className="w-4 h-4 text-black-400" />
            <span className="text-[13px] font-medium">Legal</span>
          </Button>
          <Button variant="ghost"  className="text-muted-foreground hover:text-foreground">
            <CreditCard className="w-4 h-4" />
            <span className="text-2x1 font-medium">Pricing</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
