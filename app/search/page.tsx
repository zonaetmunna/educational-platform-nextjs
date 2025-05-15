"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Code, FileText, Filter, Play, SearchIcon, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

// Mock search results
const mockResults = {
  courses: [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and more",
      image: "/placeholder.svg?height=200&width=350",
      price: 89.99,
      instructor: "Jane Smith",
      category: "Web Development",
      type: "course",
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      description: "Master the basics of JavaScript programming",
      image: "/placeholder.svg?height=200&width=350",
      price: 0,
      instructor: "David Wilson",
      category: "Web Development",
      type: "course",
    },
  ],
  tutorials: [
    {
      id: 1,
      title: "Building a Responsive Website with Tailwind CSS",
      excerpt: "Learn how to create a fully responsive website using Tailwind CSS framework",
      image: "/placeholder.svg?height=200&width=350",
      author: "Jane Smith",
      date: "Mar 15, 2023",
      type: "tutorial",
    },
    {
      id: 2,
      title: "Getting Started with React Hooks",
      excerpt: "A comprehensive guide to understanding and using React Hooks in your applications",
      image: "/placeholder.svg?height=200&width=350",
      author: "John Davis",
      date: "Apr 22, 2023",
      type: "tutorial",
    },
  ],
  videos: [
    {
      id: 1,
      title: "Building a Modern Website with Next.js and Tailwind CSS",
      description: "Learn how to create a fully responsive website using Next.js and Tailwind CSS",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "32:15",
      instructor: "Jane Smith",
      type: "video",
    },
    {
      id: 2,
      title: "React Hooks Explained",
      description: "A comprehensive guide to understanding and using React Hooks in your applications",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "28:42",
      instructor: "John Davis",
      type: "video",
    },
  ],
  code: [
    {
      id: 1,
      title: "React Authentication System",
      description: "A complete authentication system with JWT, React, and Node.js",
      language: "JavaScript",
      author: "Jane Smith",
      type: "code",
    },
    {
      id: 2,
      title: "Django REST API Boilerplate",
      description: "A production-ready Django REST API boilerplate with authentication and permissions",
      language: "Python",
      author: "John Davis",
      type: "code",
    },
  ],
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: [] as string[],
    contentType: [] as string[],
  })
  const [results, setResults] = useState<any>(mockResults)
  const [isLoading, setIsLoading] = useState(false)

  // Get the search query from URL on initial load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const q = params.get("q")
    if (q) {
      setSearchQuery(q)
      performSearch(q)
    }
  }, [])

  const performSearch = (query: string) => {
    setIsLoading(true)

    // In a real app, this would be an API call
    setTimeout(() => {
      // Filter mock results based on search query
      if (!query) {
        setResults(mockResults)
      } else {
        const filteredResults = {
          courses: mockResults.courses.filter(
            (course) =>
              course.title.toLowerCase().includes(query.toLowerCase()) ||
              course.description.toLowerCase().includes(query.toLowerCase()),
          ),
          tutorials: mockResults.tutorials.filter(
            (tutorial) =>
              tutorial.title.toLowerCase().includes(query.toLowerCase()) ||
              tutorial.excerpt.toLowerCase().includes(query.toLowerCase()),
          ),
          videos: mockResults.videos.filter(
            (video) =>
              video.title.toLowerCase().includes(query.toLowerCase()) ||
              video.description.toLowerCase().includes(query.toLowerCase()),
          ),
          code: mockResults.code.filter(
            (code) =>
              code.title.toLowerCase().includes(query.toLowerCase()) ||
              code.description.toLowerCase().includes(query.toLowerCase()),
          ),
        }
        setResults(filteredResults)
      }
      setIsLoading(false)
    }, 500)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch(searchQuery)

    // Update URL with search query
    const url = new URL(window.location.href)
    url.searchParams.set("q", searchQuery)
    window.history.pushState({}, "", url.toString())
  }

  const handleFilterChange = (type: string, value: string) => {
    setFilters((prev) => {
      const newFilters = { ...prev }
      if (newFilters[type as keyof typeof newFilters].includes(value)) {
        newFilters[type as keyof typeof newFilters] = newFilters[type as keyof typeof newFilters].filter(
          (v) => v !== value,
        )
      } else {
        newFilters[type as keyof typeof newFilters] = [...newFilters[type as keyof typeof newFilters], value]
      }
      return newFilters
    })
  }

  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRange: [],
      contentType: [],
    })
  }

  const totalResults = results.courses.length + results.tutorials.length + results.videos.length + results.code.length

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 via-indigo-50 to-white dark:from-blue-950/50 dark:via-indigo-950/50 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Search Results</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find courses, tutorials, videos, and code samples
              </p>

              <form onSubmit={handleSearch} className="flex w-full max-w-lg gap-2">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for anything..."
                    className="pl-8 bg-background"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </div>
                  {(filters.categories.length > 0 ||
                    filters.priceRange.length > 0 ||
                    filters.contentType.length > 0) && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2 text-xs">
                      Clear All
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Content Type</h3>
                  <div className="space-y-2">
                    {[
                      { id: "course", label: "Courses", icon: <BookOpen className="h-3 w-3 mr-1" /> },
                      { id: "tutorial", label: "Tutorials", icon: <FileText className="h-3 w-3 mr-1" /> },
                      { id: "video", label: "Videos", icon: <Play className="h-3 w-3 mr-1" /> },
                      { id: "code", label: "Code Samples", icon: <Code className="h-3 w-3 mr-1" /> },
                    ].map((type) => (
                      <div key={type.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`type-${type.id}`}
                          checked={filters.contentType.includes(type.id)}
                          onCheckedChange={() => handleFilterChange("contentType", type.id)}
                        />
                        <label
                          htmlFor={`type-${type.id}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          {type.icon} {type.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Category</h3>
                  <div className="space-y-2">
                    {["Web Development", "Data Science", "Mobile Development", "Design"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={filters.categories.includes(category)}
                          onCheckedChange={() => handleFilterChange("categories", category)}
                        />
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

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Price</h3>
                  <div className="space-y-2">
                    {[
                      { id: "free", label: "Free" },
                      { id: "paid", label: "Paid" },
                    ].map((price) => (
                      <div key={price.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`price-${price.id}`}
                          checked={filters.priceRange.includes(price.id)}
                          onCheckedChange={() => handleFilterChange("priceRange", price.id)}
                        />
                        <label
                          htmlFor={`price-${price.id}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {price.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="text-sm text-muted-foreground">
                  {searchQuery ? (
                    <span>
                      {totalResults} results for <span className="font-medium text-foreground">"{searchQuery}"</span>
                    </span>
                  ) : (
                    <span>{totalResults} results</span>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-8 pt-4">
                  {isLoading ? (
                    <div className="text-center py-12">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                      <p className="mt-4 text-muted-foreground">Searching...</p>
                    </div>
                  ) : totalResults === 0 ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                        <X className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">No results found</h2>
                      <p className="text-muted-foreground mb-6">
                        We couldn't find anything matching your search. Try different keywords or filters.
                      </p>
                    </div>
                  ) : (
                    <>
                      {results.courses.length > 0 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">Courses</h2>
                            {results.courses.length > 2 && (
                              <Button variant="link" size="sm" onClick={() => setActiveTab("courses")}>
                                View All
                              </Button>
                            )}
                          </div>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {results.courses.slice(0, 2).map((course: any) => (
                              <Card
                                key={course.id}
                                className="overflow-hidden bg-gradient-primary card-hover-effect animate-fade-in"
                              >
                                <div className="flex flex-col sm:flex-row">
                                  <div className="relative w-full sm:w-[120px] h-[120px]">
                                    <Image
                                      src={course.image || "/placeholder.svg"}
                                      alt={course.title}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                      <h3 className="font-medium line-clamp-1">
                                        <Link href={`/courses/${course.id}`} className="hover:underline">
                                          {course.title}
                                        </Link>
                                      </h3>
                                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                        {course.description}
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                      <Badge variant="outline">{course.category}</Badge>
                                      <div className="font-bold">
                                        {course.price === 0 ? "Free" : `$${course.price}`}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {results.tutorials.length > 0 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">Tutorials</h2>
                            {results.tutorials.length > 2 && (
                              <Button variant="link" size="sm" onClick={() => setActiveTab("tutorials")}>
                                View All
                              </Button>
                            )}
                          </div>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {results.tutorials.slice(0, 2).map((tutorial: any) => (
                              <Card
                                key={tutorial.id}
                                className="overflow-hidden bg-gradient-secondary card-hover-effect animate-fade-in"
                              >
                                <div className="flex flex-col sm:flex-row">
                                  <div className="relative w-full sm:w-[120px] h-[120px]">
                                    <Image
                                      src={tutorial.image || "/placeholder.svg"}
                                      alt={tutorial.title}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                      <h3 className="font-medium line-clamp-1">
                                        <Link href={`/tutorials/${tutorial.id}`} className="hover:underline">
                                          {tutorial.title}
                                        </Link>
                                      </h3>
                                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                        {tutorial.excerpt}
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                      <span className="text-xs text-muted-foreground">{tutorial.date}</span>
                                      <span className="text-xs text-muted-foreground">By {tutorial.author}</span>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {results.videos.length > 0 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">Videos</h2>
                            {results.videos.length > 2 && (
                              <Button variant="link" size="sm" onClick={() => setActiveTab("videos")}>
                                View All
                              </Button>
                            )}
                          </div>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {results.videos.slice(0, 2).map((video: any) => (
                              <Card
                                key={video.id}
                                className="overflow-hidden bg-gradient-tertiary card-hover-effect animate-fade-in"
                              >
                                <div className="flex flex-col sm:flex-row">
                                  <div className="relative w-full sm:w-[120px] h-[120px] group">
                                    <Image
                                      src={video.thumbnail || "/placeholder.svg"}
                                      alt={video.title}
                                      fill
                                      className="object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <div className="rounded-full bg-primary/90 p-2">
                                        <Play className="h-4 w-4 text-primary-foreground" fill="currentColor" />
                                      </div>
                                    </div>
                                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                                      {video.duration}
                                    </div>
                                  </div>
                                  <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                      <h3 className="font-medium line-clamp-1">
                                        <Link href={`/videos/${video.id}`} className="hover:underline">
                                          {video.title}
                                        </Link>
                                      </h3>
                                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                        {video.description}
                                      </p>
                                    </div>
                                    <div className="mt-2">
                                      <span className="text-xs text-muted-foreground">By {video.instructor}</span>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {results.code.length > 0 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">Code Samples</h2>
                            {results.code.length > 2 && (
                              <Button variant="link" size="sm" onClick={() => setActiveTab("code")}>
                                View All
                              </Button>
                            )}
                          </div>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {results.code.slice(0, 2).map((code: any) => (
                              <Card
                                key={code.id}
                                className="overflow-hidden bg-gradient-quaternary card-hover-effect animate-fade-in"
                              >
                                <div className="p-4">
                                  <div className="flex items-center gap-2 mb-2">
                                    <div
                                      className={`w-3 h-3 rounded-full ${
                                        code.language === "JavaScript"
                                          ? "bg-yellow-500"
                                          : code.language === "Python"
                                            ? "bg-green-500"
                                            : code.language === "TypeScript"
                                              ? "bg-blue-500"
                                              : "bg-gray-500"
                                      }`}
                                    ></div>
                                    <span className="text-sm font-medium">{code.language}</span>
                                  </div>
                                  <h3 className="font-medium line-clamp-1">
                                    <Link href={`/code/${code.id}`} className="hover:underline">
                                      {code.title}
                                    </Link>
                                  </h3>
                                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{code.description}</p>
                                  <div className="flex items-center justify-between mt-4">
                                    <span className="text-xs text-muted-foreground">By {code.author}</span>
                                    <Button size="sm" variant="outline" asChild>
                                      <Link href={`/code/${code.id}`}>
                                        <Code className="h-3 w-3 mr-1" />
                                        View Code
                                      </Link>
                                    </Button>
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </TabsContent>

                <TabsContent value="courses" className="space-y-4 pt-4">
                  {isLoading ? (
                    <div className="text-center py-12">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                      <p className="mt-4 text-muted-foreground">Searching...</p>
                    </div>
                  ) : results.courses.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                        <X className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">No courses found</h2>
                      <p className="text-muted-foreground mb-6">
                        We couldn't find any courses matching your search. Try different keywords or filters.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {results.courses.map((course: any) => (
                        <Card
                          key={course.id}
                          className="overflow-hidden bg-gradient-primary card-hover-effect animate-fade-in"
                        >
                          <div className="relative">
                            <Image
                              src={course.image || "/placeholder.svg"}
                              alt={course.title}
                              width={350}
                              height={200}
                              className="object-cover w-full h-[180px]"
                            />
                            {course.price === 0 && <Badge className="absolute top-2 right-2 bg-green-600">Free</Badge>}
                          </div>
                          <CardHeader className="p-4">
                            <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                            <CardDescription>{course.instructor}</CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                          </CardContent>
                          <CardFooter className="p-4 flex items-center justify-between border-t">
                            <div className="font-bold">{course.price === 0 ? "Free" : `$${course.price}`}</div>
                            <Button asChild size="sm">
                              <Link href={`/courses/${course.id}`}>View Course</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* Similar TabsContent for tutorials, videos, and code */}
                <TabsContent value="tutorials" className="space-y-4 pt-4">
                  {/* Similar content as courses tab but for tutorials */}
                  {isLoading ? (
                    <div className="text-center py-12">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                      <p className="mt-4 text-muted-foreground">Searching...</p>
                    </div>
                  ) : results.tutorials.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                        <X className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">No tutorials found</h2>
                      <p className="text-muted-foreground mb-6">
                        We couldn't find any tutorials matching your search. Try different keywords or filters.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {results.tutorials.map((tutorial: any) => (
                        <Card
                          key={tutorial.id}
                          className="overflow-hidden bg-gradient-secondary card-hover-effect animate-fade-in"
                        >
                          <div className="relative">
                            <Image
                              src={tutorial.image || "/placeholder.svg"}
                              alt={tutorial.title}
                              width={350}
                              height={200}
                              className="object-cover w-full h-[180px]"
                            />
                          </div>
                          <CardHeader className="p-4">
                            <CardTitle className="line-clamp-1">{tutorial.title}</CardTitle>
                            <CardDescription>{tutorial.author}</CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm text-muted-foreground line-clamp-2">{tutorial.excerpt}</p>
                          </CardContent>
                          <CardFooter className="p-4 flex items-center justify-between border-t">
                            <div className="text-muted-foreground">{tutorial.date}</div>
                            <Button asChild size="sm">
                              <Link href={`/tutorials/${tutorial.id}`}>View Tutorial</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="videos" className="space-y-4 pt-4">
                  {/* Similar content as courses tab but for videos */}
                  {isLoading ? (
                    <div className="text-center py-12">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                      <p className="mt-4 text-muted-foreground">Searching...</p>
                    </div>
                  ) : results.videos.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                        <X className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">No videos found</h2>
                      <p className="text-muted-foreground mb-6">
                        We couldn't find any videos matching your search. Try different keywords or filters.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {results.videos.map((video: any) => (
                        <Card
                          key={video.id}
                          className="overflow-hidden bg-gradient-tertiary card-hover-effect animate-fade-in"
                        >
                          <div className="relative">
                            <Image
                              src={video.thumbnail || "/placeholder.svg"}
                              alt={video.title}
                              width={350}
                              height={200}
                              className="object-cover w-full h-[180px]"
                            />
                            <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                              {video.duration}
                            </div>
                          </div>
                          <CardHeader className="p-4">
                            <CardTitle className="line-clamp-1">{video.title}</CardTitle>
                            <CardDescription>{video.instructor}</CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                          </CardContent>
                          <CardFooter className="p-4 flex items-center justify-between border-t">
                            <Button asChild size="sm">
                              <Link href={`/videos/${video.id}`}>View Video</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="code" className="space-y-4 pt-4">
                  {/* Similar content as courses tab but for code */}
                  {isLoading ? (
                    <div className="text-center py-12">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                      <p className="mt-4 text-muted-foreground">Searching...</p>
                    </div>
                  ) : results.code.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                        <X className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">No code samples found</h2>
                      <p className="text-muted-foreground mb-6">
                        We couldn't find any code samples matching your search. Try different keywords or filters.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {results.code.map((code: any) => (
                        <Card
                          key={code.id}
                          className="overflow-hidden bg-gradient-quaternary card-hover-effect animate-fade-in"
                        >
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <div
                                className={`w-3 h-3 rounded-full ${
                                  code.language === "JavaScript"
                                    ? "bg-yellow-500"
                                    : code.language === "Python"
                                      ? "bg-green-500"
                                      : code.language === "TypeScript"
                                        ? "bg-blue-500"
                                        : "bg-gray-500"
                                }`}
                              ></div>
                              <span className="text-sm font-medium">{code.language}</span>
                            </div>
                            <h3 className="font-medium line-clamp-1">
                              <Link href={`/code/${code.id}`} className="hover:underline">
                                {code.title}
                              </Link>
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{code.description}</p>
                            <div className="flex items-center justify-between mt-4">
                              <span className="text-xs text-muted-foreground">By {code.author}</span>
                              <Button size="sm" variant="outline" asChild>
                                <Link href={`/code/${code.id}`}>
                                  <Code className="h-3 w-3 mr-1" />
                                  View Code
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

