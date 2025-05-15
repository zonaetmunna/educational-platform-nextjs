"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 via-blue-50/50 to-background dark:from-primary/20 dark:via-blue-950/30 dark:to-background animate-fade-in">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Learn, Grow, and Master New Skills
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Access thousands of tutorials, courses, and resources to help you achieve your learning goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <form onSubmit={handleSearch} className="flex-1 sm:max-w-md flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for courses, tutorials..."
                    className="pl-8 bg-background"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit">Search</Button>
              </form>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="text-sm text-muted-foreground">
                Popular:
                <Link href="/search?q=javascript" className="ml-1 underline hover:text-primary">
                  JavaScript
                </Link>
                ,
                <Link href="/search?q=react" className="ml-1 underline hover:text-primary">
                  React
                </Link>
                ,
                <Link href="/search?q=python" className="ml-1 underline hover:text-primary">
                  Python
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[420px] lg:h-[450px]">
              <Image
                src="/placeholder.svg?height=450&width=600"
                alt="Hero Image"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

