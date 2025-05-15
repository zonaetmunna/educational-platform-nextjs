import { NextResponse } from "next/server"

// Mock courses database
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
  // More courses would be here in a real application
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const level = searchParams.get("level")
    const search = searchParams.get("search")
    const sort = searchParams.get("sort") || "newest"

    // Filter courses based on query parameters
    let filteredCourses = [...courses]

    if (category) {
      filteredCourses = filteredCourses.filter((course) => course.category.toLowerCase() === category.toLowerCase())
    }

    if (level) {
      filteredCourses = filteredCourses.filter((course) => course.level.toLowerCase().includes(level.toLowerCase()))
    }

    if (search) {
      filteredCourses = filteredCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(search.toLowerCase()) ||
          course.description.toLowerCase().includes(search.toLowerCase()),
      )
    }

    // Sort courses
    switch (sort) {
      case "popular":
        filteredCourses.sort((a, b) => b.reviews - a.reviews)
        break
      case "highest":
        filteredCourses.sort((a, b) => b.rating - a.rating)
        break
      case "lowest-price":
        filteredCourses.sort((a, b) => a.price - b.price)
        break
      case "highest-price":
        filteredCourses.sort((a, b) => b.price - a.price)
        break
      case "newest":
      default:
        // In a real app, you would sort by date
        break
    }

    return NextResponse.json({ courses: filteredCourses })
  } catch (error) {
    console.error("Courses API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // This would require authentication in a real app
    const { title, description, price, category, level } = await request.json()

    // Validate required fields
    if (!title || !description || !price || !category || !level) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Create new course
    const newCourse = {
      id: courses.length + 1,
      title,
      description,
      image: "/placeholder.svg?height=200&width=350",
      price: Number.parseFloat(price),
      rating: 0,
      reviews: 0,
      instructor: "Admin", // In a real app, this would be the authenticated user
      category,
      level,
      isPremium: price > 0,
    }

    // In a real app, you would save the course to a database
    courses.push(newCourse)

    return NextResponse.json({ success: true, course: newCourse })
  } catch (error) {
    console.error("Course creation error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

