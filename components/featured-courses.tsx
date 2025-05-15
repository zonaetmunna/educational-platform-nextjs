import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for featured courses
const featuredCourses = [
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
    isPremium: true,
  },
]

export function FeaturedCourses() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {featuredCourses.map((course) => (
        <Card key={course.id} className="overflow-hidden bg-gradient-primary card-hover-effect animate-fade-in">
          <div className="relative transition-transform duration-300 group-hover:scale-105">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={350}
              height={200}
              className="object-cover w-full h-[180px]"
            />
            {course.isPremium && <Badge className="absolute top-2 right-2 bg-primary">Premium</Badge>}
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
              <Badge variant="outline">{course.category}</Badge>
            </div>
          </CardContent>
          <CardFooter className="p-4 flex items-center justify-between border-t">
            <div className="font-bold">${course.price}</div>
            <Button asChild size="sm">
              <Link href={`/courses/${course.id}`}>View Course</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

