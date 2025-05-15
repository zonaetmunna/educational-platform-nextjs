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
  ShoppingCart,
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
    href: "/admin/dashboard",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    title: "Courses",
    href: "/admin/courses",
    icon: <BookOpen className="mr-2 h-4 w-4" />,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    title: "Instructors",
    href: "/admin/instructors",
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    title: "Sales",
    href: "/admin/sales",
    icon: <ShoppingCart className="mr-2 h-4 w-4" />,
  },
  {
    title: "Revenue",
    href: "/admin/revenue",
    icon: <DollarSign className="mr-2 h-4 w-4" />,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: <BarChart3 className="mr-2 h-4 w-4" />,
  },
  {
    title: "Content",
    href: "/admin/content",
    icon: <FileText className="mr-2 h-4 w-4" />,
  },
  {
    title: "Messages",
    href: "/admin/messages",
    icon: <MessageSquare className="mr-2 h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
]

export function AdminNav() {
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

