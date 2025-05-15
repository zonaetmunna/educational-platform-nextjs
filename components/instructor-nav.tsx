"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  DollarSign,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
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
    href: "/instructor/dashboard",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    title: "Courses",
    href: "/instructor/courses",
    icon: <BookOpen className="mr-2 h-4 w-4" />,
  },
  {
    title: "Students",
    href: "/instructor/students",
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    title: "Earnings",
    href: "/instructor/earnings",
    icon: <DollarSign className="mr-2 h-4 w-4" />,
  },
  {
    title: "Analytics",
    href: "/instructor/analytics",
    icon: <BarChart3 className="mr-2 h-4 w-4" />,
  },
  {
    title: "Reviews",
    href: "/instructor/reviews",
    icon: <MessageSquare className="mr-2 h-4 w-4" />,
  },
  {
    title: "Content",
    href: "/instructor/content",
    icon: <FileText className="mr-2 h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/instructor/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
]

export function InstructorNav() {
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

