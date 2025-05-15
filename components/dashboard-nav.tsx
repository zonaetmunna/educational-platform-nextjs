"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  CreditCard,
  GraduationCap,
  Heart,
  LayoutDashboard,
  MessageSquare,
  Settings,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

const items: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    title: "My Courses",
    href: "/dashboard/courses",
    icon: <BookOpen className="mr-2 h-4 w-4" />,
  },
  {
    title: "Certificates",
    href: "/dashboard/certificates",
    icon: <GraduationCap className="mr-2 h-4 w-4" />,
  },
  {
    title: "Wishlist",
    href: "/dashboard/wishlist",
    icon: <Heart className="mr-2 h-4 w-4" />,
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: <MessageSquare className="mr-2 h-4 w-4" />,
  },
  {
    title: "Purchase History",
    href: "/dashboard/purchases",
    icon: <CreditCard className="mr-2 h-4 w-4" />,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: <BarChart3 className="mr-2 h-4 w-4" />,
  },
  {
    title: "Account Settings",
    href: "/dashboard/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => (
        <Link key={index} href={item.href}>
          <Button
            variant={pathname === item.href ? "default" : "ghost"}
            className={cn("w-full justify-start", pathname === item.href && "bg-primary text-primary-foreground")}
          >
            {item.icon}
            {item.title}
          </Button>
        </Link>
      ))}
    </nav>
  )
}

