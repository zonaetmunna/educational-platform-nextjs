import { NextResponse } from "next/server"

// Mock data for roadmaps
const roadmaps = [
  {
    id: 1,
    title: "Frontend Web Development",
    description: "Become a professional frontend developer with this comprehensive learning path",
    image: "/placeholder.svg?height=200&width=350",
    duration: "6 months",
    level: "Beginner to Advanced",
    students: 12543,
    rating: 4.8,
    progress: 0,
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    description: "Master both frontend and backend development to become a full-stack developer",
    image: "/placeholder.svg?height=200&width=350",
    duration: "9 months",
    level: "Intermediate to Advanced",
    students: 8765,
    rating: 4.9,
    progress: 25,
  },
  {
    id: 3,
    title: "Data Science & Machine Learning",
    description: "Learn data analysis, visualization, and machine learning techniques",
    image: "/placeholder.svg?height=200&width=350",
    duration: "8 months",
    level: "Intermediate",
    students: 6543,
    rating: 4.7,
    progress: 0,
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const category = searchParams.get("category")
    const level = searchParams.get("level")
    const sort = searchParams.get("sort") || "popular"

    // If ID is provided, return a specific roadmap
    if (id) {
      const roadmap = roadmaps.find((r) => r.id === Number.parseInt(id))

      if (!roadmap) {
        return NextResponse.json({ success: false, message: "Roadmap not found" }, { status: 404 })
      }

      return NextResponse.json({ roadmap })
    }

    // Filter roadmaps based on query parameters
    let filteredRoadmaps = [...roadmaps]

    if (category) {
      // In a real app, roadmaps would have a category field
      // This is just a placeholder
      filteredRoadmaps = filteredRoadmaps.filter((roadmap) =>
        roadmap.title.toLowerCase().includes(category.toLowerCase()),
      )
    }

    if (level) {
      filteredRoadmaps = filteredRoadmaps.filter((roadmap) => roadmap.level.toLowerCase().includes(level.toLowerCase()))
    }

    // Sort roadmaps
    switch (sort) {
      case "newest":
        // In a real app, roadmaps would have a createdAt field
        // This is just a placeholder
        filteredRoadmaps.sort((a, b) => b.id - a.id)
        break
      case "rating":
        filteredRoadmaps.sort((a, b) => b.rating - a.rating)
        break
      case "students":
        filteredRoadmaps.sort((a, b) => b.students - a.students)
        break
      case "popular":
      default:
        // In a real app, this would be based on a popularity metric
        filteredRoadmaps.sort((a, b) => b.students - a.students)
        break
    }

    return NextResponse.json({ roadmaps: filteredRoadmaps })
  } catch (error) {
    console.error("Roadmaps API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // This would require authentication in a real app
    const { title, description, duration, level, steps } = await request.json()

    // Validate required fields
    if (!title || !description || !duration || !level || !steps) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Create new roadmap
    const newRoadmap = {
      id: roadmaps.length + 1,
      title,
      description,
      image: "/placeholder.svg?height=200&width=350",
      duration,
      level,
      students: 0,
      rating: 0,
      progress: 0,
      steps,
    }

    // In a real app, you would save the roadmap to a database
    roadmaps.push(newRoadmap)

    return NextResponse.json({ success: true, roadmap: newRoadmap })
  } catch (error) {
    console.error("Roadmap creation error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

