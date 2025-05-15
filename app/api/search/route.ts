import { NextResponse } from "next/server"
import { courses } from "@/data/dummy-data"
import { tutorials } from "@/data/dummy-data"
import { videos } from "@/data/dummy-data"
import { codeSamples } from "@/data/dummy-data"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q") || ""
    const type = searchParams.get("type")
    const category = searchParams.get("category")
    const sort = searchParams.get("sort") || "relevance"

    // Filter results based on query
    let filteredCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase()),
    )

    let filteredTutorials = tutorials.filter(
      (tutorial) =>
        tutorial.title.toLowerCase().includes(query.toLowerCase()) ||
        tutorial.excerpt.toLowerCase().includes(query.toLowerCase()),
    )

    let filteredVideos = videos.filter(
      (video) =>
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.description.toLowerCase().includes(query.toLowerCase()),
    )

    let filteredCodeSamples = codeSamples.filter(
      (code) =>
        code.title.toLowerCase().includes(query.toLowerCase()) ||
        code.description.toLowerCase().includes(query.toLowerCase()),
    )

    // Filter by content type if specified
    if (type) {
      switch (type) {
        case "courses":
          filteredTutorials = []
          filteredVideos = []
          filteredCodeSamples = []
          break
        case "tutorials":
          filteredCourses = []
          filteredVideos = []
          filteredCodeSamples = []
          break
        case "videos":
          filteredCourses = []
          filteredTutorials = []
          filteredCodeSamples = []
          break
        case "code":
          filteredCourses = []
          filteredTutorials = []
          filteredVideos = []
          break
      }
    }

    // Filter by category if specified
    if (category) {
      filteredCourses = filteredCourses.filter((course) => course.category.toLowerCase() === category.toLowerCase())

      filteredTutorials = filteredTutorials.filter(
        (tutorial) => tutorial.category.toLowerCase() === category.toLowerCase(),
      )

      filteredVideos = filteredVideos.filter((video) => video.category.toLowerCase() === category.toLowerCase())

      // Code samples don't have a category field in our mock data
    }

    // Sort results
    // In a real app, this would be more sophisticated
    switch (sort) {
      case "newest":
        // Sort by date (assuming newer items have higher IDs in our mock data)
        filteredCourses.sort((a, b) => b.id - a.id)
        filteredTutorials.sort((a, b) => b.id - a.id)
        filteredVideos.sort((a, b) => b.id - a.id)
        filteredCodeSamples.sort((a, b) => b.id - a.id)
        break
      case "popular":
        // Sort by popularity (using reviews/views as a proxy in our mock data)
        filteredCourses.sort((a, b) => b.reviews - a.reviews)
        filteredTutorials.sort((a, b) => b.views - a.views)
        filteredVideos.sort(
          (a, b) => Number.parseInt(b.views.replace("K", "000")) - Number.parseInt(a.views.replace("K", "000")),
        )
        filteredCodeSamples.sort(
          (a, b) => Number.parseInt(b.downloads.replace("K", "000")) - Number.parseInt(a.downloads.replace("K", "000")),
        )
        break
      case "relevance":
      default:
        // For relevance, we'd normally use a more sophisticated algorithm
        // Here we're just keeping the order based on how closely the title matches the query
        break
    }

    return NextResponse.json({
      query,
      results: {
        courses: filteredCourses,
        tutorials: filteredTutorials,
        videos: filteredVideos,
        code: filteredCodeSamples,
      },
      total: {
        courses: filteredCourses.length,
        tutorials: filteredTutorials.length,
        videos: filteredVideos.length,
        code: filteredCodeSamples.length,
        all: filteredCourses.length + filteredTutorials.length + filteredVideos.length + filteredCodeSamples.length,
      },
    })
  } catch (error) {
    console.error("Search API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

