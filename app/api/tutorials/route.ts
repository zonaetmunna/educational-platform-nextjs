import { NextResponse } from "next/server"
import { tutorials } from "@/data/dummy-data"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const tag = searchParams.get("tag")
    const search = searchParams.get("search")
    const sort = searchParams.get("sort") || "newest"

    // Filter tutorials based on query parameters
    let filteredTutorials = [...tutorials]

    if (category) {
      filteredTutorials = filteredTutorials.filter(
        (tutorial) => tutorial.category.toLowerCase() === category.toLowerCase(),
      )
    }

    if (tag) {
      filteredTutorials = filteredTutorials.filter((tutorial) =>
        tutorial.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
      )
    }

    if (search) {
      filteredTutorials = filteredTutorials.filter(
        (tutorial) =>
          tutorial.title.toLowerCase().includes(search.toLowerCase()) ||
          tutorial.excerpt.toLowerCase().includes(search.toLowerCase()),
      )
    }

    // Sort tutorials
    switch (sort) {
      case "popular":
        filteredTutorials.sort((a, b) => b.views - a.views)
        break
      case "oldest":
        filteredTutorials.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "newest":
      default:
        filteredTutorials.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
    }

    return NextResponse.json({ tutorials: filteredTutorials })
  } catch (error) {
    console.error("Tutorials API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // This would require authentication in a real app
    const { title, excerpt, content, category, tags, author } = await request.json()

    // Validate required fields
    if (!title || !excerpt || !content || !category || !tags || !author) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Create new tutorial
    const newTutorial = {
      id: tutorials.length + 1,
      title,
      excerpt,
      content,
      image: "/placeholder.svg?height=200&width=350",
      author,
      date: new Date().toISOString().split("T")[0],
      readTime: `${Math.ceil(content.length / 1000)} min read`,
      category,
      tags,
      views: 0,
      likes: 0,
    }

    // In a real app, you would save the tutorial to a database
    tutorials.push(newTutorial)

    return NextResponse.json({ success: true, tutorial: newTutorial })
  } catch (error) {
    console.error("Tutorial creation error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

