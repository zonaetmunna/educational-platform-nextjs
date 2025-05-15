import Link from "next/link"
import Image from "next/image"
import { Filter, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { categories } from "@/data/dummy-data"

// This would normally come from an API call based on the slug
const getCategoryData = (slug: string) => {
  const category = categories.find((cat) => cat.slug === slug)
  return category || { id: 0, name: "Category Not Found", slug, description: "", count: 0 }
}

// Mock data for courses filtered by category
const getCoursesByCategory = (categorySlug: string) => {
  // This would normally be an API call
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and more",
      image: "/placeholder.svg?height=200&width=350",
      price: 89.99,
      rating: 4.8,
      reviews: 2453,
      instructor: "Jane Smith",
      category: "web-development",
      level: "Beginner to Advanced",
      isPremium: true,
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      description: "Deep dive into advanced JavaScript concepts and patterns",
      image: "/placeholder.svg?height=200&width=350",
      price: 79.99,
      rating: 4.7,
      reviews: 1876,
      instructor: "John Davis",
      category: "web-development",
      level: "Advanced",
      isPremium: true,
    },
    {
      id: 3,
      title: "React & Redux Masterclass",
      description: "Master React and Redux with real-world projects",
      image: "/placeholder.svg?height=200&width=350",
      price: 84.99,
      rating: 4.9,
      reviews: 2134,
      instructor: "Sarah Johnson",
      category: "web-development",
      level: "Intermediate",
      isPremium: true,
    },
    {
      id: 4,
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js",
      image: "/placeholder.svg?height=200&width=350",
      price: 74.99,
      rating: 4.6,
      reviews: 1543,
      instructor: "Michael Brown",
      category: "web-development",
      level: "Intermediate",
      isPremium: true,
    },
    {
      id: 5,
      title: "CSS Animations and Transitions",
      description: "Create stunning animations and transitions with CSS",
      image: "/placeholder.svg?height=200&width=350",
      price: 49.99,
      rating: 4.5,
      reviews: 987,
      instructor: "Emily Clark",
      category: "web-development",
      level: "Intermediate",
      isPremium: true,
    },
    {
      id: 6,
      title: "HTML & CSS Fundamentals",
      description: "Learn the building blocks of web development",
      image: "/placeholder.svg?height=200&width=350",
      price: 0,
      rating: 4.4,
      reviews: 1876,
      instructor: "David Wilson",
      category: "web-development",
      level: "Beginner",
      isPremium: false,
    },
  ]

  return courses.filter((course) => course.category === categorySlug)
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryData(params.slug)
  const courses = getCoursesByCategory(params.slug)

  // Generate a gradient based on the category
  const getGradient = (slug: string) => {
    const gradients = {
      "web-development": "from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50",
      "data-science": "from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50",
      "mobile-development": "from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50",
      design: "from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50",
    }

    return (
      gradients[slug as keyof typeof gradients] || "from-slate-50 to-gray-50 dark:from-slate-950/50 dark:to-gray-950/50"
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className={`w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b ${getGradient(params.slug)}`}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Category
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{category.name}</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                {category.description || `Explore our collection of ${category.name} courses to enhance your skills`}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{category.count} courses available</span>
              </div>
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
                  <h3 className="font-medium text-sm">Level</h3>
                  <div className="space-y-2">
                    {["Beginner", "Intermediate", "Advanced"].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox id={`level-${level}`} />
                        <label
                          htmlFor={`level-${level}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Price</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-free" />
                      <label
                        htmlFor="price-free"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Free
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-paid" />
                      <label
                        htmlFor="price-paid"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Paid
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Rating</h3>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label
                          htmlFor={`rating-${rating}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          {rating}+ <Star className="h-3 w-3 ml-1 fill-primary text-primary" />
                        </label>
                      </div>
                    ))}
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
                  <Input
                    type="search"
                    placeholder={`Search ${category.name} courses...`}
                    className="pl-8 w-full sm:w-[300px]"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="highest">Highest Rated</SelectItem>
                      <SelectItem value="lowest">Lowest Price</SelectItem>
                      <SelectItem value="highest">Highest Price</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {courses.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {courses.map((course) => (
                    <Card
                      key={course.id}
                      className="overflow-hidden bg-gradient-primary card-hover-effect animate-fade-in"
                    >
                      <div className="relative transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          width={350}
                          height={200}
                          className="object-cover w-full h-[180px]"
                        />
                        {course.isPremium && <Badge className="absolute top-2 right-2 bg-primary">Premium</Badge>}
                        {course.price === 0 && <Badge className="absolute top-2 right-2 bg-green-600">Free</Badge>}
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
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
                      className="h-8 w-8 text-muted-foreground"
                    >
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" x2="12" y1="9" y2="13" />
                      <line x1="12" x2="12.01" y1="17" y2="17" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">No courses found</h2>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any courses in this category that match your filters.
                  </p>
                  <Button asChild>
                    <Link href="/courses">Browse All Courses</Link>
                  </Button>
                </div>
              )}

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

