export function Footer() {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">K</span>
            </div>
            <span className="font-semibold text-foreground">Krea AI</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>curated by</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-foreground rounded-sm"></div>
              <span className="font-medium text-foreground">Mobbin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
