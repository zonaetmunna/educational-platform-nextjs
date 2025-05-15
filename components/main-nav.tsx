"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Code, FileText, Home, Play, ShoppingCart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/components/auth-provider"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Web Development",
    href: "/category/web-development",
    description: "HTML, CSS, JavaScript, React, and more",
  },
  {
    title: "Data Science",
    href: "/category/data-science",
    description: "Python, R, Machine Learning, and Data Analysis",
  },
  {
    title: "Mobile Development",
    href: "/category/mobile-development",
    description: "React Native, Flutter, iOS, and Android",
  },
  {
    title: "Design",
    href: "/category/design",
    description: "UI/UX, Graphic Design, and Design Principles",
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                {components.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/tutorials" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Tutorials</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/videos" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Videos</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/code" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Code</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/roadmap" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Roadmaps</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export function MobileNav() {
  const pathname = usePathname()
  const { user } = useAuth()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 text-lg font-semibold",
              pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            href="/courses"
            className={cn(
              "flex items-center gap-2",
              pathname === "/courses" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <BookOpen className="h-5 w-5" />
            <span>Courses</span>
          </Link>
          <Link
            href="/tutorials"
            className={cn(
              "flex items-center gap-2",
              pathname === "/tutorials" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <FileText className="h-5 w-5" />
            <span>Tutorials</span>
          </Link>
          <Link
            href="/videos"
            className={cn(
              "flex items-center gap-2",
              pathname === "/videos" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Play className="h-5 w-5" />
            <span>Videos</span>
          </Link>
          <Link
            href="/code"
            className={cn(
              "flex items-center gap-2",
              pathname === "/code" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Code className="h-5 w-5" />
            <span>Code</span>
          </Link>
          <Link
            href="/roadmap"
            className={cn(
              "flex items-center gap-2",
              pathname === "/roadmap" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Code className="h-5 w-5" />
            <span>Roadmaps</span>
          </Link>
          <Link
            href="/cart"
            className={cn(
              "flex items-center gap-2",
              pathname === "/cart" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
          </Link>

          {user && (
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center gap-2",
                pathname === "/dashboard" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          )}

          {user?.role === "admin" && (
            <Link
              href="/admin/dashboard"
              className={cn(
                "flex items-center gap-2",
                pathname === "/admin/dashboard" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Home className="h-5 w-5" />
              <span>Admin Dashboard</span>
            </Link>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

