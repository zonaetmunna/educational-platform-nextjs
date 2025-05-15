import Image from "next/image"
import { Filter, Play, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

// Mock data for videos
const videos = [
  {
    id: 1,
    title: "Building a Modern Website with Next.js and Tailwind CSS",
    description: "Learn how to create a fully responsive website using Next.js and Tailwind CSS",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "32:15",
    views: "45.2K",
    date: "Mar 15, 2023",
    instructor: "Jane Smith",
    category: "Web Development",
  },
  {
    id: 2,
    title: "React Hooks Explained",
    description: "A comprehensive guide to understanding and using React Hooks in your applications",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "28:42",
    views: "38.7K",
    date: "Apr 22, 2023",
    instructor: "John Davis",
    category: "React",
  },
  {
    id: 3,
    title: "Python Crash Course for Beginners",
    description: "A beginner-friendly guide to start programming with Python",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "45:18",
    views: "62.3K",
    date: "Feb 10, 2023",
    instructor: "Michael Brown",
    category: "Python",
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js and Express",
    description: "Learn how to build robust RESTful APIs using Node.js and Express framework",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "38:54",
    views: "29.8K",
    date: "May 5, 2023",
    instructor: "Sarah Johnson",
    category: "Backend",
  },
  {
    id: 5,
    title: "CSS Grid Layout Masterclass",
    description: "Master the CSS Grid Layout system for creating complex web layouts",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "26:47",
    views: "33.5K",
    date: "Jan 28, 2023",
    instructor: "David Wilson",
    category: "CSS",
  },
  {
    id: 6,
    title: "TypeScript for JavaScript Developers",
    description: "Get started with TypeScript and learn how it improves JavaScript development",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "41:23",
    views: "27.9K",
    date: "Jun 12, 2023",
    instructor: "Emily Clark",
    category: "TypeScript",
  },
]

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Free Video Tutorials</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Watch and learn with our collection of free educational videos
              </p>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="space-y-4">
                <div className="font-medium flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Category</h3>
                  <div className="space-y-2">
                    {["Web Development", "React", "Python", "Backend", "CSS", "TypeScript"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <label
                          htmlFor={`category-${category}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Duration</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="duration-short" />
                      <label
                        htmlFor="duration-short"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Short ({"<"} 15 min)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="duration-medium" />
                      <label
                        htmlFor="duration-medium"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Medium (15-30 min)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="duration-long" />
                      <label
                        htmlFor="duration-long"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Long ({">"} 30 min)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="relative w-full sm:w-auto max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search videos..." className="pl-8 w-full sm:w-[300px]" />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="duration-asc">Duration (Shortest)</SelectItem>
                      <SelectItem value="duration-desc">Duration (Longest)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                  <Card
                    key={video.id}
                    className="overflow-hidden bg-gradient-tertiary card-hover-effect animate-fade-in"
                  >
                    <div className="relative group">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        width={350}
                        height={200}
                        className="object-cover w-full h-[180px] transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="rounded-full bg-primary/90 p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Play className="h-6 w-6 text-primary-foreground" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-2 text-base">{video.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-xs">
                        <span>{video.views} views</span>
                        <span>•</span>
                        <span>{video.date}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 flex items-center justify-between border-t">
                      <div className="text-sm">{video.instructor}</div>
                      <Badge variant="outline">{video.category}</Badge>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <span className="sr-only">Previous page</span>
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
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Next page</span>
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
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

