import { BookOpen, Search, ShoppingCart } from "lucide-react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react"
import "./globals.css"

import { AuthProvider } from "@/components/auth-provider"
import { MainNav, MobileNav } from "@/components/main-nav"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { UserAccountNav } from "@/components/user-account-nav"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Educational Platform",
  description: "A modern educational platform with courses, tutorials, and resources",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <div className="relative flex min-h-screen flex-col">
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center">
                  <MobileNav />
                  <Link href="/" className="flex items-center gap-2 mr-6">
                    <BookOpen className="h-6 w-6" />
                    <span className="hidden font-bold sm:inline-block">EduPlatform</span>
                  </Link>
                  <MainNav />
                  <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="hidden sm:flex">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                      </Button>
                      {/* theme toggle */}
                      <ThemeToggle />

                      <Button variant="ghost" size="icon" asChild>
                        <Link href="/cart">
                          <ShoppingCart className="h-5 w-5" />
                          <span className="sr-only">Cart</span>
                        </Link>
                      </Button>
                      <UserAccountNav />
                    </nav>
                  </div>
                </div>
              </header>
              <main className="flex-1">{children}</main>
              <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                  <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © 2023 EduPlatform. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link href="/terms" className="hover:underline underline-offset-4">
                      Terms
                    </Link>
                    <Link href="/privacy" className="hover:underline underline-offset-4">
                      Privacy
                    </Link>
                    <Link href="/contact" className="hover:underline underline-offset-4">
                      Contact
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

