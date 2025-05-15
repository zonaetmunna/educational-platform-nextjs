import { NextResponse } from "next/server"
import { videos } from "@/data/dummy-data"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const tag = searchParams.get("tag")
    const search = searchParams.get("search")
    const sort = searchParams.get("sort") || "newest"

    // Filter videos based on query parameters
    let filteredVideos = [...videos]

    if (category) {
      filteredVideos = filteredVideos.filter((video) => video.category.toLowerCase() === category.toLowerCase())
    }

    if (tag) {
      filteredVideos = filteredVideos.filter((video) => video.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
    }

    if (search) {
      filteredVideos = filteredVideos.filter(
        (video) =>
          video.title.toLowerCase().includes(search.toLowerCase()) ||
          video.description.toLowerCase().includes(search.toLowerCase()),
      )
    }

    // Sort videos
    switch (sort) {
      case "popular":
        filteredVideos.sort(
          (a, b) => Number.parseInt(b.views.replace("K", "000")) - Number.parseInt(a.views.replace("K", "000")),
        )
        break
      case "oldest":
        filteredVideos.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "newest":
      default:
        filteredVideos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
    }

    return NextResponse.json({ videos: filteredVideos })
  } catch (error) {
    console.error("Videos API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // This would require authentication in a real app
    const { title, description, videoUrl, thumbnail, duration, category, tags, instructor } = await request.json()

    // Validate required fields
    if (!title || !description || !videoUrl || !duration || !category || !tags || !instructor) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Create new video
    const newVideo = {
      id: videos.length + 1,
      title,
      description,
      videoUrl,
      thumbnail: thumbnail || "/placeholder.svg?height=200&width=350",
      duration,
      views: "0",
      likes: "0",
      date: new Date().toISOString().split("T")[0],
      instructor,
      category,
      tags,
    }

    // In a real app, you would save the video to a database
    videos.push(newVideo)

    return NextResponse.json({ success: true, video: newVideo })
  } catch (error) {
    console.error("Video creation error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

