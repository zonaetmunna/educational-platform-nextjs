import Link from "next/link"
import Image from "next/image"
import { Filter, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

// Mock data for courses
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
    category: "Web Development",
    level: "Beginner to Advanced",
    isPremium: true,
  },
  {
    id: 2,
    title: "Python for Data Science and Machine Learning",
    description: "Master Python for data analysis, visualization and ML",
    image: "/placeholder.svg?height=200&width=350",
    price: 94.99,
    rating: 4.9,
    reviews: 1876,
    instructor: "John Davis",
    category: "Data Science",
    level: "Intermediate",
    isPremium: true,
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description: "Learn the principles of effective user interface design",
    image: "/placeholder.svg?height=200&width=350",
    price: 74.99,
    rating: 4.7,
    reviews: 1253,
    instructor: "Sarah Johnson",
    category: "Design",
    level: "Beginner",
    isPremium: true,
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps with React Native",
    image: "/placeholder.svg?height=200&width=350",
    price: 84.99,
    rating: 4.6,
    reviews: 987,
    instructor: "Michael Brown",
    category: "Mobile Development",
    level: "Intermediate",
    isPremium: true,
  },
  {
    id: 5,
    title: "JavaScript Fundamentals",
    description: "Master the basics of JavaScript programming",
    image: "/placeholder.svg?height=200&width=350",
    price: 0,
    rating: 4.5,
    reviews: 1543,
    instructor: "David Wilson",
    category: "Web Development",
    level: "Beginner",
    isPremium: false,
  },
  {
    id: 6,
    title: "Introduction to HTML & CSS",
    description: "Learn the building blocks of web development",
    image: "/placeholder.svg?height=200&width=350",
    price: 0,
    rating: 4.4,
    reviews: 1876,
    instructor: "Emily Clark",
    category: "Web Development",
    level: "Beginner",
    isPremium: false,
  },
  {
    id: 7,
    title: "Advanced React Patterns",
    description: "Take your React skills to the next level",
    image: "/placeholder.svg?height=200&width=350",
    price: 79.99,
    rating: 4.8,
    reviews: 876,
    instructor: "Robert Johnson",
    category: "Web Development",
    level: "Advanced",
    isPremium: true,
  },
  {
    id: 8,
    title: "Python Basics",
    description: "Get started with Python programming",
    image: "/placeholder.svg?height=200&width=350",
    price: 0,
    rating: 4.6,
    reviews: 2134,
    instructor: "Lisa Anderson",
    category: "Programming",
    level: "Beginner",
    isPremium: false,
  },
]

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Courses</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Browse our collection of courses to enhance your skills and knowledge
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
                    {["Web Development", "Data Science", "Design", "Mobile Development", "Programming"].map(
                      (category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={`category-${category}`} />
                          <label
                            htmlFor={`category-${category}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
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
                  <Input type="search" placeholder="Search courses..." className="pl-8 w-full sm:w-[300px]" />
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
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <span className="flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="ml-1 font-medium">{course.rating}</span>
                        </span>
                        <span className="text-muted-foreground">({course.reviews} reviews)</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{course.instructor}</span>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>
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

