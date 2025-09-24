"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Bookmark, ImageIcon, Zap, Settings, HelpCircle, Search, Bell, Menu,  GalleryHorizontal, Music2Icon} from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 lg:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm pr-4">K</span>
              </div>
               <Avatar className="w-8 h-8">
              <AvatarImage src="/diverse-user-avatars.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            </div>
            </div>

              <div className="b-1 bg-gray-100">
            <nav className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Home className="mr-2 h-4 w-4" />
              </Button>

              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Bookmark className="mr-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ImageIcon className="mr-2 h-4 w-4" />
                
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Zap className="mr-2 h-4 w-4" />
               
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Settings className="mr-2 h-4 w-4" />
                
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <HelpCircle className="mr-2 h-4 w-4" />
                
              </Button>
            </nav>
          </div>

          {/* Right side - Search, Notifications, Profile */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <GalleryHorizontal className="h-4 w-4"/>
                Gallery
              </Button>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Music2Icon className="h-4 w-4"/>
                Gallery
              </Button>
            </div>

            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4 text-blue-300" />
            </Button>

            <ModeToggle />

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>

            
            <Avatar className="w-8 h-8">
              <AvatarImage src="/diverse-user-avatars.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
