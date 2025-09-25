"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Bookmark, ImageIcon, Zap, Settings, HelpCircle,  Gavel, Bell, Menu,  GalleryHorizontal, Music2Icon, Type, ChevronDown,Headphones  } from "lucide-react"
import { HomeIcon,  PhotoIcon, VideoCameraIcon, FolderIcon, BellIcon  } from "@heroicons/react/24/solid"

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
              <span className="text-sm font-bold text-gray-700">benevolentminibot</span>
              <ChevronDown className="w-4 h-4  " />
            </div>
            </div>

              <div className="b-1 bg-gray-100 rounded-xl p-3">
            <nav className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-white">
                <HomeIcon className="mr-2 h-6 w-6 text-black" />
              </Button>

              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                < PhotoIcon className="mr-2 h-6 w-6 text-black" />
              </Button>
    
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <VideoCameraIcon className="mr-2 h-6 w-6  text-black" />
              </Button>

              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Type className="mr-2 h-6 w-6 text-black" />
                
              </Button>

               <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                < Gavel className="mr-2 h-6 w-6 text-black" />
              </Button>



              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <FolderIcon className="mr-2 h-6 w-6 text-black" />
              </Button>
            </nav>
          </div>

          {/* Right side - Search, Notifications, Profile */}
          <div className="flex items-center space-x-2 ">
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" className=" border border-gray-300 hover:bg-white hover:text-black">
                < PhotoIcon className="h-5 w-5 text-black-700"/>
                Gallery
              </Button>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" className=" border border-gray-300 hover:bg-white hover:text-black">
                <Headphones className="h-5 w-5 text-black"/>
                Support
              </Button>
            </div>

            <Button variant="ghost" size="icon">
              <BellIcon className="h-5 w-5" />
            </Button>

            <ModeToggle />

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
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
